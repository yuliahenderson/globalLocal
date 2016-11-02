const jwt = require('jsonwebtoken');

function createToken(currator) {
  return jwt.sign(currator, process.env.JWT_SECRET, { expiresIn: 10080 });
}

module.exports = createToken;
