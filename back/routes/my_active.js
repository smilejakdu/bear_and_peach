var express = require("express");
var router = express.Router();

const db = require("../components/db");
const today_board_my_active_model = require("../models/today_board")
const comment_model = require("../models/comment")


router.post("/", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  console.log("body : ", body);
  try {
    const connection = await db.beginTransaction();
    const result = await my_active_model.insert(connection, body);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.put("/", async function (req, res, next) {
  try {
    const json = req.body; // {idx :2, name:'ssdf'}
    const connection = await db.beginTransaction();
    const result = await my_active_model.update(connection, json);
    console.log("result 26 : ", result);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.delete("/", async function (req, res, next) {
  const json = req.body;
  try {
    const connection = await db.beginTransaction();
    const result = await my_active_model.delete(connection, {
      comment_idx: json.comment_idx,
    });
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.get("/", async function (req, res, next) {
  const my_active_idx = req.query.my_active_idx;
  const result={
    "today_board_likes":[],
    "comment_likes":[],
    "comment_content":[]
  }
  const today_board_likes_result = await today_board_my_active_model.getMyActiveList(req.query);
  const comment_likes_result = await comment_model.getMyActiveLikesList(req.query);
  const comment_content_result = await comment_model.getMyActiveContentList(req.query);

  result.today_board_likes = today_board_likes_result
  result.comment_likes = comment_likes_result
  result.comment_content = comment_content_result
  
  res.status(200).json(result);
});

module.exports = router;
