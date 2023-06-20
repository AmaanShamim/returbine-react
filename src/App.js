import './App.css';
import React, { useState } from "react";
import Content from './Components/Content';
import Navbar from './Components/Navbar';

function App() {
  const [mode, setmode] = useState("light"); // Whether dark mode is enabled or not.
  const [data, setdata] = useState('Initial State') // Rendering new Quote.

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

  // Generates a random light color
  function getRandomLightColor() {
    const red = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const green = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const blue = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const color = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;
    return color;
  }

  function getRandomDarkColor() {
    // Generate a random dark color
    const red = Math.floor(Math.random() * 64);
    const green = Math.floor(Math.random() * 64);
    const blue = Math.floor(Math.random() * 64);
    const color = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;
    return color;
  }

  // Convert RGB to hexadecimal
  function rgbToHex(value) {
    const hex = value.toString(16).padStart(2, '0');
    return hex;
  }

  const changeQuote = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = getRandomDarkColor();
    } else {
      document.body.style.backgroundColor = getRandomLightColor();
    }
    if (data === "Initial state") {
      setdata("refresh")
    } else {
      setdata("Initial state")
    } 
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = getRandomDarkColor();
      document.body.style.color = "White";
    } else {
      setmode("light");
      document.body.style.backgroundColor = getRandomLightColor();
      document.body.style.color = "Black";
    }
  };

  return (
    <div>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Content changeQuote={changeQuote} mode={mode} getRandomDarkColor={getRandomDarkColor} getRandomLightColor={getRandomLightColor} />
    </div>
  );
}

export default App;
