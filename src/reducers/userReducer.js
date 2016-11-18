export default function reducer(state={
    user: null,
    error: null,
    initialized: false
}, action) {
    switch (action.type) {
        case 'USER_AUTH_ERROR':
            state = Object.assign({}, state, {
                error: {
                    message: action.payload.Q.message
                }
            })
            break;
        case 'USER_AUTH_LOGOUT_SUCCESS':
            state = Object.assign({}, state, {
                user: null
            })
            break;
        case 'USER_AUTH_SUCCESS':
        case 'USER_AUTH_INIT':
            if ( action.payload ) {
                state = Object.assign({}, state, {
                    user: {
                        uid: action.payload.uid,
                        name: action.payload.displayName
                    },
                    initialized: true
                })
            } else {
                state = Object.assign({}, state, {
                    user: null,
                    initialized: true
                })
            }
            break;
        default:
            //console.log('Action not implemented');
            break;
    }
    return state;
}