import React from 'react'



const Todo=(props)=>{
    if(props.status==="all"||(props.status==="completed"&&props.todo.completed===true)||(props.status==="uncompleted"&&props.todo.completed===false))
    {
    const deletehandler=()=>{
        props.setTodos(props.todos.filter(el=> el.id !== props.todo.id))

    }
    const completehandler=()=>{
        props.setTodos(props.todos.map((item)=>{
            if(item.id===props.todo.id)
            {
                return {
                    ...item,completed:!item.completed
                }
            }
            return item;
        }))
    }
    if(props.todo.completed)
    {
        return (
            <div className="todo">
                <li className={`todo-item ${props.todo.completed? "completed":""}`}>{props.todo.text}</li>
                {/* <button onClick={completehandler} className="complete-btn"><i className="fas fa-check"></i></button> */}
                <button onClick={deletehandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        )
    }
    else{
    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed? "completed":""}`}>{props.todo.text}</li>
            <button onClick={completehandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deletehandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
    }
}
return "";
}

export default Todo;