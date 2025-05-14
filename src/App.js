import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import TextForm from "./components/TextForm";
import { useEffect, useState } from "react";
import axios from "axios";
import Child from "./components/Child";
import Childdata from "./Childdata";

function App() {
  const [myData, setMyData] = useState([]);

  const [mode, setMode] = useState("light"); /////////// Check Dark mode is enabled ////
  async function fetchData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let dataJson = await data.json();
    setMyData(dataJson);
  }
  useEffect(() => {
    //axios.get("https://jsonplaceholder.typicode.com/posts")
    //.then((res)=>setMyData(res.data))
    fetchData();
  }, []);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("Here 1");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [dataFromChild, setDataFromChild] = useState("");
  const [inputdata, setInputdata] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }
  const getData = (newData) => setInputdata(newData);
  return (
    <>
      <ul style={{ justifyItems: "center" }}>
      {myData.map((posts) => {
        return (
          <li className="dd" key={posts.id} style={{ justifyItems: "center" }}>
            TITLE: {posts.title}
          </li>
        );
      })}
      ;
      </ul>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        homeText="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <h1>Data from Child: {inputdata}</h1>
      <Childdata getData={getData} />
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
