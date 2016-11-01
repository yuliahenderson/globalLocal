const db = require('../config/db');
const sql = require('../config/sqlProvider').destinations;
const Destination = require('../models/Destination');

class DestinationDAO {
  static create({ city_name, currator_id }) {
    return db.one(sql.create, [city_name, currator_id])
             .then((data) => new Destination(data));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static searchBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.map(sql.find, [key, value], (row) => new Destination(row));
  }
}

module.exports = DestinationDAO;
