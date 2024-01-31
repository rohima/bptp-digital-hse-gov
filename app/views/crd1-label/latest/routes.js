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

// ----------------- SECURITY VERIFICATION ----------------- //

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
  res.redirect('formula-active-substance-data-ownership-details');

})
/*
// ----------------- SUMMARY OF CHANGES ----------------- //

router.post('/summary-of-changes', function (req, res) {  
  let summaryOfChanges = req.session.data.summaryOfChanges;
  res.redirect('formula-active-substance-data-ownership-details');
})
*/

// ----------------- CHANGE TO DATA OWNERSHIP ----------------- //

router.post('/placeholder-changes-to-data-ownership', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  // yes redirect to data ownership
  // no redirect to previously submitted
  res.redirect('placeholder-previously-submitted');
})

// ----------------- PREVIOUSLY SUBMITTED ----------------- //

router.post('/placeholder-previously-submitted', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
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
    res.redirect('active-substance-source-request-tech-equiv');
  } else {
    res.redirect('formula-product-data-ownership-details');
  }
})

// formula-product-data-ownership-details
router.post('/formula-product-data-ownership-details', function (req, res) {
  res.redirect('active-substance-source-request-tech-equiv');
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
  res.redirect('proposed-use-info');
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
  let requestTechEquiv = req.session.data.requestTechEquiv;
  if (requestTechEquiv == "Yes") {
    res.redirect('active-substance-source-request-tech-equiv-production-scale');
  } else {
    res.redirect('proposed-use-info');
  }

})

// active-substance-source-request-tech-equiv-production-scale
router.post('/active-substance-source-request-tech-equiv-production-scale', function (req, res) {
  let requestTechEquivProdScale = req.session.data.requestTechEquivProdScale;
    res.redirect('active-substance-source-request-tech-equiv-upload');

})


// active-substance-source-request-tech-equiv-upload-info - NOT USED
router.post('/active-substance-source-request-tech-equiv-upload-info', function (req, res) {
  let requestTechEquivUploadInfo = req.session.data.requestTechEquivUploadInfo;
  if (requestTechEquivUploadInfo == "Upload a file") {
    res.redirect('active-substance-source-request-tech-equiv-upload');
  } else {
    res.redirect('proposed-use-info');
  }

})

// active-substance-source-request-tech-equiv-upload

router.post('/active-substance-source-request-tech-equiv-upload', function (req, res) {
  let requestTechEquivUpload = req.session.data.requestTechEquivUpload; 
  let techEquivThirdParty = req.session.data.techEquivThirdParty;
    res.redirect('proposed-use-info');

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
    res.redirect('proposed-use-info');
  }
})

// formula-active-substance-source-data-ownership-previous
router.post('/formula-active-substance-source-data-ownership-previous', function (req, res) {
  let formulaActiveSourceDataOwnerAddress = req.session.data.formulaActiveSourceDataOwnerAddress;
  if (formulaActiveSourceDataOwnerAddress == "Yes" ) {
    res.redirect('formula-active-substance-source-manufacturing-address-postcode');
  } else {
    res.redirect('proposed-use-info');
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
  res.redirect('proposed-use-info');
})

// formula-active-substance-source-data-ownership-check-answers

router.post('/formula-active-substance-source-data-ownership-check-answers', function (req, res) {
  res.redirect('proposed-use-info');
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
  res.redirect('proposed-use-info');

})



// ----------------- CHANGE GAP ----------------- //

// proposed-use-info

router.post('/proposed-use-info', function (req, res) {  
  let summaryOfChanges = req.session.data.summaryOfChanges;
  res.redirect('is-microbial');
})

// is-microbial

router.post('/is-microbial', function (req, res) {  
  let isMicrobial = req.session.data.isMicrobial;
  res.redirect('product-use');
})


// ----------------- GAP ----------------- //


// ----------------- PRODUCT USE ----------------- //


// product-use

router.post('/product-use', function (req, res) {
  
  let productUser = req.session.data.productUser;
  res.redirect('product-proposed-use');

})

// product-proposed-use

router.post('/product-proposed-use', function (req, res) {
  let intendedProductUser = req.session.data.intendedProductUser;
  if (intendedProductUser == "Professional") {
    res.redirect('product-use-seed-treatment');
  } else {
    res.redirect('gap-is-csv-upload');
  }

})

// product-use-seed-treatment

router.post('/product-use-seed-treatment', function (req, res) {
  
  let isProductSeedTreatment = req.session.data.isProductSeedTreatment;

  res.redirect('gap-is-csv-upload');

})



// gap-is-csv-upload

router.post('/gap-is-csv-upload', function (req, res) {
  let isProductSeedTreatment = req.session.data.isProductSeedTreatment;
  let isGapCsvUpload = req.session.data.isGapCsvUpload;
  let intendedProductUser = req.session.data.intendedProductUser;
  res.redirect('gap-csv-1');
  //if (intendedProductUser == "Professional") {
/*
  if (intendedProductUser == "Professional") {
    if (isGapCsvUpload == "Yes") {
      res.redirect('gap-csv-1');
    } else if (isGapCsvUpload == "No" && isProductSeedTreatment == "Yes"){
      res.redirect('gap-seed-treatment');
    } else {
      res.redirect('gap-crop-product');
    }
  } else {
    res.redirect('gap-crop-product');
  }
*/
})



// gap-csv-1

router.post('/gap-csv-1', function (req, res) {
  let gapCsv = req.session.data.gapCsv;
  res.redirect('gap-environmental-phrases');

})

// gap-environmental-phrases

router.post('/gap-environmental-phrases', function (req, res) {
  let environmentalPhrases = req.session.data.environmentalPhrases;
  let environmentalPhrasesDetails = req.session.data.environmentalPhrasesDetails;
  res.redirect('gap-other-specific-restrictions');

})

// gap-other-specific-restrictions

router.post('/gap-other-specific-restrictions', function (req, res) {
  let otherSpecificRestrictions = req.session.data.otherSpecificRestrictions;
  let individualUsesDetails = req.session.data.individualUsesDetails;
  res.redirect('gap-personal-protective-equipment');

})

// gap-personal-protective-equipment 

router.post('/gap-personal-protective-equipment', function (req, res) {
  let personalProtectiveEquipment = req.session.data.personalProtectiveEquipment;
  let personalProtectiveEquipmentDetails = req.session.data.personalProtectiveEquipmentDetails;
  res.redirect('gap-clp');

})

// gap-clp
router.post('/gap-clp', function (req, res) {
  let gapClp = req.session.data.gapClp;
  let gapClpApplyAll = req.session.data.gapClpApplyAll;
  res.redirect('gap-other-product');

})



// gap-other-product

router.post('/packaging-upload-label', function (req, res) {
  let gapOtherProduct = req.session.data.gapOtherProduct;
  res.redirect('documents-reference-product-risk-areas');

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
  let intendedProductUser = req.session.data.intendedProductUser;
  res.redirect(`gap-application-${intendedProductUser.toLowerCase()}-protected`);
})

// gap-application-[intendedProductUser]-protected

router.post('/gap-application-*-protected', function (req, res) {
  let intendedProductUser = req.session.data.intendedProductUser;
  res.redirect(`gap-application-${intendedProductUser.toLowerCase()}-indoor`);
})

// gap-application-[intendedProductUser]-indoor

router.post('/gap-application-*-indoor', function (req, res) {
  let intendedProductUser = req.session.data.intendedProductUser;
  res.redirect(`gap-application-${intendedProductUser.toLowerCase()}-outdoor`);
})

// gap-application-[intendedProductUser]-outdoor

router.post('/gap-application-*-outdoor', function (req, res) {
  let intendedProductUser = req.session.data.intendedProductUser;
  res.redirect('gap-other-product');
})

// gap-application-method

router.post('/gap-application-method', function (req, res) {
  let gapApplicationMethod = req.session.data.gapApplicationMethod;
  res.redirect('gap-other-product');

})

// gap-other-product

router.post('/gap-other-product', function (req, res) {
  let gapOtherProduct = req.session.data.gapOtherProduct;
  res.redirect('packaging-upload-label');

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
  res.redirect('packaging-number-of');

})


// ----------------- PACKAGING AND LABELS ----------------- //

// packaging-upload-label

router.post('/packaging-upload-label', function (req, res) {
  let packagingXDetails = req.session.data.packagingXDetails;
  res.redirect('documents-reference-product-risk-areas');

})



// ----------------- PLACEHOLDER PAGE ----------------- //

// summary

router.post('/placeholder-summary', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('placeholder-upload');
})

// upload evidence

router.post('/placeholder-upload', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('documents-reference-product-risk-areas');
})



// ----------------- SPECIAL ASSESSMENT AREA ----------------- //


// documents-reference-product-risk-areas

router.post('/documents-reference-product-risk-areas', function (req, res) {  
  let documentsReferenceProductRiskAreas = req.session.data.documentsReferenceProductRiskAreas;
  res.redirect('eamu-affected');

})


// ----------------- EAMU OR MRL AFFECTED ----------------- //

// eamu-affected

router.post('/eamu-affected', function (req, res) {  
  let eamuAffected = req.session.data.eamuAffected;
  let eamuAffectedDetails = req.session.data.eamuAffectedDetails;
  res.redirect('mrl-affected');

})

// mrl-affected

router.post('/mrl-affected', function (req, res) {  
  let mrlAffected = req.session.data.mrlAffected;
  res.redirect('documents-upload-admin');

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


// ----------------- DOCUMENTS ----------------- //

// documents-reference-product

router.post('/documents-reference-product', function (req, res) {  
  let documentsReferenceProduct = req.session.data.documentsReferenceProduct;

  if (documentsReferenceProduct == "Yes") {
    res.redirect('documents-reference-product-details');
  } else {
    res.redirect('documents-upload-admin');
  }  
})

// documents-reference-product-details

router.post('/documents-reference-product-details', function (req, res) {  
  let documentsReferenceProductDetails = req.session.data.documentsReferenceProductDetails;
  let documentsReferenceProductName = req.session.data.documentsReferenceProductName;
  let documentsReferenceProductMapp = req.session.data.documentsReferenceProductMapp;
  let documentsReferenceProductAuthHolder = req.session.data.documentsReferenceProductAuthHolder;
  let documentsReferenceProductMarketingCo = req.session.data.documentsReferenceProductMarketingCo;
  res.redirect('documents-upload-admin');

})



// documents-reference-product-risk-areas-34

router.post('/documents-reference-product-risk-areas-34', function (req, res) {  
  let documentsReferenceProductRiskAreas34 = req.session.data.documentsReferenceProductRiskAreas34;
  res.redirect('documents-upload-admin');

})



// documents-upload-admin

router.post('/documents-upload-admin', function (req, res) {  
  let documentsAdmin = req.session.data.documentsAdmin;
  let documentsAdminSelect = req.session.data.documentsAdminSelect;
  let isMicrobial = req.session.data.isMicrobial

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

// documents-upload-draft-reg-report-microbials

router.post('/documents-upload-draft-reg-report-microbials', function (req, res) {  
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
