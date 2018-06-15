import React from 'react';
import classnames from 'classnames';

export default class ChipSet extends React.Component {
    state = {
        selectedChip: undefined,
        filteredChips: new Set()
    };

    handleClick = index => {
        if (this.props.choice) {
            if (this.state.selectedChip === index) {
                this.setState({ selectedChip: undefined });
            } else {
                this.setState({ selectedChip: index });
            }
        } else if (this.props.filter) {
            if (!this.state.filteredChips.has(index)) {
                this.setState(state => ({ filteredChips: state.filteredChips.add(index) }));
            } else {
                this.setState(state => {
                    state.filteredChips.delete(index);

                    return { filteredChips: new Set(state.filteredChips) };
                });
            }
        }
    };

    render() {
        const { element = 'div', input, choice, filter, children, ...props } = this.props;
        const { selectedChips } = this.state;

        return React.createElement(
            element,

            {
                className: classnames('mdc-chip-set', {
                    'mdc-chip-set--input': input,
                    'mdc-chip-set--choice': choice,
                    'mdc-chip-set--filter': filter
                }),
                ...props
            },
    
            React.Children.map(children, (child, index) => 
                React.cloneElement(child, {
                    selected: index === this.state.selectedChip || this.state.filteredChips.has(index),
                    filtered: this.state.filteredChips.has(index),
                    onClick: event => this.handleClick(index)
                })
            )
        );
    }
}