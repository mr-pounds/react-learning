import axios from "axios"

function getFilmsList() {
    return axios.get(
        '/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=5770888',
        {
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1648788907135802570932225"}',
                'X-Host': ' mall.film-ticket.film.list'
            }
        }
    ).then(res => {
        return {
            type: 'getFilmsList',
            payload: res.data.data.films
        }
    })
}

export {getFilmsList}