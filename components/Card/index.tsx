import * as React from 'react';
import { Card as AntdCard } from "antd";
import './styles.less';
export function Card(props: any) {
    let pseudoProps = {...props};

    pseudoProps.className += " d4sdcard";
    return (
      <div className = "d4sdcard-wrapper">
        <AntdCard {...pseudoProps}>{props.children}</AntdCard>
      </div>
    )
}
Card.Meta = AntdCard.Meta;
