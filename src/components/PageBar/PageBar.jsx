import React from "react";
import { Link } from "react-router-dom";
import "./PageBar.css";

const PageBar = ({ pageNumbers, currentPageNumber, currentView }) => {
  return(
    <div className="pagebar">
      {currentPageNumber !== 1 ?
      <Link className="page-enabled" to={`/${currentView}/page-1`}>
        <div>First</div>
      </Link>
      : <div className="page-disabled">First</div>}
      {currentPageNumber !== 1 ? 
      <Link className="page-enabled" to={`/${currentView}/page-${currentPageNumber - 1}`}>
        <div>Previous</div>
      </Link>
      : <div className="page-disabled">Previous</div>}
      {currentPageNumber === 1 ?
      <>
      <div className="no-number">0</div>
      <div className="no-number">0</div>
      <div className="no-number">0</div>
      </>
      : null}
      {currentPageNumber === 2 ?
      <>
      <div className="no-number">0</div>
      <div className="no-number">0</div>
      <Link className="page-number" to={`/${currentView}/page-1`}><div>1</div></Link>
      </>
      : null}
      {currentPageNumber === 3 ?
      <>
      <div className="no-number">0</div>
      <Link className="page-number" to={`/${currentView}/page-1`}><div>1</div></Link>
      <Link className="page-number" to={`/${currentView}/page-2`}><div>2</div></Link>
      </>
      : null}
      {currentPageNumber > 3 ?
      <>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber - 3}`}><div>{currentPageNumber - 3}</div></Link>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber - 2}`}><div>{currentPageNumber - 2}</div></Link>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber - 1}`}><div>{currentPageNumber - 1}</div></Link>
      </>
      : null}
      <div className="current-page">{currentPageNumber}</div>
      {currentPageNumber < pageNumbers.length - 2 ?
      <>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber + 1}`}><div>{currentPageNumber + 1}</div></Link>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber + 2}`}><div>{currentPageNumber + 2}</div></Link>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber + 3}`}><div>{currentPageNumber + 3}</div></Link>
      </>
      : null}
      {currentPageNumber === pageNumbers.length - 2 ?
      <>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber + 1}`}><div>{currentPageNumber + 1}</div></Link>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber + 2}`}><div>{currentPageNumber + 2}</div></Link>
      <div className="no-number">0</div>
      </>
      : null}
      {currentPageNumber === pageNumbers.length - 1 ?
      <>
      <Link className="page-number" to={`/${currentView}/page-${currentPageNumber + 1}`}><div>{currentPageNumber + 1}</div></Link>
      <div className="no-number">0</div>
      <div className="no-number">0</div>
      </>
      : null}
      {currentPageNumber === pageNumbers.length ?
      <>
      <div className="no-number">0</div>
      <div className="no-number">0</div>
      <div className="no-number">0</div>
      </>
      : null}
      {currentPageNumber !== pageNumbers.length ?
      <Link className="page-enabled" to={`/${currentView}/page-${currentPageNumber + 1}`}>
        <div>Next</div>
      </Link>
      : <div className="page-disabled">Next</div>}
      {currentPageNumber !== pageNumbers.length ?
      <Link className="page-enabled" to={`/${currentView}/page-${pageNumbers.length}`}>
        <div>Last</div>
      </Link>
      : <div className="page-disabled">Last</div>}
    </div>
  );
};

export default PageBar;