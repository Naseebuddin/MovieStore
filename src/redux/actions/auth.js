import {
  DISCOVER_MOVIES_API,
  FORGOT_PASSWORD,
  LOGIN_API,
  NOW_PLAYING_API,
  POPULAR_MOVIES_URL,
  SIGNUP_API,
  TOP_RATED_MOVIES_API,
  UPCOMING_MOVIES_API_LIST,
} from "../../config/urls";
import { apiGet, apiPost, clearUserData, setUserData } from "../../utils/utils";
import { saveUserData } from "../reducers/auth";
import store from "../store";
import types from "../types";
const { dispatch } = store;

export function signUp(data) {
  return apiPost(SIGNUP_API, data);
}

export const login = (data) => {
  dispatch(saveUserData(data)); //saveUserData is a function which is define in reducer state

  // ************* uncomment below code in case of api*************** ///

  // console.log(data, 'the given data')
  // return new Promise((resolve, reject) => {
  //   apiPost(LOGIN_API, data)
  //     .then((res) => {
  //       setUserData(res.data).then((suc) => {
  //         dispatch(saveUserData(res.data));
  //         resolve(res);
  //       });
  //     })
  //     .catch((error) => {
  //       reject(error);
  //     });
  // });
};

export function forgotPassword(data) {
  return apiPost(FORGOT_PASSWORD, data);
}

export function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE });
  clearUserData();
}
const discover_Movie = (data) => {
  return apiGet(DISCOVER_MOVIES_API, data, {});
};
const now_playing = (data) => {
  return apiGet(NOW_PLAYING_API, data, {});
};
const upcoming_Movies_List = (data) => {
  return apiGet(UPCOMING_MOVIES_API_LIST, data, {});
};
const topRated_Movies_List = (data) => {
  return apiGet(TOP_RATED_MOVIES_API, data, {});
};
const popular_Movies_List = (data) =>{
  return apiGet (POPULAR_MOVIES_URL,data,{})
}
//Export All component
export default {
  discover_Movie,
  now_playing,
  upcoming_Movies_List,
  topRated_Movies_List,
  popular_Movies_List,
};
