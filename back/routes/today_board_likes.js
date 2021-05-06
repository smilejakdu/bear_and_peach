const express = require("express");
const router = express.Router();
const { verifyToken } = require("./middlewares");
const db = require("../components/db");
const today_board_likes_model = require("../models/today_board_likes");

router.post("/",verifyToken, async function (req, res, next) {
  const body = req.body;
  console.log("body : ", body);
  try {
    const connection = await db.beginTransaction();
    const result = await today_board_likes_model.insert(connection, body);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

// verifyToken 를 추가해줘서 today_board_idx 와 user_idx 를
// 나중엔 query WHERE 에 넣어줘야한다. 지금은 일단 
// today_board_idx , user_idx 를 그냥 body 로 넘겨주자.
router.delete("/",verifyToken, async function (req, res, next) {
  const body = req.body;
  try {
    const connection = await db.beginTransaction();
    const result = await today_board_likes_model.delete(body);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.get("/",verifyToken, async function (req, res, next) {
  console.log(req.query);
  const result = await today_board_likes_model.getList(req.query);
  res.status(200).json({ result });
});

module.exports = router;
