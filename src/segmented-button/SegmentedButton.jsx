import { forwardRef, Children, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isUndefined, isArray } from '../types';
import { create, clone } from '../component';

import { cssClasses } from './constants';
import SegmentedButtonSegment from './SegmentedButtonSegment';

const SegmentedButton = forwardRef(({
    value,
    segments,
    singleSelect = !isUndefined(value) && !isArray(value),
    ripple = true,
    touch = false,
    onChange = Function.prototype,

    element = 'div',
    component: Element = element,
    className,
    children = segments?.map(segment => create(SegmentedButtonSegment, segment)),
    ...props
}, ref) => {
    const handleClick = useCallback(event => {
        const segmentValue = event.currentTarget.value;
        const newValue = singleSelect ? segmentValue :
            (value.includes(segmentValue) ?
                value.filter(v => v !== segmentValue) :
                value.concat(segmentValue)
            );

        onChange(newValue);
    }, [value, singleSelect, onChange]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.SINGLE_SELECT]: singleSelect
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            role={singleSelect ? 'radiogroup' : 'group'}
            {...props}
        >
            {isUndefined(value) ? children :
                Children.map(children, segment => {
                    const ariaProp = singleSelect ? 'aria-checked' : 'aria-pressed';
                    const selected = singleSelect ?
                        value === segment.props.value :
                        value.includes(segment.props.value);

                    return clone(segment, {
                        ripple,
                        touch,
                        selected,
                        role: singleSelect ? 'radio' : undefined,
                        [ariaProp]: selected,
                        onClickCapture: handleClick
                    });
                })
            }
        </Element>
    );
});

SegmentedButton.displayName = 'MDCSegmentedButton';

SegmentedButton.propTypes = {
    value: PropTypes.any,
    segments: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.element
    ])),
    singleSelect: PropTypes.bool,
    ripple: PropTypes.bool,
    touch: PropTypes.bool,
    onChange: PropTypes.func
};

export default SegmentedButton;