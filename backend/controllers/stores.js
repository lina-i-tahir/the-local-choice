const Store = require('../models/store');
const User = require('../models/user');

module.exports = {
    index,
    show,
    create
};

async function index(req, res){
    const stores = await Store.find({});
    // res.render("movies/index", { title: "All Movies", movies });
    res.json({ title: "All Stores", stores });
}

async function show(req, res){
    const store = await Store.findById(req.params.id);
    // res.render("movies/show", { title: "Movie Detail", movie });
    res.json({ title: "Store Detail", store });
}


async function create (req, res) {
    console.log("Request body:", req.body);
    // const {name, image} = req.body;
    try {
        await Store.create(req.body);
        const stores = await Store.find({});
        res.json({ title: "All Stores", stores });

    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMsg: err.message });
    }
}


// function newStore(req, res){
//     res.render('stores/new');
// }