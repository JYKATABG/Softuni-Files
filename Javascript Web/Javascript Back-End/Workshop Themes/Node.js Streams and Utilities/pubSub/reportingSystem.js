const eventBus = require('./eventSub.js');

const collect = (data) => {
    console.log(`Reporting service - ${data.method}`);
}

eventBus.subscribe('request', collect);

