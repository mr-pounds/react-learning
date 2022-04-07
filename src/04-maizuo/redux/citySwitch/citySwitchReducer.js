export default function citySwitchReducer(prevState={
    cityName: '北京'
}, action={
    type:'',
    cityName: ''
}){
    switch(action.type){
        case 'changeCity':
            return {
                cityName: action.cityName
            }
        default:
            return {
                cityName: prevState.cityName
            }
    }
}