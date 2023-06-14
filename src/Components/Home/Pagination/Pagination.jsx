import React from "react";
import "./style.css"
import ProButton from "../../common/ProButton/ProButton";
const Pagination = ({
  nextPage,
  previousPage,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageIndex,
  gotoPage,
}) => {
  return (
      <div className="d-flex justify-content-center w-100">
       <div className="w-100 d-flex justify-content-between align-items-center my-3">
        <ProButton text="<<" title="Previous Page" clicked={previousPage} disabled={!canPreviousPage}/>
         <span className="text-center">
          Page
          <strong className="mx-3">
            {pageIndex + 1} of {pageOptions.length}
          </strong>
           &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
           <input
               type="number"
               className="goto-page-input"
               defaultValue={pageIndex + 1}
               onChange={(e) => {
                 const pageNumber = e.target.value
                     ? Number(e.target.value) - 1
                     : 0;
                 gotoPage(pageNumber);
               }}
           />
        </span>
        <ProButton text=">>" title="Next Page" clicked={nextPage} disabled={!canNextPage}/>
       </div>
      </div>
  );
};

export default Pagination;
