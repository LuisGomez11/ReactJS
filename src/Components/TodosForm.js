import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
        tarea: '',
        autor: '',
        descripcion: '',
        prioridad: 'baja'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      this.props.onAddTodo(this.state);
      console.log('Enviando los datos...');
    
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="tarea"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Tarea"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="autor"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Autor"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripcion"
              />
          </div>
          <div className="form-group">
            <select
                name="prioridad"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;