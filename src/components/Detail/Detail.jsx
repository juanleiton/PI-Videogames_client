import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css";
import { getDetail, deleteGame } from "../../redux/actions.js";
import { isValidUUIDV4 } from "is-valid-uuid-v4";

const Detail = () => {
  let game = useSelector(state => state.detail);

  const [acceptDelete, setAcceptDelete] = useState(false);
  const [acceptUpdate, setAcceptUpdate] = useState(false);

  let { id } = useParams();
  const userCreated = isValidUUIDV4(id);

  const dispatch = useDispatch();
  const handleDelete = async () => {
    let accept = window.confirm(`Are you sure you want to delete "${game.name}"?`);
    if(accept) await axios.delete(`https://pi-videogamesapi-production.up.railway.app/videogame/${id}`);
    dispatch(deleteGame(id));
    setAcceptDelete(accept);
  };
  const handleUpdate = () => {
    let accept = window.confirm(`Are you sure you want to update "${game.name}"?`);
    setAcceptUpdate(accept);
  };
  
  useEffect(() => {
    dispatch(getDetail(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);
  return(
    <div className="detail-container">
      {acceptDelete && <Redirect to="/home/page-1" />}
      {acceptUpdate && <Redirect to={`/update-game/${id}`} />}
      {!game?.msg ? <div className="detail">
        <h2 className="detail-title">{game.name}</h2>
        <div className="detail-image-container">
          <img className="detail-image" src={game.image} alt={`${game.name} [cover]`}/>
        </div>
        <div className="detail-main-container">
          <h4 className="detail-r-r">Rating: {game.rating}</h4>
          <h4 className="detail-r-r">Released: {game.released}</h4>
          <div className="detail-genres-container">
            <h4 className="detail-genres-title">Genres:</h4>
            <div className="detail-genres">
              {game?.genres?.length > 0 ? game.genres.map(genre => {
                return(
                  <div className="detail-genre" key={`detail-genres-li-${genre}`}>{genre}</div>
                );
              })
              : <h4 className="detail-no-genres">No genres</h4>}
            </div>
          </div>
          <div className="detail-platforms-container">
            <h4 className="detail-platforms-title">Platforms:</h4>
            <div className="detail-platforms">
              {game?.platforms?.length > 0 ? game.platforms.map(platform => {
                return(
                  <div className="detail-platform" key={`detail-platforms-li-${platform}`}>{platform}</div>
                );
              })
              : <h4 className="platform-no-platforms">No platforms</h4>}
            </div>
          </div>
        </div>
        <div className="plot-container">
          <p>{game.plot}</p>
        </div>
        <div className="detail-button-container">
          <button className="detail-button" type="button" disabled={!userCreated} onClick={handleDelete}>Delete</button>
          <button className="detail-button" type="button" disabled={!userCreated} onClick={handleUpdate}>Update</button>
        </div>
        <div className="detail-output-container">
            {!userCreated ? <p className="detail-output"><small>{"Only user-created games can be updated or deleted."}</small></p> : <p className="detail-no-output"><small>zzz</small></p>}
        </div>
      </div> : <h4 className="game-not-found">{game.msg}</h4>}
    </div>
  );
};

export default Detail;