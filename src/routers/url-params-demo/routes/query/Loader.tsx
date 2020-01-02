import * as React from "react";
import Loading from "../../../../components/app/Loading";

const Component = React.lazy(() =>
  import(/* webpackChunkName: "url-params-demo_query" */ "./Page"),
);

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    );
  }
}
