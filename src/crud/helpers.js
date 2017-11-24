const defaultOptions = {
    transformResponse: response => response.data,
    transformError: error => {
        var result = {
            message: 'Something went wrong!',
        }
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            Object.assign(result, response)
        } else if (error.request) {
            // The request was made but no response was received
            result.message = 'Error while connecting to server.'
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        return result
    }
}

// usage:
// const fetchPosts = createAsyncAction('FETCH_POSTS', () => Post.find());
// asyncFn is an async function that return a Promise from http request
export function createAsyncAction(name, asyncFn, options = {}) {
    const { transformResponse, transformError } = { ...defaultOptions, ...options }

    const types = {
        start: `${name}_START`,
        success: `${name}_SUCCESS`,
        fail: `${name}_FAIL`,
    }

    const actionCreators = {
        start: () => ({ type: types.start }),
        success: data => ({ type: types.success, data }),
        fail: error => ({ type: types.fail, error })
    }

    var result = (...arg) => dispatch => {
        dispatch(actionCreators.start())
        return asyncFn.apply(null, arg).then(
            data => {
                const out = transformResponse(data)
                dispatch(actionCreators.success(out))
                return out
            },
            error => {
                const errorOut = transformError(error)
                dispatch(actionCreators.fail(errorOut))
                throw errorOut
            },
        )
    }
    result.types = types
    result.actionCreators = actionCreators
    return result
}

const startupState = {
    isLoading: false,
    data: null,
    error: null
}

export function createAsyncReducer(handler, defaultState = startupState) {
    var types = handler.types;
    return (state = defaultState, action) => {
        switch (action.type) {
            case types.start:
                return { ...state, isLoading: true, data: null, error: null }
            case types.success:
                return { ...state, isLoading: false, data: action.data }
            case types.fail:
                return { ...state, isLoading: false, error: action.error }
        }
        return state
    }
}