console.log('getENV starts');

require('dotenv').config();

const BinanceENV = ({
    apiKey: process.env.binance_apiKey,
    apiSecret: process.env.binance_apiSecret
})

exports.getENV = () => {
    return BinanceENV
}