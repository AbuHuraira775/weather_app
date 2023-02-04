import react,{Component} from "react";

class Destructuring_cc extends Component{
    render(){

        const {name, adj} = this.props
        // const {state1,state2} = this.state 
        return(
            <div>
                <p>This is <b>{name} {adj}</b></p>
            </div>
            )
    }
}

export default Destructuring_cc