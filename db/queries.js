const pool = require("./pool");
 

async function getCategories(){
    const {rows} = await pool.query("SELECT * FROM grocery_categories");
    return rows;
}

async function addItem(item, category){
    await pool.query("INSERT INTO grocery_items (item, category_id) VALUES ($1, $2)", [item, category]);
    await pool.query("SELECT * FROM grocery_items");
}

module.exports = {
    getCategories,
    addItem
}