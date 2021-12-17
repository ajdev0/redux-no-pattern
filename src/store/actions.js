import * as actions from "./actionTypes";

export const bugAdd = (description) => {
  return {
    type: actions.BUG_ADDED,
    payload: { description },
  };
};
export const bugRemove = (id) => {
  return {
    type: actions.BUG_REMOVED,
    payload: { id },
  };
};
export const bugResolve = (id) => {
  return {
    type: actions.BUG_RESOLVED,
    payload: { id },
  };
};
