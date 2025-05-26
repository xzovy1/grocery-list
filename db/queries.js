const pool = require("./pool");
 

async function getCategories(){
    const {rows} = await pool.query("SELECT * FROM grocery_categories");
    return rows;
}

async function getItems(){
    const {rows} = await pool.query("SELECT item, category_id FROM grocery_items")
    return rows;
}

async function addItem(item, category){
    await pool.query("INSERT INTO grocery_items (item, category_id) VALUES ($1, $2)", [item, category]);
    // await pool.query("SELECT * FROM grocery_items");
}

async function removeItem(item){
    await pool.query("DELTE FROM grocery_items WHERE item = $1", [item]);
}

module.exports = {
    getCategories,
    addItem, 
    getItems,
    removeItem
}