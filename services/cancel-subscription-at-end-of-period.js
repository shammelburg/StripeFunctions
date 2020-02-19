const stripe = require('../stripe')

module.exports = async function(subscriptionId) {
    return stripe.subscriptions.update(subscriptionId, { cancel_at_period_end: true });
}