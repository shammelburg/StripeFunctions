const cancelSubscriptionAtEndOfPeriod = require('../services/cancel-subscription-at-end-of-period')

module.exports = async function(context, req) {
    context.res.json({ response: await cancelSubscriptionAtEndOfPeriod('sub_GlNI86In5AfJgs') })
};