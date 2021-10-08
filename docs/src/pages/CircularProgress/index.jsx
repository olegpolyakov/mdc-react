import { useState } from 'react';
import { Button, CircularProgress } from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'circular-progress';
const title = 'Circular Progress';
const description = 'Circular progress indicators display progress by animating an indicator along an invisible circular track in a clockwise direction.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-circular-progress',
    guide: 'https://material.io/components/progress-indicators#circular-progress-indicators'
};

export default function CircularProgressPage() {
    const [isClosed, setClosed] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section>
                <Code>
                    <CircularProgress
                        value="42"
                        size="small"
                    />

                    <CircularProgress
                        value="42"
                        size="medium"
                    />

                    <CircularProgress
                        value="42"
                        size="large"
                    />
                </Code>
            </Section>

            <Section>
                <Code>
                    <CircularProgress
                        indeterminate
                        size="small"
                    />

                    <CircularProgress
                        indeterminate
                        size="medium"
                    />

                    <CircularProgress
                        indeterminate
                        size="large"
                    />
                </Code>
            </Section>

            <Section>
                <Code>
                    <CircularProgress
                        size="small"
                        indeterminate
                        colorful
                    />

                    <CircularProgress
                        size="medium"
                        indeterminate
                        colorful
                    />

                    <CircularProgress
                        size="large"
                        indeterminate
                        colorful
                    />
                </Code>
            </Section>

            <Section title="Closed circular progress">
                <Code
                    setup={
                        <Button
                            label="Toggle"
                            outlined
                            onClick={() => setClosed(v => !v)}
                        />
                    }
                >
                    <CircularProgress
                        size="medium"
                        indeterminate
                        closed={isClosed}
                    />
                </Code>
            </Section>
        </Page>
    );
}