import react,{useState} from "react";


// class 5 (counter in fun com)------------------------------------------------
const Counter_project = ()=>{

    const [count, setCount] = useState(0)

    return(
        <div>
            <p>I miss you <b>{count}</b> times per day...</p>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <button onClick={()=>{setCount(count+1)}}>+</button>

        </div>
    )
}

export default Counter_project;
