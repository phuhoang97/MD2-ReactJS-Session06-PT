import React, { useState, useEffect } from "react";

function DemoHook() {
  const [count, setCount] = useState(0);

  // Tương tự như componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Cập nhật tiêu đề tài liệu bằng API trình duyệt
    console.log("Updating");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// class DemoHook extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     console.log("123");
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     console.log("345");
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

export default DemoHook;
