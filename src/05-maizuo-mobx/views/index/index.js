import Banner from '../../component/banner/banner'
import style from './index.module.css'
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import BottomNavigation from '../../component/bottomNavgitaion/bottomNavigation'
import Nowplaying from './nowplaying'
import Comingsoon from './comingsoon'
import { useState, useEffect } from 'react'
import { autorun } from 'mobx'
import {store } from '../../mobx/store'

function Index(props) {
  const [ cityName, setCityName ] = useState('')

  useEffect(() => {
    var unsubscribe = autorun(() => {
      setCityName(store.cityName)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <Banner />
      <Link className={style.citySwitcher} to='/citySwitch'>{cityName}</Link>
      <div>
        <ul className={style.tabs}>
          <NavLink to={'/index/nowplaying'} activeClassName={style.activeTab}>正在热映</NavLink>
          <NavLink to={'/index/comingsoon'} activeClassName={style.activeTab}>即将上映</NavLink>
        </ul>
        <Switch>
          <Route path='/index/nowplaying' component={Nowplaying}></Route>
          <Route path='/index/comingsoon' component={Comingsoon}></Route>
          <Redirect from='/index' to='/index/nowplaying'></Redirect>
        </Switch>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Index