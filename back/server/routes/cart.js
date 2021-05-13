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

router.put("/",verifyToken, async function (req, res, next) {
  try {
    const json = req.body; // {idx :2, name:'ssdf'}
    console.log("json : " , json);
    const connection = await db.beginTransaction();
    const result = await cart_model.update(connection, json);
    await db.commit(connection);
    res.json({ result });
  } catch (err) {
    console.log("err : ", err);
    next(err);
  }
});


router.delete("/",verifyToken, async function (req, res, next) {
  const json = req.body;
  console.log("json : " , json);
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
  const result = await cart_model.getList(user_idx);
  let total_price = 0 
  for (let i = 0; i < result.length; i++) {
    const ProductResult = await product_model.getList({
      product_idx: result[i].product_idx,
    });
    const {main_image_path , title , price} =  ProductResult[0]
    result[i].image = main_image_path;
    result[i].title = title;
    result[i].price = price;
    const cart_price = price * result[i].cart_count
    total_price += cart_price
  }
  result.push({total_price:total_price})
  res.status(200).json({ result });
});


module.exports = router;
