import React from "react";

function Form(){
    return(
        <form>
        <h1>
            <label htmlFor="form-nova-tarefa" className="titulo">
                Todo
            </label>
        </h1>
            <div className="formulario_input">
            <input 
                type="text"
                id="form-nova-tarefa"
                className="tarefa_input"
                name="text"
                autoComplete="off"
                //value
                placeholder="Create a new todo..."
            />
            </div>
        </form>
    )
}

export default Form