import react, { Component } from 'react';
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
        const items = 
    }
    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
            </Layout>
        );
    }
}

export default CampaignShow;