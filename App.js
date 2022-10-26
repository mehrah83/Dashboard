import React from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import Navbar from "./Components/Navbar";

const App = () => {
        return (
            <>
                <Navbar/>  
                <div style={{marginTop:"100px",display:"flex"}}>
                <MainComponent/>
                </div>
                </>
        )
    }
  
export default App;