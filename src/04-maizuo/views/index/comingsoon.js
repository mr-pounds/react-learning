import { useEffect } from 'react'
import style from './index.module.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getFilmsList } from '../../redux/films/filmsActionCreator'

function Comingsoon(props) {
  let { getFilmsList, filmsList } = props

  useEffect(() => {
    if (filmsList.length === 0) {
      getFilmsList()
    }
  }, [getFilmsList, filmsList])

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

const mapStatetoProps = (state) => {
  // console.log(state)
  return {
    filmsList: state.filmsReducer.filmsList
  }
}

const mapDispatchtoProps = {
  getFilmsList
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Comingsoon)