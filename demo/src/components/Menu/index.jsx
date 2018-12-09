import React from 'react';

import {
    Layout,
    Typography,
    IconButton,
    Icon,
    Menu,
    MenuItem,
    MenuSurface
} from 'src';

export default class MenuPage extends React.Component {
    state = {
        open: false,
        anchor: null
    };

    openMenu = event => this.setState({ open: true, anchor: event.target });
    closeMenu = () => this.setState({ open: false, anchor: null });

    render() {
        return (
            <Layout element="main" column style={{height: 1000}}>
                <Typography variant="headline3" component="h1">Menu</Typography>
    
                <section style={{paddingTop: 300}}>
                    <IconButton onClick={this.openMenu}>
                        <Icon>menu</Icon>
                    </IconButton>

                    <MenuSurface
                        open={this.state.open}
                        anchor={this.state.anchor}
                        onClose={this.closeMenu}
                        bottom
                    >
                        <Menu>
                            <MenuItem selected>Подключить ВКонтакте</MenuItem>
                            <MenuItem>Подключить Яндекс</MenuItem>
                            <MenuItem>Подключить Google</MenuItem>
                        </Menu>
                    </MenuSurface>
                </section>
            </Layout>
        );
    }
}