import React from 'react';
import { useState } from 'react';


const Content = () => {
   

    const Alertname = (name) => {
        alert(`Hello this is ${name}`);
    
    }

    const Handleclick = (e) =>{
        console.log(e.target);

    }

    //Usestate

    //usestate function returns an array with two values

    //here count is default and its value is 99 in usestate

    const [count, setcount] = useState(99)

    function incrementer(){
        // setcount((count) => {return count + 1})
        // setcount((count) => {return count + 1})
        // setcount((count) => {return count + 1})
        setcount(count + 1)

    }

    function decrementer(){
        setcount(count - 1)
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
    const counterstyle = {
        marginTop: '9px',
    }

    const counterbtn = {
        padding: '5px',
        margin : '4px',
    }


    return(
        <div style={contentstyle}>
            <h1>This is Main content</h1>
            <button  style={btnstyle} onClick={() => Alertname('Nattu')}>Click here</button>
            <button  style={btnstyle} onClick={(e) => Handleclick(e)}>Event Listener</button>

            <div style={counterstyle}>
                <h3 style={counterstyle}>Counter</h3>
                <button style={counterbtn} onClick={decrementer}>-</button>
                 <span>{count}</span> 
                 <button style={counterbtn} onClick={incrementer}>+</button>
            </div>



        </div>
    )

}

export default Content;