import * as React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import subMenuStyles from "../../components/styles/subMenu.scss";
import ParamsLoader from "./routes/params/Loader";
import QueryLoader from "./routes/query/Loader";

const Page: React.FC = () => {
  return (
    <div style={{ padding: 10 }}>
      <div>
        <NavLink
          to="/url-params-demo?a=1&b=2"
          exact={true}
          activeClassName={subMenuStyles.active}
        >
          Query
        </NavLink>

        <span> / </span>
        <NavLink
          to="/url-params-demo/1"
          exact={true}
          activeClassName={subMenuStyles.active}
        >
          Params
        </NavLink>
      </div>
      <Switch>
        <Route path="/url-params-demo" exact={true} component={QueryLoader} />
        <Route
          path="/url-params-demo/:param"
          exact={true}
          component={ParamsLoader}
        />
      </Switch>
    </div>
  );
};

export default Page;
