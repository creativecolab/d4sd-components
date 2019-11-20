import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Menu } from "../";
import { Header } from "../";
storiesOf("Menu", module).add("Examples", () => (
  <div>
      <Menu id="menubar" mode="horizontal" className={scroll}>
        <Menu.Item className="menu-item-no menu-logo">
          <img src="/logo.svg" alt="logo" />
        </Menu.Item>
        <div className="emptybar menu-item-no" />
        <Menu.Item className="menu-item">
          <span>Home</span>
        </Menu.Item>
        <Menu.Item className="menu-item">
          <span>About</span>
        </Menu.Item>

        <Menu.Item className="menu-item">
          <span>Resources</span>
        </Menu.Item>
        <Menu.Item className="menu-item">
          <span>Workspace</span>
        </Menu.Item>
        <Menu.Item className="menu-profile menu-item-no">
          <img src="defaultProfile.png" alt="avatar" />
        </Menu.Item>
      </Menu>
        <div style={{marginTop:'75px'}}>
        <Header title="Welcome!" />
        <p>Example use of menubar and header for workspace etc.</p>
        <Header title="Welcome!" back="Go back to workspace" />
        <p>Example use of menubar and header for workspace etc. with back button</p>
        <div style={{height:'1000px'}}></div>
        </div>
      </div>
));
