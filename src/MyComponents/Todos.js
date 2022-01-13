import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="my-3" >Todos List</h3>

            
            {/* {props.todos} */}

            {props.todos.length===0? "No Todos to display" :
            
            props.todos.map((todo)=>{
                return <TodoItem className="text-center" todo ={todo} key={todo.sno}  onDelete={props.onDelete}     />
            
            })
        
            }

          

            {/* // <TodoItem todo = {props.todos[0]}/> */}

            
        </div>
    )
}
