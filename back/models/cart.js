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
  console.log("options : ", options.idx); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM cart WHERE cart_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.cart_idx,
  });
};

module.exports.getList = async (options) => {
  console.log("options : ", options);
  let values
  let query
  if(options){
    query = `SELECT * FROM cart
                LEFT JOIN user ON user.user_idx = cart.user_idx WHERE user.user_idx = ?`;
    values = options
  }
  return await db.query({
    // connection:connection,
    query: query,
    values: options,
  });
};
