import { forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { numbers, chipCssClasses as cssClasses } from './constants';
import ChipPrimaryAction from './ChipPrimaryAction';
import ChipTrailingAction from './ChipTrailingAction';

const Chip = forwardRef(({
    value,
    text,
    graphic,
    icon,
    primaryIcon = icon,
    trailingIcon,
    selectable = false,
    filter = false,
    selected = false,
    outlined = false,
    disabled = false,
    touch = false,
    withAvatar = false,

    element = 'span',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const withPrimaryGraphic = selectable || Boolean(graphic) || Boolean(primaryIcon);
    const withPrimaryIcon = Boolean(primaryIcon);
    const withTrailingAction = Boolean(trailingIcon);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.SELECTABLE]: selectable,
        [cssClasses.FILTER]: filter,
        [cssClasses.OUTLINED]: outlined,
        [cssClasses.DISABLED]: disabled,
        [cssClasses.TOUCH]: touch,
        [cssClasses.WITH_PRIMARY_GRAPHIC]: withPrimaryGraphic,
        [cssClasses.WITH_PRIMARY_ICON]: withPrimaryIcon,
        [cssClasses.WITH_TRAILING_ACTION]: withTrailingAction,
        [cssClasses.WITH_AVATAR]: withAvatar
    }, className);

    const selectingClass = withPrimaryIcon ? cssClasses.SELECTING_WITH_PRIMARY_ICON : cssClasses.SELECTING;
    const deselectingClass = withPrimaryIcon ? cssClasses.DESELECTING_WITH_PRIMARY_ICON : cssClasses.DESELECTING;

    return (
        <CSSTransition
            in={selected}
            appear
            timeout={{
                enter: numbers.SELECTING_ANIMATION_MS,
                exit: numbers.DESELECTING_ANIMATION_MS
            }}
            classNames={{
                enter: selectingClass,
                enterActive: `${cssClasses.SELECTED} ${selectingClass}`,
                enterDone: cssClasses.SELECTED,
                exit: deselectingClass,
                exitActive: deselectingClass
            }}
        >
            <Element
                ref={ref}
                className={classNames}
                data-value={value}
                role={selectable ? 'presentation' : 'row'}
                {...props}
            >
                {selectable ?
                    <ChipPrimaryAction
                        element="span"
                        text={text}
                        graphic={graphic}
                        icon={primaryIcon}
                        selectable={selectable}
                        selected={selected}
                        disabled={disabled}
                    />
                    :
                    <>
                        <span className={`${cssClasses.CELL} ${cssClasses.PRIMARY_CELL}`} role="gridcell">
                            <ChipPrimaryAction
                                text={text}
                                graphic={graphic}
                                icon={primaryIcon}
                                disabled={disabled}
                            />
                        </span>

                        {trailingIcon &&
                            <span className={`${cssClasses.CELL} ${cssClasses.TRAILING_CELL}`} role="gridcell">
                                <ChipTrailingAction
                                    icon={trailingIcon}
                                    disabled={disabled}
                                />
                            </span>
                        }
                    </>
                }
            </Element>
        </CSSTransition>
    );
});

Chip.displayName = 'MDCChip';

Chip.propTypes = {
    value: PropTypes.any,
    text: PropTypes.node,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
    selected: PropTypes.bool,
    outlined: PropTypes.bool,
    onClick: PropTypes.func
};

export default Chip;