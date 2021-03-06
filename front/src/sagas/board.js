import axios from 'axios';
import {all ,fork , put , takeLatest , throttle , call} from "redux-saga/effects";

import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
} from "../reducers/board";

function addCommentAPI(data){
    console.log(data);
    return
    // return axios.post(``,data)
}

function* addComment(action){
    try{
        const result = yield call(addCommentAPI , action.data);
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data : result.data,
        })
    }catch(error){
        console.log(error);
        yield put({
            type : ADD_COMMENT_FAILURE,
            error:error.response.data,
        })
    }
export const LOAD_BOARD_REQUEST = "LOAD_BOARD_REQUEST";
export const LOAD_BOARD_SUCCESS = "LOAD_BOARD_SUCCESS";
export const LOAD_BOARD_FAILURE = "LOAD_BOARD_FAILURE";}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST , addComment);
}


export default function* boardSaga(){
    yield all([
        fork(watchLoadBoard),
        fork(watchAddComment)
    ]);
}