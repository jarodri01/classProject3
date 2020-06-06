import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';





const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <Button icon={<DeleteOutlined/>} onClick={() =>{deleteTodo(todo.id)}} type= 'primary'>Delete</Button>
          </div>
        )
      })
    ) : (
      <p className="center">Please add a more tasks.</p>
    );
  
    return (
      <div className="todos collection">
       {todoList}
      </div>
    )
  }
  
  export default Todos;