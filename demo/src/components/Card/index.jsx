import React from 'react';

import {
    Button,
    Card, CardHeader, CardSection, CardMedia, CardActions, CardAction,
    Icon,
    IconButton,
    Layout,
    Typography
} from 'src';

export default class CardsPage extends React.Component {
    render() {
        
        return (
            <Layout element="main" column>
                <Typography variant="headline3" component="h1">Cards</Typography>

                <Card>
                    <CardHeader title="Card" subtitle="with title" />
                </Card>

                <Card>
                    <CardHeader title="Card" subtitle="with large title" large />
                </Card>

                <Card>
                    <CardHeader title="Card" subtitle="with secondary content" />
    
                    <CardSection secondary>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    </CardSection>
                </Card>
    
                <Card>
                    <CardHeader title="Card" subtitle="with primary content" />
    
                    <CardSection primary>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    </CardSection>
                </Card>

                <Card>
                    <CardHeader title="Card" subtitle="with button actions" />
    
                    <CardActions>
                        <CardAction button>
                            <Button>OK</Button>
                        </CardAction>

                        <CardAction button>
                            <Button>Cancel</Button>
                        </CardAction>
                    </CardActions>
                </Card>

                <Card>
                    <CardHeader title="Card" subtitle="with icon actions" />
    
                    <CardActions>
                        <CardAction icon>
                            <IconButton>
                                <Icon>star</Icon>
                            </IconButton>
                        </CardAction>

                        <CardAction icon>
                            <IconButton>
                                <Icon>favorite</Icon>
                            </IconButton>
                        </CardAction>
                    </CardActions>
                </Card>

                <Card>
                    <CardMedia></CardMedia>

                    <CardHeader title="Card" subtitle="with media" />
                </Card>
            </Layout>
        );
    }
}