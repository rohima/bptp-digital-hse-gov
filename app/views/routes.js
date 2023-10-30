const express = require('express')
const router = express.Router()

// start

router.post('/start', function (req, res) {
    res.redirect('application-reference');
  
})

// application-reference

router.post('/application-reference', function (req, res) {
    let applicationReference = req.session.data.applicationReference;
    res.redirect('what-to-do');
  
})

// what-to-do

router.post('/what-to-do', function (req, res) {
    res.redirect('crd1/latest/applicant-type');
  
})

// 


module.exports = router
