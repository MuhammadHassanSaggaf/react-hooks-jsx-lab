import React from "react";
import { name, city } from "../data/data.js";

const Home = () => {
  return React.createElement('div', { id: 'home' },
    React.createElement('h1', { style: { color:'firebrick'}},`${name} is a Web Developer from ${city}`))
}

export default Home;
