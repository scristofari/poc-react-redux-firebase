export default function reducer(state={
    isOpen: false,
}, action) {
    switch (action.type) {
        case 'MENU_TOGGLE':
            state = Object.assign({}, state, { isOpen: !state.isOpen })
            break;
        case '@@router/LOCATION_CHANGE':
            state = Object.assign({}, state, { isOpen: false })
            break;
        default:
            break;
    }
    return state;
}