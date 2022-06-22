import React from 'react'
const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = React.useState("")
    return (
    <div>This is TodoInput</div>
    )
}
const handleSubmit = e => {
    e.preventDefault();
    if(value === ""){
        return (
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Create todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Create</button>
            </form>
        )
    }
    createTodoItem(value)
    setValue("")
}
export default TodoInput