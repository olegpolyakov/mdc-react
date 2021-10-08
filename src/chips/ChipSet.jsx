import { Children, forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isUndefined, isArray } from '../types';
import { clone, create } from '../component';

import { chipSetCssClasses as cssClasses } from './constants';
import Chip from './Chip';

const ChipSet = forwardRef(({
    value,
    chips,
    input = false,
    choice = (!input && !isUndefined(value) && !isArray(value)),
    filter = (!input && !isUndefined(value) && isArray(value)),
    overflow = false,
    onChange = Function.prototype,

    element = 'div',
    component: Element = element,
    className,
    children = chips?.map(chip => create(Chip, chip)),
    ...props
}, ref) => {
    const handleClick = useCallback(event => {
        const chipValue = event.currentTarget.dataset.value;
        const newValue = choice ? chipValue :
            (value.includes(chipValue) ?
                value.filter(v => v !== chipValue) :
                value.concat(chipValue)
            );

        onChange(newValue);
    }, [value, choice, onChange]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.OVERFLOW]: overflow
    }, className);

    return (
        <Element ref={ref} className={classNames} role={filter ? 'listbox' : 'grid'} {...props}>
            <div className={cssClasses.CHIPS} role="presentation">
                {isUndefined(value) ? children :
                    Children.map(children, chip => {
                        const chipValue = chip.props.value;

                        return clone(chip, {
                            selectable: true,
                            selected: choice ? value === chipValue : value.includes(chipValue),
                            onClickCapture: (choice || filter) ? handleClick : undefined,
                        });
                    })
                }
            </div>
        </Element>
    );
});

ChipSet.displayName = 'MDCChipSet';

ChipSet.propTypes = {
    value: PropTypes.any,
    input: PropTypes.bool,
    choice: PropTypes.bool,
    filter: PropTypes.bool,
    overflow: PropTypes.bool,
    onChange: PropTypes.func
};

export default ChipSet;