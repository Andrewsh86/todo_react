import React from 'react';

export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text" 
    value={props.currentTodo.value} 
    onChange={props.handleInputChange}/>
  </form>
);


TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};
