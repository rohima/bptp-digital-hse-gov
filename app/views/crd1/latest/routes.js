const express = require('express')
const router = express.Router()


// documents-upload-proof-of-authorisation

// product-use-seed-treatment

// test-gap-seed-treatment

// 

// test-gap-growing-media

// test-gap-timings





// ----------------- TEST ----------------- //









// ----------------- APPLICATION JOURNEY ----------------- //

// applicant-type
  
router.post('/applicant-type', function (req, res) {
  
  let applicantType = req.session.data.applicantType;
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


// ----------------- PRODUCT INFORMATION ----------------- //



// ----------------- AUTHORISED HOLDER ----------------- //

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

// ----------------- MARKETING COMPANY ----------------- //

// marketing-co-same

router.post('/marketing-co-same', function (req, res) {
  
  let marketingCoSame = req.session.data.marketingCoSame;
  res.redirect('marketing-co-check-answers');

})

// marketing-co-check-answers

router.post('/marketing-co-check-answers', function (req, res) {
  
  let marketingCoCheckAnswers = req.session.data.marketingCoCheckAnswers;
  res.redirect('application-market-area');

})

// ----------------- PRODUCT DETAILS ----------------- //

// application-market-area

router.post('/application-market-area', function (req, res) {
  
  let marketArea = req.session.data.marketArea;
  res.redirect('product-name');

})

// product-name

router.post('/product-name', function (req, res) {
  
  let productName = req.session.data.productName;
  let productCode = req.session.data.productCode;
  res.redirect('formula-is-csv-upload');

})






// product-application-reason - NOT USED

router.post('/product-application-reason', function (req, res) {
  
  let productApplicationReason = req.session.data.productApplicationReason;
  res.redirect('product-use');

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
  res.redirect('formula-csv-2');
})

// formula-csv-2

router.post('/formula-csv-2', function (req, res) {
  res.redirect('formula-csv-3');
})

// formula-csv-3

router.post('/formula-csv-3', function (req, res) {
  res.redirect('formula-csv-check-answers');
})

// ----------------- FORMULATION MANUAL ----------------- //

router.post('/formula-type-add', function (req, res) {
  res.redirect('formula-type-add-substance-content');
})

router.post('/formula-type-add-substance-content', function (req, res) {
  res.redirect('formula-substance-trade-name');
})

router.post('/formula-substance-trade-name', function (req, res) {
  res.redirect('formula-substance-components');
})

router.post('/formula-substance-components', function (req, res) {
  let formulaSubstanceNumberComponents = req.session.data.formulaSubstanceNumberComponents;
  let formulaSubstanceMixture = req.session.data.formulaSubstanceMixture;
  if (formulaSubstanceMixture == "Yes") {
    res.redirect('formula-type-add-component');
  } else {
    res.redirect('formula-type-add-component');
  }
  
})

router.post('/formula-type-add-component', function (req, res) {
  res.redirect('formula-active-substance-data-ownership');
})

router.post('/formula-active-substance-data-ownership', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source');
})

router.post('/formula-active-substance-manufacturing-source', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-howmany');
})

router.post('/formula-active-substance-manufacturing-source-howmany', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-company');
})

router.post('/formula-active-substance-manufacturing-source-company', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-address-postcode');
})

router.post('/formula-active-substance-manufacturing-source-address-postcode', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-address-list');
})

router.post('/formula-active-substance-manufacturing-source-address-postcode', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-address-list');
})

router.post('/formula-active-substance-manufacturing-source-address-list', function (req, res) {
  res.redirect('formula-active-substance-manufacturing-source-address-confirm');
})

router.post('/formula-active-substance-manufacturing-source-address-confirm', function (req, res) {
  res.redirect('formula-active-substance-five-batch-source-company');
})

router.post('/formula-active-substance-five-batch-source-company', function (req, res) {
  res.redirect('formula-active-substance-five-batch-source-upload');
})

router.post('/formula-active-substance-five-batch-source-upload', function (req, res) {
  res.redirect('formula-composition-add-another');
})

router.post('/formula-composition-add-another', function (req, res) {
  res.redirect('formula-risk');
})




// formula-risk

router.post('/formula-risk', function (req, res) {
  
  let formulaRisk = req.session.data.formulaRisk;
  res.redirect('formula-risk-product');

})

// formula-risk-product

router.post('/formula-risk-product', function (req, res) {
  
  let formulaRiskCoFormulant = req.session.data.formulaRiskCoFormulant;
  res.redirect('formula-check-answers');

})

// formula-check-answers

router.post('/formula-check-answers', function (req, res) {  
  let formulaCheckAnswers = req.session.data.formulaCheckAnswers;
  res.redirect('gap-is-csv-upload');

})

// formula-csv-check-answers

router.post('/formula-csv-check-answers', function (req, res) {  
  let formulaCheckAnswers = req.session.data.formulaCheckAnswers;
  res.redirect('gap-is-csv-upload');

})












//-----------------------------------------------------------//










// ----------------- PRODUCT USE ----------------- //

// gap-is-csv-upload

router.post('/gap-is-csv-upload', function (req, res) {
  
  let productUser = req.session.data.productUser;
  res.redirect('product-proposed-use');

})





// product-use

router.post('/product-use', function (req, res) {
  
  let productUser = req.session.data.productUser;
  res.redirect('product-proposed-use');

})

// product-proposed-use

router.post('/product-proposed-use', function (req, res) {
  
  let productProposedUse = req.session.data.productProposedUse;
  res.redirect('proposed-authorised-use-check-answers');

})



// ----------------- PROPOSED AND AUTHORISED USE - GAP TABLE ----------------- //

// proposed-authorised-use - NOT USED

router.post('/proposed-authorised-use', function (req, res) {
  
  let productProposedUse = req.session.data.productProposedUse;
  res.redirect('proposed-authorised-use-crop');

})

// proposed-authorised-use-crop

router.post('/proposed-authorised-use-crop', function (req, res) {
  
  let proposedUseCrop = req.session.data.proposedUseCrop;
  res.redirect('proposed-authorised-use-active-content');

})

// proposed-authorised-use-active-content

router.post('/proposed-authorised-use-active-content', function (req, res) {
  
  let proposedUseActiveContent = req.session.data.proposedUseActiveContent;
  res.redirect('proposed-authorised-use-formulation-type');

})

// proposed-authorised-use-formulation-type

router.post('/proposed-authorised-use-formulation-type', function (req, res) {
  
  let proposedUseFormulationType = req.session.data.proposedUseFormulationType;
  res.redirect('proposed-authorised-use-crop-situation');

})

// proposed-authorised-use-crop-situation

router.post('/proposed-authorised-use-crop-situation', function (req, res) {
  
  let proposedUseCropSituation = req.session.data.proposedUseCropSituation;
  res.redirect('proposed-authorised-use-media-protected');

})

// proposed-authorised-use-media-protected

router.post('/proposed-authorised-use-media-protected', function (req, res) {
  let proposedUseMediaProtected = req.session.data.proposedUseMediaProtected;
  res.redirect('proposed-authorised-use-crop-height');

})

// proposed-authorised-use-crop-height

router.post('/proposed-authorised-use-crop-height', function (req, res) {
  let proposedUseCropHeight = req.session.data.proposedUseCropHeight;
  res.redirect('proposed-authorised-use-crop-number');

})

// proposed-authorised-use-crop-number

router.post('/proposed-authorised-use-crop-number', function (req, res) {
  let proposedUseCropNumber = req.session.data.proposedUseCropNumber;
  res.redirect('proposed-authorised-use-target-pests');

})

// proposed-authorised-use-target-pests

router.post('/proposed-authorised-use-target-pests', function (req, res) {
  let proposedUseTargetPests = req.session.data.proposedUseTargetPests;
  res.redirect('proposed-authorised-use-active-max-individual-dose');

})

// proposed-authorised-use-active-max-individual-dose

router.post('/proposed-authorised-use-active-max-individual-dose', function (req, res) {
  let proposedUseActiveMaxIndividualDose = req.session.data.proposedUseActiveMaxIndividualDose;
  res.redirect('proposed-authorised-use-active-max-total-dose');

})

// proposed-authorised-use-active-max-total-dose

router.post('/proposed-authorised-use-active-max-total-dose', function (req, res) {
  let proposedUseActiveMaxTotalDose = req.session.data.proposedUseActiveMaxTotalDose;
  res.redirect('proposed-authorised-use-product-max-individual-dose');

})

// proposed-authorised-use-product-max-individual-dose

router.post('/proposed-authorised-use-product-max-individual-dose', function (req, res) {
  let proposedUseProductMaxIndividualDose = req.session.data.proposedUseProductMaxIndividualDose;
  res.redirect('proposed-authorised-use-product-max-total-dose');

})

// proposed-authorised-use-product-max-total-dose

router.post('/proposed-authorised-use-product-max-total-dose', function (req, res) {
  let proposedUseProductMaxTotalDose = req.session.data.proposedUseProductMaxTotalDose;
  res.redirect('proposed-authorised-use-min-max-water');

})

// proposed-authorised-use-min-max-water

router.post('/proposed-authorised-use-min-max-water', function (req, res) {
  let proposedUseWaterMin = req.session.data.proposedUseWaterMin;
  let proposedUseWaterMax = req.session.data.proposedUseWaterMax;
  res.redirect('proposed-authorised-use-min-max-concentration');

})

// proposed-authorised-use-min-max-concentration

router.post('/proposed-authorised-use-min-max-concentration', function (req, res) {
  let proposedUseConcentrationMin = req.session.data.proposedUseConcentrationMin;
  let proposedUseConcentrationMax = req.session.data.proposedUseConcentrationMax;
  res.redirect('proposed-authorised-use-max-treatments');

})

// proposed-authorised-use-max-treatments

router.post('/proposed-authorised-use-max-treatments', function (req, res) {
  let proposedUseMaxTreatments = req.session.data.proposedUseMaxTreatments;
  res.redirect('proposed-authorised-use-application-intervals');

})

// proposed-authorised-use-application-intervals

router.post('/proposed-authorised-use-application-intervals', function (req, res) {
  let proposedUseIntervals = req.session.data.proposedUseIntervals;
  res.redirect('proposed-authorised-use-application-earliest-latest');

})

// proposed-authorised-use-application-earliest-latest

router.post('/proposed-authorised-use-application-earliest-latest', function (req, res) {
  let proposedUseEarliestLatest= req.session.data.proposedUseEarliestLatest;
  res.redirect('proposed-authorised-use-application-period-use');

})

// proposed-authorised-use-application-period-use

router.post('/proposed-authorised-use-application-period-use', function (req, res) {
  let proposedUsePeriod= req.session.data.proposedUsePeriod;
  res.redirect('proposed-authorised-use-application-methods-protected');

})

// proposed-authorised-use-application-methods - NOT USED

// router.post('/proposed-authorised-use-application-methods', function (req, res) {
//   let proposedUsePeriod= req.session.data.proposedUsePeriod;
//   res.redirect('proposed-authorised-use-application-period-use');

// })

// proposed-authorised-use-application-methods-protected

router.post('/proposed-authorised-use-application-methods-protected', function (req, res) {
  let proposedUsePeriod= req.session.data.proposedUsePeriod;
  res.redirect('proposed-authorised-use-application-methods-outdoor');

})

// proposed-authorised-use-application-methods-outdoor

router.post('/proposed-authorised-use-application-methods-outdoor', function (req, res) {
  let proposedUsePeriod= req.session.data.proposedUsePeriod;
  res.redirect('proposed-authorised-use-check-answers');

})

// proposed-authorised-use-check-answers

router.post('/proposed-authorised-use-check-answers', function (req, res) {
  let proposedUseCheckAnswers= req.session.data.proposedUseCheckAnswers;
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
  res.redirect('product-material-add-another');

})

// product-outer-material - NOT USED

router.post('/product-outer-material', function (req, res) {
  
  let productOuterPackaging = req.session.data.productOuterPackaging;
  res.redirect('product-material-add-another');

})

// product-material-add-another

router.post('/product-material-add-another', function (req, res) {
  
  let productPackagingAddAnother = req.session.data.productPackagingAddAnother;
  res.redirect('product-volume');

})

// product-volume

router.post('/product-volume', function (req, res) {
  
  let productVolume = req.session.data.productVolume;
  res.redirect('product-packaging-add-another');

})

// product-packaging-add-another

router.post('/product-packaging-add-another', function (req, res) {
  
  let productPackagingAddAnother = req.session.data.productPackagingAddAnother;
  res.redirect('product-packaging-check-answers');

})

// product-packaging-check-answers

router.post('/product-packaging-check-answers', function (req, res) {
  
  let productPackagingAddAnother = req.session.data.productPackagingAddAnother;
  res.redirect('formula-manufacturing-address-postcode');

})



// ----------------- MRL - NOT USED ----------------- //

// product-mrl-needed - NOT USED

router.post('/product-mrl-needed', function (req, res) {
  
  let productMrlNeeded = req.session.data.productMrlNeeded;
  if (productMrlNeeded == "No") {
    res.redirect('product-check-answers');
  } else {
    res.redirect('product-commodity-code-name');
  }

})

// product-commodity-code-name - NOT USED

router.post('/product-commodity-code-name', function (req, res) {
  
  let productCommodityCodeName = req.session.data.productCommodityCodeName;
  res.redirect('product-mrl-change');

})

// product-mrl-change - NOT USED

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

// product-mrl-currently-in-force-value - NOT USED

router.post('/product-mrl-currently-in-force-value', function (req, res) {
  
  let productMrlInForceValue = req.session.data.productMrlInForceValue;
  res.redirect('product-mrl-currently-in-force-add-another');

})

// product-mrl-currently-in-force-add-another - NOT USED

router.post('/product-mrl-currently-in-force-add-another', function (req, res) {
  
  let productMrlInForceAddAnother = req.session.data.productMrlInForceAddAnother;
  res.redirect('product-check-answers');

})

// product-check-answers - NOT USED

router.post('/product-check-answers', function (req, res) {
  
  let productCheckAnswers = req.session.data.productCheckAnswers;
  res.redirect('formula-active-substance-name');

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
  res.redirect('formula-manufacturing-check-answers');

})

// formula-composition - NOT USED

router.post('/formula-composition', function (req, res) {  
  let formulaComposition = req.session.data.formulaComposition;
  res.redirect('formula-check-answers');

})

// formula-manufacturing-check-answers

router.post('/formula-manufacturing-check-answers', function (req, res) {  
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
