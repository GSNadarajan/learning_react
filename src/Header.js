import React from 'react';

const Header = () => {
    const Headerstyle = {
          textAlign : 'left',
          padding: '10px',
          position: 'fixed',
          top: '0',
          width: '100%',
          height: '60px',   /* Height of the footer */
          background: 'mediumblue',
          fontweight:'bold',
          color:'white',
          fontsize:'20px'
       }
       
    
  return (
    <header style={Headerstyle}>Navbar</header>
  )
}

export default Header;