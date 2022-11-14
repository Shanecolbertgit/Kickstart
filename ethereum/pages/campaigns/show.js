import react, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {

    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await CampaignShow.metiods.getSummery().call();



        return {
            minimumCoribution: summery[0],
            balance: summary[1],
            requestCount: summary[2],
            approbersCount: summary[3],
            manager: summary[4]

        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumCountribution,
            requestCountapprobersCount

        } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description: 'The manager  created this campaign and can create requests to witraw money',
                style: { overflowWrap: 'break-word' }


            },
            {

                header: minimumCountribution,
                meta : 'Minimum Contribution (wei)',
                discription: 'You must contibute at least this much wei to become an approver'

            },
            {

                header: requestCount,
                meta: 'Number of requests',
                description: 'A request tries to withdraw money from the contract. Request must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Numbers of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },

            {
                

            }
        ];

        return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
                {this.renderCards()}
            </Layout>
        )
    };
}

export default CampaignShow;