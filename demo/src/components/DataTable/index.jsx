import React from 'react';

import {
    Layout,
    Card,
    DataTable, DataTableHead, DataTableBody, DataTableRow, DataTableCell, DataTableFoot,
    Typography,
} from 'src';

export default class DataTablePage extends React.Component {
    render() {
        return (
            <Layout column element="main">
                <Typography variant="headline3" element="h1">Data Table</Typography>

                <Card>
                    <DataTable>
                        <DataTableHead>
                            <DataTableRow>
                                <DataTableCell element="th">
                                    Material
                                </DataTableCell>

                                <DataTableCell element="th" numeric>
                                    Quantity
                                </DataTableCell>

                                <DataTableCell element="th" numeric>
                                    Unit price
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableHead>

                        <DataTableBody>
                            <DataTableRow>
                                <DataTableCell>
                                    Acrylic (Transparent)
                                </DataTableCell>

                                <DataTableCell numeric>
                                    25
                                </DataTableCell>

                                <DataTableCell numeric>
                                    $2.90
                                </DataTableCell>
                            </DataTableRow>

                            <DataTableRow>
                                <DataTableCell>
                                    Acrylic (Transparent)
                                </DataTableCell>

                                <DataTableCell numeric>
                                    25
                                </DataTableCell>

                                <DataTableCell numeric>
                                    $2.90
                                </DataTableCell>
                            </DataTableRow>

                            <DataTableRow>
                                <DataTableCell>
                                    Acrylic (Transparent)
                                </DataTableCell>

                                <DataTableCell numeric>
                                    25
                                </DataTableCell>

                                <DataTableCell numeric>
                                    $2.90
                                </DataTableCell>
                            </DataTableRow>
                        </DataTableBody>
                    </DataTable>
                </Card>
            </Layout>
        );
    }
}