import axios from "axios";
import { 
  GET_ALL_GENRES, 
  GET_ALL_PLATFORMS, 
  GET_ALL_GAMES, 
  SEARCH_GAMES, 
  GET_DETAIL, 
  ADD_GAME,
  DELETE_GAME,
  FILTER_BY_GENRES,
  FILTER_BY_ORIGIN,
  SORT_BY_NAME,
  SORT_BY_RATING,
  REVERT,
  SWITCH_VIEWS
} from "./action-types";

export const getAllGenres = () => {
  return async dispatch => {
    try {
      let response = await axios.get(`/genres`);
    dispatch({type: GET_ALL_GENRES, payload: response.data});
    } catch (error) {
      console.log(error);
      dispatch({type: GET_ALL_GENRES, payload: error.response.data});
    };
  };
};

export const getAllPlatforms = () => {
  return async dispatch => {
    try {
      let response = await axios.get(`/platforms`);
      dispatch({type: GET_ALL_PLATFORMS, payload: response.data});
    } catch (error) {
      console.log(error);
      dispatch({type: GET_ALL_PLATFORMS, payload: error.response.data});
    };
  };
};

export const getAllGames = () => {
  return async dispatch => {
    try {
      let response = await axios.get(`/videogames`);
      dispatch({type: GET_ALL_GAMES, payload: response.data});
    } catch (error) {
      console.log(error);
      dispatch({type: GET_ALL_GAMES, payload: [error.response.data]});
    };
  };
};

export const searchGames = name => {
  return async dispatch => {
    try {
      let response = await axios.get(`/videogames?name=${name}`);
      dispatch({type: SEARCH_GAMES, payload: response.data});
    } catch (error) {
      console.log(error);
      dispatch({type: SEARCH_GAMES, payload: [error.response.data]});
    };
  };
};

export const getDetail = id => {
  return async dispatch => {
    try {
      let response = await axios.get(`/videogame/${id}`);
      dispatch({type: GET_DETAIL, payload: response.data});
    } catch (error) {
      console.log(error);
      dispatch({type: GET_DETAIL, payload: error.response.data});
    };
  };
};

export const addGame = game => {
  return dispatch => {
    dispatch({type: ADD_GAME, payload: game});
  };
};

export const deleteGame = id => {
  return dispatch => {
    dispatch({type: DELETE_GAME, payload: id});
  };
};

export const filterByGenres = genres => {
  return dispatch => {
    dispatch({type: FILTER_BY_GENRES, payload: genres});
  };
};

export const filterByOrigin = origin => {
  return dispatch => {
    dispatch({type: FILTER_BY_ORIGIN, payload: origin});
  };
};

export const sortByName = descending => {
  return dispatch => {
    dispatch({type: SORT_BY_NAME, payload: descending});
  };
};

export const sortByRating = descending => {
  return dispatch => {
    dispatch({type: SORT_BY_RATING, payload: descending});
  };
};

export const revert = () => {
  return dispatch => {
    dispatch({type: REVERT});
  };
};

export const switchViews = view => {
  return dispatch => {
    dispatch({type: SWITCH_VIEWS, payload: view});
  };
};