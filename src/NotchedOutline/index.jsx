import React from 'react';
import classnames from 'classnames';

import './index.scss';

NotchedOutline.displayName = 'MDCNotchedOutline';

export default function NotchedOutline({
    notched = false,
    width = 0,

    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-notched-outline', 'mdc-notched-outline--upgraded', {
        'mdc-notched-outline--notched': notched
    }, className);

    const style = notched && width > 0 ? {
        width: `${width + 8}px`
    } : undefined;
    
    return (
        <div className={classNames} {...props}>
            <div className="mdc-notched-outline__leading" />

            <div className="mdc-notched-outline__notch" style={style}>
                {children}
            </div>

            <div className="mdc-notched-outline__trailing" />
        </div>
    );
}