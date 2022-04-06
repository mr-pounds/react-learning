import { autorun } from 'mobx'
import { useCallback, useEffect, useState } from 'react'
import { store } from '../../mobx/store'

function CitySwitch(props) {

  let { history } = props
  const { cityName, setCityName} = useState('')
  
  useEffect(() => {
    var unsubscribe = autorun(()=>{
      setCityName(store.cityName)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const onClick = useCallback((evt) => {
    store.changeCity(evt.target.innerText)
    history.push('/')
  }, [history])

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


export default CitySwitch