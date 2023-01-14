const validatePlot = (plot, games, update) => {
  const error0 = "'Plot' must be between 75 and 300 characters long.";
  const error1 = "The game with the provided plot already exists.";
  if(plot.length < 75 || plot.length > 300) return error0;
  if(!update && games.some(game => game.plot === plot)) return error1;
  return "";
};

export default validatePlot;