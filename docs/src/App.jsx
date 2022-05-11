import { useEffect } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import {
    Drawer,
    Icon,
    IconButton,
    List,
    TopAppBar
} from 'mdc-react';

import routes from './routes';
import { Home } from './pages';

import './App.scss';

export default function App() {
    useEffect(() => {
        const activeNavItem = document.querySelector('.app-drawer .mdc-list-item--activated');

        if (activeNavItem) {
            activeNavItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, []);

    return (
        <div className="app mdc-typography mdc-theme--dark">
            <TopAppBar
                className="app-top-bar"
                navigationIcon={
                    <IconButton
                        icon={
                            <Link to="/">
                                <img src="https://material-components.github.io/material-components-web-catalog/static/media/ic_component_24px_white.svg" alt="" />
                            </Link>
                        }
                    />
                }
                title={<Link to="/" className="app-home-link">MDC React</Link>}
                actionItems={[
                    <IconButton
                        key="code"
                        element="a"
                        href="https://github.com/olegpolyakov/mdc-react"
                        target="_blank"
                        icon="code"
                        title="Code"
                    />,
                    <IconButton
                        key="issues"
                        element="a"
                        href="https://github.com/olegpolyakov/mdc-react/issues"
                        target="_blank"
                        icon="bug_report"
                        title="Issues"
                    />,
                    <IconButton
                        key="discussions"
                        element="a"
                        href="https://github.com/olegpolyakov/mdc-react/discussions"
                        target="_blank"
                        icon="forum"
                        title="Discussions"
                    />
                ]}
            />

            <Drawer className="app-drawer" dismissible open>
                <Drawer.Content>
                    <List element="nav">
                        {routes.map(route =>
                            <List.Item
                                key={route.url}
                                component={NavLink}
                                to={route.url}
                                leadingIcon={<Icon type="outlined">{route.icon}</Icon>}
                                primaryText={route.title}
                                activeClassName="mdc-list-item--activated"
                            />
                        )}
                    </List>
                </Drawer.Content>
            </Drawer>

            <main className="app-content mdc-drawer-app-content">
                <Switch>
                    <Route exact path="/" component={Home} />

                    {routes.map(route =>
                        <Route
                            key={route.url}
                            path={route.url}
                            exact={route.exact}
                            component={route.component}
                        />
                    )}
                </Switch>
            </main>
        </div>
    );
}