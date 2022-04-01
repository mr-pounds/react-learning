import React, { Component } from 'react'

export default class App extends Component {
    state = {
        taks: [
            {id:1,name:'吃饭'},
            {id:2,name:'睡觉'},
            {id:3,name:'打豆豆'}
        ]
    }
  render() {
    return (
      <div>
          <ul>
              {
                  this.state.taks.map((item)=>{
                      return <li key={item.id}>{item.name}</li>
                  })
              }
          </ul>
      </div>
    )
  }
}
