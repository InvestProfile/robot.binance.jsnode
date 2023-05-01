console.log('Create Order start');

const client = require('./settings').getSettings()

// Create Limit Order
exports.createOrder = (symbol, side, type, quantity, price, timeInForce) => {
    // Place a new order
    client.newOrder(symbol, side, type, {
        price: price,
        quantity: quantity,
        timeInForce: timeInForce
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))
}
