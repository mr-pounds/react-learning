import React, { Component } from 'react'

export default class App extends Component {
    // 变量名固定 state
    state = {
        button:'收藏'
    }
  render() {
    return (
      <div>
          <h1>This is title~</h1>
          <button onClick={()=>{
                this.setState({
                    button:'取消收藏'
                    })
          }}>{this.state.button}</button>
      </div>
    )
  }
}
