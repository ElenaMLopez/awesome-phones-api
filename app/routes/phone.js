const express = require('express');
const router = express.Router();
const { 
  getAllPhones, 
  getPhone, 
  postNewPhone, 
  deletePhone,
  updatePhone 
} = require('../controllers/PhoneController');

router.get('/', getAllPhones)
      .get('/:id', getPhone)
      .post('/', postNewPhone)
      .delete('/:id', deletePhone)
      .put('/:id', updatePhone);

module.exports = router;