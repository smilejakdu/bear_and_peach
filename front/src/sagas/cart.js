import axios from 'axios';
import { all, fork, put, takeLatest, throttle, call, delay } from 'redux-saga/effects';
import { LOAD_CARTS_REQUEST, LOAD_CARTS_SUCCESS, LOAD_CARTS_FAILURE } from '../reducers/cart';

function loadCartsAPI(data) {
  return axios.get(`/cart/${data}`);
}
    return axios.get(`/post/${data}`);
function* loadCarts(action) {
  try {
    const result = yield call(loadCartsAPI , action.data);
    console.log("result : " , result);
    // yield delay(1000);
    const {
      data: { cart_content },
    } = result;
    yield put({
      type: LOAD_CARTS_SUCCESS,
      data: cart_content,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_CARTS_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLoadCarts() {
  yield throttle(5000, LOAD_CARTS_REQUEST, loadCarts);
}

export default function* cartSaga() {
  yield all([fork(watchLoadCarts)]);
}
