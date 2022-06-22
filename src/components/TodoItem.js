const TodoItem = ({item, index, todoItems, deleteTodoItem, completeTodoItem, updateTodoItem}) => {
    return (
    <div className="todo-list">
    <li style={{textDecoration: item.complete ? "line-through" : ""}}>{item.todo}</li>
    <div className="app">
    <TodoInput createTodoItem={createTodoItem}/>
    {todoItems.map((item, index) => (
    <TodoItem
    key={index}
    index={index}
    item={item}
    deleteTodoItem={deleteTodoItem}
    completeTodoItem={completeTodoItem}
    />
    ))}
    </div>
    <div className="btns">
    <button onClick={() => completeTodoItem(index)}>Complete</button>
    <button onClick={() => updateTodoItem(index)}>Update</button>
    <button onClick={() => deleteTodoItem(index)}>X</button>
    </div>
    </div>
    )}
export default TodoItem