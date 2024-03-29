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
  res.redirect('task-list');

})


// ----------------- FIND PRODUCT ----------------- //

// find-search

router.post('/find-search', function (req, res) {  
  let findSearch = req.session.data.findSearch;
  res.redirect('find-results');

})

// find-results

router.post('/find-results', function (req, res) {  
  let findResults = req.session.data.findResults;
  res.redirect('find-confirm');

})

// find-confirm

router.post('/find-confirm', function (req, res) {  
  let findConfirm = req.session.data.findConfirm;
  res.redirect('proposed-packaging-info');

})



// ----------------- PLACEHOLDER PAGE ----------------- //

router.post('/placeholder-technical-assessment', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('proposed-packaging-info');
})


// ----------------- PACKAGING ----------------- //


// proposed-packaging-info

router.post('/proposed-packaging-info', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('packaging-x-details');
})

// packaging-number-of

router.post('/packaging-number-of', function (req, res) {
  let packagingNumberof = req.session.data.packagingNumberof;
  res.redirect('packaging-x-details');

})

// packaging-x-details

router.post('/packaging-x-details', function (req, res) {
  let packagingXDetails = req.session.data.packagingXDetails;
  res.redirect('packaging-add-another');

})

// packaging-add-another

router.post('/packaging-add-another', function (req, res) {
  let addAnotherContainer = req.session.data.addAnotherContainer;

  if (addAnotherContainer == "Yes") {
    res.redirect('packaging-x-details');
  } else {
    res.redirect('packaging-upload-label');
  }
})

// packaging-remove

router.post('/packaging-remove', function (req, res) {
  let packagingXDetails = req.session.data.packagingXDetails;
  res.redirect('placeholder-summary');

})

// ----------------- PACKAGING AND LABELS ----------------- //

// packaging-upload-label

router.post('/packaging-upload-label', function (req, res) {
  let packagingXDetails = req.session.data.packagingXDetails;
  res.redirect('is-microbial');

})

// ----------------- MICROBIAL ----------------- //

// is-microbial

router.post('/is-microbial', function (req, res) {
  let isMicrobial = req.session.data.isMicrobial;
  res.redirect('documents-reference-product-risk-areas');

})


// ----------------- SPECIAL ASSESSMENT AREA ----------------- //


// documents-reference-product-risk-areas

router.post('/documents-reference-product-risk-areas', function (req, res) {  
  let documentsReferenceProductRiskAreas = req.session.data.documentsReferenceProductRiskAreas;
  res.redirect('documents-upload-admin');

})



// ----------------- DOCUMENTS ----------------- //


// documents-upload-admin

router.post('/documents-upload-admin', function (req, res) {  
  let documentsAdmin = req.session.data.documentsAdmin;
  let documentsAdminSelect = req.session.data.documentsAdminSelect;
  let isMicrobial = req.session.data.isMicrobial;
  if (isMicrobial == "Yes") {
    res.redirect('documents-upload-draft-reg-report-microbials');
  } else {
    res.redirect('documents-upload-draft-reg-report');
  }

})

// documents-upload-draft-reg-report

router.post('/documents-upload-draft-reg-report', function (req, res) {  
  let documentsDraftRegReport = req.session.data.documentsDraftRegReport;
  let documentsDraftRegReportSelect = req.session.data.documentsDraftRegReportSelect;
  res.redirect('documents-upload-supporting');

})

// documents-upload-draft-reg-report microbials

router.post('/documents-upload-draft-reg-report-microbials', function (req, res) {  
  let documentsDraftRegReport = req.session.data.documentsDraftRegReport;
  let documentsDraftRegReportSelectMicrobes = req.session.data.documentsDraftRegReportSelectMicrobes;
  res.redirect('documents-upload-supporting');

})

// documents-upload-supporting

router.post('/documents-upload-supporting', function (req, res) {  
  let documentsDraftRegReport = req.session.data.documentsDraftRegReport;
  let documentsDraftRegReportSelect = req.session.data.documentsDraftRegReportSelect;
  res.redirect('documents-upload-relevant-correspondence');

})

// documents-upload-relevant-correspondence

router.post('/documents-upload-relevant-correspondence', function (req, res) {  
  let documentsRelevantCorrespondence = req.session.data.documentsRelevantCorrespondence;
  res.redirect('documents-upload-comparative-assessment-report');

})

// documents-upload-comparative-assessment-report

router.post('/documents-upload-comparative-assessment-report', function (req, res) {  
  let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
  res.redirect('documents-upload-letters-of-access');

})

// documents-upload-letters-of-access

router.post('/documents-upload-letters-of-access', function (req, res) {  
  let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
  res.redirect('check-answers');

})



// documents-upload-proof-of-authorisation
/* removed as earlier in the flow
router.post('/documents-upload-proof-of-authorisation', function (req, res) {  
  let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
  res.redirect('documents-check-answers');

})
*/


// ----------------- PLACEHOLDER PAGE ----------------- //

// Affirm Nothing else has changed / not required

router.post('/placeholder-no-change', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('placeholder-eamus-affected');
})

// confirm whether EAMUs are affected

router.post('/placeholder-eamus-affected', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('check-answers');
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
