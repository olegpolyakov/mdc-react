import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Clone } from '../component';

import { cssClasses } from './constants';

const DrawerHeader = forwardRef(({
    title,
    subtitle,
    graphic,

    element: Element = 'header',
    children,
    ...props
}, ref) => {
    return (
        <Element ref={ref} className={cssClasses.HEADER} {...props}>
            {graphic &&
                <Clone
                    component={graphic}
                    className={cssClasses.GRAPHIC}
                />
            }

            {title &&
                <Clone
                    component={title}
                    fallback="h3"
                    className={cssClasses.TITLE}
                />
            }

            {subtitle &&
                <Clone
                    component={subtitle}
                    fallback="h6"
                    className={cssClasses.SUBTITLE}
                />
            }

            {children}
        </Element>
    );
});

DrawerHeader.displayName = 'MDCDrawerHeader';

DrawerHeader.propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    graphic: PropTypes.element
};

export default DrawerHeader;