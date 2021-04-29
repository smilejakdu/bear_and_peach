const { disable } = require("debug");
const db = require("../components/db");

module.exports.insert = async (connection, options) => {
  const {detail_info} = options;
  delete options.detail_info;

  const detail_info_string = JSON.stringify(detail_info);
  options.detail_info = detail_info_string;

  let query = "INSERT INTO product SET ?";
  return await db.query({
    connection: connection,
    query: query,
    values: options,
  });
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
    const { product_idx } = options;
    let query;
    let values;

    if (product_idx) {
      query = "SELECT * FROM product WHERE product_idx = ?"
      values = product_idx;
    }else{
      query ="SELECT product_idx , title , price FROM product"
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

module.exports.getChartGetList = async (options) => {
  console.log("options : ", options);
  try {
    const { product_idx } = options;
    let query="";
    let values;

    if (product_idx) {
      query = "SELECT * FROM product WHERE product_idx = ?";
      values = product_idx;
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

module.exports.getSubImgList = async (options)=>{
  console.log("options 63 : " , options);
  try{
    const {product_idx} = options;
    query = "SELECT * from product_sub_img WHERE product_idx = ?"

    return await db.query({
      // connection:connection,
      query: query,
      values: product_idx,
    });

  }catch(error){
    throw new Error(error);
  }
}


module.exports.multipleInsert = async (connection, options) => {
  console.log("options66 : " ,options);

  try {
    let query = `INSERT INTO product_sub_img
                                (
                                   product_idx,
                                   sub_image_path 
                                ) 
                    VALUES ?`

    return await db.query({
      connection: connection,
      query: query,
      values: [options]
    });
  } catch (e) {
    throw new Error(e);
  }
};
