import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    static async getInitialPtops() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true

            };
        });

        return <Card.Group iterms={items} />;
    }

    render() {
        return <div>rel="stylesheet"href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
            {this.renderCampaigns()}
        </div>;
    }
}

export default CampaignIndex;
