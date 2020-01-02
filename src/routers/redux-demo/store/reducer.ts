import { ObjectUtils } from "ts-commons";
import { ActionType } from "../../../enums/actionType";
import { Actions } from "./actions";

export interface State {
  name: string;
  count: number;
}

export const initialState: State = {
  name: "redux-demo",
  count: 0
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.Demo_Dedux_ResetState: {
      return ObjectUtils.getOrDefault(action.payload, initialState);
    }
    case ActionType.Demo_Dedux_AddCount: {
      return Object.assign({}, state, { count: action.payload });
    }
    default: {
      return state;
    }
  }
}
