import React from "react";

const GameTable = ({ allGames }) => {
  let gamePlaceholder = allGames.slice(0, 100);
  console.log(gamePlaceholder);
  return (
    <div>
      <h3>Game Table Here!</h3>
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
          {gamePlaceholder.map((game) => (
            <tr key={game.id}>
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
