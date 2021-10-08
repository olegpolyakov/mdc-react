import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';

import { chipCssClasses as cssClasses } from './constants';

export default function ChipPrimaryAction({
    text,
    graphic,
    icon,
    presentational = false,
    selectable = false,
    selected = false,
    disabled = false,

    element = 'button',
    component: Element = element,
    children = text,
    ...props
}) {
    const isButton = Element === 'button';
    const classNames = classnames(cssClasses.ACTION, cssClasses.PRIMARY_ACTION, {
        [cssClasses.PRESENTATIONAL_ACTION]: presentational
    });

    return (
        <Element
            className={classNames}
            type={isButton ? 'button' : undefined}
            disabled={isButton && disabled}
            tabIndex={disabled ? '-1' : '0'}
            role={!isButton ? 'option' : undefined}
            aria-selected={!isButton ? selected : undefined}
            aria-disabled={!isButton ? disabled : undefined}
            {...props}
        >
            <span className={`${cssClasses.RIPPLE} ${cssClasses.PRIMARY_RIPPLE}`} />

            {(graphic || icon || selectable) &&
                <span className={cssClasses.GRAPHIC}>
                    {graphic}

                    {icon &&
                        <Clone
                            component={icon}
                            fallback={Icon}
                            className={`${cssClasses.ICON} ${cssClasses.PRIMARY_ICON}`}
                        />
                    }

                    {selectable &&
                        <span className={cssClasses.CHECKMARK}>
                            <svg className={cssClasses.CHECKMARK_SVG} viewBox="-2 -3 30 30">
                                <path
                                    className={cssClasses.CHECKMARK_PATH}
                                    fill="none"
                                    stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"
                                />
                            </svg>
                        </span>
                    }
                </span>
            }

            <span className={cssClasses.TEXT_LABEL}>{children}</span>
        </Element>
    );
}