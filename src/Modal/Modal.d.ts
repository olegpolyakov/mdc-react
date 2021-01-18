import React from 'react';
import { HTMLElementTagName } from '../types';

type ModalProps = {
    fixed?: boolean;
    children: React.ReactNode;
    element: HTMLElementTagName;
};

// TODO: check ReactDOM createPortal ReturnType
export default function (props: ModalProps): JSX.Element;
