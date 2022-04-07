import Banner from '../../component/banner/banner'
import style from './index.module.css'
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import BottomNavigation from '../../component/bottomNavgitaion/bottomNavigation'
import { connect } from 'react-redux'
import Nowplaying from './nowplaying'
import Comingsoon from './comingsoon'

function Index(props) {
  let { cityName } = props

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

const mapStatetoProps = (state) => {
  // console.log(state.citySwitchReducer.cityName)
  return {
    cityName: state.citySwitchReducer.cityName
  }
}

const mapDispatchtoProps = {
  
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Index)