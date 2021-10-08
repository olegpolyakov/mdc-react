import { forwardRef, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import NotchedOutline from '../notched-outline';
import LineRipple from '../line-ripple';
import FloatingLabel from '../floating-label';
import Icon from '../icon';

import { cssClasses } from './constants';
import HelperText from './HelperText';
import CharacterCounter from './CharacterCounter';
import Input from './Input';
import Resizer from './Resizer';

const TextField = forwardRef(({
    value,
    defaultValue,
    label,
    leadingIcon,
    trailingIcon,
    prefix,
    suffix,
    persistentHelperText,
    helperText = persistentHelperText,
    validationMessage,
    filled = false,
    outlined = false,
    fullWidth = false,
    disabled = false,
    textarea = false,
    endAligned = false,
    autoResize = false,
    internalCounter = false,

    className,
    element: Element = 'label',
    onChange = Function.prototype,
    ...props
}, ref) => {
    const inputRef = useRef();

    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);
    const [valid, setValid] = useState(true);
    const [interactionCoords, setInteractionCoords] = useState();
    const [count, setCount] = useState(value?.length || defaultValue?.value || 0);

    const handleInteraction = useCallback(event => {
        const targetClientRect = event.target.getBoundingClientRect();

        setInteractionCoords({
            x: event.clientX - targetClientRect.left,
            y: event.clientY - targetClientRect.top
        });
    }, []);

    const handleInputFocus = useCallback(() => {
        setFocused(true);
        setTouched(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setFocused(false);
        setInteractionCoords();
    }, []);

    const handleInputChange = useCallback(event => {
        const value = inputRef.current.value;
        const isValid = inputRef.current?.validity.valid;

        setCount(value.length);
        setValid(isValid);
        onChange(event, value);
    }, [onChange]);

    const focusedOrHasValue = (
        focused ||
        (value !== undefined && value !== null && value !== '') ||
        (defaultValue !== undefined && defaultValue !== null && defaultValue !== '') ||
        Boolean(inputRef.current?.value)
    );

    const hasHelperLine = helperText || validationMessage || props.maxLength;

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.FILLED]: filled && !fullWidth,
        [cssClasses.OUTLINED]: outlined && !fullWidth,
        [cssClasses.TEXTAREA]: textarea,
        [cssClasses.DISABLED]: disabled,
        [cssClasses.FOCUSED]: focused,
        [cssClasses.INVALID]: !valid && touched,
        [cssClasses.LABEL_FLOATING]: focusedOrHasValue,
        [cssClasses.NO_LABEL]: !label,
        [cssClasses.END_ALIGNED]: endAligned,
        [cssClasses.WITH_LEADING_ICON]: leadingIcon,
        [cssClasses.WITH_TRAILING_ICON]: trailingIcon,
        [cssClasses.WITH_INTERNAL_COUNTER]: internalCounter
    }, className);

    return (<>
        <Element
            ref={ref}
            className={classNames}
            onMouseDown={handleInteraction}
            onTouchStart={handleInteraction}
        >
            {filled &&
                <div className={cssClasses.RIPPLE} />
            }

            {filled && label &&
                <FloatingLabel
                    label={label}
                    float={focusedOrHasValue}
                />
            }

            {outlined &&
                <NotchedOutline notched={focusedOrHasValue}>
                    {label &&
                        <FloatingLabel
                            label={label}
                            float={focusedOrHasValue}
                        />
                    }
                </NotchedOutline>
            }

            {leadingIcon &&
                <Clone
                    component={leadingIcon}
                    fallback={Icon}
                    className={`${cssClasses.ICON} ${cssClasses.ICON_LEADING}`}
                    tabIndex="0"
                    role="button"
                />
            }

            {prefix &&
                <span className={`${cssClasses.AFFIX} ${cssClasses.AFFIX_PREFIX}`}>{prefix}</span>
            }

            <Resizer
                textarea={textarea}
                autoResize={autoResize}
            >
                <Input
                    ref={inputRef}
                    value={value}
                    defaultValue={defaultValue}
                    textarea={textarea}
                    autoResize={autoResize}
                    disabled={disabled}
                    onInput={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    {...props}
                />

                {internalCounter &&
                    <CharacterCounter
                        value={count}
                        maxValue={props.maxLength}
                    />
                }
            </Resizer>

            {suffix &&
                <span className={`${cssClasses.AFFIX} ${cssClasses.AFFIX_SUFFIX}`}>{suffix}</span>
            }

            {trailingIcon &&
                <Clone
                    component={trailingIcon}
                    fallback={Icon}
                    className={`${cssClasses.ICON} ${cssClasses.ICON_TRAILING}`}
                    tabIndex="0"
                    role="button"
                />
            }

            {filled &&
                <LineRipple
                    active={focused}
                    transformOrigin={interactionCoords?.x}
                />
            }
        </Element>

        {hasHelperLine &&
            <div className={cssClasses.HELPER_LINE}>
                {helperText &&
                    <HelperText persistent={Boolean(persistentHelperText)}>{helperText}</HelperText>
                }

                {(validationMessage && !valid) &&
                    <HelperText validation>{typeof validationMessage === 'string' ? validationMessage : inputRef.current?.validationMessage}</HelperText>
                }

                {(props.maxLength && !internalCounter) &&
                    <CharacterCounter
                        value={count}
                        maxValue={props.maxLength}
                    />
                }
            </div>
        }
    </>);
});

TextField.displayName = 'MDCTextField';

TextField.propTypes = {
    value: PropTypes.any,
    label: PropTypes.string,
    leadingIcon: PropTypes.node,
    trailingIcon: PropTypes.node,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    outline: PropTypes.bool,
    fullWidth: PropTypes.bool,
    textarea: PropTypes.bool,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    helperText: PropTypes.string,
    persistentHelperText: PropTypes.string,
    validationMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export default TextField;