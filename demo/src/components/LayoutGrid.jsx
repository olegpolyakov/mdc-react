import React from 'react';

import { Layout, Typography, LayoutGrid, LayoutGridCell } from '../../../src';

export default class LayoutGridPage extends React.Component {
    render() {
        const mainStyle = {
            
        };

        const gridStyle = {
            width: '900px',
            margin: 0,
            backgroundColor: 'rgba(0,0,0,.2)'
        };
        const cellStyle = {
            background: 'rgba(0,0,0,.2)',
            height: '100px'
        };

        return (
            <Layout column element="main" style={mainStyle}>
                <Typography variant="headline3" component="h1">LayoutGrid</Typography>
    
                <LayoutGrid style={gridStyle}>
                    <LayoutGridCell span="6" style={cellStyle}></LayoutGridCell>
                    <LayoutGridCell span="3" style={cellStyle}></LayoutGridCell>
                    <LayoutGridCell span="2" style={cellStyle}></LayoutGridCell>
                    <LayoutGridCell span="1" style={cellStyle}></LayoutGridCell>
                    <LayoutGridCell span="3" style={cellStyle}></LayoutGridCell>
                    <LayoutGridCell span="1" style={cellStyle}></LayoutGridCell>
                    <LayoutGridCell span="8" style={cellStyle}></LayoutGridCell>
                </LayoutGrid>
            </Layout>
        );
    }
}