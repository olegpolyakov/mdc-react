import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses, Align } from './constants';

const TopAppBarSection = forwardRef(({
    align,

    element: Element = 'section',
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.SECTION, {
        [cssClasses.SECTION_ALIGN_START]: align === Align.START,
        [cssClasses.SECTION_ALIGN_CENTER]: align === Align.CENTER,
        [cssClasses.SECTION_ALIGN_END]: align === Align.END
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

TopAppBarSection.displayName = 'MDCTopAppBarSection';

TopAppBarSection.propTypes = {
    align: PropTypes.oneOf(Object.values(Align))
};

export default TopAppBarSection;