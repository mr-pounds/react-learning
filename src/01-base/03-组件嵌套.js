import React, { Component } from 'react'

const Tabsbar = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
        )
    }

const Footer = () => <div>this is footer!</div>

// 嵌套的组件只能是父子关系，不能是祖先关系，如果有这种关系，应该在子组件里嵌套孙组件
export default class App extends Component {
  render() {
    return (
        <div>
      <Tabsbar></Tabsbar>
      <Footer> </Footer>
      </div>
    )
  }
}
