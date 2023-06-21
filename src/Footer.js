import React from 'react';

const Footer = () => {
    const yr = new Date();
    const Footerstyle = {
        color :'white',
        textAlign : 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '60px',   /* Height of the footer */
        background: 'mediumblue',
       
    }
  return (
    <h3 style={Footerstyle}>Copyrights @ {yr.getFullYear()}</h3>
  )
}

export default Footer;