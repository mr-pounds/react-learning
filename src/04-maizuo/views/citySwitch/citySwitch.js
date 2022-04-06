import { useCallback } from 'react'
import { connect } from 'react-redux'
import { changeCity } from '../../redux/citySwitch/citySwitchActionCreator'

function CitySwitch(props) {
  // console.log(props)
  let {cityName, changeCity, history} = props
  console.log(cityName)
  // useEffect(() => {
  //   changeCity(cityName)
  // },[changeCity, cityName])
  
  const onClick = useCallback((evt) => {
    // console.log(history)
    changeCity(evt.target.innerText)
    history.push('/')
  }, [changeCity, history])

  return (
    <div>
      <p>当前城市：{cityName}</p>
      <ul>
        <li onClick={onClick}>北京</li>
        <li onClick={onClick}>上海</li>
        <li onClick={onClick}>广州</li>
        <li onClick={onClick}>深圳</li>
      </ul>
    </div>
  )
}

const mapStatetoProps = (state) => {
  
  return {
    cityName: state.citySwitchReducer.cityName
  }
}

const mapDispatchToProps = {
  changeCity,
}

export default connect(mapStatetoProps, mapDispatchToProps)(CitySwitch)