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
router.use('/crd1-administrative', require('./views/crd1-administrative/routes'));

router.use('/crd1-claim-label', require('./views/crd1-claim-label/routes'));
router.use('/crd1-data', require('./views/crd1-data/routes'));
router.use('/crd1-formula', require('./views/crd1-formula/routes'));
router.use('/crd1-label', require('./views/crd1-label/routes'));

router.use('/crd1-packaging', require('./views/crd1-packaging/routes'));
router.use('/crd1-use', require('./views/crd1-use/routes'));

// Other journey
router.use('/crd2', require('./views/crd2/routes'));
router.use('/crd3', require('./views/crd3/routes'));
router.use('/crd8', require('./views/crd8/routes'));
router.use('/crd8-mvp', require('./views/crd8-mvp/routes'));
router.use('/crd9', require('./views/crd9/routes'));
router.use('/crd9-mvp', require('./views/crd9-mvp/routes'));
router.use('/crdr', require('./views/crdr/routes'));
router.use('/crdr-mvp', require('./views/crdr-mvp/routes'));
router.use('/crdw', require('./views/crdw/routes'));
router.use('/crdmrl', require('./views/crdmrl/routes'));
router.use('/crdmrl-mvp', require('./views/crdmrl-mvp/routes'));

// Add your routes here
