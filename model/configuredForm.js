const Base = require('./config/base');

class configuredForm extends Base {
    constructor(props = 'configuredForm') {
        super(props);
    }
}

module.exports = new configuredForm()
