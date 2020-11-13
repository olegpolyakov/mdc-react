import React from 'react';

export default function DropdownIcon() {
    return (
        <span className="mdc-select__dropdown-icon">
            <svg
                className="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false"
            >
                <polygon
                    className="mdc-select__dropdown-icon-inactive"
                    stroke="none"
                    fillRule="evenodd"
                    points="7 10 12 15 17 10"
                />

                <polygon
                    className="mdc-select__dropdown-icon-active"
                    stroke="none"
                    fillRule="evenodd"
                    points="7 15 12 10 17 15"
                />
            </svg>
        </span>
    );
}