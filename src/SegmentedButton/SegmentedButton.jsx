import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isUndefined, isArray } from '../types';
import SegmentedButtonSegment from './SegmentedButtonSegment';

export default React.forwardRef(SegmentedButton);

function SegmentedButton({
    segments,
    value,
    singleSelect = value && !isArray(value),
    onChange = Function.prototype,

    element = 'div',
    component: Element = element,
    className,
    children = segments?.map(segment => React.createElement(SegmentedButtonSegment, segment)),
    ...props
}, ref) {
    const handleClick = useCallback(event => {
        const segmentValue = event.currentTarget.value;
        const newValue = singleSelect ? segmentValue :
            (value.includes(segmentValue) ?
                value.filter(v => v !== segmentValue) :
                value.concat(segmentValue)
            );

        onChange(newValue);
    }, [value]);

    const ariaProp = singleSelect ? 'aria-checked' : 'aria-pressed';
    const classNames = classnames('mdc-segmented-button', {
        'mdc-segmented-button--single-select': singleSelect
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            role={singleSelect ? 'radiogroup' : 'group'}
            {...props}
        >
            {React.Children.map(children, child => {
                const isValidElement = React.isValidElement(child);
                const childProps = isValidElement ? child.props : child;
                const isSelected = !value ? childProps.selected :
                    (singleSelect ? value === childProps.value : value.includes(childProps.value));
                const props = {
                    selected: isSelected,
                    [ariaProp]: isSelected,
                    onClickCapture: !isUndefined(value) ? handleClick : undefined
                };

                return isValidElement ?
                    React.cloneElement(child, props) :
                    React.createElement(SegmentedButtonSegment, { ...child, ...props });
            })}
        </Element>
    );
}

SegmentedButton.displayName = 'MDCSegmentedButton';

SegmentedButton.propTypes = {
    segments: PropTypes.arrayOf(PropTypes.element),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func
};