import react,{useState} from 'react'

const State_fc = ()=>{

    const [message, setMessage] = useState("do not press the button")
   
   return(
    <div>
    <p>{message}</p>
    <button onClick={()=> {setMessage("why you pressd the button? 😡")}}>button</button>

            <p>press me to know your lucky number</p>
            <button onClick={()=> {setMessage("Your lucky number does not exists 😕")}}>button</button>
       </div>
   )

}

export default State_fc;