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
  res.redirect('evaluation-chemistry');

})

// evaluation-chemistry

router.post('/evaluation-chemistry', function (req, res) {  
  let evaluationChemistry = req.session.data.evaluationChemistry;
  res.redirect('evaluation-mode');

})


// evaluation-mode

router.post('/evaluation-mode', function (req, res) { 
  let evaluationMode = req.session.data.evaluationMode;
  res.redirect('production-scale');

})


// production-scale

router.post('/production-scale', function (req, res) { 
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
