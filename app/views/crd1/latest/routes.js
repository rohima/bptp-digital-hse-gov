const express = require('express')
const router = express.Router()

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

// ----------------- MARKET AREA ----------------- //

// application-market-area

router.post('/application-market-area', function (req, res) {
  
  let marketArea = req.session.data.marketArea;
  res.redirect('application-eu-reference');

})

// application-eu-reference

router.post('/application-eu-reference', function (req, res) {
  
  let marketArea = req.session.data.marketArea;
  res.redirect('application-eu-tech');

})

// application-eu-tech

router.post('/application-eu-tech', function (req, res) {
  
  let marketArea = req.session.data.marketArea;
  res.redirect('product-name');

})


// ----------------- PRODUCT DETAILS ----------------- //

// product-name

router.post('/product-name', function (req, res) {
  
  let productName = req.session.data.productName;
  let productCode = req.session.data.productCode;
  res.redirect('product-check-answers');

})

router.post('/product-check-answers', function (req, res) {
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
  res.redirect('product-use');

})

// formula-csv-check-answers

router.post('/formula-csv-check-answers', function (req, res) {  
  let formulaCheckAnswers = req.session.data.formulaCheckAnswers;
  res.redirect('product-use');

})


// ----------------- FORMULATION COMPOSITION  END----------------- //


// ----------------- PRODUCT USE ----------------- //


// product-use

router.post('/product-use', function (req, res) {
  
  let productUser = req.session.data.productUser;
  res.redirect('product-proposed-use');

})

// product-proposed-use

router.post('/product-proposed-use', function (req, res) {
  let productProposedUse = req.session.data.productProposedUse;
  let productUser = req.session.data.productUser;
  if (productUser == "Professional") {
    res.redirect('product-use-seed-treatment');
  } else {
    res.redirect('gap-is-csv-upload');
  }

})

// product-use-seed-treatment

router.post('/product-use-seed-treatment', function (req, res) {
  
  let isProductSeedTreatment = req.session.data.isProductSeedTreatment;
  // if (formulaSubstanceMixture == "Yes") {
  //   res.redirect('formula-type-add-component');
  // } else {
  //   res.redirect('formula-type-add-component');
  // }
  res.redirect('gap-is-csv-upload');

})




// gap-is-csv-upload

router.post('/gap-is-csv-upload', function (req, res) {
  let isProductSeedTreatment = req.session.data.isProductSeedTreatment;
  let isGapCsvUpload = req.session.data.isGapCsvUpload;
  if (isGapCsvUpload == "Yes") {
      res.redirect('gap-csv-1');
    } else if (isGapCsvUpload == "No" && isProductSeedTreatment == "Yes"){
      res.redirect('gap-seed-treatment');
    } else {
      res.redirect('gap-crop-product');
    }
  // res.redirect('gap-csv-1');
})

// gap-csv-1

router.post('/gap-csv-1', function (req, res) {
  let gapCsv = req.session.data.gapCsv;
  res.redirect('gap-check-answers');

})


// gap-crop-product

router.post('/gap-crop-product', function (req, res) {
  let gapCropLocation = req.session.data.gapCropLocation;
  if (gapCropLocation == "Protected" || gapCropLocation == "PPFE") {
    res.redirect('gap-growing-media');
  } else {
    res.redirect('gap-dosage');
  }

})

// gap-growing-media

router.post('/gap-growing-media', function (req, res) {
  let gapGrowingMedia = req.session.data.gapGrowingMedia;
  res.redirect('gap-dosage');

})

// gap-dosage

router.post('/gap-dosage', function (req, res) {
  let gapDosage = req.session.data.gapDosage;
  res.redirect('gap-timings');

})

// gap-timings

router.post('/gap-timings', function (req, res) {
  let gapTimings = req.session.data.gapTimings;
  res.redirect('gap-application-method');

})

// gap-application-method

router.post('/gap-application-method', function (req, res) {
  let gapApplicationMethod = req.session.data.gapApplicationMethod;
  res.redirect('gap-other-product');

})

// gap-other-product

router.post('/gap-other-product', function (req, res) {
  let gapOtherProduct = req.session.data.gapOtherProduct;
  res.redirect('gap-check-answers');

})

// gap-seed-treatment

router.post('/gap-seed-treatment', function (req, res) {
  let gapSeedTreatment = req.session.data.gapSeedTreatment;
  res.redirect('gap-seed-treatment-application');

})

// gap-seed-treatment-application

router.post('/gap-seed-treatment-application', function (req, res) {
  let gapSeedApplication = req.session.data.gapSeedApplication;
  res.redirect('gap-seed-treatment-growth');

})

// gap-seed-treatment-growth

router.post('/gap-seed-treatment-growth', function (req, res) {
  let gapSeedGrowth = req.session.data.gapSeedGrowth;
  res.redirect('gap-check-answers');

})

// gap-csv-check-answers

router.post('/gap-csv-check-answers', function (req, res) {
  let gapCsvCheckAnswers = req.session.data.gapCsvCheckAnswers;
  res.redirect('packaging-number-of');

})

// gap-check-answers

router.post('/gap-check-answers', function (req, res) {
  let gapCheckAnswers = req.session.data.gapCheckAnswers;
  res.redirect('packaging-number-of');

})



// ----------------- PACKAGING AND LABELS ----------------- //

// packaging-number-of

router.post('/packaging-number-of', function (req, res) {
  let packagingNumberof = req.session.data.packagingNumberof;
  res.redirect('packaging-x-details');

})

// packaging-x-details

router.post('/packaging-x-details', function (req, res) {
  let packagingXDetails = req.session.data.packagingXDetails;
  res.redirect('packaging-check-answers');

})

// packaging-x-details

router.post('/packaging-x-details', function (req, res) {
  let packagingXDetails = req.session.data.packagingXDetails;
  res.redirect('packaging-upload-label');

})

// packaging-upload-label

router.post('/packaging-upload-label', function (req, res) {
  let packagingXDetails = req.session.data.packagingXDetails;
  res.redirect('packaging-check-answers');

})

// packaging-check-answers

router.post('/packaging-check-answers', function (req, res) {
  let packagingCheckAnswers = req.session.data.packagingCheckAnswers;
  res.redirect('manufacturing-address-postcode');

})



// ----------------- MANUFACTURING LOCATION ----------------- //

// manufacturing-address-postcode

router.post('/manufacturing-address-postcode', function (req, res) {
  
  let manufacturingPostcode = req.session.data.manufacturingPostcode;
  res.redirect('manufacturing-address-list');

})

// manufacturing-address-list

router.post('/manufacturing-address-list', function (req, res) {
  
  let manufacturingAddressList = req.session.data.manufacturingAddressList;
  res.redirect('manufacturing-address-confirm');

})

// manufacturing-address-confirm

router.post('/manufacturing-address-confirm', function (req, res) {
  
  let manufacturingAddressConfirm = req.session.data.manufacturingAddressConfirm;
  res.redirect('manufacturing-site-add-another');

})

// manufacturing-site-add-another

router.post('/manufacturing-site-add-another', function (req, res) {  
  let manufacturingAddressAddAnother = req.session.data.manufacturingAddressAddAnother;
  res.redirect('manufacturing-check-answers');

})

// manufacturing-check-answers

router.post('/manufacturing-check-answers', function (req, res) {  
  let manufacturingCheckAnswers = req.session.data.manufacturingCheckAnswers;
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
  res.redirect('documents-upload-proof-of-authorisation');

})

// documents-upload-proof-of-authorisation

router.post('/documents-upload-proof-of-authorisation', function (req, res) {  
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
