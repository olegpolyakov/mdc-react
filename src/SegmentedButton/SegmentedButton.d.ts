import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';
import { SegmentedButtonSegmentProps } from './SegmentedButtonSegment';

type Props = {
    segments: Array<SegmentedButtonSegmentProps>;
    value?: string | number;
    singleSelect?: boolean;
    onChange?: () => void;
    className?: string;
};

export type SegmentedButtonProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: SegmentedButtonProps<TElement, TComponent>
): JSX.Element;
