import { useEffect, useState } from 'react';
import './App.css';
import Data from './components/Data';
import BasicButtonExample from './components/Dropdown';

function App() {
  const [receivedData, setReceivedData] = useState([])

  useEffect(() => {
    fetch("https://api.covidtracking.com/v1/states/info.json")
      .then(data => data.json())
      .then(data => setReceivedData(data))
  }, [])

  console.log(receivedData)

  return (
    <div className="App">
      <Data />
      <BasicButtonExample receivedData={receivedData}/>
    </div>
  );
}

export default App;