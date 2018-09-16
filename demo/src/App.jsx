import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import { Layout, TopAppBar, Icon, Drawer, List, ListItem } from '../../src';

import IndexPage from './components/index';
import AvatarPage from './components/Avatar';
import BadgePage from './components/Badge';
import ButtonPage from './components/Button';
import CardPage from './components/Card';
import CheckboxPage from './components/Checkbox';
import ChipsPage from './components/Chips';
import DataTablePage from './components/DataTable';
import DialogPage from './components/Dialog';
import DrawerPage from './components/Drawer';
import FABPage from './components/FAB';
import IconButtonPage from './components/IconButton';
import LayoutGridPage from './components/LayoutGrid';
import ListPage from './components/List';
import MenuPage from './components/Menu';
import RadioPage from './components/Radio';
import SnackbarPage from './components/Snackbar';
import SwitchPage from './components/Switch';
import TabsPage from './components/Tabs';
import TextFieldPage from './components/TextField';
import TopAppBarPage from './components/TopAppBar';
import TypographyPage from './components/Typography';

export default class App extends React.Component {
    state = {
        open: true
    };

    toggleDrawer = event => this.setState(state => ({ open: !state.open }));

    render() {
        return (
            <Layout row className="mdc-typography">
                <TopAppBar
                    title="MDC React"
                    navigationIcon={
                        <Icon onClick={this.toggleDrawer}>menu</Icon>
                    }
                    fixedAdjustSibling
                />

                <Layout>
                    <Drawer persistent open={this.state.open}>                    
                        <List element="nav">
                            <ListItem component={NavLink} to="/avatar" activeClassName="mdc-list-item--selected">Avatar</ListItem>
                            <ListItem component={NavLink} to="/badge" activeClassName="mdc-list-item--selected">Badge</ListItem>
                            <ListItem component={NavLink} to="/button" activeClassName="mdc-list-item--selected">Button</ListItem>
                            <ListItem component={NavLink} to="/cards" activeClassName="mdc-list-item--selected">Cards</ListItem>
                            <ListItem component={NavLink} to="/checkbox" activeClassName="mdc-list-item--selected">Checkbox</ListItem>
                            <ListItem component={NavLink} to="/chips" activeClassName="mdc-list-item--selected">Chips</ListItem>
                            <ListItem component={NavLink} to="/data-table" activeClassName="mdc-list-item--selected">Data Table</ListItem>
                            <ListItem component={NavLink} to="/dialog" activeClassName="mdc-list-item--selected">Dialog</ListItem>
                            <ListItem component={NavLink} to="/drawer" activeClassName="mdc-list-item--selected">Drawer</ListItem>
                            <List inset>
                                <ListItem component={NavLink} to="/drawer/permanent" activeClassName="mdc-list-item--selected">Permanent</ListItem>
                                <ListItem component={NavLink} to="/drawer/temporary" activeClassName="mdc-list-item--selected">Temporary</ListItem>
                                <ListItem component={NavLink} to="/drawer/persistent" activeClassName="mdc-list-item--selected">Persistent</ListItem>
                            </List>
                            <ListItem component={NavLink} to="/fab" activeClassName="mdc-list-item--selected">FAB</ListItem>
                            <ListItem component={NavLink} to="/icon-button" activeClassName="mdc-list-item--selected">Icon Button</ListItem>
                            <ListItem component={NavLink} to="/layout-grid" activeClassName="mdc-list-item--selected">Layout Grid</ListItem>
                            <ListItem component={NavLink} to="/list" activeClassName="mdc-list-item--selected">List</ListItem>
                            <ListItem component={NavLink} to="/menu" activeClassName="mdc-list-item--selected">Menu</ListItem>
                            <ListItem component={NavLink} to="/radio" activeClassName="mdc-list-item--selected">Radio</ListItem>
                            <ListItem component={NavLink} to="/snackbar" activeClassName="mdc-list-item--selected">Snackbar</ListItem>
                            <ListItem component={NavLink} to="/switch" activeClassName="mdc-list-item--selected">Switch</ListItem>
                            <ListItem component={NavLink} to="/tabs" activeClassName="mdc-list-item--selected">Tabs</ListItem>
                            <ListItem component={NavLink} to="/textfield" activeClassName="mdc-list-item--selected">Text Field</ListItem>
                            <List inset>
                                <ListItem component={NavLink} to="/top-app-bar/standard" activeClassName="mdc-list-item--selected">Standard</ListItem>
                                <ListItem component={NavLink} to="/top-app-bar/fixed" activeClassName="mdc-list-item--selected">Fixed</ListItem>
                            </List>
                            <ListItem component={NavLink} to="/typography" activeClassName="mdc-list-item--selected">Typography</ListItem>
                        </List>
                    </Drawer>

                    <Route exact path="/" component={IndexPage} />
                    <Route path="/avatar" component={AvatarPage} />
                    <Route path="/badge" component={BadgePage} />
                    <Route path="/button" component={ButtonPage} />
                    <Route path="/cards" component={CardPage} />
                    <Route path="/checkbox" component={CheckboxPage} />
                    <Route path="/chips" component={ChipsPage} />
                    <Route path="/data-table" component={DataTablePage} />
                    <Route path="/dialog" component={DialogPage} />
                    <Route path="/drawer" component={DrawerPage} />
                    <Route path="/fab" component={FABPage} />
                    <Route path="/icon-button" component={IconButtonPage} />
                    <Route path="/layout-grid" component={LayoutGridPage} />
                    <Route path="/list" component={ListPage} />
                    <Route path="/menu" component={MenuPage} />
                    <Route path="/radio" component={RadioPage} />
                    <Route path="/snackbar" component={SnackbarPage} />
                    <Route path="/switch" component={SwitchPage} />
                    <Route path="/tabs" component={TabsPage} />
                    <Route path="/textfield" component={TextFieldPage} />
                    <Route path="/top-app-bar" component={TopAppBarPage} />
                    <Route path="/typography" component={TypographyPage} />
                </Layout>
            </Layout>
        );
    }
}