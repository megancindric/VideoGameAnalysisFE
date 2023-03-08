import logo from './logo.svg';
import './App.css';
import GameTable from './components/GameTable/GameTable';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import axios from "axios"
import PlatformSalesSinceYear from './components/PlatformSalesSinceYear/PlatformSalesSinceYear';
import GameSalesByPlatform from './components/GameSalesByPlatform/GameSalesByPlatform';

function App() {

  const [allGames, setAllGames] = useState([]);
  const [platformSalesSinceYear, setPlatformSalesSinceYear] = useState({});
  const [gameName, setGameName] = useState("Call of Duty: Modern Warfare 3");
  const [gameSalesByPlatform, setGameSalesByPlatform] = useState([]);

  useEffect(()=> {
    fetchAllGames()
    fetchPlatformSalesSinceYear()
  }, [])

  useEffect(()=> {
    fetchGameSalesByPlatform(gameName)
  },[gameName])

  const fetchAllGames = async() => {
    try{ let response = await axios.get(`/api/getallgames`)
    console.log(response.data)
  
    setAllGames(response.data);
    } catch (error) {
      console.log("Error in fetchAllGames: ", error)
    }
  }

  const fetchPlatformSalesSinceYear = async() => {
    try{ let response = await axios.get(`/api/getplatformsalessinceyear/2011`)
    console.log(response.data)
  
    setPlatformSalesSinceYear(response.data);
    } catch (error) {
      console.log("Error in fetchPlatformSalesSinceYear: ", error)
    }
  }

  const fetchGameSalesByPlatform = async(gameName) => {
    try{ let response = await axios.get(`/api/getgamesales/${gameName}`)
    console.log(response.data)
  
    setGameSalesByPlatform(response.data);
    } catch (error) {
      console.log("Error in setGameSalesByPlatform: ", error)
    }
  }
  return (
    <div>
        <Header/>
        <p>
          An analysis of trends and patterns in global video game sales over the past 4 decades
        </p>  
        <PlatformSalesSinceYear platformSalesSinceYear={platformSalesSinceYear}/>  
        <GameSalesByPlatform gameName= {gameName} gameSalesByPlatform={gameSalesByPlatform}/>    
        <GameTable allGames = {allGames} setGameName={setGameName}/>
        
    </div>
  );
}

export default App;
