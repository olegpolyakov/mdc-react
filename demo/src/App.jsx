import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';

import { Layout, TopAppBar, Icon, Drawer, List, ListItem } from '../../src';

import IndexPage from './components/index';
import AvatarPage from './components/Avatar';
import BadgePage from './components/Badge';
import BannerPage from './components/Banner';
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
import SideSheetPage from './components/SideSheet';
import SelectPage from './components/Select';
import SnackbarPage from './components/Snackbar';
import SwitchPage from './components/Switch';
import TabBarPage from './components/TabBar';
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
                <Drawer
                    title="MDC React"
                    dismissible
                    open={this.state.open}
                    onClose={() => this.setState(state => ({ open: !state.open }))}
                >                    
                    <List element="nav">
                        <ListItem component={NavLink} to="/avatar" activeClassName="mdc-list-item--activated">Avatar</ListItem>
                        <ListItem component={NavLink} to="/badge" activeClassName="mdc-list-item--activated">Badge</ListItem>
                        <ListItem component={NavLink} to="/banner" activeClassName="mdc-list-item--activated">Banner</ListItem>
                        <ListItem component={NavLink} to="/button" activeClassName="mdc-list-item--activated">Button</ListItem>
                        <ListItem component={NavLink} to="/cards" activeClassName="mdc-list-item--activated">Card</ListItem>
                        <ListItem component={NavLink} to="/checkbox" activeClassName="mdc-list-item--activated">Checkbox</ListItem>
                        <ListItem component={NavLink} to="/chips" activeClassName="mdc-list-item--activated">Chips</ListItem>
                        <ListItem component={NavLink} to="/data-table" activeClassName="mdc-list-item--activated">Data Table</ListItem>
                        <ListItem component={NavLink} to="/dialog" activeClassName="mdc-list-item--activated">Dialog</ListItem>
                        <ListItem>Drawer</ListItem>
                        <List inset>
                            <ListItem component={NavLink} to="/drawer" activeClassName="mdc-list-item--activated">Permanent</ListItem>
                            <ListItem component={NavLink} to="/drawer/dismissible" activeClassName="mdc-list-item--activated">Dismissible</ListItem>
                            <ListItem component={NavLink} to="/drawer/modal" activeClassName="mdc-list-item--activated">Modal</ListItem>
                        </List>
                        <ListItem component={NavLink} to="/fab" activeClassName="mdc-list-item--activated">FAB</ListItem>
                        <ListItem component={NavLink} to="/icon-button" activeClassName="mdc-list-item--activated">Icon Button</ListItem>
                        <ListItem component={NavLink} to="/layout-grid" activeClassName="mdc-list-item--activated">Layout Grid</ListItem>
                        <ListItem component={NavLink} to="/list" activeClassName="mdc-list-item--activated">List</ListItem>
                        <ListItem component={NavLink} to="/menu" activeClassName="mdc-list-item--activated">Menu</ListItem>
                        <ListItem component={NavLink} to="/radio" activeClassName="mdc-list-item--activated">Radio</ListItem>
                        <ListItem>Side Sheet</ListItem>
                        <List inset>
                            <ListItem component={NavLink} to="/side-sheet" activeClassName="mdc-list-item--activated">Basic</ListItem>
                            <ListItem component={NavLink} to="/side-sheet/dismissible" activeClassName="mdc-list-item--activated">Dismissible</ListItem>
                            <ListItem component={NavLink} to="/side-sheet/modal" activeClassName="mdc-list-item--activated">Modal</ListItem>
                        </List>
                        <ListItem component={NavLink} to="/select" activeClassName="mdc-list-item--activated">Select</ListItem>
                        <ListItem component={NavLink} to="/snackbar" activeClassName="mdc-list-item--activated">Snackbar</ListItem>
                        <ListItem component={NavLink} to="/switch" activeClassName="mdc-list-item--activated">Switch</ListItem>
                        <ListItem component={NavLink} to="/tab-bar" activeClassName="mdc-list-item--activated">Tab Bar</ListItem>
                        <ListItem component={NavLink} to="/text-field" activeClassName="mdc-list-item--activated">Text Field</ListItem>
                        <ListItem component={NavLink} to="/typography" activeClassName="mdc-list-item--activated">Typography</ListItem>
                    </List>
                </Drawer>
                
                <Layout id="content">
                    <TopAppBar
                        title="MDC React"
                        navigationIcon={
                            <Icon onClick={this.toggleDrawer}>menu</Icon>
                        }
                    />

                    <Layout>
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/avatar" component={AvatarPage} />
                        <Route path="/badge" component={BadgePage} />
                        <Route path="/banner" component={BannerPage} />
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
                        <Route path="/side-sheet" component={SideSheetPage} />
                        <Route path="/select" component={SelectPage} />
                        <Route path="/snackbar" component={SnackbarPage} />
                        <Route path="/switch" component={SwitchPage} />
                        <Route path="/tab-bar" component={TabBarPage} />
                        <Route path="/text-field" component={TextFieldPage} />
                        <Route path="/top-app-bar" component={TopAppBarPage} />
                        <Route path="/typography" component={TypographyPage} />
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}