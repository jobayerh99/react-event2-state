import './UserCard.css'
export default function ToDoCard (todo){
    return(
        <div className='user'>
            <h2>ID: {todo.id}</h2>
        </div>
    )
}