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
  res.redirect('documents-reference-product-risk-areas');

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
  res.redirect('documents-reference-product-risk-areas');

})








// ----------------- SPECIAL ASSESSMENT AREA ----------------- //


// documents-reference-product-risk-areas

router.post('/documents-reference-product-risk-areas', function (req, res) {  
  let documentsReferenceProductRiskAreas = req.session.data.documentsReferenceProductRiskAreas;
  res.redirect('placeholder-evaluation-report');

})



// ----------------- EVALUATION REPORT ----------------- //

// placeholder-evaluation-report

router.post('/placeholder-evaluation-report', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('product-mrl-needed');
})





// ----------------- MRL ----------------- //

// product-mrl-needed

router.post('/product-mrl-needed', function (req, res) {  
  let productMrlNeeded = req.session.data.productMrlNeeded;

  if (productMrlNeeded == "Yes") {
    res.redirect('product-commodity-code-name');
  } else {
    res.redirect('check-answers');
  }
})

// product-commodity-code-name

router.post('/product-commodity-code-name', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('product-mrl-change');
})

// product-mrl-change

router.post('/product-mrl-change', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('check-answers');
})





// ----------------- PLACEHOLDER PAGE ----------------- //

router.post('/placeholder-page', function (req, res) {  
  let placeholderPage = req.session.data.placeholderPage;
  res.redirect('placeholder-page');

})




// ----------------- CHECK ANSWERS ----------------- //

// check-answers

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
