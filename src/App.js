import logo from './logo.svg';
import './App.css';
import GameTable from './components/GameTable/GameTable';
import { useState, useEffect } from 'react';
import axios from "axios"

function App() {

  const [allGames, setAllGames] = useState([]);

  useEffect(()=> {
    fetchAllGames()
  }, [])

  const fetchAllGames = async() => {
    try{ let response = await axios.get(`/api/getallgames`)
    console.log(response.data)
  
    setAllGames(response.data);
    } catch (error) {
      console.log("Error in fetchAllGames: ", error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GameTable allGames = {allGames}/>
      </header>
    </div>
  );
}

export default App;
