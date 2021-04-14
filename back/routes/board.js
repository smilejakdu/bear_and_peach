const express = require("express");
const router = express.Router();

const db = require("../components/db")
const board_model = require("../models/board");
const board_img_model = require("../models/board_img");
const kakao_character_img = require("../models/kakao_character_img");


router.post("/", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  console.log("body : ", body);
  //  body = {
  //     "goods_name":"상품2",
  //     "goods_price":5000,
  //     "brand_idx":1,
  //     "category_idx":1,
  //     "images" :["images/goods/5/광고1.png", "images/goods/5/광고1.png"],
  // }
  const images = body.images;
  delete body.images;
  try {
    const connection = await db.beginTransaction();
    const result = await board_model.insert(connection, body);
    console.log("board reuslt : " , result);
    //board_img
    // const goods_idx = result.insertId;
    // if (images && images.length > 0) {
    //   for (let i = 0; i < images.length; i++) {
    //     let imgObj = {
    //       goods_idx: goods_idx, // "goods_idx":5,
    //       img_path: images[i], // "img_path":"images/5/광고1.png"
    //     };
    //     await goods_img_model.insert(connection, imgObj);
    //   }
    // }

    // goods_img multi insert
    // let imagesArray = []
    // for(let i=0;i<images.length;i++){
    //     imagesArray.push([
    //         goods_idx,
    //         images[i]
    //     ])
    // }
    // await goods_img_model.multipleInsert(imagesArray, connection)

    //brand_idx

    //category_idx

    // await db.commit(connection);
    // res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.get("/" , async function (req, res, next){
  try{

  } catch(error){
    console.log("error : " , error);
  }
});




module.exports = router;
