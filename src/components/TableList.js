import { Table } from "antd"
import React from'react';
import Todos from './Todos'
import AddTodo from './AddTodo'



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
};
class TableList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        todos :[
                {
                id: 1,
                key: '1',
                content: 'paint the house on 10 Downing St'
               
                
                },
                {
                id: 2,
                key: '2',
                content: 'class tonight',
                
                },
            
            ],
            
            columns: [
                {
                title: 'Task List',
                dataIndex: 'content',
                key: 'content',
                },
             ]
}
    }
deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
    return todo.id !== id
  });
  this.setState({
    todos
  });
}
addTodo =(todo)=>{
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        });
  }

  
 


render() {
 // {this.state.todos.map(({todoList})=>{
  
  return(
  
  <div className= 'container, icons-list'>

    <Table
     rowSelection={{type: rowSelection}}
     dataSource={this.state.todos}
     columns={this.state.columns}/>
 
     <Todos todos={this.state.todos}deleteTodo={this.deleteTodo}/>
    <AddTodo 
     addTodo={this.addTodo}/>
 
  </div>
  //})}
      )
    }
}



  export default TableList;