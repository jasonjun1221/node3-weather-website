const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d88ada21a49babe1d5cba8967d3b6fe4&query=${latitude},${longtitude}&units=f`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect the weather service!', undefined)
        } else if (body.error) {
            callback('Unable to search location!', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}, It is ${body.current.temperature} degress out. It is likely ${body.current.feelslike}% chance to rain. The humidity is ${body.current.humidity}%.`)
        }
    })
}

module.exports = forecast