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
  let query = "UPDATE my_active SET ? WHERE comment_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.comment_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.idx); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM my_active WHERE comment_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.comment_idx,
  });
};

module.exports.getList = async (options) => {
  console.log("options : ", options);
  try {
    const { user_idx } = options;
    console.log("user_idx : " , user_idx);
    // let query = "SELECT * FROM my_active";
    let today_board_likes_query = `SELECT * FROM today_board_likes as tdl
                                    JOIN user on user.user_idx = tdl.user_idx
                                    JOIN today_board on today_board.today_board_idx = tdl.today_board_idx
                                    `
    let values;
    if (user_idx){
      today_board_likes_query += ' WHERE user.user_idx = ?';
      values = user_idx
      return await db.query({
        query: today_board_likes_query,
        values: values,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};
