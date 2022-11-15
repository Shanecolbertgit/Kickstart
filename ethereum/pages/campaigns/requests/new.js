import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/camapaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
    state = {
        value: '',
        description: '',
        recipient: ''

    };
    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }

    onSumit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;

        try {
            const accounts = await web3.getAccounts();
            await campaign.metiods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient
            ).send({ from: accounts[0] });
        } catch (err) {

        }
    }
    render() {
        return (
            <Layout>
                <h3>Create a Request</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <lable>Description</lable>
                        <Input
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <lable>Value in Ether</lable>
                        <Input
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <lable>Recipient</lable>
                        <Input
                            value={this.state.recipient}
                            onChange={event => this.setState({ recipient: event.target.value })}
                        />
                    </Form.Field>

                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;