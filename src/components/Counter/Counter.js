import { Component } from 'react';
import s from './Counter.module.css';
import Controls from './Controls';
import Value from './Value';


class Counter extends Component {

    static defaultProps = {
        initialValue: 0,
    };

    state = {
        value: this.props.initialValue,
    };

    increment = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value + 1
            };
        })
        console.log("+1")
    }

    decrement = () => {
        this.setState((prevState) => {
            return {
                value: prevState.value-1
            }
        })
        console.log("-1")
    }

    render() {
        return (
            
            <div className={s.counter}>
                <h2>Counter</h2>
                
                <Value
                    value= {this.state.value}
                />
                
                <Controls
                    onIncrement={this.increment}
                    onDecrement={this.decrement}
                />
            </div>
        );
    }
}

export default Counter;