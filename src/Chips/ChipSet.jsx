import React from 'react';
import classnames from 'classnames';

export default class ChipSet extends React.Component {
    static defaultProps = {
        input: false,
        choice: false,
        filter: false,
        selectedChip: undefined,
        filteredChips: [],

        onSelect: Function.prototype,

        element: 'div'
    };

    render() {
        const { input, choice, filter, selectedChip, filteredChips, onSelect, element, className, children, ...props } = this.props;

        const classNames = classnames('mdc-chip-set', {
            'mdc-chip-set--input': input,
            'mdc-chip-set--choice': choice,
            'mdc-chip-set--filter': filter
        }, className);

        return (
            <div className={classNames} {...props}>
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
            </div>
        );
    }
}