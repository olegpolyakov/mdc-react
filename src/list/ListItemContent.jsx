import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';

import { listItemCssClasses as cssClasses } from './constants';

const ListItemContent = forwardRef(({
    overline,
    primary,
    secondary,
    overlineText = overline,
    primaryText = primary,
    secondaryText = secondary,

    element = 'span',
    component: Element = element,
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.CONTENT, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {overlineText &&
                <Clone
                    component={overlineText}
                    fallback="span"
                    className={cssClasses.OVERLINE_TEXT}
                />
            }

            {primaryText &&
                <Clone
                    component={primaryText}
                    fallback="span"
                    className={cssClasses.PRIMARY_TEXT}
                />
            }

            {secondaryText &&
                <Clone
                    component={secondaryText}
                    fallback="span"
                    className={cssClasses.SECONDARY_TEXT}
                />
            }

            {children}
        </Element>
    );
});

ListItemContent.displayName = 'MDCListItemContent';

ListItemContent.propTypes = {
    overlineText: PropTypes.node,
    primaryText: PropTypes.node,
    secondaryText: PropTypes.node
};

export default ListItemContent;