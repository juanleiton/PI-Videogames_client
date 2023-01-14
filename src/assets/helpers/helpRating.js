const helpRating = event => {
  const newRating = Number(Number(event.target.value).toFixed(2));
  if(event.target.value !== "") return newRating;
  return "";
};

export default helpRating;