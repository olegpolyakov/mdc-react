import React from 'react';

import { Layout, Typography, LayoutGrid, LayoutGridCell } from 'src';

import './index.scss';

export default class LayoutGridPage extends React.Component {
    render() {
        return (
            <Layout id="layout-grid-page" column element="main">
                <Typography variant="headline3" component="h1">LayoutGrid</Typography>
    
                <LayoutGrid>
                    <LayoutGridCell span="6"></LayoutGridCell>
                    <LayoutGridCell span="3"></LayoutGridCell>
                    <LayoutGridCell span="2"></LayoutGridCell>
                    <LayoutGridCell span="1"></LayoutGridCell>
                    <LayoutGridCell span="3"></LayoutGridCell>
                    <LayoutGridCell span="1"></LayoutGridCell>
                    <LayoutGridCell span="8"></LayoutGridCell>
                </LayoutGrid>
            </Layout>
        );
    }
}