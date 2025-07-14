import React from "react";

const NavBar = () => {
  return React.createElement('nav', null,
    React.createElement('a', { href: '#home' }, 'home'),
    React.createElement('a', {href : '#about'}, 'About')
  )
    
}


export default NavBar;
