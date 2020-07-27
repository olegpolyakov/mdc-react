import React from 'react';

import MenuItem from '../Menu/MenuItem';

export default React.forwardRef(SelectOption);

function SelectOption(props) {
    return <MenuItem {...props} />;
}

SelectOption.displayName = 'MDCSelectOption';