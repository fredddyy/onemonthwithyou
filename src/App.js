import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import PhotoGallery from './components/PhotoGallery';
import LovePuzzle from './components/LovePuzzle';
import LoveLetters from './components/LoveLetters';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <OurStory />
                <PhotoGallery />
                <LovePuzzle />
                <LoveLetters />
              </>
            } />
          </Routes>
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </Router>
  );
}

export default App;