import React, { useState } from "react";
import "./App.css";
import { Counter, MapComponent } from "./components";
import { FetchData } from "./components";
import { unsereContext } from "./context/Context";

function App() {

  const [stateValue, setStateValue] = useState([
    {id:1, name: "The Witcher 3", genre: "RPG", rating: 9.5 },
    {id:2, name: "Super Mario Odyssey", genre: "Platformer", rating: 9.7 },
    { id:3,
      name: "The Legend of Zelda: Breath of the Wild",
      genre: "Action-Adventure",
      rating: 9.8,
    },
  ]);

  const currentValue = { stateValue, setStateValue };
  console.log(currentValue)
  return (
    <unsereContext.Provider value ={currentValue}>
      <div className="App">
        <Counter  />
        <FetchData />
      </div>
    </unsereContext.Provider>
  );
}

export default App;
