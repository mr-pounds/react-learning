import React, { Component } from 'react'

export default class App extends Component {
  a = 200
  task_name = React.createRef()
  render() {
    return (
      <div>
          {/* 这种方式将被去除，因为存在难以感知的覆盖问题 */}
          {/* <input type="text" id="task" ref='task_name' /> */}
            <input type="text" id="task" ref={this.task_name} />
            {/* 最推荐下面这种, 上面这种this指向不明确 箭头函数的this指向外部对象 */}
            <button onClick={()=>this.addTask()}>添加</button>
      </div>
    )
  }

  // call、apply 改变this指向，并执行函数
  // bind 仅改变this指向，不执行函数
  addTask(){
    // this的原则是谁调用指向谁，onClick的this指向的是button触发代理的this，而不是App
    //   console.log(this.refs.task_name.value)
    console.log(this.task_name.current.value)
  }

}
