import './App.css';
import GameTable from './components/GameTable/GameTable';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import axios from "axios"
import PlatformSalesSinceYear from './components/PlatformSalesSinceYear/PlatformSalesSinceYear';

function App() {

  const [allGames, setAllGames] = useState([]);
  const [allYears, setAllYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2011);
  const [platformSalesSinceYear, setPlatformSalesSinceYear] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    fetchAllGames()
    fetchAllYears()
  }, [])

  useEffect(()=> {
    setIsLoading(true)
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
    setIsLoading(false)
    } catch (error) {
      console.log("Error in fetchPlatformSalesSinceYear: ", error)
    }
  }

 
  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-b from-violet-50 to-[#7400b8] gap-32">
        <Header/>
      <div className=''>
        <h1 className="text-6xl p-6  text-[#7400b8] font-bold drop-shadow-2xl text-center">
          An analysis of trends & patterns in global video game sales
        </h1> 
        <hr className=" h-0.5 bg-[#5390D9] border-0 mt-2 w-10/12 mx-auto" />
        </div>
        <PlatformSalesSinceYear platformSalesSinceYear={platformSalesSinceYear} selectedYear={selectedYear} allYears= {allYears} setSelectedYear={setSelectedYear} isLoading={isLoading}/>  
        <GameTable allGames = {allGames} />    
    </div>
  );
}

export default App;
