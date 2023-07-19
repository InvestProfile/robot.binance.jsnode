console.log('Get account information start');

const client = require('./spot').getSpot()

//getInformation
exports.getInformation = () => {
    return client.account().then(response => client.logger.log(response.data))
}

