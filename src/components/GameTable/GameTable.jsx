import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
const GameTable = ({ allGames, setGameName }) => {
  const [search, setSearch] = useState("");

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
              <tr
                key={game.id}
                onClick={() => setGameName(game.name)}
                className="border p-2.5"
              >
                <td>{game.rank}</td>
                <td>{game.name}</td>
                <td>{game.platform}</td>
                <td>{game.publisher}</td>
                <td>{game.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameTable;
