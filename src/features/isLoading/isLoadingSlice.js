const initialState = {
  isLoading: false
}

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case 'loading/changeIsLoading': {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default: return state
  }
}