const request = require('request');

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7cdeab9e02e208dc7becf28d049e8276&query='+latitude+','+longitude+'&unit=f';
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services');
        }else if(body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is %' + body.current.humidity);
        }
    });
};

module.exports = forcast;