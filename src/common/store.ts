import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, combineReducers, compose, createStore, Reducer, ReducersMapObject } from "redux";
import thunk from "redux-thunk";
import { ReducerKey } from "../enums/reducerKey";
import { history } from "./history";

const reducers: ReducersMapObject = {
  [ReducerKey.Router]: connectRouter(history),
};

export const store = createStore(
  combineReducers(reducers),
  undefined,
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

export function injectReducer(key: ReducerKey, r: Reducer): void {
  reducers[key] = r;
  store.replaceReducer(combineReducers(reducers));
}

export function removeReducer(key: string): void {
  if (typeof reducers[key] !== "undefined") {
    delete reducers[key];
    store.replaceReducer(combineReducers(reducers));
  }
}
