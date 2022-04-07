export default function filmsReducer(prevState={
    filmsList: []
}, action={
    type:'',
    payload: []
}){
    switch (action.type) {
        case 'getFilmsList':
            return {
                filmsList: action.payload
            }
        default:
            return {
                filmsList: prevState.filmsList
            }
    }
}