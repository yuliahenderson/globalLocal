const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  subscribers: {
    all: sql('./sql/subscriber/all.sql'),
    find: sql('./sql/subscriber/find.sql'),
    create: sql('./sql/subscriber/create.sql'),
    delete: sql('./sql/subscriber/delete.sql'),
  },
};

module.exports = sqlProvider;
