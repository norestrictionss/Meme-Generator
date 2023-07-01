import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import "./style.css";


function App() {


  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
