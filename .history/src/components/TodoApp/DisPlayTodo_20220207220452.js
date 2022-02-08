import React from "react";
import { FaTimes } from "react-icons/fa";

const DisPlayTodo = (props) => {
  const handleClickDeleTodo = () => {};
  return (
    <div>
      <div className="todo-list">
        {props.listTodo &&
          props.listTodo.length > 0 &&
          props.listTodo.map((item, index) => (
            <div key={item.id} className="todo-item">
              <div className="todo-name">{item.name}</div>
              <div
                onClick={() => handleClickDeleTodo(item.id)}
                className="todo-dele"
              >
                <FaTimes />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisPlayTodo;
