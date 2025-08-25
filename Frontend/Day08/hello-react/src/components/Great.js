import Button from "./Button";
import { useState } from 'react';
import Button1 from "./Button1";


const userData = {
    name: "Manohar Sai",
    age: 20,
    location: "India"
}

function Great() {
    const [count1, setCount] = useState(0);
    
        function handleClick(){
            setCount(count1 + 1);
        }

    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
            <p>Location: {userData.location}</p>
            <Button/>
            <Button/>
            <br/>
            <Button1 count1={count1} onClick={handleClick}/>
            <Button1 count1={count1} onClick={handleClick}/>
        </div>
    );
}

export default Great;
