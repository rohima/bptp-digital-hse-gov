const express = require('express')
const router = express.Router()


// ----------------- APPLICATION JOURNEY ----------------- //

// existing-job-number

router.post('/existing-job-number', function (req, res) {
  
  let existingJobNumber = req.session.data.existingJobNumber;
  res.redirect('application-name-contact');

})

// application-name-contact

router.post('/application-name-contact', function (req, res) {
  
  let applicantFullName = req.session.data.applicantFullName;
  let applicantFirstName = req.session.data.applicantFirstName;
  let applicantLastName = req.session.data.applicantLastName;
  res.redirect('application-company');

})

// application-type-of-organisation - NOT USED

router.post('/application-type-of-organisation', function (req, res) {
  
  let applicantCompanyType = req.session.data.applicantCompanyType;
  res.redirect('application-company');

})

// application-company

router.post('/application-company', function (req, res) {
  
  let applicantCompanyName = req.session.data.applicantCompanyName;
  res.redirect('application-address-postcode');

})

// application-address-postcode

router.post('/application-address-postcode', function (req, res) {
  
  let applicantCompanyPostcode = req.session.data.applicantCompanyPostcode;
  res.redirect('application-address-list');

})

// application-address-list

router.post('/application-address-list', function (req, res) {
  
  let applicantCompanyAddressList = req.session.data.applicantCompanyAddressList;
  res.redirect('application-address-confirm');

})

// application-address-confirm

router.post('/application-address-confirm', function (req, res) {
  
  let applicantCompanyAddressConfirm = req.session.data.applicantCompanyAddressConfirm;
  res.redirect('application-telephone');

})


// enter-international-address

router.post('/enter-international-address', function (req, res) {
  
  let applicantCompanyAddressList = req.session.data.applicantCompanyAddressConfirm;
  res.redirect('application-telephone');

})

// enter-manual-address

router.post('/enter-manual-address', function (req, res) {
  
  let applicantCompanyAddressList = req.session.data.applicantCompanyAddressConfirm;
  res.redirect('application-telephone');

})

// application-telephone

router.post('/application-telephone', function (req, res) {
  
  let applicantTelephone = req.session.data.applicantTelephone;
  res.redirect('application-check-answers');

})

// application-email - NOT USED

router.post('/application-email', function (req, res) {
  
  let applicantEmail = req.session.data.applicantEmail;
  res.redirect('application-check-answers');

})

// application-check-answers

router.post('/application-check-answers', function (req, res) {
  
  let applicantCheckAnswers = req.session.data.applicantCheckAnswers;
  res.redirect('send-verify-code');

})

// ----------------- SECURTY VERIFICATION ----------------- //

// send-verify-code

router.post('/send-verify-code', function (req, res) {
  
  let applicantEmail = req.session.data.applicantEmail;
  res.redirect('receive-verify-code');

})

// receive-verify-code

router.post('/receive-verify-code', function (req, res) {
  
  let securityCode = req.session.data.securityCode;
  res.redirect('task-list');

})

// task-list

router.post('/task-list', function (req, res) {
  
  let taskList = req.session.data.taskList;
  res.redirect('documents-upload-mrl-form');

})


// ----------------- APPLICATION TYPE ----------------- //

// application-type

router.post('/application-type', function (req, res) {  
  let applicationMrlType = req.session.data.applicationMrlType;
  res.redirect('import-tolerances-is-set');

})

// import-tolerances-is-set

router.post('/import-tolerances-is-set', function (req, res) {  
  let isImportTolerance = req.session.data.isImportTolerance;
  res.redirect('application-active-substance');

})

// application-active-substance

router.post('/application-active-substance',function (req,res){
  let applicationActiveSubstance = req.session.data.applicationActiveSubstance;
  res.redirect('documents-reference-product-risk-areas')
})






// ----------------- FIND PRODUCT ----------------- //

// find-search - NOT USED

router.post('/find-search', function (req, res) {  
  let findSearch = req.session.data.findSearch;
  res.redirect('find-results');

})

// find-results - NOT USED

router.post('/find-results', function (req, res) {  
  let findResults = req.session.data.findResults;
  res.redirect('find-confirm');

})

// find-confirm - NOT USED

router.post('/find-confirm', function (req, res) {  
  let findConfirm = req.session.data.findConfirm;
  res.redirect('product-use');

})









// ----------------- SPECIAL ASSESSMENT AREA ----------------- //


// documents-reference-product-risk-areas

router.post('/documents-reference-product-risk-areas', function (req, res) {  
  let documentsReferenceProductRiskAreas = req.session.data.documentsReferenceProductRiskAreas;
  res.redirect('documents-upload-mrl-form');

})



// --------------------- DOCUMENTS ----------------------//

// documents-upload-mrl-form

router.post('/documents-upload-mrl-form', function (req, res) {  
  let documentsMrlForm = req.session.data.documentsMrlForm;
  res.redirect('documents-upload-admin');

})

// documents-upload-admin

router.post('/documents-upload-admin', function (req, res) {  
  let documentsAdmin = req.session.data.documentsAdmin;
  let documentsAdminSelect = req.session.data.documentsAdminSelect;
  res.redirect('documents-upload-draft-evaluation');

})

// documents-upload-draft-evaluation

router.post('/documents-upload-draft-evaluation', function (req, res) {  
  let documentsDraftEvaluation = req.session.data.documentsDraftEvaluation;
  res.redirect('documents-upload-proof-of-authorisation');

})

// documents-upload-proof-of-authorisation

router.post('/documents-upload-proof-of-authorisation', function (req, res) {  
  let authHolderAuthorisation = req.session.data.authHolderAuthorisation;
  res.redirect('documents-upload-proof-mrl');

})

// documents-upload-proof-mrl

router.post('/documents-upload-proof-mrl', function (req, res) {  
  let documentsProofMrl = req.session.data.documentsProofMrl;
  res.redirect('documents-upload-proof-residue');

})

// documents-upload-proof-residue

router.post('/documents-upload-proof-residue', function (req, res) {  
  let documentsProofResidue = req.session.data.documentsProofResidue;
  res.redirect('documents-upload-supporting');

})


// documents-upload-supporting

router.post('/documents-upload-supporting', function (req, res) {  
  let documentsRelevantCorrespondence = req.session.data.documentsRelevantCorrespondence;
  res.redirect('documents-upload-relevant-correspondence');

})


// documents-upload-relevant-correspondence

router.post('/documents-upload-relevant-correspondence', function (req, res) {  
  let documentsRelevantCorrespondence = req.session.data.documentsRelevantCorrespondence;
  res.redirect('documents-upload-letters-of-access');

})

// documents-upload-letters-of-access

router.post('/documents-upload-letters-of-access', function (req, res) {  
  let documentsLetterOfAccess = req.session.data.documentsLetterOfAccess;
  res.redirect('check-answers');

})








// // documents-upload-supporting

// router.post('/documents-upload-supporting', function (req, res) {  
//   let documentsDraftRegReport = req.session.data.documentsDraftRegReport;
  
//   res.redirect('documents-upload-relevant-correspondence');

// })



// // documents-upload-safety-data-sheet

// router.post('/documents-upload-safety-data-sheet', function (req, res) {  
//   let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
//   res.redirect('documents-upload-comparative-assessment-report');

// })

// // documents-upload-comparative-assessment-report

// router.post('/documents-upload-comparative-assessment-report', function (req, res) {  
//   let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
//   res.redirect('documents-upload-letters-of-access');

// })










// ----------------- EVALUATION REPORT ----------------- //

// placeholder-evaluation-report

router.post('/placeholder-evaluation-report', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('product-mrl-needed');
})





// ----------------- MRL ----------------- //

// product-mrl-needed

router.post('/product-mrl-needed', function (req, res) {  
  let productMrlNeeded = req.session.data.productMrlNeeded;

  if (productMrlNeeded == "Yes") {
    res.redirect('product-commodity-code-name');
  } else {
    res.redirect('check-answers');
  }
})

// product-commodity-code-name

router.post('/product-commodity-code-name', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('product-mrl-change');
})

// product-mrl-change

router.post('/product-mrl-change', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('check-answers');
})





// ----------------- PLACEHOLDER PAGE ----------------- //

router.post('/placeholder-page', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('placeholder-page');

})




// ----------------- CHECK ANSWERS ----------------- //

// check-answers

router.post('/check-answers', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('declaration');
})







// ----------------- DECLARATIONS ----------------- //

// declaration

router.post('/declaration', function (req, res) {  
  let declaration = req.session.data.declaration;
  res.redirect('invoice');

})

// ----------------- PAYMENTS ----------------- //

// invoice

router.post('/invoice', function (req, res) {  
  let invoice = req.session.data.invoice;
  res.redirect('confirmation');

})

// ----------------- CONFIRMATION ----------------- //

// confirmation

router.post('/confirmation', function (req, res) {  
  let confirmation = req.session.data.confirmation;
  res.redirect('confirmation');

})



// ----------------- XXXXXXXXXXXXXXX END XXXXXXXXXXXXXX ----------------- //



module.exports = router
