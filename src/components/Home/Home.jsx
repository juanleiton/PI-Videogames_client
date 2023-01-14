import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Home.css";
import Game from "../Game/Game.jsx";
import PageBar from "../PageBar/PageBar.jsx";
import { getAllGames, getAllGenres, getAllPlatforms, switchViews } from "../../redux/actions.js";
import pageGames from "../../assets/paging/pageGames.js";
import indexPages from "../../assets/paging/indexPages.js";

const Home = () => {
  let homeGames = useSelector(state => state.homeGames);
  let searchGames = useSelector(state => state.searchGames);
  let currentView = useSelector(state => state.currentView);
  
  let { page } = useParams();
  let currentPageNumber = Number(page.slice(5));
  let games = currentView === "SEARCH" ? searchGames : homeGames;
  let pagedGames = pageGames(games);
  let pageNumbers = indexPages(pagedGames.length);
  let currentPageGames = pagedGames[currentPageNumber - 1];
  const dispatch = useDispatch();

  useEffect(() => {
    if(currentView === "START") {
      dispatch(getAllGames());
      dispatch(getAllGenres());
      dispatch(getAllPlatforms());
    };
    if(!["HOME", "SEARCH"].includes(currentView)) dispatch(switchViews("HOME"));
    window.scrollTo(0, 0);
  }, [dispatch, page, currentView]);
  return(
    <div className="home">
      <div className="home-games">
        {!games[0]?.msg && currentPageGames?.length > 0 ? currentPageGames.map(game => {
          return(
            <div className="game-container" key={`home-currentpagegames-div-${game.id}`}>
              <Game
                key={`home-currentpagegames-game-${game.id}`}
                id={game.id}
                name={game.name}
                rating={game.rating}
                image={game.image}
                genres={game.genres} />
            </div>
          );
        })
        : !games[0]?.msg ? <h4>Loading games...</h4> : <h4 className="no-results">{games[0].msg}</h4>}
      </div>
      <div className="pagebar-container">
        <PageBar
          pageNumbers={pageNumbers}
          currentPageNumber={currentPageNumber}
          currentView={currentView.toLowerCase()} />
      </div>
    </div>
  );
};

export default Home;