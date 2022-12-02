import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    incrementNum = () =>{
        this.setState({count: this.state.count +1})
    }
    currentcount = () =>{
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
    Resetcount = () =>{
        this.setState({count: 0})
    }
    render(){
        return <div>
            <span className="badge badge-primary m2">{this.currentcount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={this.incrementNum()}>Add value</button>
            <button className="btn btn-danger btn-sm" onClick={this.Resetcount()}>Reset</button>
        </div>
        
    }

}
export default Counter;