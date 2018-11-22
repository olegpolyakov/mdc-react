import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Layout, TopAppBar } from 'src';

export default function TypographyPage() {
    return (
        <Layout column>
            <Route path="/top-app-bar/standard" render={() =>
                <TopAppBar title="Standard Top App Bar" />
            } />

            <Route path="/top-app-bar/fixed" render={() =>
                <TopAppBar title="Fixed Top App Bar" fixed />
            } />
        </Layout>
    );
}