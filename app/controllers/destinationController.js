const DestinationDAO = require('../services/destinationDAO');

class DestinationController {
  static getAllOfCurrentUser(req, res) {
    DestinationDAO.searchBy({ currator_id: req.session.currentCurrator.id }).then((destinations) => {
      res.status(200).json(destinations);
    });
  }
  static create(req, res) {
    const destinationData = {
      city_name: req.body.city_name,
      currator_id: req.session.currentCurrator.id,
    };
    DestinationDAO.create(destinationData)
           .then((destination) => res.status(200).json(destination));
  }
  static delete(req, res) {
    DestinationDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = DestinationController;
