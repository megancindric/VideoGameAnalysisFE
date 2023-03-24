import React, { useState } from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages, darkText }) => {
  console.log(darkText);
  let textColor = darkText ? "text-[#6930c3]" : "text-slate-50";
  let activeTextColor = darkText ? "text-[#7400b8]" : "text-white";
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
    <div className={`flex justify-evenly text-3xl ${textColor}`}>
      <button
        className="transition-all duration-100 hover:scale-110 "
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &lt;
      </button>
      {determinePagination().map((pageNum) => (
        <button
          className={`transition-all duration-100 hover:scale-110  ${
            currentPage === pageNum ? activeTextColor : ""
          }`}
          key={pageNum}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button
        className="  transition-all duration-100 hover:scale-110"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
