import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface PageProps extends RouteComponentProps {}

const Page = (props: PageProps) => {
  return (
    <div style={{ padding: "10px" }}>
      <div>current param: {props.location.search}</div>
    </div>
  );
};

export default withRouter(Page);
