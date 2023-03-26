const Base = require('./config/base');

class countdown extends Base {
    constructor(props = 'countdown') {
        super(props);
    }
}

module.exports = new countdown()
