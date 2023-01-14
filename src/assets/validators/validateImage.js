import imagePattern from "../auxvars/imagePattern.js";

const validateImage = (image, games, update) => {
  const error0 = "If provided, 'Image' must be an URL."
  const error1 = "If provided, 'Image' must be between 30 and 300 characters long.";
  const error2 = "The game with the provided URL already exists.";
  if(image === "") return "";
  if(!imagePattern.test(image)) return error0;
  if(image.length < 30 || image.length > 300) return error1;
  if(!update && games.some(game => game.image === image)) return error2;
  return "";
};

export default validateImage;