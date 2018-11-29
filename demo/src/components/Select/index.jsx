import React from 'react';

import { Layout, Typography, Select, Option, Icon } from 'src';

export default class ButtonsPage extends React.Component {
    state = {
        value: ''
    };

    handleChange = value => this.setState({ value });

    render() {
        const { value } = this.state;

        return (
            <Layout column element="main" id="buttons-page">
                <Typography variant="headline3" component="h1">Select</Typography>
                <Typography>Selects allow users to select from a single-option menu. It functions as a wrapper around the browser's native <code>select</code> element.</Typography>
    
                <section>
                    <Typography variant="subtitle1">Filled</Typography>
                    
                    <Select
                        label="Fruit"
                        value={value}
                        onChange={this.handleChange}
                    >
                        <Option value="" />
                        <Option value="apple">Apple</Option>
                        <Option value="banana">Banana</Option>
                        <Option value="orange">Orange</Option>
                    </Select>
                </section>

                <section>
                    <Typography variant="subtitle1">Filled with Helper Text</Typography>
                    
                    <Select
                        label="Fruit"
                        value={value}
                        onChange={value => this.setState({ value })}
                        helperText="Выберите любимый фрукт"
                    >
                        <Option value="apple">Apple</Option>
                        <Option value="banana">Banana</Option>
                        <Option value="orange">Orange</Option>
                    </Select>
                </section>

                <section>
                    <Typography variant="subtitle1">Filled with Leading Icon</Typography>
                    
                    <Select
                        label="Fruit"
                        value={value}
                        leadingIcon={<Icon>star</Icon>}
                        onChange={value => this.setState({ value })}
                    >
                        <Option value="apple">Apple</Option>
                        <Option value="banana">Banana</Option>
                        <Option value="orange">Orange</Option>
                    </Select>
                </section>
            </Layout>
        );
    }
}