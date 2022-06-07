var express = require('express');
var router = express.Router();


router.post('/tolga', function(req, res) {
  const data = {
    page: '/users/tolga'
  }
  res.send(data);
});

module.exports = router;
