const SubscriberDAO = require('../services/subscriberDAO');
const createToken = require('../utilis/createToken');
const bcrypt = require('bcrypt');

class AuthController {
  // static logIn(req, res) {
  //   const { firstname, lastname, email } = req.body;
  //   SubscriberDAO.findBy({ email })
  //     .then((subscriber) => {
  //       if (!bcrypt.compareSync(password, subscriber.password)) {
  //         res.status(401).end();
  //       } else {
  //         req.session.currentSubscriber = subscriber;
  //         const token = createToken(subscriber);
  //         res.cookie('token', token);
  //         res.status(200).json(subscriber);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(401).end();
  //     });
  // }
  static signUp(req, res) {
    const email = req.body.email;
        // let password = req.body.password;
    if (email.length > 0 )  {
      // password = bcrypt.hashSync(password, 10);
      SubscriberDAO.create({email})
          .then((subscriber) => {
            req.session.currentSubscriber = subscriber;
            const token = createToken(subscriber);
            res.cookie('token', token);
            res.status(200).json(subscriber);
          })
          .catch((err) => res.status(500).json(err));
    } else {
      res.status(400).end();
    }
  }
  // static signOut(req, res) {
  //   req.session.currentSubscriber = null;
  //   res.clearCookie('token');
  //   res.status(204).end();
  // }
}

module.exports = AuthController;
