const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO comment SET ?";
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
  let query = "UPDATE comment SET ? WHERE comment_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.comment_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.idx); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM comment WHERE comment_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.comment_idx,
  });
};

module.exports.getList = async (options) => {
  console.log("options : ", options);
  try {
    const { comment_idx, today_board_idx, user_idx } = options;
    let query = "SELECT * FROM comment";
    let values = [];
    const keys = Object.keys(options);
    console.log("keys : ", keys);
    if (keys && keys.length > 0) {
      for (let i = 0; i < keys.length; i++) {
        if (i == 0) {
          query += ` WHERE ${keys[i]} = ?`;
          // options[keys[i]]
          // keys[i] : today_board_idx ? user_idx
          // value = options["today_board_idx"]
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
  } catch (err) {
    throw new Error(err);
  }
};


module.exports.getMyActiveContentList = async (options) => {
  console.log("comment_content_options : ", options);
  try {
    const { user_idx } = options;
    // let query = "SELECT * FROM comment";
    let query = `SELECT comment.created_at , comment.today_board_idx , comment.user_idx FROM comment 
                JOIN user on user.user_idx = comment.user_idx
                JOIN today_board as tb on tb.today_board_idx = comment.today_board_idx
                  `;
    let values;
    if (user_idx) {
      query += " WHERE user.user_idx = ?";
      values = user_idx;
      return await db.query({
        query: query,
        values: values,
      });
    }
    return await db.query({
      // connection:connection,
      query: query,
      values: values,
    });
  } catch (err) {
    throw new Error(err);
  }
};
