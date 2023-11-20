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
  
  let applicantName = req.session.data.applicantName;
  let applicantFirstName = req.session.data.applicantFirstName;
  let applicantLastName = req.session.data.applicantLastName;
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
  res.redirect('marketing-co-same');

})


// marketing-co-same

router.post('/marketing-co-same', function (req, res) {
  
  let marketingCoSame = req.session.data.marketingCoSame;
  res.redirect('marketing-co-check-answers');

})

// marketing-co-check-answers

router.post('/marketing-co-check-answers', function (req, res) {
  
  let marketingCoCheckAnswers = req.session.data.marketingCoCheckAnswers;
  res.redirect('product-name');

})

// product-name

router.post('/product-name', function (req, res) {
  
  let productName = req.session.data.productName;
  let productCode = req.session.data.productCode;
  res.redirect('product-use');

})

// product-application-reason - NOT USED

router.post('/product-application-reason', function (req, res) {
  
  let productApplicationReason = req.session.data.productApplicationReason;
  res.redirect('product-use');

})

// product-use

router.post('/product-use', function (req, res) {
  
  let productUser = req.session.data.productUser;
  res.redirect('product-proposed-use');

})

// product-proposed-use

router.post('/product-proposed-use', function (req, res) {
  
  let productProposedUse = req.session.data.productProposedUse;
  res.redirect('product-measurement');

})

// ----------------- PACKAGING ----------------- //

// product-measurement

router.post('/product-measurement', function (req, res) {
  
  let productMeasurement = req.session.data.productMeasurement;
  res.redirect('product-volume-range');

})

// product-volume-range

router.post('/product-volume-range', function (req, res) {
  
  let productVolume = req.session.data.productVolume;
  res.redirect('product-inner-material');

})

// product-inner-material

router.post('/product-inner-material', function (req, res) {
  
  let productInnerPackaging = req.session.data.productInnerPackaging;
  res.redirect('product-outer-material');

})

// product-outer-material

router.post('/product-outer-material', function (req, res) {
  
  let productOuterPackaging = req.session.data.productOuterPackaging;
  res.redirect('product-material-add-another');

})

// product-material-add-another

router.post('/product-material-add-another', function (req, res) {
  
  let productPackagingAddAnother = req.session.data.productPackagingAddAnother;
  res.redirect('product-mrl-needed');

})

// product-mrl-needed

router.post('/product-mrl-needed', function (req, res) {
  
  let productMrlNeeded = req.session.data.productMrlNeeded;
  if (productMrlNeeded == "No") {
    res.redirect('product-check-answers');
  } else {
    res.redirect('product-commodity-code-name');
  }

})

// product-commodity-code-name

router.post('/product-commodity-code-name', function (req, res) {
  
  let productCommodityCodeName = req.session.data.productCommodityCodeName;
  res.redirect('product-mrl-change');

})

// product-mrl-change

router.post('/product-mrl-change', function (req, res) {
  
  let productMrlChange = req.session.data.productMrlChange;
  let productMrlCurrent = req.session.data.productMrlCurrent;
  let productMrlProposed = req.session.data.productMrlProposed;
  res.redirect('product-check-answers');

})

// product-mrl-currently-in-force - NOT USED

router.post('/product-mrl-currently-in-force', function (req, res) {
  
  let productMrlInForce = req.session.data.productMrlInForce;
  res.redirect('product-mrl-currently-in-force-value');

})

// product-mrl-currently-in-force-value NOT USED

router.post('/product-mrl-currently-in-force-value', function (req, res) {
  
  let productMrlInForceValue = req.session.data.productMrlInForceValue;
  res.redirect('product-mrl-currently-in-force-add-another');

})

// product-mrl-currently-in-force-add-another - NOT USED

router.post('/product-mrl-currently-in-force-add-another', function (req, res) {
  
  let productMrlInForceAddAnother = req.session.data.productMrlInForceAddAnother;
  res.redirect('product-check-answers');

})

// product-check-answers

router.post('/product-check-answers', function (req, res) {
  
  let productCheckAnswers = req.session.data.productCheckAnswers;
  res.redirect('formula-active-substance-name');

})

// ----------------- FORMULA ----------------- //

// formula-active-substance-name

router.post('/formula-active-substance-name', function (req, res) {
  
  let formulaActiveSubstanceName = req.session.data.formulaActiveSubstanceName;
  res.redirect('formula-active-substance-source');

})

// formula-active-substance-source

router.post('/formula-active-substance-source', function (req, res) {
  
  let formulaActiveSubstanceSource = req.session.data.formulaActiveSubstanceSource;
  res.redirect('formula-active-substance-data-ownership');

})
// upload-technical-equivelance-report - DOCUMENTS SECTIONS (If selected "technical equivelance assessment")


// formula-active-substance-data-ownership

router.post('/formula-active-substance-data-ownership', function (req, res) {
  
  let formulaActiveSubstanceOwnership = req.session.data.formulaActiveSubstanceOwnership;
  if (formulaActiveSubstanceOwnership == "No") {
    res.redirect('formula-active-substance-data-owner-new-name');
  } else {
    res.redirect('formula-active-substance-add-another');
  }
  

})

// formula-active-substance-data-owner-new-name

router.post('/formula-active-substance-data-owner-new-name', function (req, res) {
  
  let formulaActiveSubstanceDataOwnerNewName = req.session.data.formulaActiveSubstanceDataOwnerNewName;
  res.redirect('formula-active-substance-data-owner-new-add-another');

})

// formula-active-substance-data-owner-new-add-another

router.post('/formula-active-substance-data-owner-new-add-another', function (req, res) {
  
  let formulaActiveSubstanceDataOwnerNewAddAnother = req.session.data.formulaActiveSubstanceDataOwnerNewAddAnother;
  res.redirect('formula-active-substance-data-owner-new-specification-upload');

})

// formula-active-substance-data-owner-new-specification-upload

router.post('/formula-active-substance-data-owner-new-specification-upload', function (req, res) {
  
  let formulaActiveSubstanceDataOwnerSpecUpload = req.session.data.formulaActiveSubstanceDataOwnerSpecUpload;
  res.redirect('formula-active-substance-data-owner-new-data-upload');

})

// formula-active-substance-data-owner-new-data-upload

router.post('/formula-active-substance-data-owner-new-data-upload', function (req, res) {
  
  let formulaActiveSubstanceDataOwnerNewDataUpload = req.session.data.formulaActiveSubstanceDataOwnerNewDataUpload;
  res.redirect('formula-active-substance-add-another');

})

// formula-active-substance-add-another

router.post('/formula-active-substance-add-another', function (req, res) {
  
  let formulaActiveSubstanceAddAnother = req.session.data.formulaActiveSubstanceAddAnother;
  res.redirect('formula-other-substance');

})

// formula-other-substance

router.post('/formula-other-substance', function (req, res) {
  
  let formulaOtherSubstance = req.session.data.formulaOtherSubstance;
  res.redirect('formula-other-substance-code-name');

})

 // formula-other-substance-code-name

 router.post('/formula-other-substance-code-name', function (req, res) {
  
  let formulaOtherSubstanceCodeName = req.session.data.formulaOtherSubstanceCodeName;
  res.redirect('formula-other-substance-trade-name');

})

// formula-other-substance-trade-name

router.post('/formula-other-substance-trade-name', function (req, res) {
  
  let formulaOtherSubstanceTradeName = req.session.data.formulaOtherSubstanceTradeName;
  res.redirect('formula-other-substance-type');

})


// formula-other-substance-type 

router.post('/formula-other-substance-type', function (req, res) {
  
  let formulaOtherSubstanceType = req.session.data.formulaOtherSubstanceType;
  res.redirect('formula-other-substance-code-list');

})

// formula-other-substance-code-list

router.post('/formula-other-substance-code-list', function (req, res) {
  
  let formulaOtherSubstanceCodeList = req.session.data.formulaOtherSubstanceCodeList;
  res.redirect('formula-other-substance-code-details');

})

// formula-other-substance-code-details

router.post('/formula-other-substance-code-details', function (req, res) {
  
  let formulaOtherSubstanceCodeDetails = req.session.data.formulaOtherSubstanceCodeDetails;
  res.redirect('formula-other-substance-content-measurement');

})

// formula-other-substance-content-measurement

router.post('/formula-other-substance-content-measurement', function (req, res) {
  
  let formulaOtherSubstanceContentMeasure = req.session.data.formulaOtherSubstanceContentMeasure;
  res.redirect('formula-other-substance-content-value');

})


// formula-other-substance-content-value

router.post('/formula-other-substance-content-value', function (req, res) {
  
  let formulaOtherSubstanceContentValue = req.session.data.formulaOtherSubstanceContentValue;
  res.redirect('formula-risk');

})


// formula-risk

router.post('/formula-risk', function (req, res) {
  
  let formulaRisk = req.session.data.formulaRisk;
  res.redirect('formula-manufacturing-address-postcode');

})

// ----------------- MANUFACTURING LOCATION ----------------- //

// formula-manufacturing-address-postcode

router.post('/formula-manufacturing-address-postcode', function (req, res) {
  
  let formulaManufacturingPostcode = req.session.data.formulaManufacturingPostcode;
  res.redirect('formula-manufacturing-address-list');

})

// formula-manufacturing-address-list

router.post('/formula-manufacturing-address-list', function (req, res) {
  
  let formulaManufacturingAddressList = req.session.data.formulaManufacturingAddressList;
  res.redirect('formula-manufacturing-address-confirm');

})

// formula-manufacturing-address-confirm

router.post('/formula-manufacturing-address-confirm', function (req, res) {
  
  let formulaManufacturingAddressConfirm = req.session.data.formulaManufacturingAddressConfirm;
  res.redirect('formula-manufacturing-site-add-another');

})

// formula-manufacturing-site-add-another

router.post('/formula-manufacturing-site-add-another', function (req, res) {  
  let formulaManufacturingAddressAddAnother = req.session.data.formulaManufacturingAddressAddAnother;
  res.redirect('formula-composition');

})

// formula-composition

router.post('/formula-composition', function (req, res) {  
  let formulaComposition = req.session.data.formulaComposition;
  res.redirect('formula-check-answers');

})

// formula-check-answers

router.post('/formula-check-answers', function (req, res) {  
  let formulaCheckAnswers = req.session.data.formulaCheckAnswers;
  res.redirect('documents-reference-product');

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
