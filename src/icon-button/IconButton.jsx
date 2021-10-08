import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';

import { cssClasses } from './constants';

const IconButton = forwardRef(({
    icon,
    touch = false,

    element = 'button',
    component: Element = element,
    className,
    children = icon,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.MATERIAL_ICONS]: typeof children === 'string',
        [cssClasses.TOUCH]: touch
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <div className={cssClasses.RIPPLE} />

            <Clone
                component={children}
                className={cssClasses.ICON}
            />

            {touch &&
                <div className={cssClasses.TOUCH_ELEMENT} />
            }
        </Element>
    );
});

IconButton.displayName = 'MDCIconButton';

IconButton.propTypes = {
    icon: PropTypes.node
};

export default IconButton;