module.exports = {
    getAllProducts: function (req, res, next) {
        const db = req.app.get('db');

        // console.log(response)
        db.allProducts()
        .then (response => res.status(200).send(response))
        .catch( (err) => res.status(500).send("Not working"));
    },

    productInfo: function (req, res, next) {
        const db = req.app.get('db');
        const {params}= req;

        db.oneProduct(params.id)
        .then (response => res.status(200).send(response))
        .catch( (err) => res.status(500).send(err));
        
    },

    deleteItem: function (req, res, next){
        const db = req.app.get('db');

        db.delete_product(id)
        .then (response => res.status(200).send(response))
        .catch ( (err) => res.status(500).send(err));
    }
}