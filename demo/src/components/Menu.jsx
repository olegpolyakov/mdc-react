import React from 'react';

import { Layout, Typography, Button, IconButton, Icon, Menu, MenuItem } from '../../../src';

export default class MenuPage extends React.Component {
    state = {
        open: false
    };

    toggleMenu = () => this.setState(state => ({ open: !state.open }));

    render() {
        return (
            <Layout column>
                <Typography variant="headline3" component="h1">Menu</Typography>
    
                <section>
                    <Menu
                        open={this.state.open}
                        trigger={
                            <IconButton onClick={this.toggleMenu}>
                                <Icon>menu</Icon>
                            </IconButton>
                        }
                        top
                        right
                        onClose={this.toggleMenu}>
                        <MenuItem>Подключить ВКонтакте</MenuItem>
                        <MenuItem>Подключить Яндекс</MenuItem>
                        <MenuItem>Подключить Google</MenuItem>
                    </Menu>
                </section>
            </Layout>
        );
    }
}