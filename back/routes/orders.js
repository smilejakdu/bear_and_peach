var express = require("express");
var router = express.Router();

const db = require("../components/db");
const model = require("../models/orders");
const payment_history_model = require("../models/payment_history");
const product_model = require("../models/product");
const user_model = require("../models/user");
const { verifyToken } = require("./middlewares");
const util = require("../components/util");

router.post("/",verifyToken, async function (req, res, next) {
  const body = req.body;
  const {user_idx} = req.decoded;
  // body :  { product_idx: 34, amount: 2 }
  try {
    const connection = await db.beginTransaction();
    const productResult = await product_model.getList({ product_idx: body.product_idx });
    if (productResult.length == 0) {
      throw { status: 404, errorMessage: "product not found" };
    }
    const userResult = await user_model.getList({ user_idx: user_idx });
    if (userResult.length == 0) {
      throw { status: 404, errorMessage: "user not found" };
    }
    body.user_idx = user_idx;

    const result = await model.insert(connection, body);
    // await db.commit(connection);
    // res.json({ result });
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
    const result = await model.delete(connection, json);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.get("/", async function (req, res, next) {
  try {
    const result = await model.getList(req.query);
    for (let i = 0; i < result.length; i++) {
      const imgResult = await product_model.getList({product_idx: result[i].product_idx});
      result[i].images = imgResult;
      result[i].repr_img = imgResult.length > 0 ? imgResult[0].img_path : "";
      for (let j = 0; j < reviewResult.length; j++) {
        star_sum += reviewResult[j].star;
      }
      result[i].review_avg =
        reviewResult.length == 0 ? 0 : star_sum / reviewResult.length;
    }
    res.status(200).json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

module.exports = router;
