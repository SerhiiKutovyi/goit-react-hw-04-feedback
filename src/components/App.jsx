import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, total) => acc + total,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.state.good * 100) / this.countTotalFeedback() || 0;
    return Math.round(positivePercentage);
  };

  onHandleClick = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  render() {
    const option = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.onHandleClick}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section titleStat="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
