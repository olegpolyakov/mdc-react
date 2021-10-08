import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Modal from '../modal';

export default function Layer({
    modal = false,
    fixed = false,

    children,
    ...props
}) {
    return (
        <CSSTransition {...props}>
            {modal ?
                <Modal fixed={fixed}>
                    {children}
                </Modal>
                :
                children
            }
        </CSSTransition>
    );
}

Layer.displayName = 'MDCLayer';

Layer.propTypes = {
    modal: PropTypes.bool,
    fixed: PropTypes.bool
};