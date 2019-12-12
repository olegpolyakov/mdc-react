import React from 'react';

import { MenuItem } from '../Menu';

export default function SelectOption(props) {
    return <MenuItem {...props} />;
}

SelectOption.displayName = 'MDCSelectOption';