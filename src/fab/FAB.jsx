import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';

import { cssClasses } from './constants';

const FAB = forwardRef(({
    icon,
    label,
    leadingIcon = icon,
    trailingIcon,
    mini = false,
    exited = false,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.MINI]: mini,
        [cssClasses.EXTENDED]: label,
        [cssClasses.EXITED]: exited
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <div className={cssClasses.RIPPLE} />

            {leadingIcon &&
                <Clone
                    component={leadingIcon}
                    fallback={Icon}
                    className={cssClasses.ICON}
                />
            }

            {children &&
                <span className={cssClasses.LABEL}>{children}</span>
            }

            {trailingIcon &&
                <Clone
                    component={trailingIcon}
                    fallback={Icon}
                    className={cssClasses.ICON}
                />
            }
        </Element>
    );
});

FAB.displayName = 'MDCFAB';

FAB.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.node,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
    mini: PropTypes.bool,
    exited: PropTypes.bool
};

export default FAB;