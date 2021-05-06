const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO today_board_likes SET ?";
  let values = options;
  return await db.query({
    connection: connection,
    query: query,
    values: values,
  });
};

module.exports.delete = async (options) => {
  console.log("options : ", options); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM today_board_likes";
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
    // connection: connection,
    query: query,
    values: values,
  });
};

module.exports.getList = async (options) => {
  console.log('options : ',options)
  let query = `SELECT * FROM today_board_likes`;
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