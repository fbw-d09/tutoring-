function MapComponent() {
  const games = [
    { name: 'The Witcher 3', genre: 'RPG', rating: 9.5 },
    { name: 'Super Mario Odyssey', genre: 'Platformer', rating: 9.7 },
    { name: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-Adventure', rating: 9.8 },
  ];

  const gameCards = games.map((game, index) => (
    <div key={index} className="game-card">
      <h3>{game.name}</h3>
      <p>Genre: {game.genre}</p>
      <p>Rating: {game.rating}</p>
    </div>
  ));

  return (
    <div className="game-list">
      {gameCards}
    </div>
  );
}

  export default MapComponent;