import * as React from 'react';
import {Menu as AntdMenu} from 'antd';

import './styles.less';

export function Menu(props: any) {

  let pseudoProps = {...props};

  pseudoProps.className += " d4sdmenu";
  if (props.type == "white") {
    pseudoProps.className += " d4sdmenu-white";
  }
  return (
    <div className = "d4sdmenu-wrapper">
      <AntdMenu {...pseudoProps}>{props.children}</AntdMenu>
    </div>
  )
}

Menu.Item = (props: any) => {
  let pseudoProps = {...props};

  if (props.type === "logo") {
    pseudoProps.className += " menu-item-no menu-logo"
  }
  else if (props.type === "profile") {
      pseudoProps.className += " menu-item-no menu-profile"
  }
  else {
    pseudoProps.className += " menu-item";
  }
  return (
    <AntdMenu.Item {...pseudoProps}>{props.children}</AntdMenu.Item>
  )
}
