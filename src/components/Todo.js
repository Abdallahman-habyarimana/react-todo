import React from 'react';
import { v4 as uuid } from 'uuid'
import TodoList from './TodoList';

class Todo extends React.Component {
  state = { 
    todo: {
      index: '',
      description: ''
    },
    todoList: []
    }   
  
  handleChangeInput = e => {
    this.setState({ 
      todo: {
        index: uuid(),
        description: e.target.value
      }    
  })
  }

  handleDelete = (id) => {
    const data = this.state.todoList.filter( tod => tod.index !== id)
    this.setState({ todoList: data})
  }

  handleUpdate = (descr, id) => {
    const data = this.state.todoList
    data.map(todo => {
        if(todo.index === id){
            todo.description = descr
        }
    })
    this.setState({ todoList: data})
  }


handleSubmit = e => {
  e.preventDefault();
  const newTodo = this.state.todo
  if(newTodo !== "") {
    let data = [...this.state.todoList];
    data = (data.length === 0) ? [...this.state.todoList, newTodo] : [newTodo,...this.state.todoList] 
    this.setState({
      todoList: data,
      todo: {
        index: '',
        description:''
      }
    })
  }  
  console.log(this.state.todoList)  
}

  render() { 
    return ( 
      <div>
        <div className="text__title">
          <h2>Todo List</h2>
        </div>
        <div className="todo__container">
          <div className="left">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">Enter what todo</label>
                <input type="text" name="todo" value={this.state.todo.description} onChange={this.handleChangeInput} placeholder="Enter activity" />
              <br />
                    <button>Add</button>
            </form>
          </div>
          <div className="right">
            <TodoList todo={this.state.todoList} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
          </div>
          
        </div>
      </div>
   );
  }
}

export default Todo;



 
