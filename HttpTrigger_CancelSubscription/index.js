// By default, the cancellation takes effect immediately. Once a customer’s subscription is canceled, no further invoices are generated for that subscription.

const cancelSubscription = require('../services/cancel-subscription')

module.exports = async function(context, req) {
    context.res.json({ response: await cancelSubscription('sub_GlNI86In5AfJgs') })
};