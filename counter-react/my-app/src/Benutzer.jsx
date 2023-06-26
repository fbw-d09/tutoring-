import React from 'react';
// in der benutzer datei sagen wir welche parameter man in der app.js übergeben und nutzen kann 
// diese werden dann einzeln wiedergegeben so wie es hier der jsx code zeigt 
function Benutzer(props) {
    return (
      <div>
        <h2>Name: {props.name}</h2>
        <p>Alter: {props.age}</p>
        <p>Stadt: {props.city}</p>
      </div>
    );
  }
  

export default Benutzer;