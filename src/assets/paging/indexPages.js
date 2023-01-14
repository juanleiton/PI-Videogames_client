const indexPages = lastPageNumber => {
  let pageNumber = 1;
  let pageNumbers = [];
  while(pageNumber <= lastPageNumber) {
    pageNumbers.push(pageNumber);
    pageNumber++;
  };
  return pageNumbers;
};

export default indexPages;