// import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Button>
      <>
        {options.map(ele => {
          return (
            <button
              key={ele}
              type="button"
              name={ele}
              onClick={() => onLeaveFeedback(ele)}
            >
              {ele}
            </button>
          );
        })}
      </>
    </Button>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
