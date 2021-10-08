import {
    Typography
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'typography';
const title = 'Typography';
const description = 'Typography expresses hierarchy and brand presence.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-typography',
    guide: 'https://material.io/design/typography'
};

export default function TypographyPage() {
    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section>
                <Code>
                    <Typography type="headline1" noMargin>Headline 1</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="headline2" noMargin>Headline 2</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="headline3" noMargin>Headline 3</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="headline4" noMargin>Headline 4</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="headline5" noMargin>Headline 5</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="headline6" noMargin>Headline 6</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="subtitle1" noMargin>Subtitle 1</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="subtitle2" noMargin>Subtitle 2</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="body1" noMargin>Body 1</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="body2" noMargin>Body 2</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="caption">Caption</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="button">Button</Typography>
                </Code>
            </Section>

            <Section>
                <Code>
                    <Typography type="overline">Overline</Typography>
                </Code>
            </Section>
        </Page>
    );
}