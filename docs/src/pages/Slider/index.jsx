import { useState } from 'react';
import {
    Slider
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'slider';
const title = 'Slider';
const description = 'Sliders allow users to make selections from a range of values.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider',
    guide: 'https://material.io/components/sliders'
};

export default function SliderPage() {
    const [value1, setValue1] = useState(50);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(50);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Continuous slider">
                <Code>
                    <Slider
                        value={value1}
                        onChange={setValue1}
                    />
                </Code>
            </Section>

            <Section title="Discrete slider">
                <Code>
                    <Slider
                        value={value2}
                        step="10"
                        discrete
                        onChange={setValue2}
                    />
                </Code>
            </Section>

            <Section title="Discrete slider with tick marks">
                <Code>
                    <Slider
                        value={value3}
                        step="10"
                        discrete
                        tickMarks
                        onChange={setValue3}
                    />
                </Code>
            </Section>

            <Section title="Disabled slider">
                <Code>
                    <Slider
                        value={42}
                        disabled
                    />
                </Code>
            </Section>
        </Page>
    );
}