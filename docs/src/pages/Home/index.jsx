import Page from '@/components/Page';
import markdown from '@/utils/markdown';

import readme from '../../../../README.md';

import './index.scss';

const html = markdown(readme);

export default function HomePage() {
    return (
        <Page id="home">
            <article
                className="markdown"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </Page>
    );
}