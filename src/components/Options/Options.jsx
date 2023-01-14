import React from "react";
import "./Options.css";

const Options = ({ genres, sort, order, filterOrigin, filterGenres, handleFilterGenres, handleFilterOrigin,
  handleSort, handleOrder }) => {
  return(
      <div className="options">
        <div className="option-container">
          <h4 className="sort-by">Sort by</h4>
          <div className="input-container">
            <div className="option-input-container">
              <input className="option-input" id="options-name" type="radio" name="BY_NAME" onChange={handleSort} checked={sort === "BY_NAME" ? true : false}/>
              <label className="option-input" htmlFor="options-name">Name</label>
            </div>
            <div className="option-input-container">
              <input className="option-input" id="options-rating" type="radio" name="BY_RATING" onChange={handleSort} checked={sort === "BY_RATING" ? true : false}/>
              <label className="option-input" htmlFor="options-rating">Rating</label>
            </div>
            </div>
          </div>
        <div className="option-container">
          <h4 className="order">Order</h4>
          <div className="input-container">
            <div className="option-input-container">
              <input className="option-input" id="options-ascending" type="radio" name="ASC" onChange={handleOrder} checked={order === "ASC" ? true : false}/>
              <label className="option-input" htmlFor="options-ascending">Ascending</label>
            </div>
            <div className="option-input-container">
              <input className="option-input" id="options-descending" type="radio" name="DESC" onChange={handleOrder} checked={order === "DESC" ? true : false}/>
              <label className="option-input" htmlFor="options-descending">Descending</label>
            </div>
          </div>
        </div>
        <div className="option-container">
          <h4 className="show">Show</h4>
          <div className="input-container">
            <div className="option-input-container">
              <input className="option-input" id="user-games-only" type="radio" name="USER" onChange={handleFilterOrigin} checked={filterOrigin === "USER" ? true : false}/>
              <label className="option-input" htmlFor="user-games-only">User games only</label>
            </div>
            <div className="option-input-container">
              <input className="option-input" id="app-games-only" type="radio" name="APP" onChange={handleFilterOrigin} checked={filterOrigin === "APP" ? true : false}/>
              <label className="option-input" htmlFor="app-games-only">App games only</label>
            </div>
            <div className="option-input-container">
              <input className="option-input" id="user-and-app-games" type="radio" name="BOTH" onChange={handleFilterOrigin} checked={filterOrigin === "BOTH" ? true : false}/>
              <label className="option-input" htmlFor="user-and-app-games">Both</label>
            </div>
          </div>
        </div>
        <div className="option-genres">
          <h4 className="genres">Genres</h4>
          <div className="filter-genres">
            {genres?.length > 0 ? genres?.map(genre => {
              return(
                <div className="filter-genre" key={`options-genres-div-${genre.id}`}>
                  <input className="option-input" key={`options-genres-input-${genre.id}`} id={`options-genres-${genre.id}`} type="checkbox" name={genre.name} onChange={handleFilterGenres} checked={filterGenres.includes(genre.name) ? true : false}/>
                  <label className="option-input" key={`options-genres-label-${genre.id}`} htmlFor={`options-genres-${genre.id}`}>{genre.name}</label>
                </div>
              );
            })
            : !genres?.msg ? <h4>Loading genres...</h4> : <h4 className="genres-not-found">{genres.msg}</h4>}
          </div>
        </div>
    </div>
  );
};

export default Options;