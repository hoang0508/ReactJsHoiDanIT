import React, { useState } from "react";

const TodoList = () => {
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
  const handleChangeTodo = (e) => {
    setNameTodo(e.target.value);
  };
  const handleClickTodo = (e) => {
    let todoItem = {
      id: Math.floor(Math.random() * 1000),
      name: nameTodo,
    };
    setListTodo([...listTodo, todoItem]);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Your name"
        // value={nameTodo}
        onChange={(e) => handleChangeTodo(e)}
      />
      <button type="button" onClick={(e) => handleClickTodo(e)}>
        Sumit
      </button>
      <div>
        <h3>List todoList</h3>
        {listTodo &&
          listTodo.length > 0 &&
          listTodo.map((item, index) => (
            <div key={item.id}>
              <div>{item.name}</div>
            </div>
          ))}
      </div>
    </>
  );
};

// class TodoList extends React.Component {
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

export default TodoList;
