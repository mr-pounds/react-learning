import React, { Component } from 'react'

class Files extends Component {
    state = {
        value: localStorage.getItem(this.props.item) || ''
    }

    render() {
        return <div>
            <label>{this.props.name}</label>
            <input type={this.props.type} value={this.state.value} onChange={(e) => this.setState({
                value: e.target.value
            })}></input>
        </div>
    }
}


export default class App extends Component {

    usernameRef = React.createRef()
    passwordRef = React.createRef()
    render() {
        return (
            <div>
                <Files type='text' name='用户名' item='username' ref={this.usernameRef}></Files>
                <Files type='password' name='密码' ref={this.passwordRef}></Files>
                <button onClick={this.login}>登录</button>
                <button onClick={this.reset}>重置</button>
            </div>
        )
    }

    login = () => {
        console.log(this.usernameRef.current.state.value, this.passwordRef.current.state.value)
    }

    reset = () => {
        this.usernameRef.current.setState({
            value: ''
        })

        this.passwordRef.current.setState({
            value: ''
        })
    }
}
