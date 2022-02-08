import React from "react";

// const TodoList = () => {
//   return (
//     <>
//       <div>Hello Hoang</div>
//     </>
//   );
// };

class TodoList extends React.Component {
  // Khai báo state
  state = {
    name: "Hoang",
  };
  render() {
    return (
      <>
        <input
          placeholder="Your name"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div>Hello {this.state.name}</div>
      </>
    );
  }
}

export default TodoList;
