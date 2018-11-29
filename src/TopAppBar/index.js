import './index.scss';

import TopAppBar from './TopAppBar';
import TopAppBarRow from './TopAppBarRow';
import TopAppBarSection from './TopAppBarSection';

TopAppBar.Row = TopAppBarRow;
TopAppBar.Section = TopAppBarSection;

export { TopAppBar as default, TopAppBarRow, TopAppBarSection };