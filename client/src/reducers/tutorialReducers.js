import * as actions from 'actions/indexActions';

const defaultState = {
  isTutorialActive: true,
  isTutorialComplete: false, 
  shouldRenderTodoList: true, 
  disabledIconExceptions: null,
  step: 12,
  previousStep: null,
  todoBools: [false, false, false, false, false]
}

export const tutorial = (state = defaultState, action) => {
  switch (action.type) {
    case actions.TOGGLE_TUTORIAL_IS_ACTIVE:
      return {
        ...state,
        isTutorialActive: !state.isTutorialActive
      };
    case actions.TOGGLE_SHOULD_RENDER_MODAL:
      return {
        ...state,
        shouldRenderModal: !state.shouldRenderModal
      };
    case actions.UPDATE_SHOULD_RENDER_TODO_LIST:
      return {
        ...state,
        shouldRenderTodoList: action.bool
      };
    case actions.UPDATE_DISABLED_ICON_EXCEPTIONS:
      return {
        ...state,
        disabledIconExceptions: action.exceptions
      };
    case actions.INCREMENT_STEP:
      return {
        ...state,
        step: state.step + 1,
        previousStep: state.step
        
      };
    case actions.DECREMENT_STEP:
      return {
        ...state,
        step: state.step - 1,
        previousStep: state.step
      };
    case actions.SHOW_TUTORIAL_EXIT_SCREEN:
      return {
        ...state,
        step: 0,
        previousStep: state.step, 
      };
    case actions.SHOW_TUTORIAL_EXIT_SCREEN:
      return {
        ...state,
        step: state.previousStep,
        previousStep: null, 
      };
    case actions.COMPLETE_TODO:
      const { index } = action;
      
      const newArray = state.todoBools.map((bool, i) => {
        return i === index ? true : bool;
      })
      return {
        ...state,
        todoBools: newArray
      };
    default:
      return state;
  }
};

