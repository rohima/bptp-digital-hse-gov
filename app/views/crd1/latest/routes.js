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
  res.redirect('application-type-of-organisation');

})

// application-type-of-organisation

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
  res.redirect('application-email');

})

// application-email

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

// application-market-area

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
  res.redirect('product-mrl-currently-in-force');

})

// product-mrl-currently-in-force

router.post('/product-mrl-currently-in-force', function (req, res) {
  
  let productMrlInForce = req.session.data.productMrlInForce;
  res.redirect('product-mrl-change');

})

// product-mrl-currently-in-force-add-another

// product-check-answers





// ----------------- LOCATION ----------------- //

// ----------------- DOCUMENTS ----------------- //

// ----------------- DECLARATIONS ----------------- //

// ----------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXX ----------------- //

// ----------------- COMPLETION CERTIFICATE JOURNEY ----------------- //




//  manage-application-choose

router.post('/manage-application-choose', function (req, res) {
    let newOrExistingCompCert = req.session.data.newOrExistingCompCert;
    if (newOrExistingCompCert == "Continue existing completion certificate") {
        res.redirect('manage-subsite-applications');
      } else {
        res.redirect('full-or-partial');
      }
  
  })

// full-or-partial

router.post('/full-or-partial', function (req, res) {
    let fullOrPartial = req.session.data.fullOrPartial;
    res.redirect('which-stage');
  
  })

// which-building - NOT USED

router.post('/which-building', function (req, res) {
    let whichBuilding = req.session.data.whichBuilding;
    res.redirect('which-stage');
  
  })

// which-stage

router.post('/which-stage', function (req, res) {
    let whichStage = req.session.data.whichStage;
    res.redirect('task-list');
  
  })

// task-list

router.post('/task-list', function (req, res) {
    let taskList = req.session.data.taskList;
    res.redirect('building-name');
  
  })




// ----------------- MULTI DOCUMENT START ----------------- //

// upload-drawings-and-plans-1

router.post('/upload-drawings-and-plans', function (req, res) {
  let uploadDrawingsPlans = req.session.data.uploadDrawingsPlans;
  res.redirect('work-a-or-b');

})

// work-a-or-b
router.post('/work-a-or-b', function (req, res) {
let workAOrB = req.session.data.workAOrB;
if (workAOrB == "Category B") {
    res.redirect('documents-impacted');
  } else {
    res.redirect('upload-construction-control-plan');
  }

})


// upload-construction-control-plan-1

router.post('/upload-construction-control-plan', function (req, res) {
  let uploadConstructionControlPlan = req.session.data.uploadConstructionControlPlan;
  res.redirect('upload-mandatory-occurence-plan');

})

// upload-mandatory-occurence-plan-1

router.post('/upload-mandatory-occurence-plan', function (req, res) {
  let uploadMandatoryOccurence = req.session.data.uploadMandatoryOccurence;
  res.redirect('upload-regulations-compliance-statement');

})

// upload-regulations-compliance-statement-1

router.post('/upload-regulations-compliance-statement', function (req, res) {
  let uploadRegComplianceStatement = req.session.data.uploadRegComplianceStatement;
  res.redirect('upload-fire-and-emergency');

})

// upload-fire-and-emergency-1

router.post('/upload-fire-and-emergency', function (req, res) {
  let uploadFireAndEmergency = req.session.data.uploadFireAndEmergency;
  res.redirect('upload-change-control-plan');

})

// upload-change-control-plan-1

router.post('/upload-change-control-plan', function (req, res) {
  let uploadChangeControlPlan = req.session.data.uploadChangeControlPlan;
  let fullOrPartial = req.session.data.fullOrPartial;
  if (fullOrPartial == "Partial") {
    res.redirect('upload-partial-completion-strategy');
  } else {
    res.redirect('upload-change-control-log');
  }
 
})

// ----------------- MULTI DOCUMENT END ----------------- //


// upload-partial-completion-strategy
router.post('/upload-partial-completion-strategy', function (req, res) {
  let uploadPartialCompletionStrategy = req.session.data.uploadPartialCompletionStrategy;
  res.redirect('upload-change-control-log');

})


// upload-fire-compliance

router.post('/upload-fire-compliance', function (req, res) {
    let uploadFireCompliance = req.session.data.uploadFireCompliance;
    res.redirect('documents-impacted');
  
})

// documents-impacted

router.post('/documents-impacted', function (req, res) {
  let documentsImpacted = req.session.data.documentsImpacted;
  res.redirect('upload-change-control-plan');

})

// upload-change-control-log

router.post('/upload-change-control-log', function (req, res) {
    let uploadChangeControlLog = req.session.data.uploadChangeControlLog;
    res.redirect('documents-check-answers');
  
})

// documents-check-answers

router.post('/documents-check-answers', function (req, res) {
    let documentsCheckAnswers = req.session.data.documentsCheckAnswers;
    res.redirect('upload-signed-declaration-pd');
  
})


// ----------------- DUTY HOLDERS ----------------- //

// ----------------- CLIENT DETAILS ----------------- //

// client-organisation-type - NOT USED

router.post('/client-organisation-type', function (req, res) {
  let clientOrganisationType = req.session.data.clientOrganisationType;
  let clientOrganisationTypeDetails = req.session.data.clientOrganisationTypeDetails;
  res.redirect('client-company');

})

// client-company - NOT USED

router.post('/client-company', function (req, res) {
  let clientCompanyName = req.session.data.clientCompanyName;
  res.redirect('client-address-postcode');

})

// client-address-postcode - NOT USED

router.post('/client-address-postcode', function (req, res) {
  let clientAddressPostcode = req.session.data.clientAddressPostcode;
  res.redirect('client-address-list');

})

// client-address-list - NOT USED

router.post('/client-address-list', function (req, res) {
  let clientAddressList = req.session.data.clientAddressList;
  res.redirect('client-address-confirm');

})

// client-address-confirm - NOT USED

router.post('/client-address-confirm', function (req, res) {
  let clientAddressConfirm = req.session.data.clientAddressConfirm;
  res.redirect('named-contact-client-name');

})

// named-contact-client-name - NOT USED

router.post('/named-contact-client-name', function (req, res) {
  let clientNamedContactLastName = req.session.data.clientNamedContactLastName;
  let clientNamedContactFirstName = req.session.data.clientNamedContactFirstName;
  res.redirect('named-contact-client-phone');

})

// named-contact-client-phone - NOT USED 

router.post('/named-contact-client-phone', function (req, res) {
  let clientNamedPhone = req.session.data.clientNamedPhone;
  res.redirect('named-contact-client-email-original');

})

// named-contact-client-email-original - NOT USED

router.post('/named-contact-client-email-original', function (req, res) {
  let clientNamedEmail = req.session.data.clientNamedEmail;
  res.redirect('is-correspondence-same');

})

// is-correspondence-same - NOT USED

router.post('/is-correspondence-same', function (req, res) {
  let clientCorrespondenceAddressSame = req.session.data.clientCorrespondenceAddressSame;
  res.redirect('building-confirm-address-named-client');

})

// building-confirm-address-named-client - NOT USED

router.post('/building-confirm-address-named-client', function (req, res) {
  let clientCorrespondenceAddressConfirm = req.session.data.clientCorrespondenceAddressConfirm;
  res.redirect('client-check-answers');

})

// client-check-answers - NOT USED

router.post('/client-check-answers', function (req, res) {
  let clientCheckAnswers = req.session.data.clientCheckAnswers;
  res.redirect('is-client-same-pd');

})

// ----------------- PRINCIPAL DESIGNER DETAILS ----------------- //

// is-client-same-pd - NOT USED

router.post('/is-client-same-pd', function (req, res) {
  let pdSameAsClient = req.session.data.pdSameAsClient;
  res.redirect('principal-designer-check-answers');

})

// principal-designer-check-answers - NOT USED

router.post('/principal-designer-check-answers', function (req, res) {
  let pdCheckAnswers = req.session.data.pdCheckAnswers;
  res.redirect('is-client-same-pc');

})


// ----------------- PRINCIPAL CONTRACTOR DETAILS ----------------- //

// is-client-same-pc - NOT USED

router.post('/is-client-same-pc', function (req, res) {
  let pcSameAsClient = req.session.data.pcSameAsClient;
  res.redirect('principal-contractor-check-answers');

})

// principal-contractor-check-answers - NOT USED

router.post('/principal-contractor-check-answers', function (req, res) {
  let pcCheckAnswers = req.session.data.pcCheckAnswers;
  res.redirect('is-it-client-auth');

})


// ----------------- DECLARATIONS ----------------- //


// upload-signed-declaration-pd

router.post('/upload-signed-declaration-pd', function (req, res) {
  let uploadSignedDecPD = req.session.data.uploadSignedDecPD;
  res.redirect('upload-signed-declaration-pc');

})

// upload-signed-declaration-pc

router.post('/upload-signed-declaration-pc', function (req, res) {
  let uploadSignedDecPC = req.session.data.uploadSignedDecPC;
  res.redirect('upload-signed-declaration-client');

})

// upload-signed-declaration-client

router.post('/upload-signed-declaration-client', function (req, res) {
  let uploadSignedDecClients = req.session.data.uploadSignedDecClients;
  res.redirect('upload-golden-thread');

})

// upload-golden-thread

router.post('/upload-golden-thread', function (req, res) {
  let uploadGoldenThread = req.session.data.uploadGoldenThread;
  res.redirect('declarations-check-answers');

})

// declarations-check-answers

router.post('/declarations-check-answers', function (req, res) {
  let declarationsCheckAnswers = req.session.data.declarationsCheckAnswers;
  res.redirect('is-it-client-auth');

})


// ----------------- PAY YOUR FEE AND SUBMIT YOUR APPLICATION ----------------- //


// is-it-client-auth

router.post('/is-it-client-auth', function (req, res) {
  let actingForClient = req.session.data.actingForClient;
  if (actingForClient == 'No') {
    res.redirect('signed-statement-client');
  } else {
    res.redirect('declaration');
  }

})

// signed-statement-client

router.post('/signed-statement-client', function (req, res) {
  let clientAuthorisation = req.session.data.clientAuthorisation;
  res.redirect('declaration');

})

// declaration

router.post('/declaration', function (req, res) {
  let declaration = req.session.data.declaration;
  res.redirect('type-of-payment');

})



// type-of-payment

router.post('/type-of-payment', function (req, res) {
  let paymentType = req.session.data.paymentType;
  if (paymentType == 'invoice') {
    res.redirect('invoice');
  } else {
    res.redirect('payment');
  }

})

// invoice

router.post('/invoice', function (req, res) {
  let invoice = req.session.data.invoice;
  res.redirect('confirmation-invoice');

})

// invoice-awaiting-payment

router.post('/invoice-awaiting-payment', function (req, res) {
  let invoice = req.session.data.invoice;
  res.redirect('invoice-awaiting-payment');

})

// payment

router.post('/payment', function (req, res) {
  let payment = req.session.data.payment;
  res.redirect('confirmation');

})


// confirmation

router.post('/confirmation', function (req, res) {
  let confirmation = req.session.data.confirmation;
  res.redirect('confirmation');

})

// confirmation-invoice

router.post('/confirmation-invoice', function (req, res) {
  let confirmation = req.session.data.confirmation;
  res.redirect('confirmation-invoice');

})



module.exports = router
