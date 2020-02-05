import * as React from 'react';
import './styles.less';
export function Header(props: any) {
  const classes = "d4sdworkspace-header " + props.className;
const listItems = props.teamPictures ? props.teamPictures.map((pic: any) =>
  <img src={pic} className="team-member-pic"></img>
) : undefined;
  return (
    <div className={classes} >
      {props.back && <div className="go-back-bar" onClick={props.handleBackClick}><svg className="go-back-arrow" width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.585802 13.5858C-0.195247 14.3668 -0.195247 15.6332 0.585802 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1422 29.1421C16.9232 28.3611 16.9232 27.0948 16.1422 26.3137L4.82844 15L16.1422 3.68629C16.9232 2.90524 16.9232 1.63891 16.1422 0.857864C15.3611 0.0768158 14.0948 0.0768158 13.3137 0.857864L0.585802 13.5858ZM38.2216 13L2.00002 13V17L38.2216 17V13Z" fill="#25497A"/>
      </svg>
      <span className="go-back">{props.back}</span></div>}
      <h1 className="header-team-title">{props.teamTitle}</h1>
      <h1 className="header-title">{props.title}</h1>
      <div className="team-info">
        {listItems}
        {listItems && <span className="see-team" onClick={props.handleTeamClick}>See Team</span>}
      </div>
    </div>
  )
}
