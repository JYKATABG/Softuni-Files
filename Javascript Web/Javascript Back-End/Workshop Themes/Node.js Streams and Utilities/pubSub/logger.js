const eventBus = require('./eventSub.js')

const log = (data) => {
    console.log(`Logger: ${data.url}`);
}

eventBus.subscribe('request', log);