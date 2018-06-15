import React from 'react';

import { Layout, Typography, IconButton, Icon } from '../../../src';

export default class IconButtonPage extends React.Component {
    state = {
        on: false
    };

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Icon Button</Typography>
    
                <section>
                    <IconButton
                        on={this.state.on}
                        onIcon="favorite"
                        offIcon="favorite_border"
                        onLabel="Add to favorites"
                        offLabel="Remove from favorites"
                        onClick={() => this.setState(state => ({ on: !state.on }))}
                    />
                </section>
            </Layout>
        );
    }
}