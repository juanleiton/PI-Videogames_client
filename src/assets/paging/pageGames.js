const pageGames = games => {
  const numberOfPages = Math.ceil(games.length / 15);
  const pages = [];
  let remainder = numberOfPages;
  let pageStart = 0;
  let pageEnd = 15;
  while(remainder > 0) {
    let page = games.slice(pageStart, pageEnd);
    pages.push(page);
    pageStart = pageStart + 15;
    pageEnd = pageEnd + 15;
    remainder = remainder - 1;
  };
  return pages;
};

export default pageGames;