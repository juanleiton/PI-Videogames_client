const validateRating = rating => {
  const error0 = "If provided, 'rating' must be a number between 0 and 5 inclusive";
  if(rating === "") return "";
  if(Number.isNaN(Number(rating)) || rating < 0 || rating > 5) return error0;
  return "";
};

export default validateRating;