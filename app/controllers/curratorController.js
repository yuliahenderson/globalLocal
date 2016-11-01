const CurratorDAO = require('../services/curratorDAO');

class CurratorController {
  static getAll(req, res) {
    CurratorDAO.all().then((currators) => {
      res.status(200).json(currators);
    });
  }
  static getOne(req, res) {
    CurratorDAO.findBy({ id: req.params.id })
           .then((currator) => res.status(200).json(currator));
  }
}

module.exports = CurratorController;
