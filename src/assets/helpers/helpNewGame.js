const helpNewGame = game => {
  return {
    id: game.id,
    name: game.name,
    rating: game.rating,
    image: game.image,
    platforms: game.platforms
  };
};

export default helpNewGame;