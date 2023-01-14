import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UpdateGame.css";
import Form from "../Form/Form.jsx";
import { addGame, switchViews } from "../../redux/actions.js";
import * as helpers from "../../assets/helpers/index.js";
import * as validators from "../../assets/validators/index.js";
import cleanErrors from "../../assets/cleanStates/cleanErrors.js";

const UpdateGame = () => {
  const platforms = useSelector(state => state.platforms);
  const genres = useSelector(state => state.genres);
  const games = useSelector(state => state.homeGames);
  const game = useSelector(state => state.detail);

  const gameData = {
    name: game.name,
    plot: game.plot,
    released: game.released,
    rating: game.rating,
    image: game.image,
    platforms: game.platforms,
    genres: game.genres
  };

  const [updateGame, setUpdateGame] = useState(gameData);
  const [errors, setErrors] = useState(cleanErrors);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [responseSubmit, setResponseSubmit] = useState("");

  const { id } = useParams();
  const formPurpose = "Update game";
  const platformNames = platforms.map(platform => platform.name);
  const genreNames = genres.map(genre => genre.name);
  const dispatch = useDispatch();

  const handleChange = event => {
    setUpdateGame({
      name: event.target.name === "name" ? event.target.value : updateGame.name,
      plot: event.target.name === "plot" ? event.target.value : updateGame.plot,
      released: event.target.name === "released" ? event.target.value : updateGame.released,
      rating: event.target.name === "rating" ? helpers.rating(event) : updateGame.rating,
      image: event.target.name === "image" ? event.target.value : updateGame.image,
      platforms: platformNames.includes(event.target.name) ? helpers.platforms(updateGame.platforms, event.target.name) : updateGame.platforms,
      genres: genreNames.includes(event.target.name) ? helpers.genres(updateGame.genres, event.target.name) : updateGame.genres
    });
    setResponseSubmit("");
  };
  const handleSubmit = async () => {
    const cancelSubmit = Object.values(errors).some(field => field !== "");
    if(cancelSubmit) return setResponseSubmit("Form submission was canceled, please check provided data.");
    const response = await axios.put(`/videogame/${id}`, updateGame);
    setResponseSubmit(response.data.msg);
    if(response.status !== 200) return;
    dispatch(addGame(response.data.updated));
  };

  useEffect(() => {
    dispatch(switchViews("NEW_GAME"));
    window.scrollTo(0, 0);
  }, [dispatch]);
  useEffect(() => {
    setErrors({
      name: validators.name(updateGame.name, games, true),
      plot: validators.plot(updateGame.plot, games, true),
      released: validators.released(updateGame.released),
      rating: validators.rating(updateGame.rating),
      image: validators.image(updateGame.image, games, true),
      platforms: validators.platforms(updateGame.platforms, platforms),
      genres: validators.genres(updateGame.genres, genres)
    });
  }, [updateGame, games, genres, platforms]);
  useEffect(() => {
    if(Object.values(errors).every(field => field === "")) setAllowSubmit(true);
    else setAllowSubmit(false);
  }, [errors]);
  return(
    <div className="update-form-container">
      <Form
      platforms={platforms}
      genres={genres} 
      newGame={updateGame}
      errors={errors}
      allowSubmit={allowSubmit}
      responseSubmit={responseSubmit}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formPurpose={formPurpose} />
    </div>
  );
};

export default UpdateGame;