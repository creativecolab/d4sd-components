import * as React from 'react';
import './styles.less';
export function Header(props: any) {
  const classes = "d4sdworkspace-header " + props.className;
  return (
    <div {...props} className={classes} >
      <h1 className="header-title">{props.title}</h1>
    </div>
  )
}
