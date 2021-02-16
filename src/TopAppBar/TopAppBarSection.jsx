import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(TopAppBarSection);

function TopAppBarSection({
    align,

    element: Element = 'section',
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-top-app-bar__section', {
        'mdc-top-app-bar__section--align-start': align === 'start',
        'mdc-top-app-bar__section--align-center': align === 'center',
        'mdc-top-app-bar__section--align-end': align === 'end'
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

TopAppBarSection.displayName = 'MDCTopAppBarSection';

TopAppBarSection.propTypes = {
    align: PropTypes.oneOf(['start', 'center', 'end'])
};