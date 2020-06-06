import React from 'react'
import { Input } from 'antd';





class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state= {
        content: ''
    }
}
    handleChange= (e) =>{
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <span>Add Todo's:</span>
                <Input placeholder="Enter your Task" onChange={this.handleChange} value={this.state.content} />
               
                </form>
            </div>
        )
    }
}



export default AddTodo;