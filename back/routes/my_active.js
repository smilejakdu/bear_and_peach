var express = require("express");
var router = express.Router();

const db = require("../components/db");
const today_board_my_active_model = require("../models/today_board")
const today_board_img_model =require("../models/today_board_img")
const today_board_likes_model = require("../models/today_board_likes");
const comment_model = require("../models/comment");
const { verifyToken } = require("./middlewares")

router.get("/",verifyToken, async function (req, res, next) {
  const { user_idx } = req.decoded;
  const today_board_likes_result = await today_board_my_active_model.getMyActiveList({user_idx: user_idx});
  if (today_board_likes_result && today_board_likes_result.length >0){
    for(let i =0; i< today_board_likes_result.length; i++){
      const today_board_img = await today_board_img_model.myActivgetList({today_board_idx:
                                                                      today_board_likes_result[i].today_board_idx});

      today_board_likes_result[i].image = today_board_img[0].img_path
      today_board_likes_result[i].table = "today_board";
      today_board_likes_result[i].content = "게시물을 좋아했습니다";
    }
  }

  const comment_content_result = await comment_model.getMyActiveContentList({user_idx : user_idx});

  if (comment_content_result &&  comment_content_result.length>0){
    for (let i = 0; i< comment_content_result.length; i++){
      const today_board_title = await today_board_my_active_model.getTodayBoardCommentList(
        { today_board_idx: comment_content_result[i].today_board_idx });

        comment_content_result[i].content = "게시물에 댓글을 작성했습니다.";
        comment_content_result[i].title = today_board_title[0].title;
        comment_content_result[i].img_path = today_board_title[0].img_path;
        comment_content_result[i].table = "comment"
    }
  }

  // today_board_likes_result 게시글 좋아요
  // comment_content_result 댓글을 작성했습니다
  // iterable 하게 만들어 주고 created_at 순으로 정렬
  result = [...today_board_likes_result , ...comment_content_result].sort(function (a, b) {
    return b.created_at - a.created_at
  });
  res.status(200).json({user_idx : user_idx , result});
});

// comment_idx 가 있다면? --> 게시물을 좋아했습니다.
// comment_idx 가 없다면? --> 게시물에 댓글을 작성했습니다.
router.delete("/", verifyToken, async function (req, res, next) {
  const {
    today_board_likes_idx,
    today_board_idx,
    comment_idx,
    table,
  } = req.body;

  try{
    if(comment_idx && table){
      // 게시물 좋아요 삭제
      const connection = await db.beginTransaction();
      const result = await today_board_likes_model.delete({
        today_board_likes_idx: today_board_likes_idx
      });
      await db.commit(connection);
      res.json({result});
    } else {
      // 게시물 댓글 삭제 
      const connection = await db.beginTransaction();
      const result = await comment_model.delete({comment_idx:comment_idx})
      await db.commit(connection);
      res.json({result});
    }
  } catch(err){
    console.log("err : ", err);
    next(err);
  }
});

module.exports = router;