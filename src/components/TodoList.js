import 'font-awesome/css/font-awesome.min.css'

const TodoList = ({ todo, onDelete }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { todo.map( item => 
                        <tr key={item.index}>
                            <td>{item.description}</td>
                            <td><i className="fa fa-trash-o icon" onClick={ () => onDelete(item.index)}></i></td>
                        </tr> 
                        )} 
                </tbody>
            </table>
        </div>
      
    )
  }

 
export default TodoList;