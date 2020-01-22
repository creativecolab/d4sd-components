import * as React from 'react';
import {Progress, Button} from '../../';
import './styles.less'

export function WorkspaceActionCard(props:
  {
    card: {
      submitState?:string | "saved" | "none" | "submitted" | "waitForFeedback" | "feedback",
      closed?:boolean,
      title?:string,
      shortDesc?: string,
      dueDate?: Date,
      startDate?: Date,
      active?: boolean,
      buttonTitle?: string,
      buttonHandleClick?: Function,
      descHTML?: string,
      desc?: string,
      feedbacklink?: string,
      feedback?: number
    }
  }
) {
  let card = props.card;
  let [collapsed, setCollpased] = React.useState(true);

  const calcPercentTimeLeft = (dueDate: Date, startDate: Date) => {
    let currDate = new Date();
    // @ts-ignore
    let timeLeft: number = (dueDate - currDate);
    // @ts-ignore
    let totalTime: number = (dueDate - startDate);
    return (timeLeft / totalTime) * 100
  }
  const calcDaysLeft = (dueDate: Date, startDate: Date) => {
    let currDate = new Date();
    // @ts-ignore
    let timeLeft: number = (dueDate - currDate);

    let daysLeft = timeLeft/(1000 * 60 * 60 * 24);
    return Math.floor(daysLeft).toFixed(0);
  }
  const [linkToFeedback, setLinkToFeedback] = React.useState('LINK GOES HERE');

  /* eslint-disable */
  const setURL = (): void => {
    const inputField = copyRef.current;
    // @ts-ignore
    if (inputField) inputField.value = linkToFeedback;
  };

  const copyURL = (): void => {
    const copyText = copyRef.current;
    // @ts-ignore
    if (copyText) {
      copyText.select();
      // @ts-ignore
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
    }
  };
  const copyRef: React.RefObject<HTMLInputElement> = React.createRef();
  React.useEffect(() => {
    console.log(copyRef)
    let link = card.feedbacklink ? card.feedbacklink : "";
    setLinkToFeedback(link);
    setCollpased(true);
    setURL();
  // eslint-disable-next-line
});
  return (
    <div className="WorkspaceActionCardWrapper">
        <div className={!card.closed ? "WorkspaceActionCard" : "WorkspaceActionCard closed"}>
          <div className="top" onClick={()=>{
            setCollpased(!collapsed);
          }}>
            <h2 className="card-title">{card.title}</h2>
            <div className="arrow">></div>
          </div>
          {collapsed ? <p className="card-short-desc">{card.shortDesc}</p> : card.descHTML && <p dangerouslySetInnerHTML={{__html:card.descHTML}}></p>}
            { !card.closed && card.dueDate && card.startDate && (card.submitState || !card.submitState) &&
            <div>
              <div className="card-status">
              {card.submitState === "submitted" && <span className="submitted">SUBMITTED</span>}
              {card.submitState === "saved" && <span className="inprogress-submit">PROGRESS SAVED</span>}
              {card.submitState === "none" && <span className="no-submit">NO SUBMISSION</span>}
              {card.submitState === "waitForFeedback" && <span className="feedback-submit">SUBMITTED, WAITING FOR FEEDBACK</span>}
              {card.submitState === "feedback" &&
                <div className={card.feedback! > 0 ? "feedback-new" : "feedback-none"}>
                  <div className="feedback-count"><span>{card.feedback}</span></div>
                  <span className="feedback-text">NEW FEEDBACK</span>
                </div>
              }
              </div>
              {(card.submitState !== "waitForFeedback" && card.submitState !== "feedback") &&[
              <Progress
                percent={calcPercentTimeLeft(card.dueDate, card.startDate)}
                status={card.submitState === "submitted" ? "success" : undefined}
                className={card.submitState === "submitted" ? "progressBar success" : (card.submitState === "saved" ? "progressBar progress" : "progressBar warning")}
                />,
              <div className="card-dates">DUE:
                <span className={card.submitState === "submitted" ? "due-date success" : (card.submitState === "saved" ? "due-date progress" : "due-date warning")}>{" " + card.dueDate.toLocaleDateString() + " " + card.dueDate.toLocaleTimeString()}</span>
                <span className="days-left">{calcDaysLeft(card.dueDate, card.startDate)} DAYS LEFT</span>
              </div>]
              }
            </div> }
            {card.feedbacklink &&
              <div className="share-feedback-wrapper">
              <p>Share your unique url to ask for feedback</p>
              <div className="copy-container">
                <input className="copy-link" id="copyLink" ref={copyRef} />
                <Button
                  className="copy-btn" type="primary-outline" size="small"
                  onClick={(): void => { copyURL(); }}
                >
                  COPY URL
                </Button>
              </div>
              </div>
            }
            {card.buttonTitle && <div className="btn-wrapper">
            {card.active === true ? <Button type="primary-outline" size="large" onClick={card.buttonHandleClick}>{card.buttonTitle}</Button> :
                           <Button type="primary-outline" size="large" disabled onClick={card.buttonHandleClick}>{card.buttonTitle}</Button>
                         }
            </div> }
      </div>

    </div>
  )
}
