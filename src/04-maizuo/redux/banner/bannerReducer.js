
export default function bannerReducer(prevState={
    bannerList: [],
}, action={
    type: 'getBannerList',
}){
    switch(action.type){
        
        case 'getBannerList':
            return {
                bannerList: action.payload,
            }
        default:
            return prevState
    }
}