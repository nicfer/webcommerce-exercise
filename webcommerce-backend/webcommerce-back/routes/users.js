var express = require('express');
var axios = require('axios');
const router = express.Router();

router.post('/login', (req, res) => {
  axios.get('https://react-exercise-5aee3-default-rtdb.firebaseio.com/Users.json')
  .then((resp) => {
      for (var user of resp.data) {
          console.log(user.password + "<>" + req.body.password);
          if (user.name === req.body.user) {
              if (user.password === req.body.password) {
                  res.send('logged in!');
              } else {
                  res.status(401).send('wrong password!');
              }
              return;
          }
      };
      res.status(404).send('user not found');
  });
})

module.exports = router;
