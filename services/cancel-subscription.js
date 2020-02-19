const stripe = require('../stripe')

module.exports = async function(subscriptionId) {
    return stripe.subscriptions.del(subscriptionId);
}