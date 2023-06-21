import React from 'react';
import './Footer.css';

const Footer = () => {
    const yr = new Date();
    const Footerstyle = {
        backgroundColor : 'mediumblue',
        color :'white',
        height: '50px',
        textAlign : 'center',
       
    }
  return (
    <h3 style={Footerstyle}>Copyrights @ {yr.getFullYear()}</h3>
  )
}

export default Footer;