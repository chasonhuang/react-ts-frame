import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { history } from "./common/history";
import { i18n } from "./common/i18n";
import loadable from "./common/loadable";
import { store } from "./common/store";
import Header from "./components/Header";
import "./components/styles/global.scss";
import HttpLoader from "./routers/http-demo/Loader";
import I18nLoader from "./routers/i18n-demo/Loader";
import IndexLoader from "./routers/index/Loader";
import PagesLoader from "./routers/pages-demo/Loader";
import ReduxLoader from "./routers/redux-demo/Loader";
import UrlParamsLoader from "./routers/url-params-demo/Loader";
import UserLoader from "./routers/user/Loader";

const ThemeLoader = loadable(() =>
  import(/* webpackChunkName: "theme_demo" */ "./routers/theme-demo/Page")
);

class Page extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConfigProvider
            locale={zh_CN}
            autoInsertSpaceInButton={false}
            // renderEmpty={() => <Empty />}
          >
            <ConnectedRouter history={history}>
              <div className="app">
                <div className="header">
                  <Header />
                </div>
                <div className="content">
                  <Switch>
                    <Route path="/" exact={true} component={IndexLoader} />
                    <Route path="/redux-demo" component={ReduxLoader} />
                    <Route path="/http-demo" component={HttpLoader} />
                    <Route path="/pages-demo" component={PagesLoader} />
                    <Route
                      path="/url-params-demo"
                      component={UrlParamsLoader}
                    />
                    <Route path="/i18n-demo" component={I18nLoader} />
                    <Route path="/theme-demo" component={ThemeLoader} />
                    <Route path="/user" component={UserLoader} />
                  </Switch>
                </div>
              </div>
            </ConnectedRouter>
          </ConfigProvider>
        </Provider>
      </I18nextProvider>
    );
  }

  public show() {
    console.log(123);
  }
}

export default Page;
