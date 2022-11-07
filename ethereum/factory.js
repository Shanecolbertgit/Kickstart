import web from './web3';
import campaignFactory from './build/CampaignFactory.json';
import web3 from './web3';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0xE859835-address'
);

export default instance;