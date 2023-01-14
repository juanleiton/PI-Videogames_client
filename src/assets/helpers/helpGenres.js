const helpGenres = (genres, newGenre) => {
  if(genres.includes(newGenre)) {
    return genres.filter(genre => genre !== newGenre);
  }
  else {
    return [...genres, newGenre].sort();
  };
};

export default helpGenres;