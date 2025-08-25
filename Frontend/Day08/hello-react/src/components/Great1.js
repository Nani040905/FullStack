import Button2 from "./Button2";

function Great1({count2, onClick}) {
    
    return (
        <div>
            <Button2 count2={count2} onClick={onClick}/>
            <Button2 count2={count2} onClick={onClick}/>
        </div>
    );
}

export default Great1;
