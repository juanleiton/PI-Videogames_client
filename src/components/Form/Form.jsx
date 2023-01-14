import React from "react";
import "./Form.css";
import today from "../../assets/auxvars/today.js";

const Form = ({ platforms, genres, newGame, errors, allowSubmit, responseSubmit, handleChange,
  handleSubmit, formPurpose }) => {
  return(
    <div className="new-form">
      <h2 className="new-form-title">{formPurpose}</h2>
      <div className="new-field-container">
        <label className="new-field-label" htmlFor="form-name">*Name:</label>
        <input className="new-input" id="form-name" type="text" name="name" value={newGame.name} onChange={handleChange} size="70"/>
      </div>
      <div className="new-field-error-container">
        {errors.name ? <p className="new-field-error"><small>{errors.name}</small></p> : <p className="new-no-error"><small>zzz</small></p>}
      </div>
      <div className="new-field-container">
        <label className="new-field-label" htmlFor="form-plot">*Plot:</label>
        <textarea className="new-input" id="form-plot" rows="12" name="plot" value={newGame.plot} onChange={handleChange} cols="70"/>
      </div>
      <div className="new-field-error-container">
        {errors.plot ? <p className="new-field-error"><small>{errors.plot}</small></p> : <p className="new-no-error"><small>zzz</small></p>}
      </div>
      <div className="new-field-container">
        <label className="new-field-label" htmlFor="form-released">Released:</label>
        <input className="new-input" id="form-released" type="date" name="released" value={newGame.released} onChange={handleChange} max={today}/> 
      </div>
      <div className="new-field-error-container">
        {errors.released ? <p className="new-field-error"><small>{errors.released}</small></p> : <p className="new-no-error"><small>zzz</small></p>}
      </div>
      <div className="new-field-container">
        <label className="new-field-label" htmlFor="form-rating">Rating:</label>
        <input className="new-input" id="form-rating" type="number" name="rating" value={newGame.rating} onChange={handleChange} min="0" max="5" step="0.01"/>
      </div>
      <div className="new-field-error-container">
        {errors.rating ? <p className="new-field-error"><small>{errors.rating}</small></p> : <p className="new-no-error"><small>zzz</small></p>}
      </div>
      <div className="new-field-container">
        <label className="new-field-label" htmlFor="form-image">Image:</label>
        <input className="new-input" id="form-image" type="url" name="image" value={newGame.image} onChange={handleChange} placeholder="https://www.example.com/game-image.jpg" size="70"/>
      </div>
      <div className="new-field-error-container">
        {errors.image ? <p className="new-field-error"><small>{errors.image}</small></p> : <p className="new-no-error"><small>zzz</small></p>}
      </div>
      <div className="new-genres-container">
        <label className="new-field-label">Genres:</label>
        <div className="new-genres">
          {genres?.length > 0 ? genres.map(genre => {
            let selected = false;
            if(newGame.genres.includes(genre.name)) selected = true;
            return(
            <div className="new-genre" key={`form-genres-div-${genre.id}`}>
              <input className="new-genre-input" key={`form-genres-input-${genre.id}`} id={`form-genres-${genre.id}`} type="checkbox" name={genre.name} onChange={handleChange} checked={selected}/>
              <label className="new-genre-input" key={`form-genres-label-${genre.id}`} htmlFor={`form-genres-${genre.id}`}>{genre.name}</label>
            </div>
            );
          })
          : !genres?.msg ? <h4>Loading genres...</h4> : <h4 className="genres-not-available">{genres.msg}</h4>}
        </div>
      </div>
      <div className="new-field-error-container">
          {errors.genres ? <p className="new-field-error"><small>{errors.genres}</small></p> : <p className="new-no-error"><small>zzz</small></p>}
      </div>
      <div className="new-platforms-container">
        <label className="new-field-label">*Platforms:</label>
        <div className="new-platforms">
          {platforms?.length > 0 ? platforms.map(platform => {
            let selected = false;
            if(newGame.platforms.includes(platform.name)) selected = true;
            return(
            <div className="new-platform" key={`form-platforms-div-${platform.id}`}>
              <input className="new-platform-input" key={`form-platforms-input-${platform.id}`} id={`form-platforms-${platform.id}`} type="checkbox" name={platform.name} onChange={handleChange} checked={selected}/>
              <label className="new-platform-input" key={`form-platforms-label-${platform.id}`} htmlFor={`form-platforms-${platform.id}`}>{platform.name}</label>
            </div>
            );
          })
          : !platforms?.msg ? <h4>Loading platforms...</h4> : <h4 className="platfomrs-not-available">{platforms.msg}</h4>}
        </div>
      </div>
      <div className="new-platforms-error-container">
          {errors.platforms ? <p className="new-field-error"><small>{errors.platforms}</small></p> : <p className="new-no-error"><small>zzz</small></p>}
      </div>
      <div className="new-button-container">
        <button className="new-button" type="button" disabled={!allowSubmit} onClick={handleSubmit}>{formPurpose}</button>
        <div className="new-form-output-container">
          {responseSubmit ? <p className="new-form-output"><small>{responseSubmit}</small></p> : <p className="new-no-output"><small>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</small></p>}
        </div>
      </div>
    </div>
  );
};

export default Form;