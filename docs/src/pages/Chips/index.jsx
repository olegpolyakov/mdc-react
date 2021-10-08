import { useState } from 'react';
import {
    Avatar,
    ChipSet, Chip
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'chips';
const title = 'Chips';
const description = 'Chips are compact elements that allow users to enter information, select a choice, filter content, or trigger an action.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips',
    guide: 'https://material.io/components/chips'
};

export default function ChipsPage() {
    const [choiceChip, setChoiceChips] = useState('foo');
    const [filterChips, setFilterChips] = useState(['foo']);

    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic chips">
                <Code>
                    <ChipSet>
                        <Chip text="Foo" />
                        <Chip text="Bar" />
                        <Chip text="Baz" />
                    </ChipSet>
                </Code>
            </Section>

            <Section title="Chips with icons">
                <Code>
                    <ChipSet>
                        <Chip text="Foo" icon="star" />
                        <Chip text="Bar" icon="star" />
                        <Chip text="Baz" icon="star" />
                    </ChipSet>
                </Code>
            </Section>

            <Section title="Chips with trailing icons">
                <Code>
                    <ChipSet>
                        <Chip text="Foo" trailingIcon="delete" />
                        <Chip text="Bar" trailingIcon="delete" />
                        <Chip text="Baz" trailingIcon="delete" />
                    </ChipSet>
                </Code>
            </Section>

            <Section title="Chips with avatars">
                <Code>
                    <ChipSet>
                        <Chip text="Foo" graphic={<Avatar src="https://placeimg.com/128/128/people" small />} withAvatar />
                        <Chip text="Bar" graphic={<Avatar src="https://placeimg.com/128/128/people" small />} withAvatar />
                        <Chip text="Baz" graphic={<Avatar src="https://placeimg.com/128/128/people" small />} withAvatar />
                    </ChipSet>
                </Code>
            </Section>

            <Section title="Choice chips">
                <Code>
                    <ChipSet value={choiceChip} onChange={value => setChoiceChips(value)}>
                        <Chip value="foo" text="Foo" />
                        <Chip value="bar" text="Bar" />
                        <Chip value="baz" text="Baz" />
                    </ChipSet>
                </Code>
            </Section>

            <Section title="Filter chips">
                <Code>
                    <ChipSet value={filterChips} onChange={value => setFilterChips(value)}>
                        <Chip value="foo" text="Foo" />
                        <Chip value="bar" text="Bar" />
                        <Chip value="baz" text="Baz" />
                    </ChipSet>
                </Code>
            </Section>
        </Page>
    );
}