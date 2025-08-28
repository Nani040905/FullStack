import Button from "./Button";
import { useState } from 'react';
import Button1 from "./Button1";


const userData = {
    name: "Manohar Sai",
    age: 20,
    location: "India"
}
const skills=[
    { id: 1, name: "Html" },
    { id: 2, name: "Css" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React" },
    { id: 5, name: "Node.js" },
    { id: 6, name: "Express" },
    { id: 7, name: "MongoDB" },
    { id: 8, name: "Next.js" }
]

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
            <h3>Skills</h3>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
            <Button/>
            <Button/>
            <br/>
            <Button1 count1={count1} onClick={handleClick}/>
            <Button1 count1={count1} onClick={handleClick}/>
        </div>
    );
}

export default Great;
