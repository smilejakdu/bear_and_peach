const express = require("express");
const router = express.Router();

const db = require("../components/db")
const board_model = require("../models/board");
const board_img_model = require("../models/board_img");
const kakao_character_img = require("../models/kakao_character_img");


router.post("/", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  console.log("body : ", body);
  // body :  {
  //   kakao_character_image_path: 'images/kakao/2021-04-1417:21:49/bear.png',
  //   kakao_character_name: '죠르디',
  //   like_counts: 4,
  //   content_body: '오늘은 날씨가 밝지만,, 바람이 많이 부네요'
  // }
  // const images = body.images;
  try {
    const connection = await db.beginTransaction();
    const result = await board_model.insert(connection, body);
    console.log("board reuslt : " , result);
    //board_img
    const _idx = result.insertId;
    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        let imgObj = {
          goods_idx: goods_idx, // "goods_idx":5,
          img_path: images[i], // "img_path":"images/5/광고1.png"
        };
        await goods_img_model.insert(connection, imgObj);
      }
    }

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
