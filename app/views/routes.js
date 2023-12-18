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

// existing-job-number

router.post('/application-reference', function (req, res) {
  let applicationReference = req.session.data.applicationReference;
  res.redirect('what-to-do');

})
// from here user goes to verify securoty code from here


// what-to-do

router.post('/what-to-do', function (req, res) {
  let applicationJourney = req.session.data.applicationJourney;
  if (applicationJourney == "CRD1") {
    res.redirect('crd1/latest/applicant-type');
  } else if (applicationJourney == "CRD1-CHANGE") {
    res.redirect('crd1-change/latest/what-change-to-do');
  }else if (applicationJourney == "CRD8") {
    res.redirect('crd8/latest/applicant-type');
  } else if (applicationJourney == "CRD3") {
    res.redirect('crd3/latest/applicant-type');
  } else {
    res.redirect('crd1/latest/applicant-type');
  }
  
})

// 


module.exports = router
