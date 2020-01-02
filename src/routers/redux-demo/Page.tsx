import * as React from "react";
import { useSelector } from "react-redux";
import { injectReducer } from "../../common/store";
import { ReducerKey } from "../../enums/reducerKey";
import AddCount from "./components/AddCount";
import { reducer, State } from "./store/reducer";

injectReducer(ReducerKey.Demo_Redux, reducer);

const Page: React.FC = () => {
  const { name, count } = useSelector(
    (state: { [ReducerKey.Demo_Redux]: State }) => {
      return state[ReducerKey.Demo_Redux];
    }
  );
  
  return (
    <div style={{ padding: 10 }}>
      <div>{name}</div>
      <br />
      <AddCount /> <div>count: {count}</div>
    </div>
  );
};

export default Page;
