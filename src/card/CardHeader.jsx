import { Children, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';

import { cssClasses } from './constants';

const CardHeader = forwardRef(({
    title,
    subtitle,
    overline,
    graphic,
    actions,

    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.HEADER, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {graphic &&
                <Clone
                    component={graphic}
                    className={cssClasses.HEADER_GRAPHIC}
                />
            }

            <div className={cssClasses.HEADER_CONTENT}>
                {overline &&
                    <Clone
                        component={overline}
                        fallback="span"
                        className={cssClasses.OVERLINE}
                    />
                }

                {title &&
                    <Clone
                        component={title}
                        fallback="h2"
                        className={cssClasses.TITLE}
                    />
                }

                {subtitle &&
                    <Clone
                        component={subtitle}
                        fallback="h3"
                        className={cssClasses.SUBTITLE}
                    />
                }

                {children}
            </div>

            {actions &&
                <div className={cssClasses.HEADER_ACTIONS}>
                    {Children.map(actions, action =>
                        <Clone
                            component={action}
                            className={cssClasses.ACTION}
                        />
                    )}
                </div>
            }
        </Element>
    );
});

CardHeader.displayName = 'MDCCardHeader';

CardHeader.propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    overline: PropTypes.node,
    graphic: PropTypes.element,
    actions: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ])
};

export default CardHeader;