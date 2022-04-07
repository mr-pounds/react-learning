import { useEffect, useState } from 'react'
import style from './index.module.css'
import { NavLink } from 'react-router-dom'
import {store} from '../../mobx/store'
import { autorun } from 'mobx'

function Comingsoon(props) {
  const [ filmsList, setFilmsList ] = useState([])

  useEffect(() => {
    
    if (store.filmsList.length === 0) {
      console.log(store.filmsList.length)
      store.getFilmsList()
    }
    var unsubscribe = autorun(() => {
      // console.log(store.filmsList)
      setFilmsList(store.filmsList)
    })

    return () => {
      unsubscribe()
    }

  }, [])

  return (
    <div>
      <ul>
        {filmsList.map((item, index) => {
          // console.log(item)
          return (
            <li key={index} className={style.film_item}>
              <NavLink to={`/filmDetail/${item.filmId}`}>
                <img src={item.poster} alt={item.name}></img>
                <div>
                  <h3>{item.name}</h3>
                  <p>观众评分：{item.grade}</p>
                  <p>导演：{item.director}</p>
                  <p>
                    <span>{item.nation} |</span>
                    <span>{item.runtime}</span>
                  </p>
                </div>
                <button>购票</button>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Comingsoon