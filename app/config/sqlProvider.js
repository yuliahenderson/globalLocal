const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  currators: {
    all: sql('./sql/currator/all.sql'),
    find: sql('./sql/currator/find.sql'),
    create: sql('./sql/currator/create.sql'),
    delete: sql('./sql/currator/delete.sql'),
  },
};

module.exports = sqlProvider;
