import {useState} from "react";

export const NewTodo = (props) => {
    const {onNewTodoHandler} = props
    const [userInput,setUserInput]= useState("")
    const addButtonHandler = () => {
        const newTodo = {
            id : Math.random().toString(),
            content : userInput
        }
        setUserInput("")
        onNewTodoHandler(newTodo)
    }

    return <div>
        <h2>Input new Todo</h2>
        <input value={userInput} onChange={(event) => {
            setUserInput(event.target.value)
        }} type="text" />
        <button onClick={addButtonHandler}> Add </button>
    </div>
}

export default NewTodo