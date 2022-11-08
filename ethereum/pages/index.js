import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    static async getInitialPtops() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    render() {
        return <div>Campaigns Index!</div>
    }
}

export default CampaignIndex;
