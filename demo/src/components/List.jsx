import React from 'react';

import {
    Layout,
    Typography,
    Icon,
    List, ListItem, ListItemText, ListItemGraphic, ListItemMeta, ListDivider
} from '../../../src';

export default function ListPage() {
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
                        <ListItemGraphic><Icon>wifi</Icon></ListItemGraphic>
                        <ListItemText>List Item</ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic><Icon>bluetooth</Icon></ListItemGraphic>
                        List Item
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic><Icon>data_usage</Icon></ListItemGraphic>
                        List Item
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic className="section-progress">
                            <svg></svg>
                        </ListItemGraphic>
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
                        <ListItemGraphic>
                            <Icon>folder</Icon>
                        </ListItemGraphic>
                        <ListItemText primary="Dog Photos" secondary="9 Jan 2018" />
                        <ListItemMeta icon="info" />
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic>
                            <Icon>folder</Icon>
                        </ListItemGraphic>
                        <ListItemText primary="Dog Photos" secondary="9 Jan 2018" />
                        <ListItemMeta icon="info" />
                    </ListItem>

                    <ListDivider />

                    <ListItem>
                        <ListItemGraphic>
                            <Icon>folder</Icon>
                        </ListItemGraphic>
                        <ListItemText primary="Dog Photos" secondary="9 Jan 2018" />
                        <ListItemMeta icon="info" />
                    </ListItem>

                    <ListItem>
                        <ListItemGraphic>
                            <Icon>folder</Icon>
                        </ListItemGraphic>
                        <ListItemText primary="Dog Photos" secondary="9 Jan 2018" />
                        <ListItemMeta icon="info" />
                    </ListItem>
                </List>
            </section>
        </Layout>
    );
}