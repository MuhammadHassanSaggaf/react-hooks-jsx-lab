import React from "react";
import { image } from "../data/data";

const About = () => {
  return React.createElement('div', { id: 'about' },
    React.createElement('h2', null, 'About Me'),
    React.createElement('p', null, 'my content'),
    React.createElement('img',{src : `${image}`, alt : 'I made this'})
  )
}

export default About;
