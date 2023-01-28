import PropTypes from 'prop-types';
import { Counter } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Counter className="counter">
        <span className="counterGood">Good: {good}</span>
        <span className="counterNeutral">Neutral: {neutral}</span>
        <span className="counterBad">Bad: {bad}</span>
        <span className="counterTotal">Total: {total}</span>
        <span className="counterPositive">
          Positive feedback: {positivePercentage} %
        </span>
      </Counter>
    </>
  );
};

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
