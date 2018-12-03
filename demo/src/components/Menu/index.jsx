import React from 'react';

import { Layout, Typography, IconButton, Icon, Menu, MenuItem } from 'src';

export default class MenuPage extends React.Component {
    state = {
        open: false,
        anchor: null
    };

    openMenu = event => this.setState({ open: true, anchor: event.target });
    closeMenu = () => this.setState({ open: false, anchor: null });

    render() {
        return (
            <Layout element="main" column>
                <Typography variant="headline3" component="h1">Menu</Typography>
    
                <section>
                    <IconButton onClick={this.openMenu}>
                        <Icon>menu</Icon>
                    </IconButton>

                    <Menu
                        open={this.state.open}
                        anchor={this.state.anchor}
                        onClose={this.closeMenu}
                    >
                        <MenuItem selected>Подключить ВКонтакте</MenuItem>
                        <MenuItem>Подключить Яндекс</MenuItem>
                        <MenuItem>Подключить Google</MenuItem>
                    </Menu>
                </section>
            </Layout>
        );
    }
}