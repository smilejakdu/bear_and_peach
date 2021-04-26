const { disable } = require("debug");
const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO today_board_img SET ?";
  let values = options;
  return await db.query({
    connection: connection,
    query: query,
    values: values,
  });
};

module.exports.update = async (connection, options) => {
  console.log("options : ", options); // {idx :2, name:'ssdf'}
  let query = "UPDATE today_board_img SET ? WHERE idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.goods_img_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.idx); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM today_board_img WHERE idx = ?";

  if (idx_array) {
    whereClause += ` AND idx IN (?)`;
    values.push(idx_array);
  }

  return await db.query({
    connection: connection,
    query: query,
    values: options.goods_img_idx,
  });
};

module.exports.getList = async (options) => {
  console.log("today_board_img test : ", options);
  try {
    const { today_board_idx } = options;
    let query = "SELECT * FROM today_board_img";
    let values;
    if (today_board_idx) {
      query += " WHERE today_board_idx = ?";
      values = today_board_idx;
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

module.exports.myActivgetList = async (options) => {
  console.log("today_board_img test : ", options);
  try {
    const { today_board_idx } = options;

    if (today_board_idx) {
      let query = `SELECT img_path FROM today_board_img
                    WHERE today_board_idx = ? LIMIT 1 `;
      let values = today_board_idx;

      return await db.query({
        // connection:connection,
        query: query,
        values: values,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.multipleInsert = async (options, connection) => {
  try {
    let sql = `INSERT INTO today_board_img
                                (
                                    today_board_idx, 
                                    img_path
                                ) 
                    VALUES ?`;

    return await db.query({
      connection: connection,
      query: sql,
      values: [options],
    });
  } catch (e) {
    console.log("e????", e);
    throw new Error(e);
  }
};
