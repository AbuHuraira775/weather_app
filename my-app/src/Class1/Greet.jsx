import React from "react";

// ------------------------class 1(fun com)----------------------------
// ------------------------class 3(props)----------------------------

//1
 function Greet(props){
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )
    }

// // 2
// const Greet = function(){
//     return (
//         <div>
//             <h1>Hello Abu Huraira</h1>
//         </div>
//     )
// }

// // 3
// const Greet = () => <h1>Functional Component</h1>

export default Greet;