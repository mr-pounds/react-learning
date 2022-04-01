import React, { Component } from 'react'
import './css/12.css'
import Home from './12-components/home.js'
import Film from './12-components/film2.js'
import Mine from './12-components/my.js'

export default class App extends Component {
    state = {
        navs: [
            {
                id: 'home',
                name: '首页'
            },
            {
                id: 'film',
                name: '电影'
            },
            {
                id: 'mine',
                name: '我的'
            }
        ],
        currentNav: 'home'
    }

    father_msg = {
        title: '父组件通信内容',
        // desc: '父组件通信详细'
    }
    render() {
        return (
            <div>
                {
                    this.setContext()
                }
                <ul className='bottom_nav'>
                    {this.state.navs.map((nav) => {
                        return <li key={nav.id} className={this.state.currentNav === nav.id ? 'active' : ''} onClick={() => this.swith(nav.id)}>{nav.name}</li>
                    })}
                </ul>
            </div>
        )
    }

    swith(id) {
        this.setState({
            currentNav: id
        })
    }

    setContext() {
        switch (this.state.currentNav) {
            case 'home':
                return <Home></Home>
            case 'film':
                return <Film {...this.father_msg}></Film>
            case 'mine':
                return <Mine></Mine>
            default:
                return null
        }
    }
}
