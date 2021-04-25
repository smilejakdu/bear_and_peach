var express = require("express");
var router = express.Router();

const db = require("../components/db");
const today_board_my_active_model = require("../models/today_board")
const today_board_img_model =require("../models/today_board_img")
const comment_model = require("../models/comment");
const { verifyToken } = require("./middlewares")
const { log } = require("debug");


router.post("/",verifyToken, async function (req, res, next) {
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

router.put("/",verifyToken, async function (req, res, next) {
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

router.delete("/",verifyToken, async function (req, res, next) {
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

router.get("/",verifyToken, async function (req, res, next) {
  const my_active_idx = req.query.my_active_idx;
  const result={
    "today_board_likes":[],
    "comment_content":[]
  }
  const today_board_likes_result = await today_board_my_active_model.getMyActiveList(req.query);
  const today_board_img = await today_board_img_model.myActivgetList({today_board_idx:
                                                                      today_board_likes_result[0].today_board_idx});
  today_board_likes_result[0].image = today_board_img[0].img_path
  today_board_likes_result[0].likes = true;

  const comment_content_result = await comment_model.getMyActiveContentList(req.query);

  if (comment_content_result &&  comment_content_result.length>0){
    for (let i = 0; i< comment_content_result.length; i++){
      const today_board_title = await today_board_my_active_model.getTodayBoardCommentList(
        { today_board_idx: comment_content_result[i].today_board_idx });

        comment_content_result[i].content = "게시물에 댓글을 작성했습니다.";
        comment_content_result[i].title = today_board_title[0].title;
        comment_content_result[i].img_path = today_board_title[0].img_path;
    }
  }

  // today_board_likes_result 게시글 좋아요
  // comment_content_result 댓글을 작성했습니다

  result.today_board_likes = today_board_likes_result
  result.comment_content = comment_content_result
  
  res.status(200).json(result);
});

module.exports = router;