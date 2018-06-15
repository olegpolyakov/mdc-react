import React from 'react';

import { Layout, Typography, List, ListItem, ListItemText, ListItemGraphic, ListItemMeta, ListDivider } from '../../../src';

export default function FabPage() {
    return (
        <Layout column element="main">
            <Typography variant="headline3" component="h1">List</Typography>

            <section>
                <Typography variant="subtitle1" component="h2">Single-Line</Typography>

                <List>
                    <ListItem>List Item</ListItem>
                    <ListItem>List Item</ListItem>
                    <ListItem>List Item</ListItem>
                </List>
            </section>

            <section>
                <Typography variant="subtitle1" component="h2">Two-Line</Typography>

                <List twoLine>
                    <ListItem>
                        <ListItemText primary="List Item" secondary="Secondary text" />
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="List Item" secondary="Secondary text" />
                    </ListItem>

                    <ListItem>
                        <ListItemText primary="List Item" secondary="Secondary text" />
                    </ListItem>
                </List>
            </section>

            <section>
                <Typography variant="subtitle1" component="h2">Leading Icon</Typography>

                <List>
                    <ListItem>
                        <ListItemGraphic icon="wifi" />
                        <ListItemText>List Item</ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic icon="bluetooth" />
                        List Item
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic icon="data_usage" />
                        List Item
                    </ListItem>
                </List>
            </section>

            <section>
                <Typography variant="subtitle1" component="h2">Trailing Icon</Typography>

                <List>
                    <ListItem>
                        List Item
                        <ListItemMeta icon="info" />
                    </ListItem>

                    <ListItem>
                        List Item
                        <ListItemMeta icon="info" />
                    </ListItem>

                    <ListItem>
                        List Item
                        <ListItemMeta icon="info" />
                    </ListItem>
                </List>
            </section>

            <section>
                <Typography variant="subtitle1" component="h2">Two-Line with Leading and Trailing Icon and Divider</Typography>

                <List twoLine avatarList>
                    <ListItem>
                        <ListItemGraphic icon="folder" />
                        <ListItemText primary="Dog Photos" secondary="9 Jan 2018" />
                        <ListItemMeta icon="info" />
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic icon="folder" />
                        <ListItemText primary="Dog Photos" secondary="9 Jan 2018" />
                        <ListItemMeta icon="info" />
                    </ListItem>

                    <ListDivider />

                    <ListItem>
                        <ListItemGraphic icon="folder" />
                        <ListItemText primary="Dog Photos" secondary="9 Jan 2018" />
                        <ListItemMeta icon="info" />
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic icon="folder" />
                        <ListItemText primary="Dog Photos" secondary="9 Jan 2018" />
                        <ListItemMeta icon="info" />
                    </ListItem>
                </List>
            </section>
        </Layout>
    );
}