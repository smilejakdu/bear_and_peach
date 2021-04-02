import axios from "axios";
import { all, fork, put, takeLatest, throttle, call, delay } from 'redux-saga/effects';
import { LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE } from '../reducers/product';

function loadProductsAPI(){
    return axios.get('dummy/product_body.json');
}

function* loadProducts(action){
  try{
    const result = yield call(loadProductsAPI);
    yield delay(1000);
    const { data :{ product_content }} = result;
    yield put({
      type:LOAD_PRODUCTS_SUCCESS,
      data:product_content,
    });
    }catch(error){
      console.log(error);
      yield put({
        type:LOAD_PRODUCTS_FAILURE,
        error:error.response.data,
      });
  }
}

function* watchLoadProducts (){
    yield throttle(5000,LOAD_PRODUCTS_REQUEST ,loadProducts);
}

export default function* productSaga(){
    console.log(3);
    yield all([
        fork(watchLoadProducts),
    ]);
}