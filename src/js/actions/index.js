import {ADD_ARTICLE} from "../constants/action-types";

export function addArticle(payload) {
  return {type: ADD_ARTICLE, payload}
};

export function POSTS_REQUEST() {
  return {type: "POSTS_REQUEST"}
};
export const POSTS_SUCCESS = (data) => ({
  type: "POST_SUCCESS",
  payload: data
});
export const POSTS_FAILURE = () => {
  return {type: "POSTS_FAILURE"}
};