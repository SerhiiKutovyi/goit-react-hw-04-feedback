import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, titleStat, children }) => {
  return (
    <Title>
      {title && <h2>{title}</h2>}
      {titleStat && <h3>{titleStat}</h3>}
      {children}
    </Title>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  titleStat: PropTypes.string,
};
