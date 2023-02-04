import React, { Component } from 'react'

export class Bind_class extends Component {

    constructor(){
        super()
        this.state = {
            message: 'press button'
        }
    }
    // bindevenethandler(){
    //    this.setState({
    //        mess: "button is clicked"
    //    })
    // }
  render() {
    return (
      <div>
          <p>{this.state.message}</p>
          <button onClick={this.bindevenethandler}>
              click
          </button>
      </div>
    )
  }
}

export default Bind_class