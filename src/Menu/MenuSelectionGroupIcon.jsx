import React from 'react';

import ListItemGraphic from '../List/ListItemGraphic';

export default function MenuSelectionGroupIcon(props) {
    return (
        <ListItemGraphic
            className="mdc-menu__selection-group-icon"
            {...props}
        />
    );
}

MenuSelectionGroupIcon.displayName = 'MDCMenuSelectionGroupIcon';