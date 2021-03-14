const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGFuZG9kIiwiYSI6ImNrbGN1N2w4ejF3eWEydm5wcjRzazE2a2UifQ.gL09PGOt7dkSlI8BuGxNiA';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (body.features.length === 0) {
            callback('Unable to find location');
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;