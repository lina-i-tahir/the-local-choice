const Store = require('../models/store');

module.exports = {
    create
};

async function create (req, res) {
    console.log("Request body:", req.body);
    console.log("Request params:", req.params);
    const store = await Store.findById(req.params.id);
    store.products.push(req.body);
    // const {name, image} = req.body;
    try {
        await store.save();
        res.json({ title: "Store Detail", store });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}
