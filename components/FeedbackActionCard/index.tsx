import * as React from 'react';
import { Button } from '../../';
import './styles.less';

export function FeedbackActionCard(props: {
  card: {
    name?: string;
    dateBack?: Date;
    feedbacklink?: string;
  };
}) {
  let card = props.card;
  return (
    <div className="FeedbackActionCardWrapper">
      <div className="FeedbackActionCard">
        <div className="text">
          <h1>Feedback From {card.name}</h1>
          <p>{card.dateBack!.toDateString()}</p>
        </div>
        <a href={card.feedbacklink}>
          <Button className="copy-btn" type="primary-outline" size="small">
            VIEW FEEDBACK
          </Button>
        </a>
      </div>
    </div>
  );
}
