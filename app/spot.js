console.log('Settings start');

const { Spot } = require('@binance/connector')

const Binance = require('./env').getEnv()

console.log(Binance)

exports.getSpot = () => {
    return new Spot(Binance.apiKey, Binance.apiSecret)
}