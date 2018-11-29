import React from 'react';

import Menu from '../Menu';
import MenuItem from '../MenuItem';

export default function EnhancedSelect({ onClose }) {
    return (
        <React.Fragment>
            <i className="mdc-select__dropdown-icon" />

            <div class="mdc-select__selected-text"></div>

            <Menu className="mdc-select__menu">
                <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>

                <li class="mdc-list-item" data-value="grains">
                    Bread, Cereal, Rice, and Pasta
                </li>
                <li class="mdc-list-item" data-value="vegetables">
                    Vegetables
                </li>
                <li class="mdc-list-item" data-value="fruit">
                    Fruit
                </li>
            </Menu>
        </React.Fragment>
    );
};