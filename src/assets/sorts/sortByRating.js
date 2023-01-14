const sortByRating = (games, descending) => {
  const gamesCopy = [...games];
  const sortedGames = gamesCopy.sort((a, b) => {
    const GameA = a.rating;
    const GameB = b.rating;
    if(GameA < GameB) return -1;
    if(GameA > GameB) return 1;
    return 0; 
  });
  if(descending) sortedGames.reverse();
  return sortedGames;
};

export default sortByRating;