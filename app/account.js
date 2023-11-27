console.log('Get account information start');

const { Spot } = require('@binance/connector')
const BinanceENV = require('./env').getENV()
const client = new Spot(BinanceENV.apiKey, BinanceENV.apiSecret)

//getInformation
exports.getAccount = () => {
    return client.account().then(response => client.logger.log(response.data))
}

