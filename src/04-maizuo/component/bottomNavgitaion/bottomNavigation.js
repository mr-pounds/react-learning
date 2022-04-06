import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './bottomNavigation.module.css'

export default function BottomNavigation() {
  return (
    <ul className={style.bottom_nav}>
      <li>
        <NavLink to="/index" activeClassName={style.active}>电影</NavLink>
      </li>
      <li>
        <NavLink to="/cinemas" activeClassName={style.active}>影院</NavLink>
      </li>
      <li>
        <NavLink to="/center" activeClassName={style.active}>我的</NavLink>
      </li>
    </ul>
  )
}
