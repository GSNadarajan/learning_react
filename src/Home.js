import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
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

    const [items , setItems] = useState([
        {
            id : '1',
            checked : true,
            description : 'create a react project',
        }
        ,
        {
            id : '2',
            checked : false,
            description : 'work in a react project',
        }
        , 
         {
            id : '3',
            checked : true,
            description : 'deploy a react project',
        }
    ])

    const homestyle ={
        textAlign : 'center !important',
        marginTop : '20px',
        padding:'20px',


    }

    
    const handlecheck = (id) =>{
        const listitems = items.map((item) => item.id === id ? {...item ,checked:!item.checked} : item)
        setItems(listitems)
        localStorage.setItem("Todolist",JSON.stringify(listitems))
    }

    const handledelete = (id) =>{
        alert('Are you sure to want to delete this one ?')
        const listitemss = items.filter((item) => item.id !== id)
        setItems(listitemss)
        localStorage.setItem("Todolist",JSON.stringify(listitemss))
    }
   
    return(
        <center>

        <div className='container'>
            {items.length ? (
                <ul style={homestyle}>
                {items.map((item) => (
                    <li className='list'  key={item.id}>
                        <input type='checkbox' onChange={() => handlecheck(item.id)} checked={item.checked}/>
                        <label style={item.checked ? {textDecoration :'line-through'} : null} onDoubleClick={() => handlecheck(item.id)}>{item.description}</label>
                        <FaTrash onClick={() => handledelete(item.id)} className='image' role='button'/>
                    </li>
                    

                ))
                }
            </ul>

            ): (
                <p>Your list is empty</p>
            )
        }
            
        </div>
        </center>
       

    )
}

export default Home;