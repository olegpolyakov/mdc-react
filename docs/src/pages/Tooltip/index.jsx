import {
    IconButton,
    Tooltip, RichTooltip
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'tooltip';
const title = 'Tooltip';
const description = 'Tooltips display informative text when users hover over, focus on, or tap an element.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-tooltip',
    guide: 'https://material.io/components/tooltips'
};

export default function TooltipPage() {
    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic tooltip">
                <Code>
                    <Tooltip label="Star">
                        <IconButton icon="star" />
                    </Tooltip>
                </Code>
            </Section>

            <Section title="Multiline tooltip">
                <Code>
                    <Tooltip label="This is a star icon button, you should click on it">
                        <IconButton icon="star" />
                    </Tooltip>
                </Code>
            </Section>

            <Section title="Rich tooltip">
                <Code>
                    <RichTooltip
                        title="Title"
                        content="Default rich tooltips are shown when users hover over or focus on their anchor element. They remain shown when users focus/hover over the contents of the rich tooltip, but becomes hidden if the users focus/hover outside of the anchor element or the tooltip contents. If the user clicks within the contents of the tooltip, the tooltip will also be hidden."
                    >
                        <IconButton icon="star" />
                    </RichTooltip>
                </Code>
            </Section>
        </Page>
    );
}