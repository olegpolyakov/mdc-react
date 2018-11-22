import React from 'react';

import { Layout, Typography, IconButton, Icon } from 'src';

export default class IconButtonPage extends React.Component {
    state = {
        on: false
    };

    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Icon Button</Typography>
    
                <section>
                    <Typography variant="subtitle1" component="h2">Icon Button</Typography>

                    <IconButton>
                        <Icon>favorite</Icon>
                    </IconButton>
                </section>

                <section>
                    <Typography variant="subtitle1" component="h2">Icon Toggle Button</Typography>

                    <IconButton
                        on={this.state.on}
                        onIcon={<Icon>favorite</Icon>}
                        offIcon={<Icon>favorite_border</Icon>}
                        onLabel="Add to favorites"
                        offLabel="Remove from favorites"
                        onClick={() => this.setState(state => ({ on: !state.on }))}
                    />
                </section>
            </Layout>
        );
    }
}