import React from "react";

function Todo(props){
    return(
    <div className="todo-lista-pequena">
       <div>
            <input id="task-0" type="checkbox" defaultChecked={props.completed}/>
            <label className="todo-lista-label" htmlFor="task-0">Jog around the park 3x</label>
        </div>
    </div>
    )
}

export default Todo;