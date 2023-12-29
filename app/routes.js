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
router.use('/crd1-change', require('./views/crd1-change/routes'));

// CRD1 change journeys
router.use('/crd1-active', require('./views/crd1-active/routes'));
// router.use('/crd1-administrative', require('./views/crd1-administrative/routes'));
// router.use('/crd1-claim-label', require('./views/crd1-claim-label/routes'));
router.use('/crd1-data', require('./views/crd1-data/routes'));
router.use('/crd1-formula', require('./views/crd1-formula/routes'));
router.use('/crd1-label', require('./views/crd1-label/routes'));
router.use('/crd1-mrl', require('./views/crd1-mrl/routes'));
router.use('/crd1-packaging', require('./views/crd1-packaging/routes'));
// router.use('/crd1-use', require('./views/crd1-use/routes'));

// Other journey
router.use('/crd3', require('./views/crd3/routes'));
router.use('/crd8', require('./views/crd8/routes'));

// Add your routes here
