import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';
import { cssClasses } from './constants';

const Button = forwardRef(({
    label,
    icon,
    leadingIcon = icon,
    trailingIcon,
    raised = false,
    unelevated = false,
    outlined = false,
    touch = false,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.RAISED]: raised,
        [cssClasses.UNELEVATED]: unelevated,
        [cssClasses.OUTLINED]: outlined,
        [cssClasses.TOUCH]: touch,
        [cssClasses.ICON_LEADING]: Boolean(leadingIcon),
        [cssClasses.ICON_TRAILING]: Boolean(trailingIcon)
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <span className={cssClasses.RIPPLE} />

            {touch &&
                <span className={cssClasses.TOUCH_ELEMENT} />
            }

            {leadingIcon &&
                <Clone
                    component={leadingIcon}
                    fallback={Icon}
                    className={cssClasses.ICON}
                    aria-hidden="true"
                />
            }

            <span className={cssClasses.LABEL}>{children}</span>

            {trailingIcon &&
                <Clone
                    component={trailingIcon}
                    fallback={Icon}
                    className={cssClasses.ICON}
                    aria-hidden="true"
                />
            }
        </Element>
    );
});

Button.displayName = 'MDCButton';

Button.propTypes = {
    label: PropTypes.node,
    icon: PropTypes.node,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
    raised: PropTypes.bool,
    unelevated: PropTypes.bool,
    outlined: PropTypes.bool,
    touch: PropTypes.bool
};

export default Button;