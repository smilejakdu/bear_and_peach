var express = require("express");
var router = express.Router();

const db = require("../components/db");
const product_model = require("../models/product")


router.post("/", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  const sub_image = body.sub_image_path;

  delete body.sub_image_path;
  // delete body.detail_info;

  try {
    const connection = await db.beginTransaction();
    const result = await product_model.insert(connection, body);
    const product_idx = result.insertId;
    let imagesArray = []
    for(let i=0;i<sub_image.length;i++){
        imagesArray.push([ product_idx , sub_image[i]])            
      }
    await product_model.multipleInsert(connection, imagesArray);

    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});


router.get("/", async function (req, res, next) {
  try {
    const query = req.query;
    const result = await product_model.getList(query);
    if(query && Object.keys(query).length > 0){
      result[0].detail_info = JSON.parse(result[0].detail_info);
      if(result && result.length > 0){
        for (let i =0 ; i < result.length; i++){
          const imgResult = await product_model.getSubImgList({product_idx : result[i].product_idx})
          console.log("imgResult44 :",imgResult);
          result[i].sub_img = imgResult
        }
      }
    }

    res.status(200).json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.put("/", async function (req, res, next) {
  try {
    const json = req.body; // {idx :2, name:'ssdf'}
    const connection = await db.beginTransaction();
    const result = await product_model.update(connection, json);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

module.exports = router;
