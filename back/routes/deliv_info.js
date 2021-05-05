var express = require("express");
var router = express.Router();

const db = require("../components/db");
const model = require("../models/deliv_info");
const { verifyToken } = require("./middlewares");

router.post("/",verifyToken, async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  const { user_idx } = req.decoded;
  body.user_idx = user_idx;
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
    const body = req.body; // {idx :2, name:'ssdf'}
    const { user_idx } = req.decoded;
    body.user_idx = user_idx;
    const connection = await db.beginTransaction();
    const result = await model.update(connection, body);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.delete("/",verifyToken, async function (req, res, next) {
  const json = req.body;
  const { user_idx } = req.decoded;
  try {
    const connection = await db.beginTransaction();
    const result = await model.delete(connection, { idx: json.idx });
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.get("/",verifyToken, async function (req, res, next) {
  const { user_idx } = req.decoded;
  const result = await model.getList({ user_idx: user_idx });
  res.status(200).json({ result });
});

module.exports = router;
