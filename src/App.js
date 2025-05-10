import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Child from './components/Child';

function App() {
  const [mode,setMode] = useState('light'); /////////// Check Dark mode is enabled ////
  const toggleMode = () => {
    if(mode==='light')
    {setMode('dark')
      console.log("Here 1");
      document.body.style.backgroundColor = 'grey'
    }
  else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }
  return (
    <>
      <Navbar title ="TextUtils" aboutText="About Us" homeText="Home" mode={mode} toggleMode={toggleMode} />
      <div>
        <h1>Data from Child: {dataFromChild}</h1>
        <Child sendDataToParent={handleDataFromChild} />
      </div>
      {/* <AboutUs /> */}
      <div className="container p-3">
        <TextForm heading="Enter Text" mode={mode} />
        <AboutUs />
      </div>
      </>
  );
}

export default App;
