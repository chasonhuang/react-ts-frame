import { ObjectUtils } from "ts-commons";
import { tabs, Tab, Tabs } from "./states/tabs";
import { UPDATE_STATE, Actions, RESET_STATE } from "./actions";

export { Tab, Tabs };

export interface State {
  isTabActive: boolean;
  tabs: Tabs;
}

export const getInitialState: () => State = () => ({
  isTabActive: true,
  tabs,
});

export function reducer(state = getInitialState(), action: Actions): State {
  switch (action.type) {
    case RESET_STATE: {
      return ObjectUtils.getOrDefault(action.payload, getInitialState());
    }
    case UPDATE_STATE: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
