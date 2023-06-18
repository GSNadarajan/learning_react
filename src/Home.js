import './Home.css';


function Home() {

    function names(){
        const names = ['Nattu','Subash','Praveen'];
        const int = math.floor(math.random()*3);
        return names[int];
    } 
   
    return(
        <h1 className='home'>Hello this is {names()}</h1>
    )
}

export default Home;