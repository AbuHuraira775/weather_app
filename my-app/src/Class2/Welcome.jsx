import react,{Component} from "react";


// --------------------class 2 (class com) ------------------------------------
// --------------------class 3 (props) ------------------------------------
class Welcome extends Component{
    render(){
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}
export default Welcome