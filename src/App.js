import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Content from './Content';



function App () {

   
    return(
        <div>
          <Header title='Natttu'/>
          <Content />
          <Home />
          <Footer />

        </div>

       
    )
}

export default App;