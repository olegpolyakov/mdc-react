import { cssClasses } from './constants';

const Resizer = ({
    textarea,
    autoResize,
    children,
    ...props
}) => {
    return (textarea && !autoResize) ? (
        <span className={cssClasses.RESIZER} {...props}>
            {children}
        </span>
    ) : children;
};

Resizer.displayName = 'MDCTextFieldResizer';

export default Resizer;