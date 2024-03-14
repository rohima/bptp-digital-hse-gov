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
  res.redirect('documents-upload-application');

})


// application-who-is-applying - NOT USED

router.post('/placeholder-contact-for-tech-info', function (req, res) {
  
  let applicationTechContact = req.session.data.applicationTechContact;
  res.redirect('find-search');

})



// ----------------- DOCUMENTS ----------------- //

// documents-upload-application

router.post('/documents-upload-application', function (req, res) {  
  let applicationCRD8 = req.session.data.applicationCRD8;
  res.redirect('packaging-upload-label');

})

// packaging-upload-label

router.post('/packaging-upload-label', function (req, res) {
  let packagingXDetails = req.session.data.packagingXDetails;
  res.redirect('document-application-overview');

})

// document-application-overview

router.post('/document-application-overview', function (req, res) {  
  let documentsReferenceProduct = req.session.data.documentsReferenceProduct;
  res.redirect('documents-upload-emergency');

})

// documents-upload-emergency

router.post('/documents-upload-emergency', function (req, res) {  
  let documentsReferenceProduct = req.session.data.documentsReferenceProduct;
  res.redirect('documents-upload-supporting');

})


// documents-reference-product - NOT USED

router.post('/documents-reference-product', function (req, res) {  
  let documentsReferenceProduct = req.session.data.documentsReferenceProduct;

  if (documentsReferenceProduct == "Yes") {
    res.redirect('documents-reference-product-details');
  } else {
    res.redirect('documents-upload-admin');
  }  
})

// documents-reference-product-details - NOUT USED

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

// documents-upload-draft-reg-report microbials - NOT USED

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
  res.redirect('documents-upload-letters-of-access');

})

// documents-upload-safety-data-sheet - NOT USED

router.post('/documents-upload-safety-data-sheet', function (req, res) {  
  let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
  res.redirect('documents-upload-comparative-assessment-report');
})

// documents-upload-comparative-assessment-report - NOT USED

router.post('/documents-upload-comparative-assessment-report', function (req, res) {  
  let documentsSafetyDataSheet = req.session.data.documentsSafetyDataSheet;
  res.redirect('documents-upload-case-for-need');
})

// documents-upload-case-for-need - NOT USED

router.post('/documents-upload-case-for-need', function (req, res) {  
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

// documents-check-answers - NOT USED

router.post('/documents-check-answers', function (req, res) {  
  let documentsCheckAnswers = req.session.data.documentsCheckAnswers;
  res.redirect('declaration');

})


// check-answers

router.post('/check-answers', function (req, res) {  
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
  res.redirect('placeholder-plant-health-order');

})

// placeholder-plant-health-order

router.post('/placeholder-plant-health-order', function (req, res) {  
  let applicationPlantHealthOrder = req.session.data.applicationPlantHealthOrder;
  res.redirect('auth-holder-company');

})

// ----------------- PLACEHOLDER PAGE ----------------- //


// application-type

router.post('/application-type', function (req, res) {  
  let applicationType = req.session.data.applicationType;

  if (applicationType != undefined) {
    if (applicationType.indexOf("New extension of authorisation identical to an existing extension of authorisation for an identical product") > -1) {
        res.redirect('application-existing-product-details')
    } else {
        if (applicationType.indexOf("Reinstatement of a previously authorised extension of authorisation for minor use (EAMU)") > -1) {
          res.redirect('application-reason-for-reinstatement')
        } else {
          if (applicationType.indexOf("Finalisation of an extension of authorisation for minor use (EAMU) application following the publication of a revised or raised maximum residue level (MRL)") > -1) {
            res.redirect('application-finalisation-of-extension')
          } else {
            if (applicationType.indexOf("Change to an existing extension of authorisation for minor use (EAMU)") > -1) {
              res.redirect('application-changes')
            } else {
              res.redirect('application-market-area');
            }
          }
        }
    }
  } else {
    res.redirect('application-market-area');
  }
})


// application-existing-product-details

router.post('/application-existing-product-details', function (req, res) {  
  let applicationType = req.session.data.applicationType;

  if (applicationType != undefined) {
    if (applicationType.indexOf("Reinstatement of a previously authorised extension of authorisation for minor use (EAMU)") > -1) {
      res.redirect('application-reason-for-reinstatement')
    } else {
      if (applicationType.indexOf("Finalisation of an extension of authorisation for minor use (EAMU) application following the publication of a revised or raised maximum residue level (MRL)") > -1) {
        res.redirect('application-finalisation-of-extension')
      } else {
        if (applicationType.indexOf("Change to an existing extension of authorisation for minor use (EAMU)") > -1) {
          res.redirect('application-changes')
        } else {
          res.redirect('application-market-area');
        }
      }
    }
  } else {
    res.redirect('application-market-area');
  }
})

// application-reason-for-reinstatement

router.post('/application-reason-for-reinstatement', function (req, res) {  
  let applicationType = req.session.data.applicationType;

  if (applicationType != undefined) {
    if (applicationType.indexOf("Finalisation of an extension of authorisation for minor use (EAMU) application following the publication of a revised or raised maximum residue level (MRL)") > -1) {
        res.redirect('application-finalisation-of-extension')
    } else {
      if (applicationType.indexOf("Change to an existing extension of authorisation for minor use (EAMU)") > -1) {
        res.redirect('application-changes')
      } else {
        res.redirect('application-market-area');
      }
    }
  } else {
    res.redirect('application-market-area');
  }
})

// application-finalisation-of-extension

router.post('/application-finalisation-of-extension', function (req, res) {  
  let applicationType = req.session.data.applicationType;

  if (applicationType != undefined) {
    if (applicationType.indexOf("Change to an existing extension of authorisation for minor use (EAMU)") > -1) {
      res.redirect('application-changes')
    } else {
      res.redirect('application-market-area');
    }
  } else {
    res.redirect('application-market-area');
  }
})

// application-changes

router.post('/application-changes', function (req, res) {  
  let applicationChanges = req.session.data.applicationChanges;
  res.redirect('application-market-area');
})




// ----------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXX ----------------- //



module.exports = router
