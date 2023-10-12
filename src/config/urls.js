export const API_BASE_URL = "https://api.themoviedb.org/3/";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN_API = getApiUrl("/login");
export const SIGNUP_API = getApiUrl("/register");
export const SOCIAL_LOGIN = getApiUrl("/social_login");
export const FORGOT_PASSWORD = getApiUrl("/forgot_password");

//discover
export const DISCOVER_MOVIES_API = getApiUrl(
  "discover/movie?api_key=5f9987195e054934bff6d445f084e72a"
);
// Movies List
export const NOW_PLAYING_API = getApiUrl(
  "movie/now_playing?api_key=5f9987195e054934bff6d445f084e72a"
);

export const UPCOMING_MOVIES_API_LIST = getApiUrl(
  "movie/upcoming?api_key=5f9987195e054934bff6d445f084e72a"
);

export const TOP_RATED_MOVIES_API = getApiUrl(
  "/movie/top_rated?api_key=5f9987195e054934bff6d445f084e72a"
);
export const POPULAR_MOVIES_URL = getApiUrl(
  "movie/popular?api_key=5f9987195e054934bff6d445f084e72a"
);
