const express = require('express')
const router = express.Router()

// start

router.post('/start', function (req, res) {
    res.redirect('application-reference');
  
})

// application-reference

router.post('/application-reference', function (req, res) {
    let applicationReference = req.session.data.applicationReference;
    if (applicationReference == "No") {
      res.redirect('crd1/latest/existing-job-number');
    } else {
      res.redirect('what-to-do');
    }
  
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
    res.redirect('crd1/latest/application-name-contact');
  } else if (applicationJourney == "CRD1-CHANGE") {
    res.redirect('what-change-to-do');
  }else if (applicationJourney == "CRD8") {
    res.redirect('crd8/latest/applicant-type');
  } else if (applicationJourney == "CRD3") {
    res.redirect('crd3/latest/applicant-type');
  } else {
    res.redirect('crd1/latest/applicant-type');
  }
  
})

// what-to-authorise
router.post('/what-to-authorise', function (req, res) {
  let applicationWhatAuthorisation = req.session.data.applicationWhatAuthorisation;
  res.redirect('what-to-authorise');
})

// what-to-authorise-existing

router.post('/what-to-authorise-existing', function (req, res) {
  let applicationWhatAuthorisationExisting = req.session.data.applicationWhatAuthorisationExisting;
  res.redirect('what-to-authorise-existing');
})


// what-change-to-do

router.post('/what-change-to-do', function (req, res) {
  let crd1ChangeType = req.session.data.crd1ChangeType;
  if (crd1ChangeType == "Label") {
    res.redirect('crd1-label/latest/application-name-contact');
  } else if (crd1ChangeType == "Formula") {
    res.redirect('crd1-formula/latest/existing-job-number');
  }else if (crd1ChangeType == "Packaging") {
    res.redirect('crd1-packaging/latest/application-name-contact');
  } else if (crd1ChangeType == "Data") {
    res.redirect('crd1-data/latest/existing-job-number');
  } else if (crd1ChangeType == "Active") {
    res.redirect('crd1-active/latest/existing-job-number');
  } else if (crd1ChangeType == "Admin") {
    res.redirect('crd1-administrative/latest/application-name-contact');
  } else {
    res.redirect('crd1/latest/applicant-type');
  }
  
})



// 


module.exports = router
