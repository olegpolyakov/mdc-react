import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const HelperText = ({
    validation = false,
    persistent = false,

    element: Element = 'p',
    ...props
}) => {
    const classNames = classnames(cssClasses.HELPER_TEXT, {
        [cssClasses.VALIDATION_MESSAGE]: validation,
        [cssClasses.VALIDATION_MESSAGE_PERSISTENT]: persistent
    });

    return (
        <Element className={classNames} {...props} />
    );
};

HelperText.displayName = 'MDCSelectHelperText';

HelperText.propTypes = {
    persistent: PropTypes.bool,
    validation: PropTypes.bool
};

export default HelperText;