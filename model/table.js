const Base = require('./config/base');

class table extends Base {
  constructor(props = 'table'){
    super(props);
  }
}

module.exports =  new table()
