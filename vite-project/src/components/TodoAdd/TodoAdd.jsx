import React, { useEffect, useState } from 'react'
import './TodoAdd.css'
    ;

function Refresh() {
    window.location.reload(false)
}

class TodoAdd extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            text: "",
        };
        this.fetchTodoPost = this.fetchTodoPost.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }



    inputHandler({ target }) {



        this.setState({
            [target.name]: target.value
        });

    }

    changeText = () => {
        this.setState(this.inputHandler)
    }
    fetchTodoPost() {


        fetch('http://localHost:3000/todos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "text": this.state.text })

        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }





    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <input type="text" name="text" id="user" onChange={this.inputHandler} defaultValue={this.state.text.value} />
                </div>
                <div className="col-sm-8">
                    <button onClick={this.fetchTodoPost} id="submit" className="btn btn-primary" style={{ margin: 10 }}>Add</button>
                    <button onClick={() => window.location.reload(false)} className="btn btn-info" style={{ margin: 10 }}>Refresh</button>
                </div>
            </div>
        )
    }
}

export default TodoAdd;