import './App.css';
import {NewTodo, TodoList} from "./components";
import {useState} from "react";

function App() {

	const [todos,setTodos] = useState([])
	console.log({todos})
	const newTodoHandler = (newTodo) => {
		setTodos((prev) => {
			prev.push(newTodo)
			return [...prev]
		})
	}

	return (
		<div>
			<h1>It's my TODO list</h1>
			<NewTodo onNewTodoHandler={newTodoHandler} />
			<TodoList data={todos}/>
		</div>
	);
}

export default App;
