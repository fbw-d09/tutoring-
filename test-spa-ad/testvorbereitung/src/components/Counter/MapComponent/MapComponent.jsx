import React, { useContext } from "react";

import "./MapComponent.scss";

import { unsereContext } from "../../../context/Context";

export const MapComponent = ({className}) => {

  const {stateValue} = useContext(unsereContext);
 
  return (
    <div className={`MapComponent ${className !== undefined ? className : ""}`}>
      <br />
      <br />
      <br />
      <hr />
      <div>
        {stateValue.map((game) => {
          return (
            <div key={game.id} className="game-card">
              <h3>{game.name}</h3>
              <p>Genre: {game.genre}</p>
              <p>Rating: {game.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
