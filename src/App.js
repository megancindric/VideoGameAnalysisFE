import logo from './logo.svg';
import './App.css';
import GameTable from './components/GameTable/GameTable';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import axios from "axios"
import PlatformSalesSinceYear from './components/PlatformSalesSinceYear/PlatformSalesSinceYear';

function App() {

  const [allGames, setAllGames] = useState([]);
  const [platformSalesSinceYear, setPlatformSalesSinceYear] = useState({});

  useEffect(()=> {
    fetchAllGames()
    fetchPlatformSalesSinceYear()
  }, [])

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
      console.log("Error in fetchAllGames: ", error)
    }
  }
  return (
    <div>
        <Header/>
        <p>
          An analysis of trends and patterns in global video game sales over the past 4 decades
        </p>  
        <PlatformSalesSinceYear platformSalesSinceYear={platformSalesSinceYear}/>      
        <GameTable allGames = {allGames}/>
    </div>
  );
}

export default App;
