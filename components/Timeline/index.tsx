import * as React from 'react';
import {Timeline as AntdTimeline} from 'antd';

import './styles.less';

/* Default Button is medium sized */
export function Timeline(props: any) {

  let pseudoProps = {...props};
  if (props.type == 'card') {
      pseudoProps.className += " d4sdtimeline";
  }
  return (
    <div className = "d4sdtimeline-wrapper">
      <AntdTimeline {...pseudoProps}>{props.children}</AntdTimeline>
    </div>
  )
}

Timeline.Item = (props: any) => {
    return (
        <div className = 'd4sdtimeline-item-wrapper'>
            <div className = 'd4sdtimeline-item-pretext'>{props.pretext}</div>
            <AntdTimeline.Item {...props}>{props.children}</AntdTimeline.Item>
        </div>
    )
}
