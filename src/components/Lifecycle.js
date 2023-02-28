import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("before render");
  }
  state = { isVisible: true };

  // Component có 3 giai đoạn:
  //   1. Mounting:
  //   + Thực hiện sau khi được khởi tạo --> Khi component được render ra DOM
  //   + Thứ tự thực hiện:
  //        ==> constructor -> Render -> ComponentDidMount()
  //   2. Updating:
  //   + Trong giai đoạn này dữ liệu (props, state) sẽ được cập nhật theo các event
  //   ==> Khi component được re-render dựa vào sự thay đổi của props và state
  //   + Thứ tự thực hiện Cập nhật giá trị cho state
  //   shouldComponentUpdate() => componentWillUpdate() – với điều kiện hàm trên return true
  //   => re-render() => componentDidUpdate()
  //   3. Unmounting: Là quá trình xảy ra khi component bị xóa khỏi DOM
  // Thứ tự thực hiện: componentWillUnmount() => Xóa khỏi DOM

  componentDidMount() {
    console.log("affter render");
  }

  componentDidUpdate() {
    console.log("affter Update");
  }

  render() {
    console.log("Render");
    return (
      <>
        {this.state.isVisible ? <Child /> : null}
        <button onClick={() => this.setState({ isVisible: false })}>
          Remove !
        </button>

        {/* {if (this.state.isVisible) {
                <Child />
            }else {
                null
            }} */}
      </>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("before unmounting");
  }
  render() {
    return <>Đây child component</>;
  }
}

export default Lifecycle;
