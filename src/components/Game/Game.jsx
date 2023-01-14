import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";

const Game = ({ id, name, rating, image, genres }) => {
  return(
    <div className="game">
      <div className="game-image-container">
        <Link to={`/detail/${id}`}>
          <img className="game-image" src={image} alt={`${name} [cover]`}/>
        </Link>
      </div>
      <div className="game-main-container">
        <h4 className="game-title">{name}</h4>
        <h4 className="game-rating">Rating: {rating}</h4>
        <div className="game-genres-container">
          <h4 className="game-genres-title">Genres:</h4>
          {genres?.length > 0 ? genres.map(genre => {
            return(
              <div className="game-genre" key={`game-genres-li-${genre}`}>{genre}</div>
            );
          })
          : <h4 className="game-no-genres">No genres</h4>}
        </div>
      </div>
    </div>
  );
};

export default Game;