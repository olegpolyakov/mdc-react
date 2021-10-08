import { useState } from 'react';
import {
    Button,
    LinearProgress
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'linear-progress';
const title = 'Linear Progress';
const description = 'Progress indicators display the length of a process or express an unspecified wait time.';
const links = {
    docs: '',
    guide: ''
};

export default function LinearProgressPage() {
    const [isClosed, setClosed] = useState(true);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic linear progress">
                <Code>
                    <LinearProgress value="42" />
                </Code>
            </Section>

            <Section title="Linear progress with a buffer">
                <Code>
                    <LinearProgress value="42" buffer="84" />
                </Code>
            </Section>

            <Section title="Indeterminate linear progress">
                <Code>
                    <LinearProgress indeterminate />
                </Code>
            </Section>

            <Section title="Closed linear progress">
                <Code
                    setup={
                        <Button onClick={() => setClosed(v => !v)}>Toggle</Button>
                    }
                >
                    <LinearProgress closed={isClosed} value="42" />
                </Code>
            </Section>
        </Page>
    );
}