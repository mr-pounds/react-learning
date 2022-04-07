import React, { useEffect } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import {connect} from 'react-redux'
import {getBannerList} from '../../redux/banner/bannerActionCreator'
import 'swiper/css'
import 'swiper/css/pagination'

function Banner(props) {
  let {bannerList, getBannerList} = props
  useEffect(() => {
    getBannerList()
  }, [getBannerList])

  return (
    <div>
      <Swiper loop={true} modules={[Pagination]} pagination={{
        el: '.swiper-pagination',
        clickable: true
      }}>
        {
          bannerList.map((item) => {
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

const mapStateToProps = (state) => {
  return {
    bannerList: state.bannerReducer.bannerList
  }
}

const mapDispatchToProps = {
  getBannerList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)