const Base = require('./config/base');

class calendar extends Base {
    constructor(props = 'calendar') {
        super(props);
    }
}

module.exports = new calendar()
