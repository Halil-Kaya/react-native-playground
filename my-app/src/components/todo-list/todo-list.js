export const TodoList = (props) => {
    const {data} = props
    console.log({data})
    return <div>
        <ul>
            {data.map(todo => {
                return <li key={todo.id}>{todo.content}</li>
            })}
        </ul>
    </div>
}
export default TodoList