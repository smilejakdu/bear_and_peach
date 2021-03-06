const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO orders SET ?";
  let values = options;
  return await db.query({
    connection: connection,
    query: query,
    values: values,
  });
};

module.exports.update = async (connection, options) => {
  console.log("options : ", options); // {idx :2, name:'ssdf'}
  let query = "UPDATE orders SET ? WHERE orders_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.orders_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.idx);
  let query = "DELETE FROM orders WHERE orders_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.orders_idx,
  });
};

module.exports.getList = async (options) => {
  // console.log('options : ',options)
  let query = `SELECT * FROM orders
                 LEFT JOIN product ON product.product_idx = orders.product_idx`;
  let values = [];
  const keys = Object.keys(options);
  if (keys && keys.length > 0) {
    for (let i = 0; i < keys.length; i++) {
      if (i == 0) {
        query += ` WHERE ${keys[i]} = ?`;
        values.push(options[keys[i]]);
      } else {
        query += ` AND ${keys[i]} = ?`;
        values.push(options[keys[i]]);
      }
    }
  }
  return await db.query({
    // connection:connection,
    query: query,
    values: values,
  });
};
