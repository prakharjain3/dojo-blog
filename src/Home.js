import { useState } from 'react';

const Home = () => {

    // let name = "mario";
    const [name, setName] = useState("mario"); // triggers to re render the webpage with luigi
    const [age, setAge] = useState(25)                               // it could be an object an array or a boolean or it could be a boolean
    const handleClick = () => { // arrow function
        setName("luigi");
        setAge(60);
    }

    // const handleClickAgain = (name, e) => {
    //     console.log("hello " + name, e.target);
    // }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain("mario", e)}>Click me again</button> */}
            </div>
     );
}
 
export default Home;