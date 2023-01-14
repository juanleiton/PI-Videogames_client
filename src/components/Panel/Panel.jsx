import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./Panel.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Options from "../Options/Options.jsx";
import * as helpers from "../../assets/helpers/index.js";
import { 
  searchGames,
  filterByGenres, 
  filterByOrigin, 
  sortByName, 
  sortByRating, 
  revert} from "../../redux/actions.js";

const Panel = () => {
  let currentView = useSelector(state => state.currentView);
  let genres = useSelector(state => state.genres);
  let newGame = useSelector(state => state.newGame);

  const [newSearch, setNewSearch] = useState("");
  const [allowSearch, setAllowSearch] = useState(false);
  const [sort, setSort] = useState("BY_NAME");
  const [order, setOrder] = useState("ASC");
  const [filterOrigin, setFilterOrigin] = useState("BOTH");
  const [filterGenres, setFilterGenres] = useState([]);
  const [goBack, setGoBack] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleNewSearch = event => {
    const newSearch = event.target.value;
    setNewSearch(newSearch);
  };
  const handleSort = event => {
    const newSort = event.target.name;
    setSort(newSort);
  };
  const handleOrder = event => {
    const newOrder = event.target.name;
    setOrder(newOrder);
  };
  const handleFilterOrigin = event => {
    const newFilter = event.target.name;
    setFilterOrigin(newFilter);
  };
  const handleFilterGenres = event => {
    const newFilter = event.target.name;
    setFilterGenres(helpers.genres(filterGenres, newFilter));
  };
  const handleSearch = () => {
    dispatch(searchGames(newSearch));
    setNewSearch("");
    setAllowSearch(false);
    history.push("/search/page-1");
  };
  
  useEffect(() => {
    if(newSearch.length > 0) setAllowSearch(true);
    else setAllowSearch(false);
  }, [newSearch]);
  useEffect(() => {
    dispatch(revert());
    dispatch(filterByGenres(filterGenres));
    dispatch(filterByOrigin(filterOrigin));
    if(sort === "BY_NAME" && order === "ASC") dispatch(sortByName(false));
    if(sort === "BY_NAME" && order === "DESC") dispatch(sortByName(true));
    if(sort === "BY_RATING" && order === "ASC") dispatch(sortByRating(false));
    if(sort === "BY_RATING" && order === "DESC") dispatch(sortByRating(true));
    if(window.location.href.includes("/new-game")) return;
    if(window.location.href.includes("/detail")) return;
    if(window.location.href.includes("/about")) return;
    if(window.location.href.includes("/update-game")) return;
    if(!window.location.href.includes("/page-1")) setGoBack(true);
  }, [dispatch, sort, order, filterOrigin, filterGenres, newGame, currentView]);
  useEffect(() => {
    if(window.location.href.includes("/page-1")) setGoBack(false);
  }, [goBack]);
  return(
    <div className="panel">
      {goBack && <Redirect to={`/${currentView.toLowerCase()}/page-1`} />}
      <div className="searchbar-container">
        <SearchBar
          newSearch={newSearch}
          allowSearch={allowSearch}
          handleNewSearch={handleNewSearch}
          handleSearch={handleSearch} />
      </div>
      <div className="options-container">
      {["HOME", "SEARCH"].includes(currentView) ?
        <Options
          genres={genres}
          sort={sort}
          order={order}
          filterOrigin={filterOrigin}
          filterGenres={filterGenres}
          handleFilterGenres={handleFilterGenres}
          handleFilterOrigin={handleFilterOrigin}
          handleSort={handleSort}
          handleOrder={handleOrder} />
      : null}
      </div>
    </div>
  );
};

export default Panel;