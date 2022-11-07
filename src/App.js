import { useEffect, useState } from 'react';
import './App.css';
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
      <h1>Data Grid</h1>
      <BasicButtonExample receivedData={receivedData}/>
    </div>
  );
}

export default App;
