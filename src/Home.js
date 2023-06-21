import React, { useState } from 'react';
import './Home.css';


function Home() {

    // function names(){
    //     const names = ['Nattu','Subash','Praveen'];
    //     const int = math.floor(math.random()*3);
    //     return names[int];
    // } 

    // const numberss = [-2,-1,0,1,2];
    // const result = numberss.map(n => n)
    // console.log(result);

    const [items] = useState([
        {
            id : '1',
            checked : 'true',
            description : 'create a react project',
        }
        ,
        {
            id : '2',
            checked : 'false',
            description : 'work in a react project',
        }
        , 
         {
            id : '3',
            checked : 'true',
            description : 'deploy a react project',
        }
    ])

    const homestyle ={
        textAlign : 'center',
        marginTop : '20px',
    }

   
    return(
        <div >
            <hr/>
            <ul style={homestyle}>
                {items.map((item) => (
                    <li className='list'>
                        <input type='checkbox' checked={item.checked}/>
                        <label>{item.description}</label>
                        <button>delete</button>
                    </li>

                ))
                }
            </ul>
        </div>
       

    )
}

export default Home;