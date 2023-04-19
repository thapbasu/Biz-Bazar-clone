import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import ImageSlider from "./components/ImageSlider";

function App() {
  const slides = [
    { url: "http://localhost:3000/images/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/images/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/images/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/images/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/images/image-5.jpg", title: "italy" },
  ];
  const containerStyles={
    width: '100%',
    height: '350px',
    margin: "0 auto",
  }
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path ="/" element ={<Layout />}>
 
    <Route index element ={<Home />}/>
    <Route path ="about" element ={<About />}/>
    <Route path ="contact" element ={<Contact />}/>
    </Route>
    </Routes>
    </BrowserRouter>
    <div style={containerStyles}>
    <ImageSlider slides={slides} />
    </div>
 
  </>
    );

}

export default App;
