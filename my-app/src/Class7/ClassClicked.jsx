import React, { Component } from 'react'

export class ClassClicked extends Component {
 
 
     classEvent(){
        console.log("It is clicked")
    }
    render() {
    return (
      <div>
          <button onClick={this.classEvent}>
              click here
          </button>
      </div>
    )
  }
}

export default ClassClicked