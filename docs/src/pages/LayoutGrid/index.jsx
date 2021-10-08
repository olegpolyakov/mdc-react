import {
    LayoutGrid
} from 'mdc-react';

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

import './index.scss';

const id = 'layout-grid';
const title = 'Layout Grid';
const description = 'Material design’s responsive UI is based on a 12-column grid layout.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid',
    guide: 'https://material.io/design/layout/responsive-layout-grid.html'
};

export default function LayoutGridPage() {
    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section title="Basic grid">
                <Code>
                    <LayoutGrid>
                        <LayoutGrid.Cell span="6" />
                        <LayoutGrid.Cell span="3" />
                        <LayoutGrid.Cell span="2" />
                        <LayoutGrid.Cell span="1" />
                        <LayoutGrid.Cell span="3" />
                        <LayoutGrid.Cell span="1" />
                        <LayoutGrid.Cell span="8" />
                    </LayoutGrid>
                </Code>
            </Section>

            <Section title="Nested grid">
                <Code>
                    <LayoutGrid>
                        <LayoutGrid.Cell grid>
                            <LayoutGrid.Cell />
                            <LayoutGrid.Cell />
                            <LayoutGrid.Cell />
                        </LayoutGrid.Cell>
                        <LayoutGrid.Cell />
                        <LayoutGrid.Cell />
                    </LayoutGrid>
                </Code>
            </Section>
        </Page>
    );
}