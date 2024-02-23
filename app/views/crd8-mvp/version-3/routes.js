const express = require('express')
const router = express.Router()


// ----------------- APPLICATION JOURNEY ----------------- //

// applicant-type
  
router.post('/applicant-type', function (req, res) {
  
  let applicantType = req.session.data.applicantType;
  res.redirect('application-name-contact');

})

// application-name-contact

router.post('/application-name-contact', function (req, res) {
  
  let applicantFullName = req.session.data.applicantFullName;
  // let applicantFirstName = req.session.data.applicantFirstName;
  // let applicantLastName = req.session.data.applicantLastName;
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

// application-telephone

router.post('/application-telephone', function (req, res) {
  
  let applicantTelephone = req.session.data.applicantTelephone;
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


// ----------------- PRODUCT INFORMATION ----------------- //

// application-market-area - NOT USED

router.post('/application-market-area', function (req, res) {
  
  let marketArea = req.session.data.marketArea;
  res.redirect('auth-holder-same');

})

// auth-holder-same

router.post('/auth-holder-same', function (req, res) {
  
  let authHolderSame = req.session.data.authHolderSame;
  res.redirect('auth-holder-check-answers');

})

// auth-holder-check-answers

router.post('/auth-holder-check-answers', function (req, res) {
  
  let authHolderCheckAnswers = req.session.data.authHolderCheckAnswers;
  res.redirect('source-owner-same');

})

// source-owner-same

router.post('/source-owner-same', function (req, res) {
  
  let sourceOwnerSame = req.session.data.sourceOwnerSame;
  res.redirect('source-owner-check-answers');

})


// source-owner-check-answers

router.post('/source-owner-check-answers', function (req, res) {
  
  let sourceOwnerCheckAnswers = req.session.data.sourceOwnerCheckAnswers;
  res.redirect('type-of-assessment');

})



// type-of-assessment

router.post('/type-of-assessment', function (req, res) {
  
  let authHolderCheckAnswers = req.session.data.authHolderCheckAnswers;
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
  res.redirect('formula-csv-check-answers');
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
    res.redirect('formula-check-answers');
  } else {
    res.redirect('formula-risk-upload');
  }

})

// formula-risk-upload

router.post('/formula-risk-upload', function (req, res) {
  
  let productRiskUpload = req.session.data.productRiskUpload;
  res.redirect('formula-check-answers');

})

// formula-check-answers

router.post('/formula-check-answers', function (req, res) {  
  let formulaCheckAnswers = req.session.data.formulaCheckAnswers;
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
  res.redirect('formula-active-substance-source-data-ownership-check-answers');
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
    res.redirect('formula-active-substance-source-data-ownership-check-answers');
  }
})

// formula-active-substance-source-data-ownership-previous
router.post('/formula-active-substance-source-data-ownership-previous', function (req, res) {
  let formulaActiveSourceDataOwnerAddress = req.session.data.formulaActiveSourceDataOwnerAddress;
  if (formulaActiveSourceDataOwnerAddress == "Yes" ) {
    res.redirect('formula-active-substance-source-manufacturing-address-postcode');
  } else {
    res.redirect('formula-active-substance-source-data-ownership-check-answers');
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
  res.redirect('formula-active-substance-source-data-ownership-check-answers');
})

// formula-active-substance-source-data-ownership-check-answers

router.post('/formula-active-substance-source-data-ownership-check-answers', function (req, res) {
  res.redirect('product-use');
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




// formula-risk - NOT USED

router.post('/formula-risk', function (req, res) {
  
  let formulaRisk = req.session.data.formulaRisk;
  res.redirect('formula-risk-product');

})





/// ROHIMA TO LOOK AT XXXXXXX
// formula-active-substance-data-ownership - NOT USED
router.post('/formula-active-substance-data-ownership', function (req, res) {
  res.redirect('formula-active-substance-data-ownership-details');
})



// formula-active-substance-data-ownership-letter - NOT USED
router.post('/formula-active-substance-data-ownership-letter', function (req, res) {
  res.redirect('formula-active-substance-data-ownership-previous');
}) 

// formula-active-substance-data-ownership-previous - NOT USED
router.post('/formula-active-substance-data-ownership-previous', function (req, res) {
  res.redirect('formula-product-data-ownership');
}) 




// formula-csv-check-answers

router.post('/formula-csv-check-answers', function (req, res) {  
  let formulaCheckAnswers = req.session.data.formulaCheckAnswers;
  res.redirect('evaluation-chemistry');

})


// ----------------- FORMULATION COMPOSITION  END----------------- //

























// evaluation-chemistry

router.post('/evaluation-chemistry', function (req, res) {  
  let evaluationChemistry = req.session.data.evaluationChemistry;
  res.redirect('evaluation-mode');

})


// evaluation-mode

router.post('/evaluation-mode', function (req, res) { 
  let evaluationMode = req.session.data.evaluationMode;
  res.redirect('active-substance-source-request-tech-equiv-production-scale');

})


// active-substance-source-request-tech-equiv-production-scale

router.post('/active-substance-source-request-tech-equiv-production-scale', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('active-substance-5-batch-company');

})

// active-substance-5-batch-company

router.post('/active-substance-5-batch-company', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('active-substance-5-batch-upload');

})

// active-substance-5-batch-upload

router.post('/active-substance-5-batch-upload', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('document-covering-letter');

})

// document-covering-letter

router.post('/document-covering-letter', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('document-application-overview');

})


// document-application-overview

router.post('/document-application-overview', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('document-draft-technical-report');

})

// document-draft-technical-report

router.post('/document-draft-technical-report', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('manufacturing-sites-number-of');

})

// manufacturing-sites-number-of

router.post('/manufacturing-sites-number-of', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('manufacturing-address-postcode');

})

// manufacturing-address-postcode

router.post('/manufacturing-address-postcode', function (req, res) {
  
  let formulaManufacturingPostcode = req.session.data.formulaManufacturingPostcode;
  res.redirect('manufacturing-address-list');

})

// manufacturing-address-list

router.post('/manufacturing-address-list', function (req, res) {
  
  let formulaManufacturingAddressList = req.session.data.formulaManufacturingAddressList;
  res.redirect('manufacturing-address-confirm');

})

// manufacturing-address-confirm

router.post('/manufacturing-address-confirm', function (req, res) {
  
  let formulaManufacturingAddressConfirm = req.session.data.formulaManufacturingAddressConfirm;
  res.redirect('active-substance-details');

})

// manufacturing-site-add-another - NOT USED

router.post('/manufacturing-site-add-another', function (req, res) {  
  let formulaManufacturingAddressAddAnother = req.session.data.formulaManufacturingAddressAddAnother;
  res.redirect('active-substance-details');

})

// active-substance-details

router.post('/active-substance-details', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('active-substance-component');

})

// active-substance-component

router.post('/active-substance-component', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('invoice');

})

// invoice

router.post('/invoice', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('declaration');

})

// declaration

router.post('/declaration', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('confirmation');

})

// confirmation

router.post('/confirmation', function (req, res) { 
  let productionScale = req.session.data.productionScale;
  res.redirect('confirmation');

})



// ----------------- DOCUMENTS ----------------- //

// documents-reference-product

router.post('/documents-reference-product', function (req, res) {  
  let documentsReferenceProduct = req.session.data.documentsReferenceProduct;
  res.redirect('documents-reference-product-details');

})

// documents-reference-product-details

router.post('/documents-reference-product-details', function (req, res) {  
  let documentsReferenceProductDetails = req.session.data.documentsReferenceProductDetails;
  let documentsReferenceProductName = req.session.data.documentsReferenceProductName;
  let documentsReferenceProductMapp = req.session.data.documentsReferenceProductMapp;
  let documentsReferenceProductAuthHolder = req.session.data.documentsReferenceProductAuthHolder;
  let documentsReferenceProductMarketingCo = req.session.data.documentsReferenceProductMarketingCo;
  res.redirect('documents-reference-product-risk-areas');

})

// documents-reference-product-risk-areas

router.post('/documents-reference-product-risk-areas', function (req, res) {  
  let documentsReferenceProductRiskAreas = req.session.data.documentsReferenceProductRiskAreas;
  res.redirect('documents-upload-admin');

})

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
  res.redirect('documents-check-answers');

})

// documents-check-answers

router.post('/documents-check-answers', function (req, res) {  
  let documentsCheckAnswers = req.session.data.documentsCheckAnswers;
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
  let declaration = req.session.data.declaration;
  res.redirect('confirmation');

})

// ----------------- CONFIRMATION ----------------- //

// confirmation

router.post('/confirmation', function (req, res) {  
  let declaration = req.session.data.declaration;
  res.redirect('confirmation');

})



// ----------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXX ----------------- //



module.exports = router
