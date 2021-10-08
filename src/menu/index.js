import { Origin as MenuOrigin } from './constants';
import Menu from './Menu';
import MenuAnchor from './MenuAnchor';
import MenuItem from './MenuItem';
import MenuSurface from './MenuSurface';
import MenuSelectionGroup from './MenuSelectionGroup';
import MenuSelectionGroupIcon from './MenuSelectionGroupIcon';

Menu.Anchor = MenuAnchor;
Menu.Item = MenuItem;
Menu.Origin = MenuOrigin;
Menu.Surface = MenuSurface;
Menu.SelectionGroup = MenuSelectionGroup;
Menu.SelectionGroupIcon = MenuSelectionGroupIcon;

export {
    Menu as default,
    MenuAnchor,
    MenuItem,
    MenuOrigin,
    MenuSurface,
    MenuSelectionGroup,
    MenuSelectionGroupIcon
};