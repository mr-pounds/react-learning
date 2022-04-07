import React, { Component } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default class App extends Component {

  constructor(props) {
    super()
    this.state = {
      bannerList: []
    }
  }

  componentDidMount() {
    axios.get(
      'https://m.maizuo.com/gateway?type=2&cityId=330300&k=1914188',
      {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1648788907135802570932225"}',
          'X-Host':' mall.cfg.common-banner'
        }
      }
    ).then(res => {
      // console.log(res.data.data)
      this.setState({
        bannerList: res.data.data
      })
    })
  }

  render() {
    return (
      <div style={{
        height: '200px',
        background: 'yellow'
      }}>
        <Swiper loop={true} modules={[Pagination, Navigation]} pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}>
          {
            this.state.bannerList.map((item) => {
                return (
                  <SwiperSlide key={item.bannerId}>
                    <img  src={item.imgUrl} alt={item.name} style={{
                      height: '200px',
                      width: '100%'
                    }}/>
                  </SwiperSlide>
                )
            })
          }
          <div className='swiper-pagination'></div>
        </Swiper>
      </div>
    )
  }
}
