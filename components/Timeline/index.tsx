import * as React from 'react';
import {Timeline as AntdTimeline} from 'antd';

import './styles.less';

/* Default Button is medium sized */
export function Timeline(props: any) {

  let pseudoProps = {...props};

  pseudoProps.className += " d4sdtimeline";
  return (
    <div className = "d4sdtimeline-wrapper">
      <AntdTimeline {...pseudoProps}>{props.children}</AntdTimeline>
    </div>
  )
}

Timeline.Item = AntdTimeline.Item
