import * as React from 'react';
import './styles.less';
const arrow = require("./arrow.svg") as string;
export function Header(props: any) {
  const classes = "d4sdworkspace-header " + props.className;
const listItems = props.teamPictures ? props.teamPictures.map((pic: any) =>
  <img src={pic} className="team-member-pic"></img>
) : undefined;
  return (
    <div className={classes} >
      {props.back && <div className="go-back-bar" onClick={props.handleBackClick}><img src={arrow} className="go-back-arrow"></img><span className="go-back">{props.back}</span></div>}
      <h1 className="header-team-title">{props.teamTitle}</h1>
      <h1 className="header-title">{props.title}</h1>
      <div className="team-info">
        {listItems}
        {listItems && <span className="see-team" onClick={props.handleTeamClick}>See Team</span>}
      </div>
    </div>
  )
}
