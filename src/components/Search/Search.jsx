import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Game from "../Game/Game.jsx";
import PageBar from "../PageBar/PageBar.jsx";
import { switchViews } from "../../redux/actions.js";
import pageGames from "../../assets/paging/pageGames.js"
import indexPages from "../../assets/paging/indexPages.js";

const Search = () => {
  let games = useSelector(state => state.searchGames);
  let currentView = useSelector(state => state.currentView);

  let { page } = useParams();
  let currentPageNumber = Number(page.slice(5));
  let pagedGames = pageGames(games);
  let pageNumbers = indexPages(pagedGames.length);
  let currentPageGames = pagedGames[currentPageNumber - 1];
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(switchViews("SEARCH"));
  }, [dispatch, page, currentView]);
  return(
    <div>
      <div>
        {currentPageGames?.length > 0 ? currentPageGames.map(game => {
          return(
            <div key={`search-currentpagegames-div-${game.id}`}>
              <Game
                key={`search-currentpagegames-game-${game.id}`}
                id={game.id}
                name={game.name}
                rating={game.rating}
                image={game.image}
                genres={game.genres} />
            </div>
          );
        })
        : <h4>Loading games...</h4>}
      </div>
      <div>
        <PageBar 
          pageNumbers={pageNumbers}
          currentPageNumber={currentPageNumber}
          currentView={currentView.toLowerCase()} />
      </div>
    </div>
  );
};

export default Search;