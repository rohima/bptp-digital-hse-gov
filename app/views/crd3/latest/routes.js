const express = require('express')
const router = express.Router()

// ----------------- TEST ----------------- //




// ----------------- APPLICATION JOURNEY ----------------- //

// existing-job-number

router.post('/existing-job-number', function (req, res) {
  
  let existingJobNumber = req.session.data.existingJobNumber;
  res.redirect('send-verify-code');

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


// application-who-is-applying

router.post('/application-who-is-applying', function (req, res) {
  
  let applicationWhoApplying = req.session.data.applicationWhoApplying;
  res.redirect('find-search');

})


// ----------------- PRODUCT INFORMATION ----------------- //



// ----------------- AUTHORISED HOLDER ----------------- //

// applicant-type
  
router.post('/applicant-type', function (req, res) {
  let applicationOrganisationType = req.session.data.applicationOrganisationType;
  if (applicationOrganisationType == "Yes") {
    res.redirect('auth-holder-company-registration');
  } else {
    res.redirect('auth-holder-same');
  }
})

// auth-holder-same

router.post('/auth-holder-same', function (req, res) {
  
  let authHolderSame = req.session.data.authHolderSame;

  if (authHolderSame == "Someone else") {
    res.redirect('auth-holder-company');
  } else {
    res.redirect('auth-holder-company-registration');
  }
})

// auth-holder-company

router.post('/auth-holder-company', function (req, res) {
  let authCompanyName = req.session.data.authCompanyName;
  res.redirect('auth-holder-address-postcode');
})

// auth-holder-address-postcode

router.post('/auth-holder-address-postcode', function (req, res) {
  let authAddressPostcode = req.session.data.authAddressPostcode;
  res.redirect('auth-holder-address-list');
})

// auth-holder-address-list

router.post('/auth-holder-address-list', function (req, res) {
  let authCompanyAddressList = req.session.data.authCompanyAddressList;
  res.redirect('auth-holder-address-confirm');
})

// auth-holder-address-confirm

router.post('/auth-holder-address-confirm', function (req, res) {
  res.redirect('auth-holder-company-registration');
})

// auth-holder-company-registration
  
router.post('/auth-holder-company-registration', function (req, res) {
  let applicationOrganisationType = req.session.data.applicationOrganisationType;
  if (applicationOrganisationType == "Yes") {
    res.redirect('auth-holder-check-answers');
  } else {
    res.redirect('documents-upload-proof-of-authorisation');
  }
})


// documents-upload-proof-of-authorisation
router.post('/documents-upload-proof-of-authorisation', function (req, res) {
  let authHolderAuthorisation = req.session.data.authHolderAuthorisation;
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
  
  let marketingHolderSame = req.session.data.marketingHolderSame;
  
  if (marketingHolderSame == "Someone else") {
    res.redirect('marketing-company');
  } else {
    res.redirect('marketing-company-registration');
  }
})

// marketing-company

router.post('/marketing-company', function (req, res) {
  let marketingCompanyName = req.session.data.marketingCompanyName;
  res.redirect('marketing-address-postcode');
})

// marketing-address-postcode

router.post('/marketing-address-postcode', function (req, res) {
  let marketingAddressPostcode = req.session.data.marketingAddressPostcode;
  res.redirect('marketing-address-list');
})

// marketing-address-list

router.post('/marketing-address-list', function (req, res) {
  let marketingCompanyAddressList = req.session.data.marketingCompanyAddressList;
  res.redirect('marketing-address-confirm');
})

// marketing-address-confirm

router.post('/marketing-address-confirm', function (req, res) {
  res.redirect('marketing-company-registration');
})

// marketing-company-registration
  
router.post('/marketing-company-registration', function (req, res) {
  let marketingCompanyRegistration = req.session.data.marketingCompanyRegistration;
  res.redirect('marketing-co-check-answers');
})

// marketing-co-check-answers

router.post('/marketing-co-check-answers', function (req, res) {
  
  let marketingCoCheckAnswers = req.session.data.marketingCoCheckAnswers;
  res.redirect('placeholder-application-type');

})


// ----------------- APPLICATION TYPE ----------------- //

// placeholder-application-type
router.post('/placeholder-application-type', function (req, res) {
    res.redirect('application-market-area');
})


// ----------------- MARKET AREA ----------------- //

// application-market-area

router.post('/application-market-area', function (req, res) {
  
  let marketArea = req.session.data.marketArea;
  res.redirect('product-name');

})


// ----------------- PRODUCT DETAILS ----------------- //

// product-name

router.post('/product-name', function (req, res) {
  
  let productName = req.session.data.productName;
  let productCode = req.session.data.productCode;
  res.redirect('placeholder-urgency');

})



// ----------------- NEED FOR URGENCY ----------------- //

// placeholder-urgency

router.post('/placeholder-urgency', function (req, res) {
  
  let productName = req.session.data.productName;
  let productCode = req.session.data.productCode;
  res.redirect('product-use');

})



// product-check-answers
router.post('/product-check-answers', function (req, res) {
  res.redirect('formula-type');
})



// product-application-reason - NOT USED

router.post('/product-application-reason', function (req, res) {
  
  let productApplicationReason = req.session.data.productApplicationReason;
  res.redirect('product-use');

})



// ----------------- FORMULATION COMPOSITION ----------------- //


// formula-type
router.post('/formula-type', function (req, res) {
  let productApplicationReason = req.session.data.productApplicationReason;
  res.redirect('formula-is-csv-upload');
})


// formula-is-csv-upload

router.post('/formula-is-csv-upload', function (req, res) {
  let isCsvUpload = req.session.data.isCsvUpload;

  if (isCsvUpload == "Yes") {
    res.redirect('formula-csv-1');
  } else if (isCsvUpload == "No") {
    res.redirect('formula-type-add');
  } else if (isCsvUpload == "Third party"){
    res.redirect('formula-risk-product');
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
  res.redirect('formula-risk-product');
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
  let formulaActiveChemicalName = req.session.data.formulaActiveChemicalName;

  let formulaActivePureConcentrationValue = req.session.data.formulaActivePureConcentrationValue;
  let formulaActivePureConcentrationUnit = req.session.data.formulaActivePureConcentrationUnit;
  let formulaActivePureConcentrationOther = req.session.data.formulaActivePureConcentrationOther;

  let formulaActiveTechConcentrationValue = req.session.data.formulaActiveTechConcentrationValue;
  let formulaActiveTechConcentrationUnit = req.session.data.formulaActiveTechConcentrationUnit;
  let formulaActiveTechConcentrationOther = req.session.data.formulaActiveTechConcentrationOther;

  let formulaActivePureConcentrationPercentValue = req.session.data.formulaActivePureConcentrationPercentValue;
  let formulaActivePureConcentrationPercentUnit = req.session.data.formulaActivePureConcentrationPercentUnit;

  let formulaActiveTechConcentrationPercentValue = req.session.data.formulaActiveTechConcentrationPercentValue;
  let formulaActiveTechConcentrationPercentUnit = req.session.data.formulaActiveTechConcentrationPercentUnit;

  res.redirect('formula-composition-add-another-1');
})

// formula-composition-add-another-1
router.post('/formula-composition-add-another-1', function (req, res) {
  let addAnotherFormulaComposition = req.session.data.addAnotherFormulaComposition;

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
  let productRiskMicrobial = req.session.data.productRiskMicrobial;
  if (productRisk == "No") {
    res.redirect('formula-check-answers');
  } else {
    res.redirect('formula-risk-upload');
  }

})

// formula-risk-upload-info
router.post('/formula-risk-upload-info', function (req, res) {
  
  let productRiskInfo = req.session.data.productRiskInfo;
  if (productRiskInfo == "Upload a file") {
    res.redirect('formula-risk-upload');
  } else {
    res.redirect('formula-check-answers');
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
    res.redirect('formula-active-substance-source-data-ownership-details');
  } else if (isActiveSubstanceSourceUpload == "Third party") {
    res.redirect('active-substance-source-request-tech-equiv');
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
    res.redirect('formula-active-substance-source-data-ownership-add-another');
  }
})

// application-eu-reference

router.post('/application-eu-reference', function (req, res) {
  let marketArea = req.session.data.marketArea;
  if (marketArea == 'Great Britain and Northern Ireland') {
    res.redirect('active-substance-source-previous-tech-equiv-gb');
  } else {
    res.redirect('formula-active-substance-source-data-ownership-add-another');
  }

})

// active-substance-source-previous-tech-equiv-gb

router.post('/active-substance-source-previous-tech-equiv-gb', function (req, res) {
  res.redirect('formula-active-substance-source-data-ownership-add-another');
})


// formula-active-substance-source-data-ownership-add-another

router.post('/formula-active-substance-source-data-ownership-add-another', function (req, res) {
  let addAnotherDataOwner = req.session.data.addAnotherDataOwner
  let marketArea = req.session.data.marketArea;
  console.log(addAnotherDataOwner)
  if (addAnotherDataOwner == "Yes") {
    res.redirect('formula-active-substance-source-data-ownership-details');
  } else {
    if (marketArea == "Northern Ireland") {
      // NI go to check answers
      res.redirect('formula-active-substance-source-data-ownership-check-answers');
    } else {
      res.redirect('active-substance-source-request-tech-equiv');
    }
  
  }
  
})



// active-substance-source-request-tech-equiv
router.post('/active-substance-source-request-tech-equiv', function (req, res) {
  let requestTechEquiv = req.session.data.requestTechEquiv;
  if (requestTechEquiv == "Yes") {
    res.redirect('active-substance-source-request-tech-equiv-production-scale');
  } else {
    res.redirect('formula-active-substance-source-data-ownership-check-answers');
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
    res.redirect('formula-active-substance-source-data-ownership-check-answers');
  }
    res.redirect('formula-active-substance-source-data-ownership-check-answers');

})

// active-substance-source-request-tech-equiv-upload

router.post('/active-substance-source-request-tech-equiv-upload', function (req, res) {
  let requestTechEquivUpload = req.session.data.requestTechEquivUpload; 
  let techEquivThirdParty = req.session.data.techEquivThirdParty;
    res.redirect('formula-active-substance-source-data-ownership-check-answers');

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
  let marketArea = req.session.data.marketArea;

  if (marketArea == 'Great Britain') {
    res.redirect('active-substance-source-previous-tech-equiv-gb');
  } else {
    res.redirect('active-substance-source-previous-tech-equiv-ni');
  }

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
  res.redirect('formula-active-substance-data-ownership-details');

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
  let intendedProductUser = req.session.data.intendedProductUser;
  //if (intendedProductUser == "Professional") {

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
  res.redirect('gap-add-another');
})

// gap-application-method

router.post('/gap-application-method', function (req, res) {
  let gapApplicationMethod = req.session.data.gapApplicationMethod;
  res.redirect('gap-add-another');

})

// gap-add-another

router.post('/gap-add-another', function (req, res) {
  let gapAddAnother = req.session.data.gapAddAnother;
  res.redirect('gap-environmental-phrases');

})

// gap-remove

router.post('/gap-remove', function (req, res) {
  let gapAddAnother = req.session.data.gapAddAnother;
  res.redirect('gap-add-another');

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
  res.redirect('gap-environmental-phrases');

})

// gap-csv-check-answers

router.post('/gap-csv-check-answers', function (req, res) {
  let gapCsvCheckAnswers = req.session.data.gapCsvCheckAnswers;
  res.redirect('packaging-number-of');

})

// gap-check-answers

router.post('/gap-check-answers', function (req, res) {
  let gapCheckAnswers = req.session.data.gapCheckAnswers;
  res.redirect('placeholder-supporting-info');

})


// ----------------- SUPPORTING INFO ----------------- //

// placeholder-supporting-info

router.post('/placeholder-supporting-info', function (req, res) {
  let packagingNumberof = req.session.data.packagingNumberof;
  res.redirect('documents-reference-product-risk-areas');

})




// ----------------- PACKAGING ----------------- //

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
  res.redirect('packaging-add-another');

})

// ----------------- PACKAGING AND LABELS ----------------- //

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
  if (manufacturingAddressAddAnother == "Yes") {
    res.redirect('manufacturing-address-postcode');
  } else {
    res.redirect('manufacturing-check-answers');
  }
})

// manufacturing-address-remove

router.post('/manufacturing-address-remove', function (req, res) {
  res.redirect('manufacturing-site-add-another');
})

// manufacturing-check-answers

router.post('/manufacturing-check-answers', function (req, res) {  
  let manufacturingCheckAnswers = req.session.data.manufacturingCheckAnswers;
  res.redirect('documents-reference-product-risk-areas');

})


// ----------------- SPECIALIST ASSESSMENT AREAS ----------------- //

// documents-reference-product-risk-areas

router.post('/documents-reference-product-risk-areas', function (req, res) {  
  let documentsReferenceProductRiskAreas = req.session.data.documentsReferenceProductRiskAreas;
  let productProposedUse = req.session.data.productProposedUse;
  if (productProposedUse == "Data") {
    res.redirect('documents-reference-product-risk-areas-upload-info');
  } else {
    res.redirect('documents-reference-product');
  }  
})

// documents-reference-product-risk-areas-upload-info
router.post('/documents-reference-product-risk-areas-upload-info', function (req, res) {  
  let documentsReferenceProductRiskAreasInfo = req.session.data.documentsReferenceProductRiskAreas;
  if (documentsReferenceProductRiskAreasInfo == "Upload a file") {
    res.redirect('documents-reference-product-risk-areas-upload');
  } else {
    res.redirect('documents-reference-product');
  }  

})

// documents-reference-product-risk-areas-upload

router.post('/documents-reference-product-risk-areas-upload', function (req, res) {  
  let documentsReferenceProductRiskAreasUpload = req.session.data.documentsReferenceProductRiskAreas;
    res.redirect('documents-reference-product');
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










// ----------------- MRL ----------------- //

// mrl-needed

router.post('/mrl-needed', function (req, res) {
  
  let productMrlNeeded = req.session.data.productMrlNeeded;
  if (productMrlNeeded == "No") {
    res.redirect('product-check-answers');
  } else {
    res.redirect('mrl-commodity-code-name');
  }

})

// mrl-commodity-code-name

router.post('/mrl-commodity-code-name', function (req, res) {
  
  let productCommodityCodeName = req.session.data.productCommodityCodeName;
  res.redirect('mrl-change');

})

// mrl-change

router.post('/mrl-change', function (req, res) {
  
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

// 

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
  res.redirect('application-type');

})

// ----------------- PLACEHOLDER PAGE ----------------- //


// application-type

router.post('/application-type', function (req, res) {  
  let applicationType = req.session.data.applicationType;
  res.redirect('application-existing-product-details');
})


// application-existing-product-details

router.post('/application-existing-product-details', function (req, res) {  
  let applicationType = req.session.data.applicationType;
  res.redirect('application-reason-for-reinstatement');
})

// application-reason-for-reinstatement

router.post('/application-reason-for-reinstatement', function (req, res) {  
  let applicationType = req.session.data.applicationType;
  res.redirect('application-reason-for-reinstatement');
})




// ----------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXX ----------------- //



module.exports = router
