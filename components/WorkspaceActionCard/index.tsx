import * as React from 'react';
import {Card, Progress, Button} from '../../';
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
    <Card className={!card.closed ? "WorkspaceActionCard" : "WorkspaceActionCard closed"}>
    <h2 className="card-title">{card.title}</h2>
    <div className="card-caret">
    <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
    </div>
    <p>{card.desc}</p>
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
    </Card>
  )
}
