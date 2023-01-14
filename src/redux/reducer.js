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
import filterByGenres from "../assets/filters/filterByGenres.js";
import filterByOrigin from "../assets/filters/filterByOrigin.js";
import sortByName from "../assets/sorts/sortByName.js";
import sortByRating  from "../assets/sorts/sortByRating.js";
import * as helpers from "../assets/helpers/index.js";
import initialState from "../assets/cleanStates/initialState.js";

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case GET_ALL_PLATFORMS:
      return {
        ...state,
        platforms: action.payload
      };
    case GET_ALL_GAMES:
      return {
        ...state,
        homeGames: sortByName(action.payload, false),
        homeBackUp: sortByName(action.payload, false)
      };
    case SEARCH_GAMES:
      return {
        ...state,
        searchGames: action.payload,
        searchBackUp: action.payload,
        currentView: "SEARCH"
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
        currentView: "DETAIL"
      };
    case ADD_GAME:
      const newGame = helpers.newGame(action.payload);
      const newFeed = state.homeGames.filter(game => {
        return game.id !== action.payload?.id;
      });
      return {
        ...state,
        homeGames: [...newFeed, newGame],
        homeBackUp: [...newFeed, newGame],
        newGame: newGame
      };
    case DELETE_GAME:
      const afterDelete = state.homeGames.filter(game => {
        return game.id !== action.payload;
      })
      return {
        ...state,
        homeGames: [...afterDelete],
        homeBackUp: [...afterDelete]
      }
    case FILTER_BY_GENRES:
      return {
        ...state,
        homeGames: filterByGenres(state.homeGames, action.payload),
        searchGames: filterByGenres(state.searchGames, action.payload)
      };
    case FILTER_BY_ORIGIN:
      return {
        ...state,
        homeGames: filterByOrigin(state.homeGames, action.payload),
        searchGames: filterByOrigin(state.searchGames, action.payload)
      };
    case SORT_BY_NAME:
      return {
        ...state,
        homeGames: sortByName(state.homeGames, action.payload),
        searchGames: sortByName(state.searchGames, action.payload)
      };
    case SORT_BY_RATING:
      return {
        ...state,
        homeGames: sortByRating(state.homeGames, action.payload),
        searchGames: sortByRating(state.searchGames, action.payload)
      };
    case REVERT:
      return {
        ...state,
        homeGames: [...state.homeBackUp],
        searchGames: [...state.searchBackUp]
      };
    case SWITCH_VIEWS:
    return {
      ...state,
      currentView: action.payload
    }
    default: return state;
  };
};

export default rootReducer;