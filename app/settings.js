console.log('Settings start');

const { Spot } = require('@binance/connector')

const apiKey = 'U9OCcg0UWiEITdbwzD9JXQVs0KP6tPFnfU1YoW54FFbhf0fuUDm9Jc4YfCR7Xgwg'
const apiSecret = 'Z8wOuZ3OnvEEqC45aSRuMwv3adeMRJXlx8D028Ln2pCkXO4lE6AVFbwkHnAuGcNE'

exports.getSettings = () => {
    return new Spot(apiKey, apiSecret)
}