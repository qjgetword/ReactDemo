// 组件的生命周期挂载期
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    // 调用回父类的 constructor 方法，传递 props属性名，让 props 属性起作用
    super(props);

    // 定义初始数据
    this.state = {
      num: 1111,
    };

    // 传值
    // 传递 this 到函数中去
    this.handleClick = this.handleClick.bind(this);

    console.log("1.1 constructor 组件初始化方法");
  }

  componentWillMount() {
    console.log("1.2 componentWillMount 在挂载数据之前需要执行的方法");
  }

  componentDidMount() {
    console.log("1.4 componentDidMount 在挂载数据之后需要执行的方法");

    // 异步请求 Ajax
  }

  handleClick = () => {
    alert("handleClick");
  };

  render() {
    console.log("1.3 render 渲染标签到页面上，填充数据到标签中");
    return (
      <div>
        <span>{this.state.num}</span>
        <br />
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          按钮
        </button>
      </div>
    );
  }
}
