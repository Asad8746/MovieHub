import Api from "../Api/Api";

// if you want to use this project and just sign up for themoviedb
// and change the api to your given api_key
export const getMovies = query => {
  return async dispatch => {
    let response = await Api.get("search/movie", {
      params: {
        query: query,
        api_key: ""
      }
    });
    dispatch({ type: "MOVIES_LIST", payload: response.data });
  };
};

export const changePage = pageValue => {
  return async (dispatch, getState) => {
    console.log(getState().form.SearchedMovie.values);
    let response = await Api.get("search/movie", {
      params: {
        query: getState().form.SearchedMovie.values.movie,
        page: pageValue,
        api_key: ""
      }
    });
    dispatch({ type: "CHANGE_PAGE", payload: response.data });
  };
};

export const getMovie = movie_id => {
  return async dispatch => {
    let response = await Api.get(`/movie/${movie_id}`, {
      params: {
        api_key: ""
      }
    });
    dispatch({ type: "GET_MOVIE", payload: response.data });
  };
};
