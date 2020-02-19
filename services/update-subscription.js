const stripe = require('../stripe')

module.exports = async function(currentSubscriptionId, planId) {
    const subscription = await stripe.subscriptions.retrieve(currentSubscriptionId);

    let update = stripe.subscriptions.update(currentSubscriptionId, {
        cancel_at_period_end: false,
        items: [{
            id: subscription.items.data[0].id,
            plan: planId,
        }]
    });

    return update
}

// Assuming a customer is currently subscribed to the standard-monthly plan at $10 per month, the following code switches the customer to the pro-monthly plan (planId) at $30/month: