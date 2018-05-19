export const RESIZE = 'nav/screenResize'
export const TOGGLE = 'nav/toggleNav'
export const SHOWSUB = 'nav/showSubMenu'
export const SCREEN_RESIZE = 'nav/SCREEN_RESIZE'
export const TOGGLE_NAV = 'nav/TOGGLE_NAV'
export const SHOW_SUB = 'nav/SHOW_SUB'
const minWidth = 786

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
  showNav: window.innerWidth > minWidth ? true : false,
  mobile: window.innerWidth < minWidth ? true : false,
  target: null
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
    case SHOW_SUB:
      return {
        ...state,
        target: action.target
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
  return dispatch => {
    dispatch({
      type: TOGGLE_NAV
    })
  }
}

export const showSubMenu = (target) => {
  return dispatch => {
    dispatch({
      type: SHOW_SUB,
      target: target
    })
  }
}
