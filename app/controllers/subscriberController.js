const SubscriberDAO = require('../services/subscriberDAO');

class SubscriberController {
  static getAll(req, res) {
    SubscriberDAO.all().then((subscribers) => {
      res.status(200).json(subscribers);
    });
  }
  static getOne(req, res) {
    SubscriberDAO.findBy({ id: req.params.id })
           .then((subscriber) => res.status(200).json(subscriber));
  }
  // static create(req, res) {
  //   const subscriberData = {
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     email: req.body.email,
  //   };
  //   SubscriberDAO.create(subscriberData)
  //                .then((subscriber) => res.status(200).json(subscriber));
  // }
}

module.exports = SubscriberController;
