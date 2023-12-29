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
  res.redirect('formula-is-csv-upload');

})



// ----------------- FORMULATION COMPOSITION ----------------- //

// formula-is-csv-upload

router.post('/formula-is-csv-upload', function (req, res) {
  let isCsvUpload = req.session.data.isCsvUpload;

  if (isCsvUpload == "Yes") {
    res.redirect('formula-csv-1');
  } else {
    res.redirect('formula-type-add');
  }
})

// formula-csv-1

router.post('/formula-csv-1', function (req, res) {
  res.redirect('formula-csv-3');
})

// formula-csv-2 - NOT USED

router.post('/formula-csv-2', function (req, res) {
  res.redirect('formula-csv-3');
})

// formula-csv-3

router.post('/formula-csv-3', function (req, res) {
  res.redirect('documents-reference-product-risk-areas');
})

// ----------------- FORMULATION MANUAL ----------------- //

// formula-type-add
router.post('/formula-type-add', function (req, res) {
  let formulaTypeAdd = req.session.data.formulaTypeAdd;
  if (formulaTypeAdd == "Co Formulant") {
    res.redirect('formula-type-add-co-formulant-details');
  } else {
    res.redirect('formula-type-add-active-details');
  }
})

// formula-type-add-active-details
router.post('/formula-type-add-active-details', function (req, res) {
  res.redirect('formula-composition-add-another-1');
})

// formula-composition-add-another-1
router.post('/formula-composition-add-another-1', function (req, res) {
  let addAnotherFormulaComposition = req.session.data.addAnotherFormulaComposition

  if (addAnotherFormulaComposition == "Yes") {
    res.redirect('formula-type-add');
  } else {
    res.redirect('formula-risk-product');
  }
})

// formula-type-add-co-formulant-details
router.post('/formula-type-add-co-formulant-details', function (req, res) {
  res.redirect('formula-substance-components');
})

// formula-substance-trade-name - NOT USED
router.post('/formula-substance-trade-name', function (req, res) {
  res.redirect('formula-substance-components');
})

// formula-substance-components
router.post('/formula-substance-components', function (req, res) {
  let formulaSubstanceNumberComponents = req.session.data.formulaSubstanceNumberComponents;
  let formulaSubstanceMixture = req.session.data.formulaSubstanceMixture;
  if (formulaSubstanceMixture == "Yes") {
    res.redirect('formula-type-add-component');
  } else {
    res.redirect('formula-composition-add-another');
  }
  
})

// formula-type-add-component
router.post('/formula-type-add-component', function (req, res) {
  res.redirect('formula-substance-component-add-another');
})


// formula-substance-component-add-another

router.post('/formula-substance-component-add-another', function (req, res) {
  let addAnotherSubstanceComponent = req.session.data.addAnotherSubstanceComponent;
  
  if (addAnotherSubstanceComponent == "Yes") {
    res.redirect('formula-type-add-component');
  } else {
    res.redirect('formula-substance-add-another');
  }
})

// formula-substance-component-remove
router.post('/formula-substance-component-remove', function (req, res) {
  res.redirect('formula-substance-component-add-another');
})

// formula-substance-add-another
router.post('/formula-substance-add-another', function (req, res) {
  res.redirect('formula-risk-product');
})

// formula-substance-remove
router.post('/formula-substance-remove', function (req, res) {
  res.redirect('formula-substance-add-another');
})

// formula-composition-add-another
router.post('/formula-composition-add-another', function (req, res) {
  res.redirect('formula-risk-product');
})




// formula-risk-product

router.post('/formula-risk-product', function (req, res) {
  let productRisk = req.session.data.productRisk;
  if (productRisk == "No") {
    res.redirect('documents-reference-product-risk-areas');
  } else {
    res.redirect('formula-risk-upload');
  }

})

// formula-risk-upload

router.post('/formula-risk-upload', function (req, res) {
  
  let productRiskUpload = req.session.data.productRiskUpload;
  res.redirect('documents-reference-product-risk-areas');

})



// ----------------- SPECIAL ASSESSMENT AREA ----------------- //

// documents-reference-product-risk-areas

router.post('/documents-reference-product-risk-areas', function (req, res) {  
  let documentsReferenceProductRiskAreas = req.session.data.documentsReferenceProductRiskAreas;
  res.redirect('placeholder-no-change');

})


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




// ----------------- PLACEHOLDER PAGE ----------------- //

router.post('/placeholder-page', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('placeholder-page');

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
