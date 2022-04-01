import React, { Component } from 'react'
import './css/index.css'

export default class App extends Component {
  render() {
      var name = 'zzz'
      var styles = {
            color: 'red',
            fontSize: '20px',
            backgroundColor: 'yellow',
            height: '100px',
            width: '100px',
      }
    return (
      <div>
          name:{name}
          {/* 用大括号包裹，会被解析为js代码运行 */}
          {10>15?'错误':'正确'}
          <div style={styles}>内部样式</div>
          <div id='test' style={{color:'black'}}>可以正常使用</div>
          {/* 官方推荐行内样式 */}
          <div className="active">外部样式</div>
          
          <label htmlFor='username'>用户名：</label>
          <input type="text" id="username" />
      </div>
    )
  }
}
