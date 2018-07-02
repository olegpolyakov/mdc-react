import React from 'react';
import classnames from 'classnames';

import PermanentDrawer from './PermanentDrawer';
import PersistentDrawer from './PersistentDrawer';
import TemporaryDrawer from './TemporaryDrawer';

export default class Drawer extends React.Component {
    render() {
        const { permanent, persistent, temporary, className, ...props } = this.props;

        const classNames = classnames('mdc-drawer', className);
    
        if (permanent) {
            return <PermanentDrawer className={classNames} {...props} />;
        } else if (persistent) {
            return <PersistentDrawer className={classNames} {...props} />;
        } else if (temporary) {
            return <TemporaryDrawer className={classNames} {...props} />;
        }
    }
}