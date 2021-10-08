import { useState } from 'react';
import { Button, FAB } from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'fab';
const title = 'FAB';
const description = 'A floating action button (FAB) represents the primary action of a screen.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab',
    guide: 'https://material.io/components/buttons-floating-action-button'
};

export default function FABPage() {
    const [isExited, setExited] = useState(false);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic FAB">
                <Code>
                    <FAB
                        icon="star"
                    />
                </Code>
            </Section>

            <Section title="Mini FAB">
                <Code>
                    <FAB
                        icon="star"
                        mini
                    />
                </Code>
            </Section>

            <Section title="Extended FAB">
                <Code>
                    <FAB
                        icon="star"
                        label="Star"
                    />
                </Code>
            </Section>

            <Section title="Extended FAB with a trailing icon">
                <Code>
                    <FAB
                        label="Star"
                        trailingIcon="star"
                    />
                </Code>
            </Section>

            <Section title="Animated FAB">
                <Code
                    setup={
                        <Button
                            label="Toggle"
                            onClick={() => setExited(v => !v)}
                        />
                    }
                >
                    <FAB
                        icon="star"
                        exited={isExited}
                    />
                </Code>
            </Section>
        </Page>
    );
}