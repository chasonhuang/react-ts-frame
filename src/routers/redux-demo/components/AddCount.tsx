import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCount, resetState } from "../store/actions";

const AddCount: React.FC = () => {
  const dispatch = useDispatch();

  const [countState, setCountState] = useState<number>(0);

  const add = () => {
    setCountState(countState + 1);
  };

  const clear = () => {
    setCountState(0);
    dispatch(resetState());
  };

  useEffect(() => {
    dispatch(addCount(countState));
  }, [countState]);

  return (
    <div>
      <button onClick={add}>Add</button>
      <span> / </span>
      <button onClick={clear}>clear</button>
    </div>
  );
};

export default AddCount;
