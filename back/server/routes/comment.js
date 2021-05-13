var express = require("express");
var router = express.Router();

const db = require("../components/db");
const model = require("../models/comment");
const { verifyToken } = require("./middlewares");

router.post("/",verifyToken, async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  const { user_idx } = req.decoded;
  console.log("body : ", body);
  try {
    const connection = await db.beginTransaction();
    const result = await model.insert(connection, body);
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
    const result = await model.update(connection, json);
    console.log("result 26 : " , result);
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
    const result = await model.delete(connection, {
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
  const comment_idx = req.query.comment_idx;
  const result = await model.getList(req.query);
  res.status(200).json({ result });
});

module.exports = router;
