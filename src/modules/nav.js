export const RESIZE = 'nav/screenResize'
export const SCREEN_RESIZE = 'nav/SCREEN_RESIZE'
export const TOGGLE_NAV = 'nav/TOGGLE_NAV'

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
  showNav: window.innerWidth > 786 ? true : false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SCREEN_RESIZE:
      return Object.assign({}, state, {
        screenWidth: action.screenWidth
      })
    case TOGGLE_NAV:
      return Object.assign({}, state, {
        showNav: !state.showNav
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

export const toggleNav = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_NAV
    })
  }
}
