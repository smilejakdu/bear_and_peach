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
    // let query = `SELECT * FROM today_board
    //                  LEFT JOIN comment ON today_board.today_board_idx = comment.today_board_idx
    //                  LEFT JOIN today_board_img ON today_board.today_board_idx = today_board_img.today_board_idx
    //                 `;

    let query = `SELECT * FROM today_board`
    
    let values;
    if (today_board_idx) {
      query += " WHERE today_board.today_board_idx = ?";
      // query += " WHERE today_board_idx = ?";
      // 이렇게 코드를 작성하게 되면
      // error :  Error: Error: ER_NON_UNIQ_ERROR: Column 'today_board_idx' in where clause is ambiguous
      // 에러가 발생하게 된다. 그러니깐 어떤 테이블에서 index 를 불러오고 싶은지 정확하게 명시를 해줘야한다.
      values = today_board_idx;
    }
    console.log("query 51: ", query);
    return await db.query({
      // connection:connection,
      query: query,
      values: values,
    });
  } catch (err) {
    throw new Error(err);
  }
};