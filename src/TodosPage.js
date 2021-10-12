import React, { Component } from 'react'
import { getTodos } from './fetch-utils'

export default class TodosPage extends Component {
    state = {
        todos: [],
        todoName: ''
    }

    componentDidMount = async() => {
        const todosList = await getTodos(this.props.token)
        this.setState({todos: todosList})
        console.log(todosList)
    }

    render() {
        return (
            <div>
                <div className='list'>
                    {
                        this.state.todos.map((item) => {
                            return <div>
                                {item.todo}
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
