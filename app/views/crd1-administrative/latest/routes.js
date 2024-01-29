const express = require('express')
const router = express.Router()

// ----------------- NOT ROUTED ----------------- //

// formula-active-substance-data-ownership-parent
router.post('/formula-active-substance-data-ownership-parent', function (req, res) {
  let activeSubstanceSourceParent = req.session.data.activeSubstanceSourceParent;
  res.redirect('formula-active-substance-data-ownership-parent');

})

// eamu-extent-of-auth

router.post('/eamu-extent-of-auth', function (req, res) {
  let eamuExtentOfAuth = req.session.data.eamuExtentOfAuth;
  res.redirect('eamu-extent-of-auth');

})




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




// ----------------- PLACEHOLDER ADMINISTRATION EXAMPLE ----------------- //

// placeholder-administration-example

router.post('/placeholder-administration-example', function (req, res) {  
  res.redirect('find-search');
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
  res.redirect('what-change-to-do');

})

// ----------------- ADMIN CHANGE TYPES ----------------- //

// what-change-to-do

router.post('/what-change-to-do', function (req, res) {
  
  let adminChangeType = req.session.data.adminChangeType;
  if (adminChangeType == 'Product info') {
    res.redirect('what-product-info-change-to-do');
  } else {
    res.redirect('formula-product-data-ownership-details');
  }
  res.redirect('what-product-info-change-to-do');

})

// ----------------- PRODUCT INFO CHANGE TYPES ----------------- //

// what-product-info-change-to-do

router.post('/what-product-info-change-to-do', function (req, res) {
  
  let adminChangeType = req.session.data.adminChangeType;
  
  res.redirect('product-name');

})


// ----------------- PRODUCT DETAILS ----------------- //

// product-name

router.post('/product-name', function (req, res) {
  
  let productName = req.session.data.productName;
  let productCode = req.session.data.productCode;
  res.redirect('formula-active-substance-data-ownership-details');

})

// ----------------- ACTIVE DATA OWNERSHIP ----------------- //

// formula-active-substance-data-ownership-details
router.post('/formula-active-substance-data-ownership-details', function (req, res) {
  res.redirect('formula-product-data-ownership');
})

// ----------------- PRODUCT DATA OWNERSHIP ----------------- //

// formula-product-data-ownership
router.post('/formula-product-data-ownership', function (req, res) {
  let formulaProductOwnership = req.session.data.formulaProductOwnership
  if (formulaProductOwnership == 'Yes') {
    res.redirect('active-substance-source-is-csv-upload');
  } else {
    res.redirect('formula-product-data-ownership-details');
  }
})

// formula-product-data-ownership-details
router.post('/formula-product-data-ownership-details', function (req, res) {
  res.redirect('active-substance-source-is-csv-upload');
})

// ----------------- ACTIVE SUBSTANCE SOURCE DATA ----------------- //

// active-substance-source-is-csv-upload
router.post('/active-substance-source-is-csv-upload', function (req, res) {
  let isActiveSubstanceSourceUpload = req.session.data.isActiveSubstanceSourceUpload;
  if (isActiveSubstanceSourceUpload == "No") {
    res.redirect('active-substance-source-how-many');
  } else {
    res.redirect('active-substance-source-csv-1');
  }
})

// active-substance-source-csv-1
router.post('/active-substance-source-csv-1', function (req, res) {
  res.redirect('clp-affected');
})

// active-substance-source-how-many
router.post('/active-substance-source-how-many', function (req, res) {
  let marketArea = req.session.data.marketArea;
  if (marketArea == 'Northern Ireland' || 'Great Britain and Northern Ireland') {
    res.redirect('active-substance-source-previous-tech-equiv-ni');
  } else if (marketArea == 'Great Britain') {
    res.redirect('active-substance-source-previous-tech-equiv-gb');
  } else {
    res.redirect('active-substance-source-previous-tech-equiv-gb');
  }
})


// active-substance-source-previous-tech-equiv-ni

router.post('/active-substance-source-previous-tech-equiv-ni', function (req, res) {
  let marketArea = req.session.data.marketArea;
  let activeSourcePreviousTechEquivNI = req.session.data.activeSourcePreviousTechEquivNI;
  if (activeSourcePreviousTechEquivNI == "Yes") {
    res.redirect('application-eu-reference');
  } else if (marketArea == 'Great Britain and Northern Ireland' && activeSourcePreviousTechEquivNI == "No") {
    res.redirect('active-substance-source-previous-tech-equiv-gb');
  } else {
    res.redirect('formula-active-substance-source-data-ownership-details');
  }
})

// application-eu-reference

router.post('/application-eu-reference', function (req, res) {
  let marketArea = req.session.data.marketArea;
  if (marketArea == 'Great Britain and Northern Ireland') {
    res.redirect('active-substance-source-previous-tech-equiv-gb');
  } else {
    res.redirect('formula-active-substance-source-data-ownership-details');
  }

})

// active-substance-source-previous-tech-equiv-gb

router.post('/active-substance-source-previous-tech-equiv-gb', function (req, res) {
  let marketArea = req.session.data.marketArea;
  let activeSourcePreviousTechEquivGB = req.session.data.activeSourcePreviousTechEquivGB;
  if (activeSourcePreviousTechEquivGB == "No") {
    res.redirect('active-substance-source-request-tech-equiv');
  } else {
    res.redirect('formula-active-substance-source-data-ownership-details');
  }
  res.redirect('formula-active-substance-source-data-ownership-details');
})

// active-substance-source-request-tech-equiv
router.post('/active-substance-source-request-tech-equiv', function (req, res) {
  let marketArea = req.session.data.marketArea;
  res.redirect('product-name');

})

// application-eu-tech

router.post('/application-eu-tech', function (req, res) {
  
  let marketArea = req.session.data.marketArea;
  res.redirect('product-name');

})



// formula-active-substance-source-data-ownership-details
router.post('/formula-active-substance-source-data-ownership-details', function (req, res) {
  let formulaActiveSourceDataOwnerAddress = req.session.data.formulaActiveSourceDataOwnerAddress;
  let formulaActiveSourceDataOwnerLetters = req.session.data.formulaActiveSourceDataOwnerLetters;
  if (formulaActiveSourceDataOwnerLetters == 'Letter of access provided previously') {
    res.redirect('formula-active-substance-source-data-ownership-previous');
  } else if (formulaActiveSourceDataOwnerAddress == "Yes" ) {
    res.redirect('formula-active-substance-source-manufacturing-address-postcode');
  } else {
    res.redirect('clp-affected');
  }
})

// formula-active-substance-source-data-ownership-previous
router.post('/formula-active-substance-source-data-ownership-previous', function (req, res) {
  let formulaActiveSourceDataOwnerAddress = req.session.data.formulaActiveSourceDataOwnerAddress;
  if (formulaActiveSourceDataOwnerAddress == "Yes" ) {
    res.redirect('formula-active-substance-source-manufacturing-address-postcode');
  } else {
    res.redirect('clp-affected');
  }
})

// formula-active-substance-source-manufacturing-address-postcode

router.post('/formula-active-substance-source-manufacturing-address-postcode', function (req, res) {
  res.redirect('formula-active-substance-source-manufacturing-address-list');
})

// formula-active-substance-source-manufacturing-address-list
router.post('/formula-active-substance-source-manufacturing-address-list', function (req, res) {
  res.redirect('formula-active-substance-source-manufacturing-address-confirm');
})

// formula-active-substance-source-manufacturing-address-confirm
router.post('/formula-active-substance-source-manufacturing-address-confirm', function (req, res) {
  res.redirect('clp-affected');
})

// formula-active-substance-source-data-ownership-check-answers

router.post('/formula-active-substance-source-data-ownership-check-answers', function (req, res) {
  res.redirect('clp-affected');
})




// formula-active-substance-data-ownership - NOT USED
router.post('/formula-active-substance-data-ownership', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source');
})

// formula-active-substance-manufacturing-source
router.post('/formula-active-substance-manufacturing-source', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-howmany');
})

// formula-active-substance-manufacturing-source-howmany
router.post('/formula-active-substance-manufacturing-source-howmany', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-company');
})

// formula-active-substance-manufacturing-source-company
router.post('/formula-active-substance-manufacturing-source-company', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-address-postcode');
})



// formula-active-substance-five-batch-source-company
router.post('/formula-active-substance-five-batch-source-company', function (req, res) {
  res.redirect('formula-active-substance-five-batch-source-upload');
})

// formula-active-substance-five-batch-source-upload
router.post('/formula-active-substance-five-batch-source-upload', function (req, res) {
  res.redirect('formula-composition-add-another');
})










// formula-csv-check-answers

router.post('/formula-csv-check-answers', function (req, res) {  
  let formulaCheckAnswers = req.session.data.formulaCheckAnswers;
  res.redirect('clp-affected');

})


// ----------------- PLACEHOLDER PAGE ----------------- //

router.post('/placeholder-page', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('placeholder-page');

})





// ----------------- PLACEHOLDER PAGE ----------------- //


// Route to main crd2 flow

router.post('/placeholder-crd2-main-flow', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('placeholder-no-change');
})


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

// ----------------- CLP, EAMU 1, EAMU 2 AFFECTED ----------------- //

// clp-affected

router.post('/clp-affected', function (req, res) {  
  let clpAffected = req.session.data.clpAffected;
  res.redirect('eamu-auth-current');
})

// eamu-auth-current

router.post('/eamu-auth-current', function (req, res) {  
  let eamuAuthCurrent = req.session.data.eamuAuthCurrent;
  if (eamuAuthCurrent == 'Yes') {
    res.redirect('eamu-auth-current-details');
  } else {
    res.redirect('documents-upload-admin');
  }
})

// eamu-auth-current-details

router.post('/eamu-auth-current-details', function (req, res) {  
  let eamuAuthCurrentDetails = req.session.data.eamuAuthCurrentDetails;
  res.redirect('documents-upload-admin');
})


// ----------------- DOCUMENTS ----------------- //



// documents-upload-admin

router.post('/documents-upload-admin', function (req, res) {  
  let documentsAdmin = req.session.data.documentsAdmin;
  let documentsAdminSelect = req.session.data.documentsAdminSelect;
  res.redirect('documents-upload-draft-reg-report');

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
  res.redirect('documents-upload-safety-data-sheet');

})

// documents-upload-safety-data-sheet

router.post('/documents-upload-safety-data-sheet', function (req, res) {  
  let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
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
  res.redirect('documents-check-answers');

})

// documents-upload-proof-of-authorisation
/* removed as earlier in the flow
router.post('/documents-upload-proof-of-authorisation', function (req, res) {  
  let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
  res.redirect('documents-check-answers');

})
*/

// documents-check-answers

router.post('/documents-check-answers', function (req, res) {  
  let documentsCheckAnswers = req.session.data.documentsCheckAnswers;
  res.redirect('declaration');

})



// ----------------- CHECK ANSWERS ----------------- //

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
