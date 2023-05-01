console.log('Settings start');

const { Spot } = require('@binance/connector')

require('dotenv').config();
const apiKey = process.env.apiKey
const apiSecret = process.env.apiSecret


exports.getSettings = () => {
    return new Spot(apiKey, apiSecret)
}