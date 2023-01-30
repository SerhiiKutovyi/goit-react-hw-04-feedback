import { useState, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const opt = { good, neutral, bad };
  const option = Object.keys(opt);

  useEffect(() => {
    const onHandleClick = event => {
      console.log(event);
      setGood(prevState => prevState + 1);
      setNeutral(prevState => prevState + 1);
      setBad(prevState => prevState + 1);
    };
  }, []);

  const onHandleClick = event => {
    console.log(event);
    setGood(prevState => prevState + 1);
    setNeutral(prevState => prevState + 1);
    setBad(prevState => prevState + 1);
  };

  console.log(opt);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={option} onLeaveFeedback={onHandleClick} />
      </Section>
      {/* {this.countTotalFeedback() === 0 ? (
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
      )} */}
    </>
  );
};

// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const total = Object.values(this.state).reduce(
//       (acc, total) => acc + total,
//       0
//     );
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const positivePercentage =
//       (this.state.good * 100) / this.countTotalFeedback() || 0;
//     return Math.round(positivePercentage);
//   };

//   onHandleClick = event => {
//     this.setState(prevState => ({
//       [event]: prevState[event] + 1,
//     }));
//   };

//   render() {
//     const option = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={option}
//             onLeaveFeedback={this.onHandleClick}
//           />
//         </Section>
//         {this.countTotalFeedback() === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Section titleStat="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           </Section>
//         )}
//       </>
//     );
//   }
// }
