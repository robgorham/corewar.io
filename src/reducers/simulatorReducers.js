import {
  INIT,
  STEP,
  RUN,
  PAUSE,
  RUN_PROGRESS,
  RUN_ENDED,
  GET_CORE_INSTRUCTIONS,
  SET_CORE_FOCUS,
  SET_PROCESS_RATE,
  SET_CORE_OPTIONS
} from './../actions/simulatorActions'

// state
const initialState = {
  isInitialised: false,
  isRunning: false,
  runProgress: 0,
  focus: null,
  roundResult: {},
  coreSize: 8000,
  minSeparation: 1,
  instructionLimit: 1,
  instructions: [],
  processRate: 1,
  processRates: [1, 2, 5, 12, 30, 75, 200],
  currentCoreOption: 1,
  coreOptions: [
    { id: 1, name: 'Default'},
    { id: 2, name: 'Nano' },
    { id: 3, name: 'Ltd Process' }
  ]
}

// selectors
export const getSimulatorState = state => state.simulator

// reducer
export default (state = initialState, action) => {
  switch (action.type) {

    case INIT:
      return {
        ...state,
        isInitialised: true,
        roundResult: {},
        runProgress: 0
      }

    case STEP:
      return {
        ...state
      }

    case RUN:
      return {
        ...state,
        isRunning: true
      }

    case PAUSE:
      return {
        ...state,
        isRunning: false
      }

    case RUN_PROGRESS:
      return {
        ...state,
        runProgress: action.data.runProgress
      }

    case RUN_ENDED:
      return {
        ...state,
        isRunning: false,
        roundResult: action.data
      }

    case GET_CORE_INSTRUCTIONS:
      return {
        ...state,
        coreInfo: action.coreInfo
      }

    case SET_CORE_FOCUS:
      return {
        ...state,
        focus: action.focus
      }

    case SET_PROCESS_RATE:
      return {
        ...state,
        processRate: action.rate
      }

    case SET_CORE_OPTIONS:
      return {
        ...state,
        currentCoreOption: action.id,
        coreSize: action.coreSize,
        minSeparation: action.minSeparation,
        instructionLimit: action.instructionLimit
      }

    default:
      return state
  }
}

