import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { elementsByType, cssClasses } from './constants';

const Typography = forwardRef(({
    type = 'body1',
    display,
    align,
    noMargin = false,
    noWrap = false,

    element = elementsByType[type],
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, `${cssClasses.ROOT}--${type}`, {
        [`${cssClasses.DISPLAY}-${display}`]: display,
        [`${cssClasses.ALIGN}-${align}`]: align,
        [cssClasses.NO_MARGIN]: noMargin,
        [cssClasses.NO_WRAP]: noWrap
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

Typography.displayName = 'MDCTypography';

Typography.propTypes = {
    type: PropTypes.oneOf(Object.keys(elementsByType)),
    display: PropTypes.oneOf(['block', 'inline', 'inline-block']),
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    noMargin: PropTypes.bool,
    noWrap: PropTypes.bool
};

export default Typography;