import React from "react";
import { Theme } from "../../enums/theme";

class Page extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div style={{ padding: "10px" }}>
        <div>theme-demo</div>
        <br />
        <div>
          <button onClick={() => this.changeTheme(Theme.White)}>white</button>
          <span> / </span>
          <button onClick={() => this.changeTheme(Theme.Black)}>black</button>
        </div>
      </div>
    );
  }

  private changeTheme = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    const HTML_NODE = document.getElementsByTagName("html")[0];
    HTML_NODE.setAttribute("theme", theme);
  };
}

export default Page;
