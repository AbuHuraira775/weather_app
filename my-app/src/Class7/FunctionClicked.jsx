import React from 'react'

export default function FunctionClicked() {

   function eventHandler(){
        console.log("Button clicked")
    }
  return (
    <div>
        <button onClick={eventHandler}> {/* eventHandler is event not a function call */}
            click
        </button>
    </div>
  )
}
