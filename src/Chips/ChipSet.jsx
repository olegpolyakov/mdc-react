import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(ChipSet);

function ChipSet({
    choice = false,
    filter = false,
    input = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-chip-set', {
        'mdc-chip-set--choice': choice,
        'mdc-chip-set--filter': filter,
        'mdc-chip-set--input': input
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

ChipSet.displayName = 'MDCChipSet';

ChipSet.propTypes = {
    choice: PropTypes.bool,
    filter: PropTypes.bool,
    input: PropTypes.bool
};