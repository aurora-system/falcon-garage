var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.json({ route: '/api/customers' });
});

module.exports = router;
