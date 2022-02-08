import React from "react";

// const TodoList = () => {
//   return (
//     <>
//       <div>Hello Hoang</div>
//     </>
//   );
// };

class TodoList extends React.Component {
  state = {
    name: "Hoang",
    channel: "Epu",
  };
  render() {
    return (
      <div>
        Hello {this.state.name} and {this.state.channel}
      </div>
    );
  }
}

export default TodoList;
