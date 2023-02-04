
import react from "react";

// detructing props 

// // 1
// const Greeting = ({adj, noun}) =>{

//     return(
//         <div>
//  <p>You are a/an <b>{adj} {noun}</b>.</p>
//         </div>
//     )

   
// }

// 2
const Greeting = props =>{
    const {adj , noun} = props

    return(
        <div>
 <p>You are a/an <b>{adj} {noun}</b>.</p>

 <a href="#">destructuring in props through class components is remaining</a>
        </div>
    )

   
}


export default Greeting

