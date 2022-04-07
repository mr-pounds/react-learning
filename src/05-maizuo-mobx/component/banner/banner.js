import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import { store } from '../../mobx/store.js'
import 'swiper/css'
import 'swiper/css/pagination'
import { autorun } from 'mobx'

function Banner() {

  const [bannerList, setBannerList]  = useState([])
  // console.log(bannerList)
  useEffect(() => {
    store.getBannerList()
    var unsubscribe =  autorun(() => {
      setBannerList(store.bannerList)
    }, [])
    // console.log(bannerList)
    return () => {
      unsubscribe()
    }
  })
  
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

export default Banner