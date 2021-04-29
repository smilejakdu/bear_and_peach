var express = require("express");
var router = express.Router();

const db = require("../components/db");
const cart_model = require("../models/cart");
const product_model = require("../models/product");
const user_model = require("../models/user");
const { verifyToken } = require("./middlewares");

router.post("/",verifyToken, async function (req, res, next) {
  const body = req.body; // {name:asdf,price:200}
  const { user_idx } = req.decoded;
  body.user_idx = user_idx;
  console.log("body : ", body);

  try {
    const connection = await db.beginTransaction();
    const productResult = await product_model.getChartGetList({product_idx: body.product_idx});

    if (productResult.length == 0) {
      throw { status: 404, errorMessage: "product not found" };
    }

    const userResult = await user_model.getList({ user_idx: body.user_idx });

    if (userResult.length == 0) {
      throw { status: 404, errorMessage: "user not found" };
    }

    const result = await cart_model.insert(connection, body);

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
    const result = await cart_model.update(connection, json);
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
    const result = await cart_model.delete(connection, { cart_idx: json.cart_idx });
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});

router.get("/",verifyToken, async function (req, res, next) {
  const { user_idx } = req.decoded;
  console.log("user_idx : " , user_idx);
  const result = await cart_model.getList(user_idx);
  console.log("cart result70 : " , result);
  const { product_idx }= result;
  for (let i = 0; i < result.length; i++) {
    const imgResult = await product_model.getList({
      product_idx: result[i].product_idx,
    });
    result[i].images = imgResult;
    result[i].repr_img = imgResult.length > 0 ? imgResult[0].img_path : "";
  }
  res.status(200).json({ result });
});

module.exports = router;
