import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Subscription from './components/Subscription';
import Community from './components/Community';
import Contact from './components/Contact';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Community />
          <Subscription />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
