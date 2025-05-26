const db = require('./db/queries');

exports.groceryListGet = async (req, res) => {
    const categories = await db.getCategories();
    res.render("index", {categories: categories})
}

exports.addItemPost = async (req, res) => {
    const {item, category} = req.body
    console.log(item)
    // await db.addItem()
    res.redirect('/');
}

