const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO cart SET ?";
  let values = options;
  return await db.query({
    connection: connection,
    query: query,
    values: values,
  });
};

module.exports.update = async (connection, options) => {
  console.log("options : ", options); // {idx :2, name:'ssdf'}
  let query = "UPDATE cart SET ? WHERE cart_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.cart_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.cart_idx); 
  const {cart_idx} = options;
  let query = "DELETE FROM cart";
  let values;
  if(cart_idx){
    query += ' WHERE cart_idx = ?'
    values = cart_idx
  }
  return await db.query({
    connection: connection,
    query: query,
    values: cart_idx,
  });
};

module.exports.getList = async (options) => {
  console.log("options : ", options);
  let values
  let query
  if(options){
    query = `SELECT c.product_idx , c.cart_idx , c.cart_count , c.created_at , c.updated_at
                FROM cart as c
                LEFT JOIN user ON user.user_idx = c.user_idx WHERE user.user_idx = ?`;
    values = options
  }
  return await db.query({
    // connection:connection,
    query: query,
    values: options,
  });
};
