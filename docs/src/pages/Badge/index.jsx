import { Badge, Button, Icon, IconButton } from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'badge';
const title = 'Badge';
const description = 'Badge generates a small badge to the top-right of its child(ren).';

export default function BadgePage() {
    return (
        <Page id={id} title={title} description={description}>
            <Section>
                <Code title="Badge with text">
                    <Badge value="3">Text</Badge>
                </Code>
            </Section>

            <Section>
                <Code title="Badge with an icon">
                    <Badge value="3">
                        <Icon>star</Icon>
                    </Badge>
                </Code>
            </Section>

            <Section>
                <Code title="Badge with an icon button">
                    <Badge value="3" inset>
                        <IconButton icon="star" />
                    </Badge>
                </Code>
            </Section>

            <Section>
                <Code title="Badge with a button">
                    <Badge value="3">
                        <Button>Button</Button>
                    </Badge>
                </Code>
            </Section>
        </Page>
    );
}