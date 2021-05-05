const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO deliv_info SET ?";
  let values = options;
  return await db.query({
    connection: connection,
    query: query,
    values: values,
  });
};

module.exports.update = async (connection, options) => {
  console.log("options : ", options); // {idx :2, name:'ssdf'}
  let query = "UPDATE deliv_info SET ? WHERE deliv_info_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.deliv_info_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.deliv_info_idx);
  let query = "DELETE FROM deliv_info WHERE deliv_info_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.deliv_info_idx,
  });
};

module.exports.getList = async (options) => {
  console.log("options : ", options);
  const { user_idx } = options;
  let query = "SELECT * FROM deliv_info";
  let values;
  if (user_idx) {
    query += " WHERE user_idx = ?";
    values = user_idx;
  }
  return await db.query({
    // connection:connection,
    query: query,
    values: values,
  });
};


