import React, { Component } from 'react'
import { createTodo, getTodos, updateTodo } from './fetch-utils'

export default class TodosPage extends Component {
    state = {
        todos: [],
        todoName: ''
    }

    componentDidMount = async() => {
        const todosList = await getTodos(this.props.token)
        this.setState({todos: todosList})
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        await createTodo(this.state.todoName, this.props.token)
        const todosList = await getTodos(this.props.token)
        this.setState({todos: todosList, todoName: ''})
    }

    handleTodoClick = async(item) => {
        await updateTodo(this.props.token, !item.completed, item.id);
        const todosList = await getTodos(this.props.token)
        await this.setState({todos: todosList})
    }

    render() {
        return (
            <div className='todos'>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todoName} onChange={(e) => this.setState({todoName: e.target.value})}/>
                    <button>Add To do</button>
                </form>
                <div className='list'>
                    {
                        this.state.todos.map((item) => {
                            return <div key={item.id} onClick={() => this.handleTodoClick(item)} className = {item.completed ? 'todo complete' : 'todo incomplete'} >
                                {item.todo}
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
