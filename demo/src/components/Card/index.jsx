import React from 'react';

import {
    Avatar,
    Button,
    Card, CardHeader, CardSection, CardMedia, CardActions, CardAction,
    Icon,
    IconButton,
    Layout,
    Typography
} from 'src';

import './index.scss';

export default class CardPage extends React.Component {
    render() {
        
        return (
            <Layout id="card-page" element="main" column>
                <Typography variant="headline3" component="h1">Card</Typography>

                <Typography></Typography>

                <Card>
                    <CardHeader title="Card" subtitle="with title" />
                </Card>

                <Card>
                    <CardHeader
                        title="Card"
                        subtitle="with icon and title"
                        graphic={<Avatar><Icon>star</Icon></Avatar>}
                    />
                </Card>

                <Card>
                    <CardHeader
                        title="Card"
                        subtitle="with icon, title and actin"
                        graphic={<Avatar><Icon>star</Icon></Avatar>}
                        action={<IconButton><Icon>more_vert</Icon></IconButton>}
                    />
                </Card>

                <Card>
                    <CardHeader title="Card" subtitle="with primary content" />
    
                    <CardSection primary>
                        <Typography variant="body2" style={{ margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</Typography>
                    </CardSection>
                </Card>

                <Card>
                    <CardHeader title="Card" subtitle="with secondary content" />
    
                    <CardSection secondary>
                        <Typography variant="body2" style={{ margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</Typography>
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
                    <CardMedia />

                    <CardHeader title="Card" subtitle="with media" />
                </Card>
            </Layout>
        );
    }
}