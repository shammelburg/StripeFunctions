const getCustomersByPlan = require('../services/get-customers-by-plan')

module.exports = async function(context, req) {
    const subscriptions = await getCustomersByPlan('plan_GkzYRMYKMF69g3')

    context.res.json(subscriptions)
};