import React from 'react';


const Content = () => {
   

    const Alertname = (name) => {
        alert(`Hello this is ${name}`);
    
    }

    const Handleclick = (e) =>{
        console.log(e.target);

    }

    // for styling
    const contentstyle = {
        textAlign : 'center',
        marginTop : '20%',
        
    }
    const btnstyle = {
        marginLeft : '10px',
        background : 'mediumblue',
        color : 'white',
        border : 'none',
        padding : '9px',
        borderRadius : '5px',
        
    }

    return(
        <div style={contentstyle}>
            <h1>This is Main content</h1>
            <button  style={btnstyle} onClick={() => Alertname('Nattu')}>Click here</button>
            <button  style={btnstyle} onClick={(e) => Handleclick(e)}>Event Listener</button>



        </div>
    )

}

export default Content;