import { forwardRef } from 'react';

import Checkbox from '../checkbox';
import { MenuItem } from '../menu';

const SelectOption = forwardRef(({
    selected,
    checkbox = false,
    onClick,
    ...props
}, ref) => {
    return (
        <MenuItem
            ref={ref}
            start={checkbox && <Checkbox checked={selected} />}
            selected={selected}
            withLeadingCheckbox={checkbox}
            onClick={onClick}
            {...props}
        />
    );
});

SelectOption.displayName = 'MDCSelectOption';

export default SelectOption;