import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
            <input type="text" id="task"  />
            <button onClick={this.addTask}>添加</button>
            {/* 推荐下面这种 */}
            <button onClick={()=>{
                this.addTask()
            }}>添加</button>
      </div>
    )
  }

  addTask(){
      console.log('addTask')
  }
}
