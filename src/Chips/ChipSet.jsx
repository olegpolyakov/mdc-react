import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isUndefined, isArray } from '../types';
import Chip from './Chip';

export default React.forwardRef(ChipSet);

function ChipSet({
    chips,
    value,
    input = false,
    choice = Boolean(!input && !isUndefined(value) && !isArray(value)),
    filter = Boolean(!input && !isUndefined(value) && isArray(value)),
    onChange = Function.prototype,

    element = 'div',
    component: Element = element,
    className,
    children = chips?.map(chip => React.createElement(Chip, chip)),
    ...props
}, ref) {
    const inputRef = useRef();

    const handleClick = useCallback(event => {
        const chipValue = event.currentTarget.dataset.value;
        const newValue = choice ? chipValue :
            (value.includes(chipValue) ?
                value.filter(v => v !== chipValue) :
                value.concat(chipValue)
            );

        onChange(newValue);
    }, [value]);

    const handleFocus = useCallback(() => {
        inputRef.current.focus();
    }, []);

    const handleKeyPress = useCallback(event => {
        if (event.key === 'Enter') {
            event.preventDefault();

            const newValue = inputRef.current.textContent;
            inputRef.current.textContent = '';

            onChange(value.concat(newValue));
        }
    }, [value]);

    const classNames = classnames('mdc-chip-set', {
        'mdc-chip-set--choice': choice,
        'mdc-chip-set--filter': filter,
        'mdc-chip-set--input': input
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {!isUndefined(value) ?
                React.Children.map(children, child => {
                    const isValidElement = React.isValidElement(child);
                    const childProps = isValidElement ? child.props : child;
                    const isSelected = choice ? value === childProps.value : value.includes(childProps.value);
                    const props = {
                        selected: isSelected,
                        onClickCapture: (choice || filter) ? handleClick : undefined,
                    };

                    return isValidElement ?
                        React.cloneElement(child, props) :
                        React.createElement(Chip, { ...child, ...props });
                })
                :
                children
            }

            {input &&
                <Chip className="mdc-chip mdc-chip-set__input" outlined onClick={handleFocus}>
                    <span ref={inputRef} onKeyPress={handleKeyPress} contentEditable />
                </Chip>
            }
        </Element>
    );
}

ChipSet.displayName = 'MDCChipSet';

ChipSet.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    input: PropTypes.bool,
    choice: PropTypes.bool,
    filter: PropTypes.bool,
    onChange: PropTypes.func
};