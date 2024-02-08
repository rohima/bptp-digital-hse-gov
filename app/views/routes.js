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
    res.redirect('what-to-authorise');
  } else if (applicationJourney == "CRD1-CHANGE") {
    res.redirect('what-to-authorise-existing');
  }else if (applicationJourney == "CRD8") {
    res.redirect('crd8/latest/applicant-type');
  } else if (applicationJourney == "CRD3") {
    res.redirect('crd3/latest/applicant-type');
  } else if (applicationJourney == "CRDMRL") {
    res.redirect('crdmrl/latest/application-name-contact');
  } else {
    res.redirect('crd1/latest/applicant-type');
  }
  
})

// what-to-authorise
router.post('/what-to-authorise', function (req, res) {
  let applicationWhatAuthorisation = req.session.data.applicationWhatAuthorisation;
  if (applicationWhatAuthorisation == "CRD2") {
    res.redirect('crd2/latest/application-name-contact');
  } else if (applicationWhatAuthorisation == "CRD1 ARTICLE34")  {
    res.redirect('crd1/latest/application-name-contact');
  } else if (applicationWhatAuthorisation == "CRD1")  {
    res.redirect('crd1/latest/application-name-contact');
  }
})

// what-to-authorise-existing

router.post('/what-to-authorise-existing', function (req, res) {
  let applicationWhatAuthorisationExisting = req.session.data.applicationWhatAuthorisationExisting;
  if (applicationWhatAuthorisationExisting == "CRD3") {
    res.redirect('crd3/latest/application-name-contact');
  }  else if (applicationWhatAuthorisationExisting == "CRDR") {
    res.redirect('crdr/latest/application-name-contact');
  } else if (applicationWhatAuthorisationExisting == "CRDW") {
    res.redirect('crdw/latest/application-name-contact');
  } else if (applicationWhatAuthorisationExisting == "Change details") {
    res.redirect('what-change-to-do');
  }
})


// what-change-to-do

router.post('/what-change-to-do', function (req, res) {
  let crdChangeType = req.session.data.crdChangeType;
  if (crdChangeType == "Label") {
    res.redirect('crd1-label/latest/application-name-contact');
  } else if (crdChangeType == "Formula") {
    res.redirect('crd1-change/latest/application-name-contact');
  }else if (crdChangeType == "Packaging") {
    res.redirect('crd1-packaging/latest/application-name-contact');
  } else if (crdChangeType == "Data") {
    res.redirect('crd1-change/latest/application-name-contact');
  } else if (crdChangeType == "Active") {
    res.redirect('crd1-change/latest/application-name-contact');
  } else if (crdChangeType == "CRD2 ADMIN") {
    res.redirect('crd1-administrative/latest/application-name-contact');
  }
  
})

// 


module.exports = router
