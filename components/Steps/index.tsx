import * as React from 'react';
import { Steps as AntdSteps } from "antd";
import './styles.less';
export function Steps(props: any) {
    let pseudoProps = {...props};


    if (props.size == 'small') {
      pseudoProps.className += " d4sdstep-small";
    }
    else {
      pseudoProps.className += " d4sdstep";
    }
    return (
      <div className = "d4sdstep-wrapper">
        <AntdSteps {...pseudoProps}>{props.children}</AntdSteps>
      </div>
    )
}
Steps.Step = AntdSteps.Step;
