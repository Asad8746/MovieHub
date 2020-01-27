import { combineReducers } from "redux";
import { reducer } from "redux-form";
import movieListReducer from "./movieListReducer";
import getMovieReducer from "./getMovie";
export default combineReducers({
  form: reducer,
  movies: movieListReducer,
  movie: getMovieReducer
});
