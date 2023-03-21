import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoadingSpinner from "../../utils/LoadingSpinner";
import GameSalesByPlatform from "../GameSalesByPlatform/GameSalesByPlatform";
import { useState, useEffect } from "react";
import axios from "axios";
const GameTable = ({ allGames }) => {
  const [search, setSearch] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [gameName, setGameName] = useState("Call of Duty: Modern Warfare 3");
  const [gameSalesByPlatform, setGameSalesByPlatform] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ITEMS_PER_PAGE = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const startI = (currentPage - 1) * ITEMS_PER_PAGE;
  const endI = startI + 50;
  const totalPages = Math.ceil(allGames.length / ITEMS_PER_PAGE);

  const gameData = allGames.slice(startI, endI);

  useEffect(() => {
    setIsLoading(true);
    fetchGameSalesByPlatform(gameName);
  }, [gameName]);

  const handlePagination = (num) => {
    setCurrentPage(num);
  };

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

  const toggleExpandedRow = (selectedRowIndex) => {
    if (expandedRow === selectedRowIndex) {
      setExpandedRow(null);
    } else {
      setExpandedRow(selectedRowIndex);
    }
    console.log(selectedRowIndex);
  };
  const fetchGameSalesByPlatform = async (gameName) => {
    try {
      gameName = gameName.includes("/") ? gameName.replace("/", "_") : gameName;
      let response = await axios.get(`/api/getgamesales/${gameName}`);

      setGameSalesByPlatform(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log("Error in setGameSalesByPlatform: ", error);
    }
  };
  // let tableGames = allGames.filter((game) => {
  //   if (
  //     game.name.toLowerCase().includes(search.toLowerCase()) ||
  //     game.platform.toLowerCase().includes(search.toLowerCase()) ||
  //     game.publisher.toLowerCase().includes(search.toLowerCase())
  //   ) {
  //     return true;
  //   }
  // });

  return (
    <div className="w-full p-20">
      <SearchBar setSearch={setSearch} />
      <div className="relative">
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePagination(currentPage - 1)}
          >
            &lt;
          </button>
          {determinePagination().map((pageNum) => (
            <button key={pageNum} onClick={() => handlePagination(pageNum)}>
              {pageNum}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePagination(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
        <table className="table-auto w-full text-2xl text-center ">
          <thead>
            <tr className=" text-violet-700 text-3xl">
              <th>Rank</th>
              <th>Title</th>
              <th>Platform</th>
              <th>Publisher</th>

              <th>Release Year</th>
            </tr>
          </thead>
          <tbody className=" text-violet-500 border">
            {gameData.map((game) => (
              <>
                <tr
                  key={game.id}
                  onClick={() => setGameName(game.name)}
                  className="border p-2.5"
                  onClickCapture={() => toggleExpandedRow(game.id)}
                >
                  <td>{game.rank}</td>
                  <td>{game.name}</td>
                  <td>{game.platform}</td>
                  <td>{game.publisher}</td>
                  <td>{game.year}</td>
                </tr>
                {expandedRow === game.id && (
                  <tr className="border">
                    <td colSpan={5}>
                      <h3 className=" text-2xl my-3 font-semibold text-purple-800">
                        {gameName} Sales by Platform
                      </h3>
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : (
                        <GameSalesByPlatform
                          gameName={game.name}
                          gameSalesByPlatform={gameSalesByPlatform}
                        />
                      )}
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameTable;
