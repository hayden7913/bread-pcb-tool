import * as actions from 'actions/indexActions';

import doesModifyProject from 'helpers/doesModifyProject';

export const board = (state = {}, action) => {
  switch (action.type) {

    case actions.UPDATE_ANCHOR_POSITIONS:
      return {
        ...state,
        checkCollisionTrigger: !state.checkCollisionTrigger,
      };
      break;
    case actions.UPDATE_BOARD_DIMENSIONS:
      return {
        ...state,
        width: action.dimensions.width,
        height: action.dimensions.height,
      };
      break;
    case actions.UPDATE_BOARD_POSITION:
      return {
        ...state,
        x: action.position.x,
        y: action.position.y,
      };
      break;
    case actions.UPDATE_BOARD_STROKE:
      return {
        ...state,
        stroke: action.boardStroke,
      };
      break;
    case actions.UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        savedThumbnail: state.tempThumbnail,
      };
    break;
    case actions.FECTCH_PROJECT_BY_ID_SUCCESS:
    case actions.POST_PROJECT_SUCCESS:
      const board = action.project.board;
      const { x, y, width, height, thumbnail } = board;

      return {
        ...state,
        x,
        y,
        width,
        height,
      };
      break;
    default:
      return state;
  }
};

const defaultAnchorPositions = {
  updateAnchorTrigger: false,
  topLeft: { x: 0, y: 0 },
  topRight: { x: null, y: 0 },
  bottomLeft: { x: 0, y: null },
  bottomRight: { x: null, y: null },
};

export const anchorPositions = (state = defaultAnchorPositions, action) => {
  switch (action.type) {
    case actions.UPDATE_ANCHOR_POSITIONS:
      return {
        ...state,
        ...action.positions
      }
      break;
    case actions.TRIGGER_ANCHOR_UPDATE:
      return {
        ...state,
        updateAnchorTrigger: !state.updateAnchorTrigger,
      };
      break;
    case actions.FECTCH_PROJECT_BY_ID_SUCCESS:
    case actions.POST_PROJECT_SUCCESS:
      return defaultAnchorPositions;
      break;
    default:
      return state;
  }
};
