import React from 'react';


function Home() {

    // function names(){
    //     const names = ['Nattu','Subash','Praveen'];
    //     const int = math.floor(math.random()*3);
    //     return names[int];
    // } 

    const numberss = [-2,-1,0,1,2];
    const result = numberss.map(n => n)
    console.log(result);



   
    return(
        <h1 className='home'>Hello this is Nattu</h1>
    )
}

export default Home;