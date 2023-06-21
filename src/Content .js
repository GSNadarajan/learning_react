import React from 'react';


const Content = () => {
    const contentstyle = {
        textAlign : 'center',
        marginTop : '20%',
    }

    const alertcontent = () => {
        alert("Hello nattu");
    }
    return(
        <div style={contentstyle}>
            <h1>This is content</h1>
            <button onClick={alertcontent} >Subscribe</button>

        </div>
    )

}

export default Content;