const EventEmitter = require('events')

class School extends EventEmitter {
    startPeriod() {
        console.log('Class Started');

        setTimeout(() => {
            this.emit('bellRing',
                {
                    period: "First",
                    text: "period end"
                }
            )
        }, 2000);
    }
}

module.exports = School;

