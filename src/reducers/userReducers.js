import intialState from '../state/state';

export default function user(state = intialState, action) {
    switch(action.type) {
        case 'RECEIVE_TOKEN':
            return Object.assign({}, state, {
                token: action.token,
            })
        case 'REQUEST_USER_INFO':
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })
        case 'RECEIVE_USER_INFO':
            return Object.assign({}, state, {
                isLoading: action.isLoading,
                info: action.userinfo
            })
        default:
            return state
    }
}
