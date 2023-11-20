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
router.use('/crd3', require('./views/crd3/routes'));
router.use('/crd8', require('./views/crd8/routes'));

// Add your routes here
