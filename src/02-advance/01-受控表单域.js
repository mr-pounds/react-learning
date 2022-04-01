import React, { Component } from 'react'

class Files extends Component {
    render() {
        return <div>
            <label>{this.props.name}</label>
            <input type={this.props.type} value={this.props.value} onChange={(e) => this.props.onChangeEvent(e)}></input>
        </div>
    }
}


export default class App extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        return (
            <div>
                <Files type='text' name='用户名' value={this.state.username} onChangeEvent={this.usernameEvent}></Files>
                <Files type='password' name='密码' value={this.state.password} onChangeEvent={this.passwordEvent}></Files>
                <button onClick={this.login}>登录</button>
                <button onClick={this.reset}>重置</button>
            </div>
        )
    }

    login = () => {
        console.log(this.state.username, this.state.password)
    }

    usernameEvent = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passwordEvent = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    reset = () => {
        this.setState({
            username: '',
            password: ''
        })
    }
}
