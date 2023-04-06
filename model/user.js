const knex = require('./config/knex');

class user {
  constructor(props){
    this.table = props;
  }
  // 根据用户名查询用户信息
  userByName(name){
    return knex(this.table).select().where('username','=',name);
  }
}

module.exports = new user('user');
