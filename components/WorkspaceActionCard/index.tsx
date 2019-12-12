import * as React from 'react';
import {Progress, Button, Collapse} from '../../';
const { Panel } = Collapse;
import './styles.less'

export function WorkspaceActionCard(props: any) {
  const card = props.card;
  const calcPercentTimeLeft = (dueDate: Date) => {
    let currDate = new Date();
    // @ts-ignore
    let timeLeft: number = (dueDate - currDate);

    let hoursLeft = timeLeft/(1000 * 60 *60);
    return (hoursLeft / (30 * 24)) * 100
  }
  const calcDaysLeft = (dueDate: Date) => {
    let currDate = new Date();
    // @ts-ignore
    let timeLeft: number = (dueDate - currDate);

    let daysLeft = timeLeft/(1000 * 60 * 60 * 24);
    return Math.floor(daysLeft).toFixed(0);
  }
  return (
    <Collapse accordion className="WorkspaceActionCardWrapper">
    <Panel
    key="1"
    header={<div className={!card.closed ? "WorkspaceActionCard" : "WorkspaceActionCard closed"}>
    <h2 className="card-title">{card.title}</h2>
    <p className="card-short-desc">{card.shortDesc}</p>
      { !card.closed && card.dueDate && (card.submitted || !card.submitted) &&
      <div>
        <div className="card-status">{card.submitted ? <span className="submitted">SUBMITTED </span> : <span className="no-submit">NO SUBMISSION</span>}</div>
        <Progress percent={calcPercentTimeLeft(card.dueDate)} status={card.submitted ? "success" : undefined} className={card.submitted ? "progressBar success" : "progressBar warning"}/>
        <div className="card-dates">DUE:
          <span className={card.submitted ? "due-date success" : "due-date warning"}>{" " + card.dueDate.toLocaleDateString() + " " + card.dueDate.toLocaleTimeString()}</span>
          <span className="days-left">{calcDaysLeft(card.dueDate)} DAYS LEFT</span>
        </div>

      </div> }
      {card.buttonTitle && <div className="btn-wrapper"><Button type="primary-outline" size="large" onClick={card.buttonHandleClick}>{card.buttonTitle}</Button></div> }
    </div>}
      className="panelCard"
    >
    {card.descHTML && <p dangerouslySetInnerHTML={{__html:card.descHTML}}></p>}
    {card.desc && <p>{card.desc}</p>}
    </Panel>
    </Collapse>
  )
}
