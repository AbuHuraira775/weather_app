import react,{Component} from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    increase(){
        this.setState({
            count : this.state.count + 1
        })
    }
    decrease(){
        this.setState({
            count : this.state.count - 1
        })
    }
    render(){
        return(
            <div>
                <p>You broke my heart <b>{this.state.count}</b> times 😌</p>
                <button onClick={()=>{this.decrease()}}>-</button>
                <button onClick={()=>{this.increase()}}>+</button>
            </div>
        )
    }
}

export default Counter