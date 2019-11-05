import * as React from 'react';
import {Radio as AntdRadio} from 'antd';

import './styles.less';

/* Default Button is medium sized */
export function Radio(props: any) {

  let pseudoProps = {...props};

  pseudoProps.className += " d4sdradio";
  return (
    <div className = "d4sdradio-wrapper">
      <AntdRadio {...pseudoProps}>{props.children}</AntdRadio>
    </div>
  )
}

Radio.Group =  AntdRadio.Group
