import React from 'react';

import Checkbox from '../Checkbox/Checkbox';
import MenuItem from '../Menu/MenuItem';

export default React.forwardRef(SelectOption);

function SelectOption({
    selected,
    checkbox = false,
    onClick,
    ...props
}, ref) {
    return (
        <MenuItem
            ref={ref}
            graphic={checkbox && <Checkbox checked={selected} />}
            selected={selected}
            onClick={onClick}
            {...props}
        />
    );
}

SelectOption.displayName = 'MDCSelectOption';