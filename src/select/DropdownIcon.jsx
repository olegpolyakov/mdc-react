import { cssClasses } from './constants';

const DropdownIcon = () => {
    return (
        <span className={cssClasses.DROPDOWN_ICON}>
            <svg
                className={cssClasses.DROPDOWN_ICON_GRAPHIC}
                viewBox="7 10 10 5"
                focusable="false"
            >
                <polygon
                    className={cssClasses.DROPDOWN_ICON_INACTIVE}
                    stroke="none"
                    fillRule="evenodd"
                    points="7 10 12 15 17 10"
                />

                <polygon
                    className={cssClasses.DROPDOWN_ICON_ACTIVE}
                    stroke="none"
                    fillRule="evenodd"
                    points="7 15 12 10 17 15"
                />
            </svg>
        </span>
    );
};

export default DropdownIcon;