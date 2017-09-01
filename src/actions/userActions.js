export const RECEIVE_TOKEN = "RECEIVE_TOKEN";

export const REQUEST_USER_INFO = "REQUEST_USER_INFO";
export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";

export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export const GET_USERS = "GET_USERS";



export function requestUserInfo() {
    return {
        type: "REQUEST_USER_INFO",
        isLoading: true
    }
}


export default function receiveToken(user, data) {
    return {
        type: "RECEIVE_TOKEN",
        user,
        token: data.token
    }
}

function receiveUserInfo(info) {
    return {
        type: "RECEIVE_USER_INFO",
        isLoading: false,
        userinfo: info
    }
}


function getUserById(state) {
    var url = `http://139.59.106.227/user`;
    // getStoredState(config, (err, state) => {
    //     console.log(state);
    // })
    return dispatch => {
      dispatch(requestUserInfo())
      fetch(url, {
        method: "GET",
        headers: { 
            'Content-Type': 'application/json' , 
            'Authorization': state.user.token
        }
      }).then(response => response.json())
        .then(json => dispatch(receiveUserInfo(json)))
    }
}



function shouldgetUserByIDAgain(state) {
    return true;
}

export function getUserByIDIfNeeded() {
    return (dispatch, getState) => {
      if (shouldgetUserByIDAgain(getState())) {
        return dispatch(getUserById(getState()))
      }else {
        // Let the calling code know there's nothing to wait for.
        return Promise.resolve()
      }
    }
}
