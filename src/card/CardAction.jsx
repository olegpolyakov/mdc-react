import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';

import { cssClasses } from './constants';

export default function CardAction({
    button = false,
    icon = false,

    component,
    className,
    children = component,
    ...props
}) {
    const classNames = classnames(cssClasses.ACTION, {
        [cssClasses.ACTION_BUTTON]: button,
        [cssClasses.ACTION_ICON]: icon
    }, className);

    return (
        <Clone
            component={children}
            className={classNames}
            {...props}
        />
    );
}

CardAction.displayName = 'MDCCardAction';

CardAction.propTypes = {
    button: PropTypes.bool,
    icon: PropTypes.bool
};