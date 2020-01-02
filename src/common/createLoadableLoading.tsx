import React from "react";
import Loadable from "react-loadable";
import Loading from "../components/app/Loading";

export default (props: Loadable.LoadingComponentProps) => {
  if (props.error) {
    return (
      <div>
        Error!{" "}
        <button onClick={props.retry} style={{ color: "#333" }}>
          Retry
        </button>
        <div>Details: {props.error.toString()}</div>
      </div>
    );
  }

  return props.pastDelay ? <Loading /> : null;
};
