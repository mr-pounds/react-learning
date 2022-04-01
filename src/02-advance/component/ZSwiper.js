import React, { Component } from 'react'
import Swiper, {Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default class ZSwiper extends Component {
    // 初始化swiper
    componentDidMount() {
        new Swiper('.swiper', {
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
      <div className='swiper' style={{
        height: '200px',
        background: 'yellow'
      }}>
        <div className='swiper-wrapper'>
            <div className='swiper-slide'>1</div>
            <div className='swiper-slide'>2</div>
            <div className='swiper-slide'>3</div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
