console.log('Get account information start');

const client = require('./settings').getSettings()

// Get account information
// function getAccountInformation(client) {
//     client.account().then(response => client.logger.log(response.data))
// }
//
// module.exports = {
//     getAccountInformation
// };

exports.getAccountInformation = () => {
    client.account().then(response => client.logger.log(response.data))
}