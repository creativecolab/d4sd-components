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

Menu.Item = AntdMenu.Item;
