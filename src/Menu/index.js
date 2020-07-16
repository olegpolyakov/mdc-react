import './Menu.scss';

import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuSelectionGroup from './MenuSelectionGroup';
import MenuSelectionGroupIcon from './MenuSelectionGroupIcon';

Menu.Item = MenuItem;
Menu.SelectionGroup = MenuSelectionGroup;
Menu.SelectionGroupIcon = MenuSelectionGroupIcon;

export {
    Menu,
    MenuItem,
    MenuSelectionGroup,
    MenuSelectionGroupIcon
};