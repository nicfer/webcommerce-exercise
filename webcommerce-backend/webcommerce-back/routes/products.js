var express = require('express');
var axios = require('axios');
const router = express.Router();

router.get('/products', (req, res) => {
    //console.log(req);
  axios.get('https://react-exercise-5aee3-default-rtdb.firebaseio.com/Products.json')
  .then((resp) => {
      //console.log(resp.data)
      res.send(resp.data);
  });
})

router.post('/product/add', (req, res) => {
    axios.post('https://react-exercise-5aee3-default-rtdb.firebaseio.com/Products.json', req.body)
    .then(
      res.send('ok')
    )
})

router.delete('/product/:id', (req, res) => {
    axios.delete('https://react-exercise-5aee3-default-rtdb.firebaseio.com/Products/'+req.params.id+'.json')
    .then(
      res.send('ok')
    )
})

module.exports = router;
