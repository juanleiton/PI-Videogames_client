import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./NewGame.css";
import Form from "../Form/Form.jsx";
import { switchViews, addGame } from "../../redux/actions.js";
import * as helpers from "../../assets/helpers/index.js";
import * as validators from "../../assets/validators/index.js";
import cleanNewGame from "../../assets/cleanStates/cleanNewGame.js";
import cleanErrors from "../../assets/cleanStates/cleanErrors.js";

const NewGame = () => {
  const platforms = useSelector(state => state.platforms);
  const genres = useSelector(state => state.genres);
  const games = useSelector(state => state.homeGames);

  const [newGame, setNewGame] = useState(cleanNewGame);
  const [errors, setErrors] = useState(cleanErrors);
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [responseSubmit, setResponseSubmit] = useState("");

  const formPurpose = "Add new game";
  const platformNames = platforms.map(platform => platform.name);
  const genreNames = genres.map(genre => genre.name);
  const dispatch = useDispatch();

  const handleChange = event => {
    setNewGame({
      name: event.target.name === "name" ? event.target.value : newGame.name,
      plot: event.target.name === "plot" ? event.target.value : newGame.plot,
      released: event.target.name === "released" ? event.target.value : newGame.released,
      rating: event.target.name === "rating" ? helpers.rating(event) : newGame.rating,
      image: event.target.name === "image" ? event.target.value : newGame.image,
      platforms: platformNames.includes(event.target.name) ? helpers.platforms(newGame.platforms, event.target.name) : newGame.platforms,
      genres: genreNames.includes(event.target.name) ? helpers.genres(newGame.genres, event.target.name) : newGame.genres
    });
    setResponseSubmit("");
  };
  const handleSubmit = async () => {
    const cancelSubmit = Object.values(errors).some(field => field !== "");
    if(cancelSubmit) return setResponseSubmit("Form submission was canceled, please check provided data.");
    const response = await axios.post("videogame", newGame);
    setNewGame(cleanNewGame);
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => checkbox.checked = false);
    setResponseSubmit(response.data.msg);
    if(response.status !== 201) return;
    dispatch(addGame(response.data.added));
  };

  useEffect(() => {
    dispatch(switchViews("NEW_GAME"));
    window.scrollTo(0, 0);
  }, [dispatch]);
  useEffect(() => {
    setErrors({
      name: validators.name(newGame.name, games),
      plot: validators.plot(newGame.plot, games),
      released: validators.released(newGame.released),
      rating: validators.rating(newGame.rating),
      image: validators.image(newGame.image, games),
      platforms: validators.platforms(newGame.platforms, platforms),
      genres: validators.genres(newGame.genres, genres)
    });
  }, [newGame, games, genres, platforms]);
  useEffect(() => {
    if(Object.values(errors).every(field => field === "")) setAllowSubmit(true);
    else setAllowSubmit(false);
  }, [errors]);
  return(
    <div className="new-form-container">
      <Form
      platforms={platforms}
      genres={genres} 
      newGame={newGame}
      errors={errors}
      allowSubmit={allowSubmit}
      responseSubmit={responseSubmit}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formPurpose={formPurpose} />
    </div>
  );
};

export default NewGame;