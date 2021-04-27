const { disable } = require("debug");
const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO today_board SET ?";
  let values = options;
  return await db.query({
    connection: connection,
    query: query,
    values: values,
  });
};

module.exports.update = async (connection, options) => {
  console.log("options : ", options); // {idx :2, name:'ssdf'}
  let query = "UPDATE today_board SET ? WHERE today_board_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.goods_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.idx); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM today_board WHERE today_board_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.goods_idx,
  });
};

module.exports.getList = async (options) => {
  console.log("options : ", options);
  try {
    const { today_board_idx } = options;
    console.log("today_board_idx : ", today_board_idx);
    // left join 은 today_board 기준 인거다.
    // right join 은 comment 기준

    let query='';
    let values;
    if (today_board_idx) {
      query = `SELECT tb.today_board_idx ,tb.title , tb.content , count(tbl.today_board_idx) as likes_cnt 
                  FROM today_board as tb
                  LEFT JOIN today_board_likes as tbl ON tbl.today_board_idx = tb.today_board_idx
                  WHERE tb.today_board_idx = ? GROUP BY 1,2`
      values = today_board_idx;
      return await db.query({
        // connection:connection,
        query: query,
        values: values,
      });
    }else{
      query = `SELECT tb.today_board_idx ,tb.title , tb.content , count(tbl.today_board_idx) as likes_cnt 
                  FROM today_board as tb
                  LEFT JOIN today_board_likes as tbl ON tbl.today_board_idx = tb.today_board_idx 
                  GROUP BY 1,2`;
      return await db.query({
        query: query,
        values: '',
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.getMyActiveList = async (options) => {
  console.log("options : ", options);
  try {
    const { user_idx } = options;
    console.log("user_idx : ", user_idx);
    // let query = "SELECT * FROM my_active";
    let query = `SELECT tb.title ,tdu.created_at , tb.today_board_idx , user.user_idx
                FROM likes as tdu
                JOIN user on user.user_idx = tdu.user_idx
                JOIN today_board as tb on tb.today_board_idx = tdu.today_board_idx `;
    let values;
    if (user_idx) {
      query += " WHERE user.user_idx = ?";
      values = user_idx;
      return await db.query({
        query: query,
        values: values,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.getTodayBoardCommentList = async (options) => {
  console.log("options : ", options);
  // "today_board_idx": 14,
  try {
    const { today_board_idx } = options;
    console.log("today_board_idx : ", today_board_idx);

    if (today_board_idx) {
      let query = `SELECT tb.title , tbi.img_path
                  FROM today_board as tb 
                  JOIN today_board_img as tbi on tbi.today_board_idx = tb.today_board_idx `;
      query += " WHERE tb.today_board_idx = ? LIMIT 1 ";
      let values = today_board_idx;
      return await db.query({
        query: query,
        values: values,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};
