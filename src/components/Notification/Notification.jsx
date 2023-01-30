import PropTypes from 'prop-types';
import { Name } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <Name>{message}</Name>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
