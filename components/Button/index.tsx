import * as React from 'react';
import {default as AntdButton} from 'antd/es/button';

import './styles.less';

/* Default Button is medium sized */
export function Button(props: any) {

  let pseudoProps = {...props};
  if (props.type == 'primary-outline') {
    pseudoProps.className += ' d4sdbutton d4sdbutton-primary d4sdbutton-outline';
  }
  else if (props.type == 'secondary-outline') {
    pseudoProps.className += ' d4sdbutton d4sdbutton-secondary d4sdbutton-outline';
  }
  else if (props.type == 'primary') {
    pseudoProps.className += ' d4sdbutton d4sdbutton-primary';
  }
  else if (props.type == 'secondary') {
    pseudoProps.className += ' d4sdbutton d4sdbutton-secondary';
  }
  else {
    pseudoProps.className += ' d4sdbutton d4sdbutton-primary';
  }
  if (props.size == 'medium') {
    pseudoProps.className += ' d4sdbutton-medium'
  }
  else if (props.size == 'large') {
    pseudoProps.className += ' d4sdbutton-large'
  }
  else if (props.size == 'small') {
    pseudoProps.className += ' d4sdbutton-small'
  }
  else {
    pseudoProps.className += ' d4sdbutton-medium'
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
