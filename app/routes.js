//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// console.log ('top level route')

// Specific routes

router.use('/', require('./views/routes'));
router.use('/crd1', require('./views/crd1/routes'));

// Add your routes here
