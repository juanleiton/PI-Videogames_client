const validateName = (name, games, update) => {
  const error0 = "'Name' must be between 3 and 75 characters long.";
  const error1 = `The game with the name '${name}' already exists.`;
  if(name.length < 3 || name.length > 75) return error0;
  if(!update && games.some(game => game.name === name)) return error1;
  return "";
};

export default validateName;