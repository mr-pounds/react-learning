import { observable, action, runInAction} from 'mobx'
import axios from 'axios'

const store = observable({
    filmsList: [],
    getFilmsList(){
        axios.get(
            '/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=5770888',
            {
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1648788907135802570932225"}',
                    'X-Host': ' mall.film-ticket.film.list'
                }
            }
        ).then(res => {
            this.filmsList = res.data.data.films
        })
    },
    cityName: '北京',
    changeCity(cityName){
        this.cityName = cityName
    },
    bottomNavShow: true,
    showNav(){
        this.bottomNavShow = true
    },
     hideNav(){
        this.bottomNavShow = false
    },
    bannerList: [],
    getBannerList(){
        axios.get(
            // 'https://m.maizuo.com/gateway?type=2&cityId=330300&k=1914188',
            '/gateway?type=2&cityId=330300&k=1914188',
            {
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1648788907135802570932225"}',
                    'X-Host': ' mall.cfg.common-banner'
                }
            }
        ).then(res => {
            runInAction(()=>{
                this.bannerList = res.data.data
            })
        })
    }
}, {
    getFilmsList: action,
    changeCity: action,
    showNav: action,
    hideNav: action,
    getBannerList: action

})
// console.log(store)
export { store }