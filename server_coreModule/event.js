//Node-js is a non-blocking event driven runtime

/*const EventEmitter = require('events');
const emitter = new EventEmitter();*/

const School = require('./event2');
const school = new School();

//resister a listener for bellRing event -> event hoile ki korte hebe / event er listener lagbe
school.on('bellRing', ({ period, text }) => {
    console.log(`We need to breeak because ${period} ${text}`);
})

school.startPeriod()

//raise an event -> ekta ghotona ghoteche seta janan dite chai node js ke

/*setTimeout(() => {
    emitter.emit('bellRing',
        {
            period: "First",
            text: "period end"
        }
    )
}, 2000);*/