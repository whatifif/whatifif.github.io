import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Service from './components/Service/Service';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Team from './components/Team/Team';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Service/>
        <Portfolio/>
        <About/>
        <Team/>
        <Clients/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
