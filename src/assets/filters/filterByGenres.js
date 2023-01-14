const filterByGenres = (games, genres) => {
  if(genres.length < 1) return games;
  const filteredGames = games.filter(game => {
    return game.genres.some(genre => genres.includes(genre));
  });
  return filteredGames;
};

export default filterByGenres;