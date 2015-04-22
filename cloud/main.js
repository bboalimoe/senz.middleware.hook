var rabbit_lib = require('rabbit_lib');

AV.Cloud.define("hello", function(request, response) {
    response.success("Hello world!");
});

AV.Cloud.afterSave('UserLocation', function(request) {
    console.log('There is a new location comming.');
    msg = {
        'objectId': request.object.id,
        'timestamp': Date.now()
    };
    console.log('The new location object id: ' + request.object.id);
    rabbit_lib.publish(msg, 'new_location_arrival');
});

AV.Cloud.afterSave('UserMic', function(request) {
    console.log('There is a new sound comming.');
    msg = {
        'objectId': request.object.id,
        'timestamp': Date.now()
    };
    console.log('The new sound object id: ' + request.object.id);
    rabbit_lib.publish(msg, 'new_sound_arrival');
});

AV.Cloud.afterSave('UserSensor', function(request) {
    console.log('There is a new motion comming.');
    msg = {
        'objectId': request.object.id,
        'timestamp': Date.now()
    };
    console.log('The new motion object id: ' + request.object.id);
    rabbit_lib.publish(msg, 'new_motion_arrival');
});