import React from 'react';
import classnames from 'classnames';

TopAppBarSection.displayName = 'MDCTopAppBarSection';

export default function TopAppBarSection({
    align,

    element: Element = 'section',
    className,
    ...props
}) {
    const classNames = classnames('mdc-top-app-bar__section', {
        [`mdc-top-app-bar__section--align-${align}`]: align
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}