import React from 'react';
import classnames from 'classnames';

import { ListItem } from '../List';

export default class MenuItem extends React.Component {
    render() {
        const { disabled, ...props } = this.props;

        return React.createElement(ListItem, {
            role: 'menuitem',
            tabIndex: disabled && "-1",
            "aria-disabled": disabled && "true",
            ...props
        });
    }
};