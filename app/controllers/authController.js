const CurratorDAO = require('../services/curratorDAO');
const createToken = require('../utilis/createToken');
const bcrypt = require('bcrypt');

class AuthController {
  static logIn(req, res) {
    const { email, password } = req.body;
    CurratorDAO.findBy({ email })
      .then((currator) => {
        if (!bcrypt.compareSync(password, currator.password)) {
          res.status(401).end();
        } else {
          req.session.currentCurrator = currator;
          const token = createToken(currator);
          res.cookie('token', token);
          res.status(200).json(currator);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(401).end();
      });
  }
  static signUp(req, res) {
    const email = req.body.email;
    let password = req.body.password;
    if (email.length > 0 && password.length > 0) {
      password = bcrypt.hashSync(password, 10);
      CurratorDAO.create({ email, password })
          .then((currator) => {
            req.session.currentCurrator = currator;
            const token = createToken(currator);
            res.cookie('token', token);
            res.status(200).json(currator);
          })
          .catch((err) => res.status(500).json(err));
    } else {
      res.status(400).end();
    }
  }
  static signOut(req, res) {
    req.session.currentCurrator = null;
    res.clearCookie('token');
    res.status(204).end();
  }
}

module.exports = AuthController;
