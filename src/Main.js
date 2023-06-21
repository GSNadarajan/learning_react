import React from "react";

const Alertname = (name) => {
    alert(`Hello this is ${name}`);

}

const Main = () => {
    return(
        <button onClick={() => Alertname('Nattu')}>Click here</button>
    )
}

export default Main;