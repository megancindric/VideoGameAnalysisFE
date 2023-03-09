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
    <div>
      <h3>Game Table Here!</h3>
      <SearchBar setSearch={setSearch} />
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Title</th>
            <th>Platform</th>
            <th>Publisher</th>

            <th>Release Year</th>
          </tr>
        </thead>
        <tbody>
          {allGames.map((game) => (
            <tr key={game.id} onClick={() => setGameName(game.name)}>
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
  );
};

export default GameTable;
