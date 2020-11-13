import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(SegmentedButtonSegment);

function SegmentedButtonSegment({
    label,
    icon,
    selected,
    ripple,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}, ref) {
    const classNames = classnames('mdc-segmented-button__segment', {
        'mdc-segmented-button__segment--selected': selected
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            {...props}
        >
            {ripple &&
                <div className="mdc-segmented-button__ripple" />
            }

            {icon &&
                React.cloneElement(icon, {
                    className: classnames('mdc-segmented-button__icon', icon.props.className)
                })
            }

            {children &&
                <div className="mdc-segmented-button__label">{children}</div>
            }
        </Element>
    );
}

SegmentedButtonSegment.displayName = 'MDCSegmentedButtonSegment';

SegmentedButtonSegment.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    selected: PropTypes.bool,
    ripple: PropTypes.bool
};