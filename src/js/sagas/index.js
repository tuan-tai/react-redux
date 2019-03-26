import { delay } from 'redux-saga';
import { takeEvery, take, put, takeLatest, all, call } from 'redux-saga/effects';
import { callApi } from "../api/RequestPost";
import { POSTS_SUCCESS, POSTS_FAILURE } from "../actions/index";

function* fetchPosts() {
  try {
    let data = yield call (callApi, "posts");
    // dispatch action to change redux state
    yield put(POSTS_SUCCESS(data));
  } catch (e) {
    console.log(e);
    yield put({ type: POSTS_FAILURE })
  }
}

function* actionWatcher() {
  yield takeEvery("POSTS_REQUEST", fetchPosts);
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}