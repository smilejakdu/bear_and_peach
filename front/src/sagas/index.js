import { all, fork } from "redux-saga/effects";
import axios from "axios";

import boardSaga from "./board";
import productSaga from "./product";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(boardSaga), fork(productSaga)]);
}
