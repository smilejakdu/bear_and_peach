var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const passport = require('passport');
const passportConfig = require('./passport');
passportConfig(passport);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var delivInfoRouter = require("./routes/deliv_info");
var todayboardRouter = require("./routes/today_board");
var todayboardLikesRouter = require("./routes/today_board_likes");
var todayboardImgRouter = require("./routes/today_board_img");
var kakaoImgRouter = require("./routes/kakao_character_img");
var commentRouter = require("./routes/comment");
var myActiveRouter = require("./routes/my_active");
var tokenRouter = require("./routes/token");
var productRouter = require("./routes/product");
var productImgRouter = require("./routes/product_img");
var cartRouter = require("./routes/cart");
var orderRouter = require("./routes/orders");
var app = express();

const swaggerDefinition = {
  info: {
    title: "Bear_And_Peach_Swagger",
    version: "1.0.0",
    description: "API description",
  },
  host: "3.35.131.149",
  //   host: "localhost:4000",
  basePath: "/",
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      schema: "bearer",
      in: "header",
    },
  },
};

const options = {
    swaggerDefinition,
    apis: ["./schemas/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
//view의 경로 설정
app.set("view engine", "ejs");
//pug 템플릿을 사용
app.use(logger("dev"));
//logger 모듈을 사용한다면 설정
//logger 모듈 보다 위에 선언한 모듈에 대해서는 로깅을 받지 않는다.
//dev 설정을 하면 response에 따라 색이 다른 로그를 보여준다.
app.use(express.json());
//헤더의 content type을 자동으로 json으로 설정해 줌
app.use(express.urlencoded({ extended: false }));
//한글 등 url을 utf8로 인코딩 할 필요가 있을때 사용
//보다 다양한 모듈과 형식을 지원하고 싶으면 extended를 true로 설정한다.
app.use(cookieParser());
//서버에서 쿠키를 쉽게 생성할 수 있게 해주는 모듈
//http 프로토콜은 통신이 끝나면 상태 정보를 저장하지 않기 때문에, 유저가 다시 접속 시 이전 화면을 보여주는 등 상태에 대한 저장이 필요할 때 사용
app.use(express.static(path.join(__dirname, "public")));
//static(전 경로에서 참조할 수 있는) 루트 디렉토리를 설정해 줌
app.use(passport.initialize());

app.use("/", indexRouter); // 127.0.0.1:3000
app.use("/user", usersRouter); // 127.0.0.1:3000/user
app.use("/deliv_info", delivInfoRouter);
app.use("/today_board", todayboardRouter);
app.use("/today_board_img", todayboardImgRouter);
app.use("/kakao_img", kakaoImgRouter);
app.use("/comment" , commentRouter);
app.use("/my_active", myActiveRouter);
app.use("/token" , tokenRouter);
app.use("/today_board_likes", todayboardLikesRouter);
app.use("/product", productRouter);
app.use("/product_img", productImgRouter);
app.use("/cart", cartRouter);
app.use("/orders", orderRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
