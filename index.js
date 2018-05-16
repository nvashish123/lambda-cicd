
var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Chicago");
    callback(null, {
        statusCode: '200',
        body: 'Now the time in New York is: ' + currentTime.toString(),
    });
};
