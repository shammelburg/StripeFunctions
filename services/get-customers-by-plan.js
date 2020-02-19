const stripe = require('../stripe')

module.exports = async function(plan) {
    const subscriptions = await stripe.subscriptions.list({
        plan: plan,
    });

    return subscriptions
}