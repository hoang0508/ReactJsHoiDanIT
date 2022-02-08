import React from "react";

const AddTodo = (props) => {
  const { nameTodo, handleChangeTodo, handleClickTodo } = props;
  return (
    <div>
      <form>
        <input
          className="todo-input"
          type="text"
          placeholder="Your name"
          value={nameTodo}
          onChange={(e) => handleChangeTodo(e)}
        />
        <button
          className="todo-btn"
          type="button"
          onClick={(e) => handleClickTodo(e)}
        >
          Sumit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
