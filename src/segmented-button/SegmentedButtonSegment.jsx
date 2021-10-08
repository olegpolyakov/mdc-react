import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';

import { cssClasses } from './constants';

const SegmentedButtonSegment = forwardRef(({
    label,
    icon,
    selected,
    touch,
    ripple,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.SEGMENT, {
        [cssClasses.SEGMENT_SELECTED]: selected,
        [cssClasses.TOUCH]: touch
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            {...props}
        >
            {ripple &&
                <div className={cssClasses.RIPPLE} />
            }

            {touch &&
                <div className={cssClasses.TOUCH_ELEMENT} />
            }

            {icon &&
                <Clone
                    component={icon}
                    fallback={Icon}
                    className={cssClasses.ICON}
                />
            }

            {children &&
                <span className={cssClasses.LABEL}>{children}</span>
            }
        </Element>
    );
});

SegmentedButtonSegment.displayName = 'MDCSegmentedButtonSegment';

SegmentedButtonSegment.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    selected: PropTypes.bool,
    ripple: PropTypes.bool
};

export default SegmentedButtonSegment;