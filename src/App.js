import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title ="TextUtils" aboutText="About Us" homeText="Home" />
      {/* <AboutUs /> */}
      <div className="container">
        <TextForm heading="Enter Text" />
      </div>
      </>
  );
}

export default App;
