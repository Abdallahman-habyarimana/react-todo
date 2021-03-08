
const AddTodo = () => {
    return ( 
      <div>
          <form onSubmit={this.handleSubmit}>
              <label for="tod">Enter What Todo</label>
              <input type="text" name="todo" onChange={this.handleChangeInput} placeholder="Enter activity" />
          </form>
      </div>
     );
  }

  
export default AddTodo;