import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';

import { cssClasses } from './constants';

const Avatar = forwardRef(({
    image,
    icon,
    text,
    size,

    element = 'span',
    component: Element = element,
    className,
    children = text,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [`${cssClasses.ROOT}--${size}`]: size
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {image &&
                <img
                    className={cssClasses.IMAGE}
                    src={image?.src || image}
                    alt={image?.alt || ''}
                />
            }

            {icon &&
                <Clone
                    component={icon}
                    fallback={Icon}
                    className={cssClasses.ICON}
                />
            }

            {children &&
                <Clone
                    component={children}
                    fallback="span"
                    className={cssClasses.TEXT}
                />
            }
        </Element>
    );
});

Avatar.displayName = 'MDCAvatar';

Avatar.propTypes = {
    src: PropTypes.string,
    icon: PropTypes.node,
    text: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Avatar;