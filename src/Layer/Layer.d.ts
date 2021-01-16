import {PropsWithChildren} from 'react';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';

type LayerProps = {
    modal?: boolean;
    fixed?: boolean;
} & CSSTransitionProps;

export default function (props: PropsWithChildren<LayerProps>): JSX.Element;
