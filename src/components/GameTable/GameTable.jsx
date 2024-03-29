import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoadingSpinner from "../../utils/LoadingSpinner";
import GameSalesByPlatform from "../GameSalesByPlatform/GameSalesByPlatform";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
const GameTable = ({ allGames }) => {
  const [search, setSearch] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [gameName, setGameName] = useState("Call of Duty: Modern Warfare 3");
  const [gameSalesByPlatform, setGameSalesByPlatform] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 50;
  const startI = (currentPage - 1) * ITEMS_PER_PAGE;
  const endI = startI + 50;
  const filteredData = allGames.filter(
    (game) =>
      game.name.toLowerCase().includes(search) ||
      game.platform.toLowerCase().includes(search) ||
      game.publisher.toLowerCase().includes(search)
  );
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const gameData = filteredData.slice(startI, endI);

  useEffect(() => {
    setIsLoading(true);
    fetchGameSalesByPlatform(gameName);
  }, [gameName]);

  const handleSearch = (query) => {
    setSearch(query.toLowerCase());
    setCurrentPage(1);
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

  return (
    <div className="w-full p-20">
      <SearchBar setSearch={handleSearch} />
      <div className="relative gap-6 flex flex-col">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          darkText={true}
          totalPages={totalPages}
        />
        <table className="table-fixed w-full text-2xl text-center bg-violet-100  rounded-lg drop-shadow-xl">
          <thead>
            <tr className=" text-[#7400b8] text-4xl">
              <th className="p-4">Rank</th>
              <th>Title</th>
              <th>Platform</th>
              <th>Publisher</th>

              <th>Release Year</th>
            </tr>
          </thead>
          <tbody className=" text-[#5e60ce]">
            {gameData.map((game) => (
              <>
                <tr
                  key={game.id}
                  onClick={() => setGameName(game.name)}
                  className=""
                  onClickCapture={() => toggleExpandedRow(game.id)}
                >
                  <td className="p-3">{game.rank}</td>
                  <td>{game.name}</td>
                  <td>{game.platform}</td>
                  <td>{game.publisher}</td>
                  <td>{game.year}</td>
                </tr>
                {expandedRow === game.id && (
                  <tr className=" bg-gradient-to-b from-violet-100 to-violet-200 min-h-[450px] h-[450px]">
                    <td colSpan={5}>
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
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          darkText={false}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default GameTable;
