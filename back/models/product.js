const { disable } = require("debug");
const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  console.log("options : ", options);
  // let query = "INSERT INTO product SET ?";
  // let values = options;
  // return await db.query({
  //   connection: connection,
  //   query: query,
  //   values: values,
  // });
};

module.exports.update = async (connection, options) => {
  console.log("options : ", options); // {idx :2, name:'ssdf'}
  let query = "UPDATE product SET ? WHERE product_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: [options, options.goods_idx],
  });
};

module.exports.delete = async (connection, options) => {
  console.log("options : ", options.idx); // {idx :2, name:'ssdf'}
  let query = "DELETE FROM product WHERE product_idx = ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options.goods_idx,
  });
};

module.exports.getList = async (options) => {
  console.log("options : ", options);
  try {
    const { goods_idx } = options;
    let query = `SELECT * FROM product
                     LEFT JOIN brand ON goods.brand_idx = brand.brand_idx
                     LEFT JOIN category ON goods.category_idx = category.category_idx
                    `;
    // query = `SELECT * FROM goods
    //         `
    let values;
    if (goods_idx) {
      query += " WHERE product_idx = ?";
      values = goods_idx;
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
