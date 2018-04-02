import {
  SET_CURRENT_WARRIOR,
  TOGGLE_CONSOLE,
  HIDE_CONSOLE,
  SHOW_CONSOLE,
  TOGGLE_FILE_MANAGER,
  SET_WARRIORS,
  LOAD_WARRIOR,
  SET_COLOURS
} from './actions'

import { defaultWarriors } from '../../helpers/defaultWarriors'
import blankWarrior from '../../helpers/blankWarrior'
import { colour } from '../common/theme'

// state
const initialState = {
  currentFileIndex: 0,
  currentWarrior: blankWarrior,
  warriors: [],
  warriorLibrary: defaultWarriors,
  standardId: 2, // TODO: what's the best standard to use as a default?
  displayConsole: false,
  displayFileManager: false,
  colours: colour.warrior
}

// selectors
export const getParserState = state => state.parser

// reducer
export default (state = initialState, action) => {
  switch (action.type) {

    case SET_CURRENT_WARRIOR:
      return {
        ...state,
        displayFileManager: false,
        currentWarrior: action.currentWarrior
      }

    case SET_WARRIORS:
      return {
        ...state,
        warriors: action.warriors
      }

    case SET_COLOURS:
      return {
        ...state,
        colours: action.colours
      }

    case LOAD_WARRIOR:
      return {
        ...state,
        currentWarrior: action.warrior
      }

    case TOGGLE_CONSOLE:
      return {
        ...state,
        displayConsole: !state.displayConsole
      }

    case HIDE_CONSOLE:
      return {
        ...state,
        displayConsole: false
      }

    case SHOW_CONSOLE:
      return {
        ...state,
        displayConsole: true
      }

    case TOGGLE_FILE_MANAGER:
      return {
        ...state,
        displayFileManager: !state.displayFileManager
      }

    default:
      return state
  }
}

