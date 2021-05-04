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

// router.put("/", async function (req, res, next) {
//   const body = req.body; // {name:asdf,price:200}
//   const sub_image = body.sub_image_path;

//   delete body.sub_image_path;
//   // delete body.detail_info;

//   try {
//     const connection = await db.beginTransaction();
//     const result = await today_board_model.update(connection, body);
//     const product_idx = result.insertId;
//     let imagesArray = [];
//     for (let i = 0; i < sub_image.length; i++) {
//       imagesArray.push([product_idx, sub_image[i]]);
//     }
//     await product_model.multipleUpdate(connection, imagesArray);

//     // await db.commit(connection);
//     // res.json({ result });
//   } catch (err) {
//     console.log("err : ", err);
//     next(err);
//   }
// });

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
