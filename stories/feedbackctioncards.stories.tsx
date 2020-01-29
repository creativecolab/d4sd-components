import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FeedbackActionCard } from '../components/FeedbackActionCard';
const cards = [
  {
    name: 'Bill Joe',
    dateBack: new Date('02/02/2020, 11:59:00 PM'),
    feedbacklink: 'https://corgiorgy.com/'
  },
  {
    name: 'Jane Doe',
    dateBack: new Date('02/02/2020, 11:59:00 PM'),
    feedbacklink: 'https://corgiorgy.com/'
  },
  {
    name: 'Kangaroo Koala',
    dateBack: new Date('02/02/2020, 11:59:00 PM'),
    feedbacklink: 'https://corgiorgy.com/'
  }
];
storiesOf('Feedback Action Cards', module).add('Examples', () => (
  <div className="storycontainer">
    <div className="story-module" style={{ marginTop: '50px' }}>
      {cards.map(card => {
        return (
          <div>
            <FeedbackActionCard card={card} />
          </div>
        );
      })}
    </div>
  </div>
));
