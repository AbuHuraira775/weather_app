import react,{Component} from "react";

// class 4 (state)-------------------------------

class State_cc extends Component{

constructor(){
    super()
    this.state = {
        message : "Press button to the know truth "
    }
}

changeMessage(){
    this.setState({
        message : "Somebody likes you very much ❤❤❤ and her name is ..... 😍"
    })
    
}
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={()=> this.changeMessage()}>press</button>
            </div>
        )
    }
}
export default State_cc