var express = require("express");
var router = express.Router();

const db = require("../components/db");
const model = require("../models/cart");
const product_model = require("../models/product");
const user_model = require("../models/user");

router.post("/", async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  console.log("body : ", body);
  try {
    const connection = await db.beginTransaction();
    const goodsResult = await product_model.getList({
      goods_idx: body.goods_idx,
    });
    if (goodsResult.length == 0) {
      throw { status: 404, errorMessage: "product not found" };
    }
    const userResult = await user_model.getList({ user_idx: body.user_idx });
    if (userResult.length == 0) {
      throw { status: 404, errorMessage: "user not found" };
    }
    const result = await model.insert(connection, body);
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
    const result = await model.update(connection, json);
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
    const result = await model.delete(connection, { cart_idx: json.cart_idx });
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.get("/", async function (req, res, next) {
  // const cart_idx = req.query.cart_idx
  const result = await model.getList(req.query);
  for (let i = 0; i < result.length; i++) {
    const imgResult = await goods_img_model.getList({
      product_idx: result[i].product_idx,
    });
    result[i].images = imgResult;
    result[i].repr_img = imgResult.length > 0 ? imgResult[0].img_path : "";
    const reviewResult = await review_model.getList({
      product_idx: result[i].product_idx,
    });
    result[i].reviews = reviewResult;
    result[i].review_cnt = reviewResult.length;
    let star_sum = 0;
    for (let j = 0; j < reviewResult.length; j++) {
      star_sum += reviewResult[j].star;
    }
    result[i].review_avg =
      reviewResult.length == 0 ? 0 : star_sum / reviewResult.length;
  }
  res.status(200).json({ result });
});

module.exports = router;
