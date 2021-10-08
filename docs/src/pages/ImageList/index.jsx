import {
    ImageList
} from 'mdc-react';

const id = 'image-list';
const title = 'Image List';
const description = 'Image lists display a collection of images in an organized grid.';
const links = {
    docs: 'https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list',
    guide: 'https://material.io/components/image-lists'
};

import Page from '@/components/Page';
import Section from '@/components/Section';
import Code from '@/components/Code';

import './index.scss';

const standardItems = new Array(15).fill(1).map(() => ({
    imageSrc: 'https://placeimg.com/360/360/any',
    label: 'Text Label'
}));

const masonryItems = new Array(15).fill(1).map(() => ({
    imageSrc: `https://placeimg.com/${Math.random() > 0.5 ? '480/360' : '360/480'}/any`,
    label: 'Text Label'
}));

export default function ImageListPage() {
    return (
        <Page id={id} title={title} description={description} links={links}>
            <Section id="standard-image-list" title="Standard Image List">
                <Code>
                    <ImageList>
                        {standardItems.map((item, index) =>
                            <ImageList.Item key={index} {...item} />
                        )}
                    </ImageList>
                </Code>
            </Section>

            <Section id="standard-image-list" title="Standard Image List with Text Protection">
                <Code>
                    <ImageList withTextProtection>
                        {standardItems.map((item, index) =>
                            <ImageList.Item key={index} {...item} />
                        )}
                    </ImageList>
                </Code>
            </Section>

            <Section id="masonry-image-list" title="Masonry Image Lis">
                <Code>
                    <ImageList masonry>
                        {masonryItems.map((item, index) =>
                            <ImageList.Item key={index} {...item} />
                        )}
                    </ImageList>
                </Code>
            </Section>

            <Section id="masonry-image-list" title="Masonry Image List with Text Protection">
                <Code>
                    <ImageList masonry withTextProtection>
                        {masonryItems.map((item, index) =>
                            <ImageList.Item key={index} {...item} />
                        )}
                    </ImageList>
                </Code>
            </Section>
        </Page>
    );
}