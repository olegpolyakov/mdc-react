import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';
import {SegmentedButtonSegmentProps} from './SegmentedButtonSegment';

type Props = {
    segments: Array<SegmentedButtonSegmentProps>;
    value?: string | number;
    singleSelect?: boolean;
    onChange?: () => void;
    className?: string;
};

export type SegmentedButtonProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: SegmentedButtonProps<TElement, TComponent, TRef>): JSX.Element;
