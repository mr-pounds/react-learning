import React, { Component } from 'react'

export default class App extends Component {
  a = 200
  render() {
    return (
      <div>
            <input type="text" id="task"  />
            <button onClick={()=>{
                console.log(this.a+1)
            }}>添加</button>
            {/* 通过 bind，可以解决指向问题 */}
            <button onClick={this.addTask.bind(this)}>添加</button>
            {/* 最推荐下面这种, 上面这种this指向不明确 箭头函数的this指向外部对象 */}
            <button onClick={()=>this.addTask()}>添加</button>
            {/* 这种也推荐 */}
            <button onClick={this.addTask2}>添加</button>
      </div>
    )
  }

  // call、apply 改变this指向，并执行函数
  // bind 仅改变this指向，不执行函数
  addTask(){
    // this的原则是谁调用指向谁，onClick的this指向的是button触发代理的this，而不是App
      console.log(this.a+2)
  }

  addTask2 = ()=>{
    console.log(this.a+2)
  }
}
