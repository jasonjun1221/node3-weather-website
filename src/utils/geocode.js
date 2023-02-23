const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamFzb25jaG9uZzEyMjEiLCJhIjoiY2xlYjZ0bWM4MDBjNTN2bnAzZ3I3eGtzYyJ9.6B4Gn1DQj6Nz-NZ9RP6XnA`

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to search location!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode