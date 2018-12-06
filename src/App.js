import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodosForm from './Components/TodosForm';

import { todos } from './todos.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState ({
      todos:[...this.state.todos, todo]
    })
  }

  removeTodo(index){
    if(window.confirm('Estas seguro que desea eliminar?')){
      this.setState({
        todos: this.state.todos.filter((e,i) => {
            return i !== index
        })
      })
    }
    
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">

            <div className="card-header">
              <h3>{todo.tarea}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.prioridad}
              </span>
            </div>

            <div className="card-body">
              <p><strong>{todo.descripcion}</strong></p>
              <p>{todo.autor}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>

          </div>
        </div>
      )
    })

    return (
      <div className="App">

        <nav className="navbar nabar-dark bg-dark">

          <a href="" className="text-white">

            Contador de tareas:

            <apan className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </apan>

          </a>

        </nav>



        <div className="container">
          <div className="row mt-4">
            <div className="col md-3">
            <h1 className="mb-4 mt-4">Ingrese datos</h1>
              <TodosForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col md-9">
              <div div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
