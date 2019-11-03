import * as React from 'react';
import {Button as AntdButton} from 'antd';

import './styles.less';

/* Default Button is medium sized */
export function Button(props: any) {

  let pseudoProps = {...props};
  if (props.type == 'outline') {
      pseudoProps.className += ' d4sdbutton-outline';
  }
  else {
    pseudoProps.className += ' d4sdbutton';
  }
  return (
    <div className = "d4sdbutton-wrapper">
      <AntdButton {...pseudoProps}>{props.children}</AntdButton>
    </div>
  )
}

Button.Google = function(props: any) {

  let pseudoProps = {...props};
  pseudoProps.className += ' d4sdbutton-google';
  return (
    <div className = "d4sdbutton-wrapper">
      <AntdButton {...pseudoProps}>{props.children}</AntdButton>
    </div>
  )
}

Button.Facebook = function(props: any) {

  let pseudoProps = {...props};
  pseudoProps.className += ' d4sdbutton-facebook';
  return (
    <div className = "d4sdbutton-wrapper">
      <AntdButton {...pseudoProps}>{props.children}</AntdButton>
    </div>
  )
}
