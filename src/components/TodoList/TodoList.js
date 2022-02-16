import { Component } from 'react';
import s from './TodoList.module.css';

class TodoList extends Component{
    state={
        text: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.text);
        this.reset();
    };

    reset = () => {
        this.setState({
            text: '',
        });
    }
   
    handleChange = e => {
        console.log(e.target.value);
        this.setState({ text: e.target.value });
    };
    

    render() {
        const completedTodos = this.props.todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>{this.props.title}</h2>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.text}
                    name="text"
                >

                </input>
            <button type="submit" className={s.btn} onSubmit={()=>this.handleSubmit}>Add</button>
                <p>Amount of todos: {this.props.todos.length}</p>
                <p>Completed todos: {completedTodos}</p>
            <ul className={s.list}>
                {this.props.todos.map(({id, text}) => 
                    <li key={id} className={s.item}>
                        <p>{text}</p>
                        <button
                            type="button"
                            className={s.btn}
                            onClick={()=>this.props.onDeleteTodo(id)}
                        >
                        Delete
                        </button>
                    </li>
                )}
            </ul>
        </form>
    );
    }
}


export default TodoList;