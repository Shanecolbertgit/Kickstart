import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";

class ContributeForm extends Component {
    state = {
        value: ''
    };

    onSubmit = (event) => {
        event.preventDefault();
        
    };
    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={event => this.setState({})}

                        label="ether" labelPosition="right" />
                </Form.Field>
                <Button primary>Contribute!</Button> value: event.target.value
            </Form>
        );
    }
}

export default ContributeForm;