import React, { Component } from 'react'
import ZSwiper from './component/ZSwiper'
import axios from 'axios'

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
        <ZSwiper loop={true}>
          {
            this.state.bannerList.map((item) => {
                return (
                    <img key={item.bannerId} src={item.imgUrl} alt={item.name} />
                )
            })
          }
        </ZSwiper>
      </div>
    )
  }
}
