import * as React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { I18nNamespace } from "../../enums/i18nNamespace";
import styles from "./styles.scss";

const header = I18nNamespace.Header;

export interface HeaderProps extends WithTranslation {}
export interface HeaderState {
  isMenuListOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  private bodyOverflow = document.body.style.overflow;

  public constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isMenuListOpen: false
    };
  }

  public render() {
    const { t } = this.props;
    const { isMenuListOpen } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <NavLink
            to="/"
            exact={true}
            className={styles.navLink}
            activeClassName={styles.active}
          >
            {t(`${header}:__navName.index`, { defaultValue: "首页" })}
          </NavLink>
          <div className={styles.narrow}>
            <div style={{ height: "100%", display: "flex" }}>
              <div style={{ flex: "auto" }} />
              <div>
                {isMenuListOpen ? (
                  <button onClick={this.closeMenu}>
                    {t(`${header}:__navName.close`)}
                  </button>
                ) : (
                  <button onClick={this.openMenu}>
                    {t(`${header}:__navName.open`)}
                  </button>
                )}
              </div>
              <div style={{ width: "10px" }} />
            </div>
            {isMenuListOpen ? this.renderMenuList() : null}
          </div>
          <div className={styles.wide}>{this.renderMenuList()}</div>
        </div>
      </div>
    );
  }

  /**
   * render menu list
   */
  private renderMenuList = () => {
    const { t } = this.props;
    return (
      <div className={styles.menuList}>
        <NavLink
          to="/redux-demo"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          {t(`${header}:__navName.redux`, { defaultValue: "Redux 示例" })}
        </NavLink>
        <NavLink
          to="/http-demo"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          {t(`${header}:__navName.http`)}
        </NavLink>
        <NavLink
          to="/pages-demo"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          {t(`${header}:__navName.pages`)}
        </NavLink>
        <NavLink
          to="/url-params-demo"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          {t(`${header}:__navName.url`)}
        </NavLink>
        <NavLink
          to="/i18n-demo"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          {t(`${header}:__navName.i18n`)}
        </NavLink>
        <NavLink
          to="/theme-demo"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          {t(`${header}:__navName.theme`)}
        </NavLink>
        <NavLink
          to="/user"
          className={styles.navLink}
          activeClassName={styles.active}
        >
          {t(`${header}:__navName.user`)}
        </NavLink>
      </div>
    );
  };

  /**
   * open menu
   */
  private openMenu = () => {
    this.setState({ isMenuListOpen: true });
    document.body.style.overflow = "hidden";
  };

  /**
   * close menu
   */
  private closeMenu = () => {
    document.body.style.overflow = this.bodyOverflow;
    this.setState({ isMenuListOpen: false });
  };
}

export default withTranslation([I18nNamespace.Header])(Header);
