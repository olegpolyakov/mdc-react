import React from 'react';

import { Layout, Typography, Button, Menu, MenuItem } from '../../../src';

export default class MenuPage extends React.Component {
    state = {
        open: false,
        anchor: null
    };

    render() {
        return (
            <Layout column>
                <Typography variant="headline3" component="h1">Menu</Typography>
    
                <section>
                    <Button onClick={event => this.setState({ open: true, anchor: event.currentTarget })}>Open Menu</Button>

                    <Menu
                        open={this.state.open}
                        anchor={this.state.anchor}
                        onClose={() => this.setState({ open: false })}>
                        <MenuItem>Item 1</MenuItem>
                        <MenuItem>Item 2</MenuItem>
                        <MenuItem>Item 3</MenuItem>
                        <MenuItem>Item 4</MenuItem>
                    </Menu>
                </section>
            </Layout>
        );
    }
}