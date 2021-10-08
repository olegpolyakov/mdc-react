import { useState } from 'react';
import {
    SegmentedButton
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'segmented-button';
const title = 'Segmented Button';
const description = 'Segmented buttons allow users to toggle the selected states of grouped buttons.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-segmented-button',
    guide: 'https://material.io/components/buttons#toggle-button'
};

export default function SegmentedButtonPage() {
    const [value1, setValue1] = useState('star');
    const [value2, setValue2] = useState('star');
    const [value3, setValue3] = useState('star');

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Text">
                <Code>
                    <SegmentedButton value={value1} onChange={setValue1}>
                        <SegmentedButton.Segment
                            value="star"
                            label="star"
                        />

                        <SegmentedButton.Segment
                            value="favorite"
                            label="favorite"
                        />
                    </SegmentedButton>
                </Code>
            </Section>

            <Section title="Icons">
                <Code>
                    <SegmentedButton value={value2} onChange={setValue2}>
                        <SegmentedButton.Segment
                            value="star"
                            icon="star"
                        />

                        <SegmentedButton.Segment
                            value="favorite"
                            icon="favorite"
                        />
                    </SegmentedButton>
                </Code>
            </Section>

            <Section title="Text with Icons">
                <Code>
                    <SegmentedButton value={value3} onChange={setValue3}>
                        <SegmentedButton.Segment
                            value="star"
                            icon="star"
                            label="star"
                        />

                        <SegmentedButton.Segment
                            value="favorite"
                            icon="favorite"
                            label="favorite"
                        />
                    </SegmentedButton>
                </Code>
            </Section>
        </Page>
    );
}