const db = require('../config/db');
const sql = require('../config/sqlProvider').subscribers;
const Subscriber = require('../models/subscriber');

class SubscriberDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Subscriber(row));
  }
  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new Subscriber(row));
  }
  static create({ email }) {
    return db.one(sql.create, [ email ])
             .then((row) => new Subscriber(row));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = SubscriberDAO;
