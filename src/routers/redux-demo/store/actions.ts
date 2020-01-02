import { ActionType } from "../../../enums/actionType";
import { State } from "./reducer";

export interface ResetStateAction {
  type: ActionType.Demo_Dedux_ResetState;
  payload?: State;
}

export interface AddCountAction {
  type: ActionType.Demo_Dedux_AddCount;
  payload: number;
}

export type Actions = ResetStateAction | AddCountAction;

/**
 * reset state
 * @param state State
 */
export function resetState(state?: State): ResetStateAction {
  return {
    type: ActionType.Demo_Dedux_ResetState,
    payload: state
  };
}

/**
 * add count
 * @param count number
 */
export function addCount(count: number): AddCountAction {
  return {
    type: ActionType.Demo_Dedux_AddCount,
    payload: count
  };
}
