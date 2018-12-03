import React from 'react';
import classnames from 'classnames';

ChipSet.displayName = 'MDCChipSet';

export default function ChipSet({
    choice = false,
    filter = false,
    input = false,
    selectedChip,
    filteredChips = [],

    onSelect = Function.prototype,

    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-chip-set', {
        'mdc-chip-set--choice': choice,
        'mdc-chip-set--filter': filter,
        'mdc-chip-set--input': input
    }, className);

    return (
        <Element className={classNames} {...props}>
            {(choice || filter) ? 
                React.Children.map(children, (chip, index) => {
                    const value = chip.value || index;

                    return React.cloneElement(chip, {
                        selected: value === selectedChip || filteredChips.includes(value),
                        filtered: filteredChips.includes(value),
                        onClick: event => onSelect(value)
                    });
                })
                :
                children
            }
        </Element>
    );
}