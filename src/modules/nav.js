export const RESIZE = 'nav/screenResize'
export const TOGGLE = 'nav/toggleNav'
export const SCREEN_RESIZE = 'nav/SCREEN_RESIZE'
export const TOGGLE_NAV = 'nav/TOGGLE_NAV'

const minWidth = 786

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
  showNav: window.innerWidth > minWidth ? true : false,
  mobile: window.innerWidth < minWidth ? true : false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SCREEN_RESIZE:
      return {
        ...state,
        screenWidth: action.screenWidth,
        showNav: action.screenWidth > minWidth ? true : false,
        mobile: action.screenWidth < minWidth ? true : false
      }
    case TOGGLE_NAV:
      return {
        ...state,
        showNav: !state.showNav
      }
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
  console.log("toggleNav called");
  return dispatch => {
    dispatch({
      type: TOGGLE_NAV
    })
  }
}
