import { useState } from 'react';
import {
    Avatar,
    Layout,
    SegmentedButton
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

const id = 'avatar';
const title = 'Avatar';
const description = 'Avatars are found throughout material design with uses in everything from tables to dialog menus.';

export default function AvatarPage() {
    const [size, setSize] = useState('medium');
    const [content, setContent] = useState('image');

    return (
        <Page
            id={id}
            title={title}
            description={description}
        >
            <Section title="Demo">
                <Layout row>
                    <fieldset>
                        <legend>Content</legend>

                        <SegmentedButton
                            segments={[
                                { value: 'image', label: 'Image' },
                                { value: 'icon', label: 'Icon' },
                                { value: 'text', label: 'Text' }
                            ]}
                            value={content}
                            onChange={setContent}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Size</legend>

                        <SegmentedButton
                            segments={[
                                { value: 'small', label: 'Small' },
                                { value: 'medium', label: 'Medium' },
                                { value: 'large', label: 'Large' }
                            ]}
                            value={size}
                            onChange={setSize}
                        />
                    </fieldset>
                </Layout>

                <Code>
                    <Avatar
                        src={content === 'image' ? 'https://placeimg.com/128/128/people' : undefined}
                        icon={content === 'icon' ? 'star' : undefined}
                        text={content === 'text' ? 'MD' : undefined}
                        size={size}
                    />
                </Code>
            </Section>
        </Page>
    );
}