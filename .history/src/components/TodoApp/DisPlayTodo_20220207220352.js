import React from "react";
import { FaTimes } from "react-icons/fa";

const DisPlayTodo = () => {
  const handleClickDeleTodo = () => {};
  return (
    <div>
      <div className="todo-list">
        {listTodo &&
          listTodo.length > 0 &&
          listTodo.map((item, index) => (
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
