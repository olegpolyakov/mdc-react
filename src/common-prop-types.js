import PropTypes from 'prop-types';

export default {
    element: PropTypes.string,
    component: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
    className: PropTypes.string,
    children: PropTypes.node
};