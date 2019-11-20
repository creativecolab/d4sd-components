import * as React from 'react';
import {Input as AntdInput} from 'antd';

import './styles.less';

export function Input(props: any) {

  let pseudoProps = {...props};

  pseudoProps.className += " d4sdinput";
  return (
    <div className = "d4sdinput-wrapper">
      <AntdInput {...pseudoProps}>{props.children}</AntdInput>
    </div>
  )
}

Input.Password = AntdInput.Password;
