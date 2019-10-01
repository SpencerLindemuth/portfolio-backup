import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/ViewComponents/navBar'
import SectionOne from './components/ContentComponents/sectionOne'
import SectionTwo from './components/ContentComponents/sectionTwo'
import SectionThree from './components/ContentComponents/sectionThree'

function App() {
  return (
    <div className="App">
        <NavBar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </div>
  );
}

export default App;
