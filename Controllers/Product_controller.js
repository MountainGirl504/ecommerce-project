module.exports = {
    getAllProducts: function (req, res, next) {
        const db = req.app.get('db');

        db.allProducts()
        .then (response => res.status(200).send(response))
        .catch( (err) => res.status(500).send(err));
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