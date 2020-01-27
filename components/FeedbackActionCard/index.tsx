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
        <h1>Feedback From {card.name}</h1>
        <p>{card.dateBack!.toDateString()}</p>
        <a href={card.feedbacklink}>
          <Button className="copy-btn" type="primary-outline" size="small">
            COPY URL
          </Button>
        </a>
      </div>
    </div>
  );
}
