import React, { Component } from 'react'
import Swiper, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default class ZSwiper extends Component {
  // 初始化swiper
  componentDidMount() {
    console.log(this.props.loop, typeof(this.props.loop))
    new Swiper('.swiper', {
      loop: this.props.loop,
      // loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      modules: [
        Pagination
      ]
    })
  }

  render() {
    return (
      <div className='swiper'>
        <div className='swiper-wrapper'>
          {
            this.props.children.map((item, index) => {
              return (
                <div className='swiper-slide' key={index}>
                  {item}
                </div>
              )
            }
          )
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
