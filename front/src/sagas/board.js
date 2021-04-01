import axios from 'axios';
import {all ,fork , put , takeLatest , throttle , call} from "redux-saga/effects";

import {
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    LOAD_BOARD_REQUEST,
    LOAD_BOARD_SUCCESS,
    LOAD_BOARD_FAILURE,
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
}

function loadBoardAPI(data){ // board 데이터를 불러온다.
    console.log(data);
    return
    // return axios.get(``,data);
}

function* loadBoard(action){
    try{
        const result = yield call(loadBoardAPI, action.data);
        yield put({
            type:LOAD_BOARD_SUCCESS,
            data:result.data,
        });
    }catch(error){
        console.log(error);
        yield put({
            type:LOAD_BOARD_FAILURE,
            error:error.response.data
        });
    }
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST , addComment);
}

function* watchLoadBoard(){
    yield takeLatest(LOAD_BOARD_REQUEST , loadBoard);
}

export default function* boardSaga(){
    yield all([
        fork(watchLoadBoard),
        fork(watchAddComment)
    ]);
}