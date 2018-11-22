import React from 'react';

import { Layout, Icon, Typography, Button, Banner } from 'src';

import './index.scss';

export default class BadgesPage extends React.Component {
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Banner</Typography>
                <Typography>A banner displays a prominent message and related optional actions.</Typography>
    
                <section>
                    <Typography variant="subtitle1" component="h2">Text</Typography>

                    <Banner>
                        <Typography variant="subtitle2">Are you a part of the Material Design web community? Help us improve by filling out this <a href="#">10 minute survey</a>.</Typography>
                    </Banner>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Icon and Text</Typography>

                    <Banner icon={<Icon>info_outline</Icon>}>
                    <Typography variant="subtitle2">Are you a part of the Material Design web community? Help us improve by filling out this <a href="#">10 minute survey</a>.</Typography>
                    </Banner>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Icon, Text and Action</Typography>

                    <Banner icon={<Icon>info_outline</Icon>} action={<Button unelevated>Go</Button>}>
                    <Typography variant="subtitle2">Are you a part of the Material Design web community? Help us improve by filling out this <a href="#">10 minute survey</a>.</Typography>
                    </Banner>
                </section>
            </Layout>
        );
    }
}