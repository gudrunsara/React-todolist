import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // Check if todo is completed, if so line through if not 'none'
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'

        }
    }

    markComplete = (e) => {
        return {

        }
    }

    render() {
        // To pull out certain variables from the props
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}/> 
                    {' '}
                    { title }
                    <button 
                        style={btnStyle} 
                        onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
} 

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none', 
    padding: '5px 9px', 
    borderRadius: '50%',
    cursor: 'pointer', 
    float: 'right'
}

export default TodoItem
