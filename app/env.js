console.log('getENV starts');

require('dotenv').config();

const Binance = ({
    apiKey: process.env.binance_apiKey,
    apiSecret: process.env.binance_apiSecret
})

exports.getEnv = () => {
    return Binance
}