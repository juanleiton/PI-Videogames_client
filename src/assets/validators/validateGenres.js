const validateGenres = (genres, allGenres) => {
  const allGenreNames = allGenres.map(genre => genre.name);
  const error0 = "All values must be valid gaming genres."
  if(genres.length < 1) return "";
  if(!genres.every(genre => allGenreNames.includes(genre))) return error0;
  return "";
};

export default validateGenres;