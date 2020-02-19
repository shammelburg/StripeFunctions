const createCustomer = require('../services/create-customer')
const createSubscription = require('../services/create-subscription')

module.exports = async function(context, req) {

    // This creates a new Customer and attaches the PaymentMethod in one API call.
    const customer = await createCustomer(req.body.payment_method, req.body.email)

    // This creates the subscription for the customer
    const subscription = await createSubscription(customer, [{ plan: "plan_GkzYRMYKMF69g3" }])

    context.res.json({
        status: 200,
        subscription,
        customer
    });
};