import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/ViewComponents/navBar'
import SectionOne from './components/ContentComponents/sectionOne'
import SectionTwo from './components/ContentComponents/sectionTwo'

function App() {
  return (
    <div className="App">
        <NavBar />
        <SectionOne />
        <SectionTwo />
    </div>
  );
}

export default App;
