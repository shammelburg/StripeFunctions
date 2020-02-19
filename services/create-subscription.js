const stripe = require('../stripe')

module.exports = async function(customer, plan) {
    const subscription = await stripe.subscriptions.create({
        customer: customer.id, // store this in own ****DB****
        items: plan,
        expand: ["latest_invoice.payment_intent"]
            // percent_off
            // coupon
            // billing_cycle_anchor
    })

    return subscription
}