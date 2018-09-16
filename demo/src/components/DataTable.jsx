import React from 'react';

import { Layout, Typography, DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableCell, DataTableFooter } from '../../../src';

export default class DataTablePage extends React.Component {
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" component="h1">Data Table</Typography>

                <section>
                    <DataTable>
                        <DataTableHeader>
                            <DataTableRow>
                                <DataTableCell header>
                                    Material
                                </DataTableCell>

                                <DataTableCell header>
                                    Quantity
                                </DataTableCell>

                                <DataTableCell header>
                                    Unit price
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableHeader>

                        <DataTableBody>
                            <DataTableRow>
                                <DataTableCell>
                                    Acrylic (Transparent)
                                </DataTableCell>

                                <DataTableCell>
                                    25
                                </DataTableCell>

                                <DataTableCell>
                                    $2.90
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableBody>
                    </DataTable>
                </section>
            </Layout>
        );
    }
}