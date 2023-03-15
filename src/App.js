import './App.css';
import GameTable from './components/GameTable/GameTable';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import axios from "axios"
import PlatformSalesSinceYear from './components/PlatformSalesSinceYear/PlatformSalesSinceYear';
import GameSalesByPlatform from './components/GameSalesByPlatform/GameSalesByPlatform';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';

function App() {

  const [allGames, setAllGames] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2011);
  const [platformSalesSinceYear, setPlatformSalesSinceYear] = useState({});
  const [gameName, setGameName] = useState("Call of Duty: Modern Warfare 3");
  const [gameSalesByPlatform, setGameSalesByPlatform] = useState([]);

  useEffect(()=> {
    fetchAllGames()
    fetchAllYears()
  }, [])
/*
  useEffect(()=> {
    fetchGameSalesByPlatform(gameName)
  },[gameName])
*/
  useEffect(()=> {
    fetchPlatformSalesSinceYear(selectedYear)
  },[selectedYear])

  const fetchAllGames = async() => {
    try{ let response = await axios.get(`/api/getallgames`)
  
    setAllGames(response.data);
    } catch (error) {
      console.log("Error in fetchAllGames: ", error)
    }
  }

  const fetchAllYears = async() => {
    try{ let response = await axios.get(`/api/getallgameyears`)
  
    setAllYears(response.data);
    } catch (error) {
      console.log("Error in fetchAllGames: ", error)
    }
  }

  const fetchPlatformSalesSinceYear = async(selectedYear) => {
    try{ let response = await axios.get(`/api/getplatformsalessinceyear/${selectedYear}`)
  
    setPlatformSalesSinceYear(response.data);
    } catch (error) {
      console.log("Error in fetchPlatformSalesSinceYear: ", error)
    }
  }
/*
  const fetchGameSalesByPlatform = async(gameName) => {
    try{ 
      gameName = gameName.includes("/") ? gameName.replace("/", "_") : gameName
      let response = await axios.get(`/api/getgamesales/${gameName}`)
  
    setGameSalesByPlatform(response.data);
    } catch (error) {
      console.log("Error in setGameSalesByPlatform: ", error)
    }
  }
*/
 
  return (
    <div className="flex flex-col items-center w-full">
        <Header/>

        <h1 className="text-4xl p-6 my-6 text-violet-800 font-bold">
          An analysis of trends and patterns in global video game sales
        </h1> 
        <PlatformSalesSinceYear platformSalesSinceYear={platformSalesSinceYear} selectedYear={selectedYear} allYears= {allYears} setSelectedYear={setSelectedYear}/>  
        {/*<GameSalesByPlatform gameName= {gameName} gameSalesByPlatform={gameSalesByPlatform}/>*/}
        <GameTable allGames = {allGames} />    
        
    </div>
  );
}

export default App;
