export const RESIZE = 'nav/screenResize'
export const SCREEN_RESIZE = 'nav/SCREEN_RESIZE'

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SCREEN_RESIZE:
      return Object.assign({}, state, {
        screenWidth: action.screenWidth
      })
    default:
      return state;
  }
}

export const screenResize = (width) => {
  return dispatch => {
    dispatch({
      type: SCREEN_RESIZE,
      screenWidth: width
    })
  }
}
