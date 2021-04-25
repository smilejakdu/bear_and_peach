const jwt = require("jsonwebtoken");
const secretKey = require("../config/secret_key");
const { verifyToken } = require("./middlewares");
const express = require("express");
const router = express.Router();


router.get("/auth", function (req, res, next) {
  try {
    const { authentication } = req.headers;
    let decode = jwt.verify(authentication, secretKey.secretKey);
    console.log("users decode :", decode);
    if (decode) {
      res.send("권한이 있어서 API 수행 가능");
    }
  } catch (error) {
    if (error.message === "invalid token") {
      console.log("invalid token");
    }
    console.log("error : ", error);
  }
});


module.exports = router;
