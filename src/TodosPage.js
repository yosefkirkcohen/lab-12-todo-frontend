import React, { Component } from 'react'
import { createTodo, getTodos } from './fetch-utils'

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
        createTodo(this.state.todoName, this.props.token)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={(e) => this.setState({todoName: e.target.value})}/>
                    <button>Add To do</button>
                </form>
                <div className='list'>
                    {
                        this.state.todos.map((item) => {
                            return <div key={item.id}>
                                {item.todo}
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
