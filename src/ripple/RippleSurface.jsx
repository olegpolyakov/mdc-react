import { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';
import { useRipple } from './hooks';

const RippleSurface = forwardRef(({
    primary,
    accent,

    className,
    element: Element = 'div',
    ...props
}, ref) => {
    const rootRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);
    useRipple(rootRef);

    const classNames = classnames(cssClasses.SURFACE, {
        [cssClasses.SURFACE_PRIMARY]: primary,
        [cssClasses.SURFACE_ACCENT]: accent
    }, className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            {...props}
        />
    );
});

RippleSurface.displayName = 'MDCRippleSurface';

RippleSurface.propTypes = {
    primary: PropTypes.bool,
    accent: PropTypes.bool
};

export default RippleSurface;