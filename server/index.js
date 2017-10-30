require ('dotenv').config();
const express = require ('express'),
    bodyParser = require ('body-parser'),
    cors = require ('cors'),
    session = require ('express-session'),
    passport = require ('passport'), 
    Auth0Strategy = require ('passport-auth0'),
    massive = require ('massive'),
    controller = require ('./../Controllers/Product_controller.js')

const app = express();
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
    app.set('db', db);
});
console.log("DB connected")


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



//========== USER ENDPOINTS==========//
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth'
}));
app.get('/auth/me', function(req,res){
    if (!req.user) {
        console.log(req.user)
        return res.status(401).send("No user logged in")
    }
    return res.status(200).send(req.user)
});

//===========PRODUCT ENDPOINTS===========//

app.get('/product/all', controller.allProducts);
app.get('/product/:id', controller.productInfo);
app.delete('/product/:id', controller.deleteItem);

const PORT = 5050;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));