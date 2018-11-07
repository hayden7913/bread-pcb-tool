import { getActiveProject } from '../selectors/projectSelectors';
import * as actions from '../actions/indexActions';

export const TRIGGER_ANCHOR_UPDATE = 'TRIGGER_ANCHOR_UPDATE';
export const triggerAnchorUpdate = () => ({
  type: 'TRIGGER_ANCHOR_UPDATE',
});

export const UPDATE_ANCHOR_POSITIONS = 'UPDATE_ANCHOR_POSITIONS';
export const updateAnchorPositions = positions => ({
  type: 'UPDATE_ANCHOR_POSITIONS',
  positions,
});
// update updateBoardPositionFunction
export const UPDATE_BOARD_POSITION = 'UPDATE_BOARD_POSITION';
export const updateBoard = (newAttrs) => (dispatch, getState) => {
  const state = getState();
  const activeProject = getActiveProject(state);
  const { board: prevBoard, id } = activeProject;
  const newBoard = Object.assign({}, prevBoard, newAttrs);

  dispatch(actions.updateEntity('Project', id, { board: newBoard } ));
}

export const UPDATE_BOARD_STROKE = 'UPDATE_BOARD_STROKE';
export const updateBoardStroke = boardStroke => ({
  type: 'UPDATE_BOARD_STROKE',
  boardStroke,
});
