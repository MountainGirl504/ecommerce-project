require ('dotenv').config();
const express = require ('express'),
    bodyParser = require ('body-parser'),
    cors = require ('cors'),
    session = require ('express-session'),
    passport = require ('passport'), 
    Auth0Strategy = require ('passport-auth0'),
    massive = require ('massive'),
    controller = require ('./../Controllers/Product_controller.js'),
    stripe = require ('stripe')(process.env.STRIPE_SECRET_KEY),
    path = require('path')    


const app = express();
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialised: false
}));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    console.log("DB connected")
    app.set('db', db);
});

//==========AUTH0===========//
passport.use( new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, function( accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    const userData = profile._json;
    //console.log(profile);
    db.find_customer([userData.identities[0].user_id]).then (user => {
        if (user[0]) {
            return done(null, user[0].id);
        }
        else {
            db.create_customer([
                userData.name,
                userData.email, 
                userData.picture, 
                userData.identities[0].user_id
            ]).then (user => {
                return done(null, user[0].id)
            })
        }
    })
}));


passport.serializeUser(function(id, done){
    done(null, id);
});
passport.deserializeUser(function (id, done){
    app.get('db').find_session_customer([id]).then( user => {
        return done (null, user[0]);
    })
});

//========STRIPE=========//
app.post('/api/payment', function (req, res, next) {
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i=0; i < amountArray.length; i++) {
        if (amountArray[i] === '.') {
            if (typeof amountArray[i+1]==='string') {
                pennies.push(amountArray[i+1]);
            } else {
                pennies.push('0');
            }
            if (typeof amountArray[i+2] === 'string') {
                pennies.push(amountArray[i+2]);
            } else {
                pennies.push('0');
            }
            break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    const convertedAmt = parseInt(pennies.join(''));

    const charge = stripe.charges.create ({
        amount: convertedAmt, //in cents
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from Ecommerce app'
    }, function (err, charge) {
        if (err) return res.sendStatus(500)
        return res.sendStatus(200);
    });
});

 

//========== USER ENDPOINTS==========//
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.LOGIN_SUCCESS_REDIRECT,
    failureRedirect: '/auth'
}));
app.get('/auth/me', function(req,res){
    if (!req.user) {
        console.log(req.user)
        return res.status(401).send("No user logged in")
    }
    return res.status(200).send(req.user)
});
app.get('/auth/logout', function (req, res) {
    console.log(req.user)
    req.logOut();
    res.redirect(process.env.LOGOUT_SUCCESS_REDIRECT);
})

//===========PRODUCT ENDPOINTS===========//

app.get('/product/all', controller.getAllProducts);
app.get('/product/:id', controller.productInfo);
app.delete('/product/:id', controller.deleteItem);
//app.get('/product/:category', controller.byCategory)


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));