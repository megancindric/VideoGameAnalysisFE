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
  useEffect(() => {
    setIsLoading(true);
    fetchGameSalesByPlatform(gameName);
  }, [gameName]);

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
            {allGames.slice(0, 50).map((game) => (
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
