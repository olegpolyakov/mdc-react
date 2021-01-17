import './SideSheet.scss';

import SideSheet from './SideSheet';
import SideSheetHeader from './SideSheetHeader';
import SideSheetContent from './SideSheetContent';

SideSheet.Header = SideSheetHeader;
SideSheet.Content = SideSheetContent;

export {
    SideSheet as default,
    SideSheetHeader,
    SideSheetContent
};