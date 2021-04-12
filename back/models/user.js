const { disable } = require("debug");
const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  let query = "INSERT INTO user SET ?";
  let values = options;
  return await db.query({
    connection: connection,
    query: query,
    values: values,
  });
};

module.exports.update = async (connection, options) => {
  console.log("options : ", options); // {idx :2, name:'ssdf'}
  let query = "UPDATE user SET ? WHERE user_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.user_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.user_idx); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM user WHERE user_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.user_idx,
  });
};

module.exports.getList = async (options) => {
  const { user_idx, user_id } = options;
  let query = "SELECT * FROM user ";
  // let query = 'SELECT * FROM user WHERE 1=1 '
  let values = [];
  let keys = Object.keys(options);
  if (user_idx) {
    query += " WHERE user_idx = ?";
    values.push(user_idx);
  }
  if (user_id) {
    if (keys.length == 1) {
      query += " WHERE user_id = ?";
      values.push(user_id);
    } else {
      query += " AND user_id = ?";
      values.push(user_id);
    }
  }
  return await db.query({
    // connection:connection,
    query: query,
    values: values,
  });
};

module.exports.getKakaoList = async(options)=>{
  const { kakao_id } = options;
  let query = "SELECT * FROM user ";
  let values = [];
  if (kakao_id){
    query += " WHERE kakao_id = ?";
    values.push(kakao_id);
  }
  return await db.query({
    query: query,
    values:values
  })
}
