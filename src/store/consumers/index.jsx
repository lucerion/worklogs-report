import Context from '../contexts';
import PropTypes from 'prop-types';

const Consumer = ({ children }) => (
  <Context.Consumer>
    {children}
  </Context.Consumer>
);

Consumer.propTypes = {
  children: PropTypes.node,
};

export default Consumer;
