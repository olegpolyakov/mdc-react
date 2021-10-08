import {
    Elevation,
    RippleSurface
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';

export default function RadioPage() {
    return (
        <Page title="Ripple">
            <Section title="Basic ripple">
                <Elevation z="5">
                    <RippleSurface style={{ height: '100px' }} />
                </Elevation>
            </Section>
        </Page>
    );
}