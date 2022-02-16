import Section from './Section';
import PaintingList from './PaintingList';
import ColorPicker from './ColorPicker';
import Alert from './Alert';
import Counter from './Counter';
import Dropdown from './Dropdown';
import TodoList from './TodoList';
import paintings from './Painting/paintings.json';
import colorPicker from './ColorPicker/colorPicker.json';
import Form from './Form';
import TodoEditor from './TodoEditor';
import Filter from './Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';


class App extends Component {
  state = {
    todos: [
      { id: '1', text: 'Todo 1', completed: false },
      { id: '2', text: 'Todo 2', completed: true },
      { id: '3', text: 'Todo 3', completed: false },
    ],
    filter: '',
  };

  onDeleteBtnClick = (todosId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.id !== todosId)
    }))
  };

  addTodos =  text  => {
    console.log(text)
    const newtodos = {
      id: nanoid(),
      text,
      completed: false,
    }; 

    this.setState(prevState=>({
      todos: [newtodos, ...prevState.todos],
    }));
  };
  
  formSubmitHandler = data => {
    console.log(data);
  }

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    })
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleTodos= this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter));
      return (

        <Section title="Painting">
          <Filter
            filter={this.state.filter}
            changeFilter = {this.changeFilter}
          />
          <TodoEditor onSubmit={this.addTodos}/>
          <Form onSubmit={this.formSubmitHandler}/>
          <TodoList
            title="TodoList"
            todos={visibleTodos}
            onDeleteTodo={this.onDeleteBtnClick}
            onSubmit={this.addTodos}
          />
          <Dropdown/>
          <Counter initialValue={10}/>
          <Alert text="Nice to meet you" type="success"/>
          <Alert text="Nice to meet you" type="error"/>
          <Alert text="Nice to meet you" type="warning"/>
          <ColorPicker options={colorPicker}/>
          <PaintingList items={paintings}/>
        </Section>

      );
  }
}
export {App};