const express = require("express");
const router = express.Router();

const db = require("../components/db")
const today_board_model = require("../models/today_board");
const today_board_img_model = require("../models/today_board_img");


router.post("/", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  console.log("body : ", body);
  // body :  {
  //   kakao_character_image_path: 'images/kakao/2021-04-1417:21:49/bear.png',
  //   kakao_character_name: '죠르디',
  //   like_counts: 4,
  //   content_body: '오늘은 날씨가 밝지만,, 바람이 많이 부네요',
  //   images: [
  //     'images/board/2021-04-1417:24:18/content_test1.png',
  //     'images/board/2021-04-1417:24:30/content_test2.png'
  //   ]
  // }
  const images = body.images;
  delete body.images;
  try {
    const connection = await db.beginTransaction();
    const result = await today_board_model.insert(connection, body);
    console.log("24 result : " , result);
    //get today_board_idx
    const today_board_idx = result.insertId;
    if (images && images.length > 0) {
      // board_img multi insert
      let imagesArray = []
      for(let i=0;i<images.length;i++){
          imagesArray.push([
              today_board_idx,
              images[i]
          ])
      }
      await today_board_img_model.multipleInsert(imagesArray, connection);
      console.log("qwer123")
    }

    await db.commit(connection);
    res.json({ result });
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
