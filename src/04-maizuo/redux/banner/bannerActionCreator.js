import axios from "axios"

function getBannerList() {

    return axios.get(
        // 'https://m.maizuo.com/gateway?type=2&cityId=330300&k=1914188',
        '/gateway?type=2&cityId=330300&k=1914188',
        {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1648788907135802570932225"}',
                'X-Host': ' mall.cfg.common-banner'
            }
        }
    ).then(res => {
        return {
            type: 'getBannerList',
            payload: res.data.data
        }
    })
}

export {getBannerList}