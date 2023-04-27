console.log('Get account information start');

// Get account information
function getAccountInformation(client) {
    client.account().then(response => client.logger.log(response.data))
}

module.exports = {
    getAccountInformation
};
