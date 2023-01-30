import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const opt = { good, neutral, bad };
  const option = Object.keys(opt);

  const onHandleClick = element => {
    switch (element) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = Object.values(opt).reduce((acc, total) => acc + total, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good * 100) / countTotalFeedback() || 0;
    return Math.round(positivePercentage);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={option} onLeaveFeedback={onHandleClick} />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section titleStat="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};
