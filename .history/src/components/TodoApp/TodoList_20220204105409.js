import React, { useState } from "react";

const TodoList = () => {
  const [nameTodo, setNameTodo] = useState("");
  // const handleChangeTodo = (e) => {
  //   setNameTodo(e.target.value);
  // };
  const handleClickTodo = (e) => {
    setNameTodo(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Your name"
        // value={nameTodo}
        // onChange={(e) => handleChangeTodo(e)}
      />
      <button type="button" onClick={(e) => handleClickTodo(e)}>
        Sumit
      </button>
      <div>Hello ToDo app {nameTodo}</div>
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
