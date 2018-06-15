import React from 'react';
import classnames from 'classnames';

import PermanentDrawer from './PermanentDrawer';
import PersistentDrawer from './PersistentDrawer';
import TemporaryDrawer from './TemporaryDrawer';

export default class Drawer extends React.Component {
    render() {
        const { permanent, persistent, temporary, ...props } = this.props;

        const className = 'mdc-drawer';
    
        if (permanent) {
            return <PermanentDrawer className={className} {...props} />;
        } else if (persistent) {
            return <PersistentDrawer className={className} {...props} />;
        } else if (temporary) {
            return <TemporaryDrawer className={className} {...props} />;
        }
    }
}