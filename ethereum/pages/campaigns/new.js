import react, { Component } from 'react';
import { Form, Button, Input, Message } from 'smeanic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CamapignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .creatCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]

                });
        } catch (err) {
            this.setState({ errorMessage: err.message });

        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.field>
                        <lable>Minimum Contribution
                        </lable>
                        <input lable="wei"
                            lablePosition="right"
                            value={this.state.minimumConribution}
                            onChange={event => this.setState({ minimimContribution: event.target.value })}
                        />
                    </Form.field>

                    <message error header="Oops!" content={this.state.errorMessage} />

                    <Button loading={this.state.loading} primary>
                    Create!
                    </Button>

                </Form>
            </Layout>
        );
    }
}

export default CamapignNew;