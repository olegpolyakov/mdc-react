import { forwardRef } from 'react';
import classnames from 'classnames';

import { Clone } from '../component';

import { cssClasses } from './constants';

const CardActionIcons = forwardRef(({
    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ACTION_ICONS, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <Clone
                component={children}
                className={`${cssClasses.ACTION} ${cssClasses.ACTION_ICON}`}
            />
        </Element>
    );
});

CardActionIcons.displayName = 'MDCCardActionIcons';

export default CardActionIcons;