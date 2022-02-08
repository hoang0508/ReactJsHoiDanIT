import React, { useState } from "react";
import "./TodoList.scss";
import _ from "lodash";
import DisPlayTodo from "./DisPlayTodo";
const Home = () => {
  const [nameTodo, setNameTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    {
      id: 1,
      name: "Whatching youtube",
    },
    {
      id: 2,
      name: "Using facebook",
    },
    {
      id: 3,
      name: "Reading book",
    },
  ]);
  console.log(">> check data:", listTodo);
  // hàm onChage input value
  const handleChangeTodo = (e) => {
    setNameTodo(e.target.value);
  };
  // thêm List Todo
  const handleClickTodo = (e) => {
    if (!nameTodo) {
      return;
    }
    let todoItem = {
      id: Math.floor(Math.random() * 1000),
      name: nameTodo,
    };
    // cách đi làm
    let currentTodo = _.clone(listTodo);
    currentTodo.push(todoItem);
    setListTodo(currentTodo);
    setNameTodo("");

    // cách thông dụng của hook
    // setListTodo([...listTodo, todoItem]);
  };
  // Delete Todo
  const handleClickDeleTodo = (id) => {
    const deleTodo = [...listTodo].filter((item) => item.id !== id);
    setListTodo(deleTodo);
  };
  return (
    <>
      <div className="todo">
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
        <div>
          <h3 className="todo-title">List Home</h3>
          <DisPlayTodo
            listTodo={listTodo}
            handleClickDeleTodo={handleClickDeleTodo}
          />
        </div>
      </div>
    </>
  );
};

// class Home extends React.Component {
//   // Khai báo state
//   state = {
//     name: "Hoang",
//   };
//   render() {
//     return (
//       <>
//         <input
//           placeholder="Your name"
//           onChange={(e) => this.setState({ name: e.target.value })}
//         />
//         <div>Hello {this.state.name}</div>
//       </>
//     );
//   }
// }

export default Home;
