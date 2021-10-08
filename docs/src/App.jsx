import { Route, NavLink, Switch } from 'react-router-dom';
import {
    Drawer,
    IconButton,
    List,
    TopAppBar
} from 'mdc-react';

import routes from './routes';
import { Home } from './pages';

import './App.scss';

export default function App() {
    return (
        <div className="app">
            <TopAppBar
                className="app-top-bar"
                navigationIcon={
                    <IconButton
                        icon={
                            <img src="https://material-components.github.io/material-components-web-catalog/static/media/ic_component_24px_white.svg" alt="" />
                        }
                    />
                }
                title="MDC React"
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
                                primaryText={route.title}
                                activeClassName="mdc-list-item--activated"
                            />
                        )}
                    </List>
                </Drawer.Content>
            </Drawer>

            <main className="app-content mdc-drawer-app-content">
                <Switch>
                    <Route exact path="/">
                        <Home routes={routes} />
                    </Route>

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