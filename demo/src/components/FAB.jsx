import React from 'react';

import { Layout, Typography, FAB, Icon } from '../../../src';

export default class FABPage extends React.Component{
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">FAB</Typography>
    
                <section>
                    <FAB icon={<Icon>favorite_border</Icon>} />
                    
                    <FAB icon={<Icon>favorite_border</Icon>} mini />
                </section>
            </Layout>
        );
    }
}