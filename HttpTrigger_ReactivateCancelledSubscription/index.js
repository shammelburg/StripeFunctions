const reactivateCancelledSubscription = require('../services/re-activate-subscriptions')

module.exports = async function(context, req) {
    context.res.json({ response: await reactivateCancelledSubscription('sub_GlNI86In5AfJgs') })
};