import { Card } from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'card';
const title = 'Card';
const description = 'Cards contain content and actions about a single subject.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-card',
    guide: 'https://material.io/components/cards'
}; '';

export default function CardPage() {
    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic">
                <Code>
                    <Card>
                        <Card.Header
                            overline="Overline"
                            title="Title"
                            subtitle="Subtitle"
                        />
                    </Card>
                </Code>
            </Section>

            <Section title="Primary action">
                <Code>
                    <Card>
                        <Card.PrimaryAction>
                            <Card.Header
                                overline="Overline"
                                title="Title"
                                subtitle="Subtitle"
                            />
                        </Card.PrimaryAction>
                    </Card>
                </Code>
            </Section>
        </Page>
    );
}