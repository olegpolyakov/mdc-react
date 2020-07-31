import React from 'react';

import Checkbox from '../Checkbox/Checkbox';
import ListItem from '../List/ListItem';
import MenuItem from '../Menu/MenuItem';

export default React.forwardRef(SelectOption);

function SelectOption({
    selected,
    checkbox = false,
    onClick,

    children,
    ...props
}, ref) {
    return (
        <MenuItem
            ref={ref}
            selected={selected}
            onClick={onClick}
            {...props}
        >
            {checkbox &&
                <ListItem.Graphic>
                    <Checkbox checked={selected} />
                </ListItem.Graphic>
            }

            {children}
        </MenuItem>
    );
}

SelectOption.displayName = 'MDCSelectOption';