console.log('index start');

const { Spot } = require('@binance/connector')

const apiKey = '4XRCMayD2Hr3V35NIdyeVtuROfkEoRkoLniA1wOl6WTFJXusvA6aZtIQPYfcoCPh'
const apiSecret = '6kadaQ9twiy3rjjd9eA6aGYPHpZvhfjVEVVuvEDFQMU63EefnyXEx8oj72aThkIq'
const client = new Spot(apiKey, apiSecret)

require("./getAccountInformation").getAccountInformation(client)

