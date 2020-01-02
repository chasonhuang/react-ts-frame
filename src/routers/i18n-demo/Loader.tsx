import React from "react";
import ErrorBoundary from "../../components/app/ErrorBoundary";
import Loading from "../../components/app/Loading";

const Component = React.lazy(() =>
  import(/* webpackChunkName: "i18n_demo" */ "./Page")
);

const Loader: React.FC = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Loader;
