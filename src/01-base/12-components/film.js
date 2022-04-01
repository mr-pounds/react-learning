import React, { Component } from 'react'
import axios from 'axios'
import './film.css'
import BetterScroll from 'better-scroll'
import PropTypes from 'prop-types'

export default class film extends Component {
    static propstype = {
        title: PropTypes.string.isRequired,
        desc: PropTypes.string
    }

    static defaultProps = {
        title: '默认属性'
    }

    constructor(props) {
        super(props)

        this.state = {
            cinemasData: [],
            cinemasList: []
        }
        // 简化版
        // axios.get('/api/film').then(res => {
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        // })

        // 完整版
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3164234',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16482800341506717477109761"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            this.setState({
                cinemasList: res.data.data.cinemas,
                cinemasData: res.data.data.cinemas
            })

            this.bs = BetterScroll('.wrapper');
            // console.log(this.state.cinemasList[0])
        }).catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <div className='film'>
                <header>
                    <input type='text' placeholder='请输入影院名称' onChange={(e)=>this.handleFilter(e)} />
                    <ul className='filter'>
                        <li>{this.props.title}</li>
                        <li>APP订票</li>
                        <li>最近去过</li>
                    </ul>
                </header>
                <section className='wrapper' style={{
                    height:'500px',
                    overflow:'hidden'
                }}>
                    <div className='content'>
                    <ul className='cinemas'>
                        {this.state.cinemasList.map((item, index) => {
                            return <li key={item.cinemaId}>
                                <div>
                                    <span>{item.name}</span>
                                    <span>{item.address}</span>
                                </div>
                                <div>
                                    <span>￥ {item.lowPrice / 100} 起</span>
                                    <span>距离未知</span>
                                </div>

                            </li>
                        })}
                    </ul>
                    </div>
                </section>
            </div>
        )
    }

    handleFilter(e) {
        // console.log(e.target.value)
        this.setState({
            cinemasList: this.state.cinemasData.filter(item => {
                return item.name.toUpperCase().includes(e.target.value.toUpperCase()) || item.address.toUpperCase().includes(e.target.value.toUpperCase())
            }, )
        }, ()=>{
            BetterScroll('.wrapper'); 
        }
        )
    }

}
