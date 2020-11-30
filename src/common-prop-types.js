import PropTypes from 'prop-types';

export default {
    element: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    children: PropTypes.node
};