import React from 'react'
import TodoAdd from '../../components/TodoAdd/TodoAdd'
import TodoItem from '../../components/TodoItem/TodoItem'
import './Home.css'

async function GetTodos() {
    const response = await fetch('http://localhost:3000/todos');

    return response.json();
}


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosList: [],
            checked: null
        }
    }

    componentDidMount() {
        GetTodos()
            .then((todos) => {
                console.log(todos)
                this.setState({
                    todosList: todos
                })
            })


    }

    renderTodoList() {
        const { todosList } = this.state;

        return todosList.map((todosItem) => {
            return (

                <TodoItem
                    key={todosItem.id}
                    text={todosItem.text}
                    id={todosItem.id}
                    checked={todosItem.checked}

                />)
        })



    }






    render() {
        return (
            <div className="container container-fluid" key={this.props.id}>
                {this.renderTodoList()}
            </div>
        )
    }
}


export default Home;