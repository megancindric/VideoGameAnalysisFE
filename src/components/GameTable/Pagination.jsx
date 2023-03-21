import React, { useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const determinePagination = () => {
    // For now, defaulting to displaying TEN pagination values (5 each direction)
    let startingNum = currentPage - 10;
    let endingNum = currentPage + 10;
    if (startingNum < 1) {
      endingNum += Math.abs(startingNum) + 1;
      startingNum = 1;
    }
    if (endingNum > totalPages) {
      startingNum -= endingNum - totalPages;
      endingNum = totalPages;
    }
    return Array.from(
      { length: endingNum - startingNum + 1 },
      (_, i) => startingNum + i
    );
  };

  return (
    <div className="flex justify-evenly text-2xl text-violet-700">
      <button
        className=""
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &lt;
      </button>
      {determinePagination().map((pageNum) => (
        <button
          className={`${currentPage === pageNum ? "text-violet-900" : ""}`}
          key={pageNum}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button
        className=""
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
