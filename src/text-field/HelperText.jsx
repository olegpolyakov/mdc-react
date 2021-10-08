import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const HelperText = ({
    persistent = false,
    validation = false,

    ...props
}) => {
    const classNames = classnames(cssClasses.HELPER_TEXT, {
        [cssClasses.HELPER_TEXT_PERSISTENT]: persistent,
        [cssClasses.HELPER_TEXT_VALIDATION]: validation
    });

    return (
        <div className={classNames} {...props} />
    );
};

HelperText.displayName = 'MDCTextFieldHelperText';

HelperText.propTypes = {
    persistent: PropTypes.bool,
    validation: PropTypes.bool
};

export default HelperText;