const db = require('../config/db');
const sql = require('../config/sqlProvider').currators;
const Currator = require('../models/currator');

class CurratorDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Currator(row));
  }
  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
             .then((row) => new Currator(row));
  }
  static create({ email, password }) {
    return db.one(sql.create, [email, password])
             .then((row) => new Currator(row));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
}

module.exports = CurratorDAO;
