import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
storiesOf("Menu", module).add("Examples", () => (
  <div>
      <Menu id="menubar" mode="horizontal" className={scroll}>
        <Menu.Item type="logo">
          <img src="/logo.svg" alt="logo" />
        </Menu.Item>
        <div className="emptybar menu-item-no" />
        <Menu.Item>
          <span>Home</span>
        </Menu.Item>
        <Menu.Item>
          <span>About</span>
        </Menu.Item>

        <Menu.Item>
          <span>Resources</span>
        </Menu.Item>
        <Menu.Item>
          <span>Workspace</span>
        </Menu.Item>
        <Menu.Item type="profile">
          <img src="defaultProfile.png" alt="avatar" />
        </Menu.Item>
      </Menu>
        <div style={{marginTop:'75px'}}>
        <Header teamTitle="Team Turtles!" teamPictures={["defaultProfile.png", "defaultProfile.png"]} handleTeamClick={undefined}/>
        <p>Example use of menubar and header for workspace etc.</p>
        <Header title="Welcome!" back="Go back to workspace" handleBackClick={undefined}/>
        <p>Example use of menubar and header for workspace etc. with back button</p>
        <p>Adding type="white" to the menu changes it to white variant</p>
        <div style={{height:'1000px'}}></div>
        </div>
      </div>
));
