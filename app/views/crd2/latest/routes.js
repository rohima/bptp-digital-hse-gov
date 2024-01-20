const express = require('express')
const router = express.Router()


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
  res.redirect('applicant-type');

})






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
  res.redirect('gap-clp');

})


// product-check-answers
router.post('/product-check-answers', function (req, res) {
  res.redirect('gap-clp');
})



// ----------------- CLP ----------------- //
 

// gap-clp
router.post('/gap-clp', function (req, res) {
  let gapClp = req.session.data.gapClp;
  let gapClpApplyAll = req.session.data.gapClpApplyAll;
  res.redirect('placeholder-packaging-size');

})


// is packaging size different?
// placeholder-packaging-size
router.post('/placeholder-packaging-size', function (req, res) {
  let packagingSize = req.session.data.packagingSize;

  if (packagingSize == "Yes") {
    res.redirect('placeholder-site-details');
  } else {
    res.redirect('placeholder-site-details');
  }
  
})

//Are formulation manufacturing site details identical to parent?
// placeholder-site-details
router.post('/placeholder-site-details', function (req, res) {
  let identicalSiteDetails = req.session.data.identicalSiteDetails;
  res.redirect('placeholder-manufactured-by-auth-holder');
})

//Is formulation being manufactured by auth holder of parent product?
// placeholder-manufactured-by-auth-holder
router.post('/placeholder-manufactured-by-auth-holder', function (req, res) {
  let manufacturedByAuthHolder = req.session.data.manufacturedByAuthHolder;
  res.redirect('placeholder-formulation-details');
})

//Are formulation details identical to parent?
// placeholder-formulation-details
router.post('/placeholder-formulation-details', function (req, res) {
  let identicalFormulationDetails = req.session.data.identicalFormulationDetails;
  res.redirect('placeholder-other-changes');
})

//Capture any other changes 
// placeholder-other-changes
router.post('/placeholder-other-changes', function (req, res) {
  let otherChanges = req.session.data.otherChanges;
  res.redirect('formula-active-substance-data-ownership-details');
})


// check your answers?


// data ownership

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
    res.redirect('active-substance-source-request-tech-equiv-upload-info');
  } else {
    res.redirect('formula-active-substance-source-data-ownership-check-answers');
  }

})

// active-substance-source-request-tech-equiv-upload-info
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
  res.redirect('documents-reference-product');
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
