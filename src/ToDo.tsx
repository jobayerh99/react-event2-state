import { use } from "react"
import ToDoCard from "./ToDoCard"

function Todos({practiceDataPromise}){
    const todos = use(practiceDataPromise)
    
    return(
        <div>
            <h2>ToDo: {todos.length}</h2>
            {
                todos.map(todo => <ToDoCard todo= {todo}></ToDoCard>)
            }
        </div>
    )
}

export default Todos