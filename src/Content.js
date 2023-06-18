import React from 'react';

const Content = () => {
    const yr = new Date();
    const Footerstyle = {
        backgroundColor : 'mediumblue',
        color :'white',
        height: '50px',
        textAlign : 'center',
        marginTop :'25px',
    }
  return (
    <h3 style={Footerstyle}>Copyrights @ {yr.getFullYear()}</h3>
  )
}

export default Content;