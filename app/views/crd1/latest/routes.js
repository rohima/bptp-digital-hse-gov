const express = require('express')
const router = express.Router()


// ----------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXX ----------------- //

// ----------------- XXXXXXXXXXXXXXXXXXXXXXXXXXXXX ----------------- //

// ----------------- COMPLETION CERTIFICATE JOURNEY ----------------- //


// start-completion-certificate

router.post('/start-completion-certificate', function (req, res) {
    res.redirect('building-reference');
  
  })

// building-reference
  
router.post('/building-reference', function (req, res) {
  
    let buildingReference = req.session.data.buildingReference;
    res.redirect('application-reference');
  
  })

  // ----------------- VERIFICATION ----------------- //

  // application-reference
  
  router.post('/application-reference', function (req, res) {
  
    let applicationReference = req.session.data.applicationReference;
    res.redirect('confirm-site');
  
  })


// confirm-site
  
  router.post('/confirm-site', function (req, res) {
    let confirmSiteName = req.session.data.confirmSiteName;
    if (confirmSiteName == "no") {
      res.redirect('application-reference');
    } else {
      res.redirect('confirm-email-address');
    }
  
  })

  // confirm-email-address

  router.post('/confirm-email-address', function (req, res) {
  
    let confirmEmailAddress = req.session.data.confirmEmailAddress;
    res.redirect('continue-saved-security');
  
  })

  // continue-saved-security

  router.post('/continue-saved-security', function (req, res) {
  
    let continueSecurityCode = req.session.data.continueSecurityCode;
    res.redirect('manage-application');
  
  })

// manage-application

router.post('/manage-application', function (req, res) {
    let manageApplication = req.session.data.manageApplication;
    res.redirect('manage-application-choose');
  
  })

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

// ----------------- BUILDING DETAILS ----------------- //

// building-name

router.post('/building-name', function (req, res) {
    let changeOfBuildingName = req.session.data.changeOfBuildingName;
    let newBuildingName = req.session.data.newBuildingName;
    res.redirect('building-address-postcode');
  
  })

  // full-address - NOT USED

  router.post('/full-address', function (req, res) {
    let buildingFullAddress = req.session.data.buildingFullAddress;
    if (buildingFullAddress == "No") {
        res.redirect('site-coordinates');
      } else {
        res.redirect('building-address-postcode');
      }
    

  })

  // site-coordinates - NOT USED

  router.post('/site-coordinates', function (req, res) {
    let siteEasting = req.session.data.siteEasting;
    let siteNorthing = req.session.data.siteNorthing;
    res.redirect('building-name');

  })


  // building-address-postcode

  router.post('/building-address-postcode', function (req, res) {
    let buildingPostcode = req.session.data.buildingPostcode;
    let buildingNameNumber = req.session.data.buildingNameNumber;
    res.redirect('building-address-choose');

  })

  // building-address-choose

  router.post('/building-address-choose', function (req, res) {
    let buildingAddressSelect = req.session.data.buildingAddressSelect;
    res.redirect('building-confirm-address');

  })
  
  // building-confirm-address
  
  router.post('/building-confirm-address', function (req, res) {
    let buildingAddressSelect = req.session.data.buildingAddressSelect;
    res.redirect('building-details-check-answers');

  })

  // building-details-check-answers

  router.post('/building-details-check-answers', function (req, res) {
    let buildingAddressSelect = req.session.data.buildingAddressSelect;
    res.redirect('describe-completed-work');

  })


// ----------------- COMPLETED WORK ----------------- //

// new-existing-hrb - NOT USED

router.post('/new-existing-hrb', function (req, res) {
    let routeHRB = req.session.data.routeHRB;
    if (routeHRB == "Existing HRB") {
        res.redirect('is-high-rise-residential');
      } else {
        res.redirect('describe-completed-work');
      }

  })

// ----------------- NEW HRB ----------------- //

// describe-completed-work

router.post('/describe-completed-work', function (req, res) {
    let describeCompletedWork = req.session.data.describeCompletedWork;
    res.redirect('completion-date');
    
    })

    // completion-date

router.post('/completion-date', function (req, res) {
  let completionDate = req.session.data.completionDate;
  let fullOrPartial = req.session.data.fullOrPartial;
    if (fullOrPartial == "Partial") {
      res.redirect('describe-remaining-work');
    } else {
      res.redirect('number-of-floors');
    }
  
  })

// describe-remaining-work

router.post('/describe-remaining-work', function (req, res) {
    let describeRemainingWork = req.session.data.describeRemainingWork;
    res.redirect('upload-partial-occupation-plan');
    
    })

// upload-partial-occupation-plan

router.post('/upload-partial-occupation-plan', function (req, res) {
    let uploadPartialOccupationPlan = req.session.data.uploadPartialOccupationPlan;
    res.redirect('number-of-floors');
    
    })

// upload-partial-occupation-statement - NOT USED

router.post('/upload-partial-occupation-statement', function (req, res) {
  let uploadPartialOccupationStatement = req.session.data.uploadPartialOccupationStatement;
  res.redirect('number-of-floors');
  
  })
  
// number-of-floors

router.post('/number-of-floors', function (req, res) {
    let completionFloors = req.session.data.completionFloors;
    res.redirect('height');
    
    })

// height

router.post('/height', function (req, res) {
    let completionHeight = req.session.data.completionHeight;
    res.redirect('residential-units');
    
    })

// residential-units

router.post('/residential-units', function (req, res) {
    let residentialUnits = req.session.data.residentialUnits;
    res.redirect('non-residential-units');
    
    })

// non-residential-units

router.post('/non-residential-units', function (req, res) {
    let nonResidentialUnits = req.session.data.nonResidentialUnits;
    res.redirect('intended-use');
    
    })

// intended-use

router.post('/intended-use', function (req, res) {
    let intendedUse = req.session.data.intendedUse;
    let intendedUseDescription = req.session.data.intendedUseDescription;
    res.redirect('completed-work-check-answers');
    
    })

// completed-work-check-answers

router.post('/completed-work-check-answers', function (req, res) {
    let completedCheckAnswers = req.session.data.completedCheckAnswers;
    res.redirect('constructing-drain');
    
    })



// ----------------- EXISTING HRB ----------------- //

// is-high-rise-residential - NOT USED

router.post('/is-high-rise-residential', function (req, res) {
    let intendedUse = req.session.data.intendedUse;
    res.redirect('work-complete-abc');
    
    })

// work-complete-abc - NOT USED

router.post('/is-high-rise-residential', function (req, res) {
    let intendedUse = req.session.data.intendedUse;
    res.redirect('work-complete-abc');
    
    })


// ----------------- DRAINS, SEWERS AND LOCAL ENACTMENTS ----------------- //

// constructing-drain

router.post('/constructing-drain', function (req, res) {
    let completionConstructingDrain = req.session.data.completionConstructingDrain;
    res.redirect('location-drain');
  
  })
  
  // location-drain
  
  router.post('/location-drain', function (req, res) {
    let completionLocationDrain = req.session.data.completionLocationDrain;
    res.redirect('drainage-precaution');
  
  })
  
  // drainage-precaution
  
  router.post('/drainage-precaution', function (req, res) {
    let drainPrecautionHrb = req.session.data.drainPrecautionHrb;
    res.redirect('details-building-drainage');
  
  })
  
  // details-building-drainage
  
  router.post('/details-building-drainage', function (req, res) {
    let drainPrecautionDetailsHrb = req.session.data.drainPrecautionDetailsHrb;
    res.redirect('details-building-enactment');
  
  })
  
  // details-building-enactment
  
  router.post('/details-building-enactment', function (req, res) {
    let enactmentDetailsHrb = req.session.data.enactmentDetailsHrb;
    res.redirect('drains-sewers-enactments-check-answers');
  
  })
  
  // drains-sewers-enactments-check-answers
  
  router.post('/drains-sewers-enactments-check-answers', function (req, res) {
    let completionDrainsCheckAnswers = req.session.data.completionDrainsCheckAnswers;
      res.redirect('upload-site-location-plan');
  
  })


// ----------------- DOCUMENTS ----------------- //

// upload-site-location-plan

router.post('/upload-site-location-plan', function (req, res) {
    let uploadSiteLocationPlan = req.session.data.uploadSiteLocationPlan;
    res.redirect('upload-drawings-and-plans');
  
})

// upload-drawings-and-plans

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


// upload-construction-control-plan

router.post('/upload-construction-control-plan', function (req, res) {
    let uploadConstructionControlPlan = req.session.data.uploadConstructionControlPlan;
    res.redirect('upload-mandatory-occurence-plan');
  
})

// upload-mandatory-occurence-plan

router.post('/upload-mandatory-occurence-plan', function (req, res) {
    let uploadMandatoryOccurence = req.session.data.uploadMandatoryOccurence;
    res.redirect('upload-regulations-compliance-statement');
  
})

// upload-regulations-compliance-statement

router.post('/upload-regulations-compliance-statement', function (req, res) {
    let uploadRegComplianceStatement = req.session.data.uploadRegComplianceStatement;
    res.redirect('upload-fire-and-emergency');
  
})

// upload-fire-and-emergency

router.post('/upload-fire-and-emergency', function (req, res) {
    let uploadFireAndEmergency = req.session.data.uploadFireAndEmergency;
    res.redirect('upload-change-control-plan');
  
})

// upload-change-control-plan

router.post('/upload-change-control-plan', function (req, res) {
    let uploadChangeControlPlan = req.session.data.uploadChangeControlPlan;
    let fullOrPartial = req.session.data.fullOrPartial;
    if (fullOrPartial == "Partial") {
      res.redirect('upload-partial-completion-strategy');
    } else {
      res.redirect('upload-change-control-log');
    }
   
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
