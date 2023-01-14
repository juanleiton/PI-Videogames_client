const isValidUUIDV4 = require('is-valid-uuid-v4').isValidUUIDV4;

const filterByOrigin = (games, origin) => {
  if(games.length < 1) return games;
  if(origin === "BOTH") return games;
  const filteredGames = origin === "USER" ? games.filter(game => {
    return isValidUUIDV4(game.id);
  }) : games.filter(game => {
    return !isValidUUIDV4(game.id);
  });
  return filteredGames;
};

export default filterByOrigin;