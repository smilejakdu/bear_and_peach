const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO my_active SET ?";
  let values = options;
  return await db.query({
    connection: connection,
    query: query,
    values: values,
  });
};

module.exports.update = async (connection, options) => {
  console.log("options : ", options);
  //   {
  //   comment_idx : 3,
  //   user_idx: 6,
  //   today_board_idx: 14,
  //   content: 'today_board 15 nickname test index 6 content_update test ',
  //   likes: 2
  // }
  let query = "UPDATE my_active SET ? WHERE my_active_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.comment_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.idx); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM my_active WHERE my_active_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.comment_idx,
  });
};

module.exports.getList = async (options) => {
  const { user_idx } = options;
  let query = "SELECT * FROM my_active ";
  // let query = 'SELECT * FROM user WHERE 1=1 '
  let values = [];
  let keys = Object.keys(options);
  console.log("my_active keys : ", keys);
  if (user_idx) {
    query += " WHERE user_idx = ?";
    values.push(user_idx);
  }
  return await db.query({
    // connection:connection,
    query: query,
    values: values,
  });
};
