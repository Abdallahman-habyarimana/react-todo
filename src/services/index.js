let todo = [
    { id: 1, todo: 'Yellow', category: 'color' },
    { id: 2, todo: 'Go to Pray', category: 'Religion' },
]
export const getAllTodo = () => {
    return todo
}

export const saveTodo = (tod) => {
    if(todo.length === 0) 
        todo = [...todo, tod]
    else
        todo = [tod, ...todo]   
} 