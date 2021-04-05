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
  console.log("options : ", options.idx); // {idx :2, name:'ssdf'}
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
    query += " WHERE user_id = ?";
    values = user_idx;
  }
  return await db.query({
    // connection:connection,
    query: query,
    values: values,
  });
};

module.exports.multipleUpdate = async (connection, options) => {
  console.log("options : ", options);
  let sql = `UPDATE deliv_info SET`;
  let list = options.list;
  for (let i = 0; i < list.length; i++) {
    let value = list[i];
    if (i == list.length - 1) {
      sql += ` base_address = CASE deliv_info_idx 
                                WHEN ${value.deliv_info_idx} 
                                THEN '${value.base_address}' 
                                ELSE base_address 
                                END,
                                detail_address = CASE deliv_info_idx
                                WHEN ${value.deliv_info_idx} 
                                THEN '${value.detail_address}'
                                ELSE detail_address
                                END,
                                zipcode = CASE deliv_info_idx
                                WHEN ${value.deliv_info_idx} 
                                THEN '${value.zipcode}'
                                ELSE zipcode
                                END
                                `;
    } else {
      sql += ` base_address = 
                                CASE deliv_info_idx 
                                WHEN ${value.deliv_info_idx} 
                                THEN '${value.base_address}' 
                                ELSE base_address 
                                END,
                        detail_address = 
                                CASE deliv_info_idx
                                WHEN ${value.deliv_info_idx} 
                                THEN '${value.detail_address}'
                                ELSE detail_address
                                END,
                                zipcode = CASE deliv_info_idx
                                WHEN ${value.deliv_info_idx} 
                                THEN '${value.zipcode}'
                                ELSE zipcode
                                END,
                                `;
    }
  }
  console.log("sql : ", sql);
  const { affectedRows } = await db.query({
    connection: connection,
    query: sql,
    values: [options],
  });
  return affectedRows;
};

module.exports.multipleDelete = async (connection, options) => {
  console.log("options : ", options.idx_array);
  let query = `DELETE FROM deliv_info WHERE deliv_info_idx IN (?)`;
  return await db.query({
    connection,
    query: query,
    values: [options.idx_array],
  });
};
