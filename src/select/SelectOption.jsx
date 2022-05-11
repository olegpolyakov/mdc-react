import { forwardRef } from 'react';
import classnames from 'classnames';

import Checkbox from '../checkbox';
import { MenuItem } from '../menu';

import { optionCssClasses as cssClasses } from './constants';

const SelectOption = forwardRef(({
    icon,
    image,
    avatar,
    primaryText,
    secondaryText,
    meta,
    selected,
    checkbox = false,
    oneLine = false,
    twoLines = false,
    className,
    onClick,
    ...props
}, ref) => {
    const lines = Boolean(primaryText) + Boolean(secondaryText);
    const hasLeadingContent = Boolean(checkbox || icon || image || avatar);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.ONE_LINE]: oneLine || lines === 1,
        [cssClasses.TWO_LINE]: twoLines || lines === 2,
        [cssClasses.WITH_LEADING_CONTENT]: hasLeadingContent,
        [cssClasses.WITH_META]: meta
    }, className);

    return (
        <MenuItem
            ref={ref}
            className={classNames}
            leadingCheckbox={checkbox ? <Checkbox checked={selected} /> : undefined}
            icon={icon}
            image={image}
            avatar={avatar}
            primaryText={primaryText}
            secondaryText={secondaryText}
            meta={meta}
            selected={selected}
            oneLine={oneLine}
            twoLines={twoLines}
            withLeadingCheckbox={checkbox}
            onClick={onClick}
            {...props}
        />
    );
});

SelectOption.displayName = 'MDCSelectOption';

export default SelectOption;