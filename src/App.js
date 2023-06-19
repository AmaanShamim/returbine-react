import './App.css';
import React, { useState } from "react";
import Content from './Components/Content';
import Navbar from './Components/Navbar';

function App() {
  const [mode, setmode] = useState("light"); // Whether dark mode is enabled or not.
  
  // Generates a random light color
  function getRandomLightColor() {
    const red = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const green = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const blue = Math.floor(Math.random() * (255 - 128 + 1)) + 128;
    const color = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;
    return color;
  }

  function getRandomDarkColor() {
    // Generate random RGB values in the range [0, 32]
    const red = Math.floor(Math.random() * 32);
    const green = Math.floor(Math.random() * 32);
    const blue = Math.floor(Math.random() * 32);
    const color = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;
    return color;
  }

  // Convert RGB to hexadecimal
  function rgbToHex(value) {
    const hex = value.toString(16).padStart(2, '0');
    return hex;
  }

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
      <Content />
    </div>
  );
}

export default App;
