console.log('Create Order start');

const client = require('./settings').getSettings()

// Create Order
exports.createOrder = () => {
    // Place a new order
    client.newOrder('RUNEUSDT', 'BUY', 'LIMIT', {
        price: '1.323',
        quantity: 8,
        timeInForce: 'GTC'
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))
}


