import PropTypes from 'prop-types';

export const commonPropTypes = {
    element: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    children: PropTypes.node
};