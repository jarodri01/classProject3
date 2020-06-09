import React from "react";
import {  Input, List,  } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

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


export default class DemoTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          key: '1',
          content: 'paint the house on 10 Downing St',
         
         
          
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
    };
  }

  handlePressEnter = e => {
    // Create a todo object containing its index, content,
  
    const todo = {
      index: this.state.todos.length,
      content: e.target.value,
    
    };

    // Add the new todo to our array
    const newTodos = this.state.todos.concat(todo);

    this.setState({
      todos: newTodos
    });

    // Clear input
    e.target.value = "";
  };

  removeTodo = index => {
    let newTodos = [...this.state.todos];

    // Remove element
    newTodos.splice(index, 1);

    // Decrement greater indexes
    for (let i = index; i < newTodos.length; i++) {
      newTodos[i].index -= 1;
    }

    // Update state
    this.setState({
      todos: newTodos
    });
  };

  
  

  render() {
    return (
      <div className="todoContainer">
        <h1>TASK LIST</h1>

        <Input
          placeholder="Enter your Task"
          onPressEnter={this.handlePressEnter}
        />

        <List
          // emptyText sets the text to display in an empty list
          locale={{ emptyText: "Please add more tasks."}}
          rowSelection={{type: rowSelection}}

          dataSource={this.state.todos}
          renderItem={item => (
            <TodoItem
              todo={item}
              removeTodo={this.removeTodo}
            />
          )}
        />
      </div>
    );
  }
}

class TodoItem extends React.Component {
  remove = () => {
    // Remove this TodoItem
    this.props.removeTodo(this.props.todo.index);
  };

 
  render() {
    return (
      <List.Item
        actions={[
         
          <DeleteOutlined type="DeleteOutlined" theme="filled" onClick={this.remove} />
        ]}
      >
        {this.props.todo.content}
      </List.Item>
    );
  }
}
