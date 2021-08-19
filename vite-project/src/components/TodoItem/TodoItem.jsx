import React, { useState } from 'react'
import './TodoItem.css'








var checked;
var id;
var text;
class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked,
            id: this.props.id,
            text: this.props.text
        }
        this.handleChange = this.handleChange.bind(this)
        this.modify = this.modify.bind(this)
        id = this.props.id
        text = this.props.text
    }

    handleChange(e) {
        this.setState({
            checked: e.target.checked
        })
        console.log(this.state.checked)
        checked = this.state.checked
    }

    modify = () => {
        this.setState(this.handleChange)
    }
    UpdateTodo() {
        fetch('http://localHost:3000/todos/id' + id, {
            method: "PUT",
            headers: {

                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "checked": checked, "id": id, "text": text })

        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    DeleteTodo() {
        fetch('http://localHost:3000/todos/' + id, {
            method: "DELETE",
            headers: {

                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "id": id, "text": text, "checked": checked })

        })
            .then(response => console.log(response))



    }




    render() {
        return (

            <div className="row">
                <div className="col-sm-4">
                    <p>{this.props.text}</p>
                </div>
                <div className="col-sm-8">
                    <button id={this.props.id} className="btn btn-danger" onClick={this.DeleteTodo}>Delete</button>
                    <input type="checkbox" name="Checked" id={this.state.id} defaultChecked={this.state.checked} onChange={this.handleChange} className="checkbox" />`
                    <button className="btn btn-warning" id={this.state.id} onClick={this.UpdateTodo}>Update Todo</button>
                </div>
            </div>
        )
    }
}


export default TodoItem;

