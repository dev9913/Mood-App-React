import Box from './Component/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {
  const [changemood, setChangeMood] = useState("Happy");

  const handleOnChange = (value) => {
    setChangeMood(value);
    console.log(value);
  };

  const moodColors = {
    Happy: "#ffeaa7",
    Angry: "#ff7675",
    Laughing: "#fdcb6e",
    Tear: "#74b9ff",
    "Smile With Kissing": "#fab1a0",
    Smile: "#55efc4"
  };

  const bgColor = moodColors[changemood] || "#ffffff";

  return (
    <div className="main" >
      <Box handleOnChange={handleOnChange} changemood={changemood} bgColor={bgColor}/>
    </div>
  );
}

export default App;
