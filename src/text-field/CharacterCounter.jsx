import PropTypes from 'prop-types';

export default function CharacterCounter({
    value = 0,
    maxValue,

    ...props
}) {
    return (
        <div className="mdc-text-field-character-counter" {...props}>
            {`${value} / ${maxValue}`}
        </div>
    );
}

CharacterCounter.displayName = 'MDCTextFieldCharacterCounter';

CharacterCounter.propTypes = {
    value: PropTypes.number,
    maxValue: PropTypes.number
};