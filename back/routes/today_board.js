const express = require("express");
const router = express.Router();

const db = require("../components/db")
const today_board_model = require("../models/today_board");
const today_board_img_model = require("../models/today_board_img");
const comment_model = require("../models/comment");


router.post("/", async function (req, res, next) {
  const body = req.body;
  console.log("body : ", body);
  const images = body.images;
  delete body.images;
  try {
    const connection = await db.beginTransaction();
    const result = await today_board_model.insert(connection, body);
    //get today_board_idx
    const today_board_idx = result.insertId;
    if (images && images.length > 0) {
      // board_img multi insert
      let imagesArray = []
      for(let i=0;i<images.length;i++){
          imagesArray.push([ today_board_idx , images[i] ])
      }
      await today_board_img_model.multipleInsert(imagesArray, connection);
    }
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
    const result = await today_board_model.getList(query);
    if (result && result.length > 0) {
      for (let i = 0; i < result.length; i++) {
        const imgResult = await today_board_img_model.getList({
          today_board_idx: result[i].today_board_idx,
        });
        console.log("imgResult47 :" , imgResult);
        result[i].repr_img = imgResult.length > 0 ? imgResult[0].img_path : "";
        result[i].images = imgResult;
        const commentResult = await comment_model.getList({
          today_board_idx: result[i].today_board_idx,
        });
        result[i].comment_cnt = commentResult.length;
        result[i].comments = commentResult;
      }
    }

    res.status(200).json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});
// {
//     "kakao_character_image_path":"images/kakao/2021-04-1417:21:49/bear.png",
//     "kakao_character_name":"죠르디",
//     "like_counts":3,
//     "content_body":"오늘은 목요일... 그래도 좀 쌀쌀하네_update",
//     "images":["images/board/2021-04-1417:24:18/content_test1.png","images/board/2021-04-1417:24:30/content_test2.png"]
// }

router.put("/", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  const images = body.images;
  const today_board_idx = body.today_board_idx;

  delete body.images;
  // delete body.detail_info;

  try {
    const connection = await db.beginTransaction();
    const result = await today_board_model.update(connection, body);
    console.log("result80 : " , result);
    let imagesArray = [];
    for (let i = 0; i < images.length; i++) {
      imagesArray.push({today_board_idx : today_board_idx , img_path : images[i]});
    }
    await today_board_img_model.multipleUpdate(connection, imagesArray);

    // await db.commit(connection);
    // res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.delete("/", async function (req, res, next) {
  const body = req.body;
  try {
    const connection = await db.beginTransaction();
    const result = await today_board_model.delete(connection, {today_board_idx: body.today_board_idx});

    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

module.exports = router;
