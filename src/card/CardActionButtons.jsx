import { forwardRef } from 'react';
import classnames from 'classnames';

import { Clone } from '../component';

import { cssClasses } from './constants';

const CardActionButtons = forwardRef(({
    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ACTION_BUTTONS, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <Clone
                component={children}
                className={`${cssClasses.ACTION} ${cssClasses.ACTION_BUTTON}`}
            />
        </Element>
    );
});

CardActionButtons.displayName = 'MDCCardActionButtons';

export default CardActionButtons;