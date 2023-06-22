import './App.css';
import {useState} from "react";
import FlightCard from './components/FlightCard';
import Data from "./mock-data.json"


let planLotow = [{
  id: 1,
  numerLotu: "28",
  przylot: "China",
  odlot: "Uzbekistan",
  data: "7/30/2022",
  godzina: "10:06 AM",
  terminal: 10
}, {
  id: 2,
  numerLotu: "13",
  przylot: "Japan",
  odlot: "Philippines",
  data: "9/12/2022",
  godzina: "4:05 PM",
  terminal: 20
}, {
  id: 3,
  numerLotu: "2",
  przylot: "Burkina Faso",
  odlot: "Bosnia and Herzegovina",
  data: "6/10/2023",
  godzina: "1:47 AM",
  terminal: 30
}, {
  id: 4,
  numerLotu: "93586",
  przylot: "Brazil",
  odlot: "Russia",
  data: "6/3/2023",
  godzina: "11:12 PM",
  terminal: 35
}, {
  id: 5,
  numerLotu: "454",
  przylot: "Benin",
  odlot: "South Africa",
  data: "4/14/2023",
  godzina: "4:56 PM",
  terminal: 49
}, {
  id: 6,
  numerLotu: "8222",
  przylot: "Australia",
  odlot: "France",
  data: "9/7/2022",
  godzina: "6:41 PM",
  terminal: 60
}, {
  id: 7,
  numerLotu: "8751",
  przylot: "Philippines",
  odlot: "Poland",
  data: "3/28/2023",
  godzina: "10:27 PM",
  terminal: 80
}, {
  id: 8,
  numerLotu: "2",
  przylot: "Poland",
  odlot: "Azerbaijan",
  data: "9/4/2022",
  godzina: "4:42 AM",
  terminal: 45
}, {
  id: 9,
  numerLotu: "1",
  przylot: "Russia",
  odlot: "China",
  data: "1/15/2023",
  godzina: "10:17 PM",
  terminal: 23
}, {
  id: 10,
  numerLotu: "67098",
  przylot: "Indonesia",
  odlot: "China",
  data: "7/29/2022",
  godzina: "2:50 PM",
  terminal: 76
}, {
  id: 11,
  numerLotu: "91",
  przylot: "Russia",
  odlot: "Sweden",
  data: "6/18/2023",
  godzina: "4:11 AM",
  terminal: 45
}, {
  id: 12,
  numerLotu: "0052",
  przylot: "Saudi Arabia",
  odlot: "China",
  data: "11/19/2022",
  godzina: "6:22 AM",
  terminal: 87
}, {
  id: 13,
  numerLotu: "9",
  przylot: "China",
  odlot: "Malaysia",
  data: "12/2/2022",
  godzina: "12:57 PM",
  terminal: 89
}, {
  id: 14,
  numerLotu: "114",
  przylot: "Indonesia",
  odlot: "China",
  data: "2/17/2023",
  godzina: "11:50 AM",
  terminal: 34
}, {
  id: 15,
  numerLotu: "70433",
  przylot: "Russia",
  odlot: "Brazil",
  data: "12/5/2022",
  godzina: "7:29 AM",
  terminal: 67
}, {
  id: 16,
  numerLotu: "1",
  przylot: "Portugal",
  odlot: "China",
  data: "5/8/2023",
  godzina: "12:38 PM",
  terminal: 68
}, {
  id: 17,
  numerLotu: "96632",
  przylot: "United States",
  odlot: "Ukraine",
  data: "4/10/2023",
  godzina: "10:08 AM",
  terminal: 46
}, {
  id: 18,
  numerLotu: "15",
  przylot: "Brazil",
  odlot: "China",
  data: "10/12/2022",
  godzina: "6:11 AM",
  terminal: 90
}, {
  id: 19,
  numerLotu: "15",
  przylot: "Philippines",
  odlot: "France",
  data: "10/10/2022",
  godzina: "6:45 AM",
  terminal: 58
}, {
  id: 20,
  numerLotu: "054",
  przylot: "Marshall Islands",
  odlot: "Nigeria",
  data: "12/4/2022",
  godzina: "8:05 AM",
  terminal: 34
}]

function App() {
  const [setSearch, setCountry] = useState("")


  return (
    <div className='App'>
      <input placeholder='Country...' onChange={event => setCountry(event.target.value)}/>
      {
        planLotow.filter(lots => {
          if (setSearch === '') {
            return lots;
          } else if (lots.przylot.toLowerCase().includes(setSearch.toLowerCase())) {
            return lots;
          }
        }).map((lots) => 
        <FlightCard key={planLotow.przylot} {...lots}/>
        )
      }
      
    </div>
  );
}

export default App;
