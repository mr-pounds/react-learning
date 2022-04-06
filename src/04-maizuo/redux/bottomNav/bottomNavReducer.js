export default function bootomNavReducer(prevState={
    bottomNavShow: true
}, action={
    type: ''
}) {
    switch (action.type) {
        case 'hideBottomNav':
            return {
                bottomNavShow: false
            }
        case 'showBottomNav':
            return {
                bottomNavShow: true
            }
        default:
            return {
                bottomNavShow: true
            }
    }
}
