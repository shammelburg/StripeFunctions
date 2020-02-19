const stripe = require('../stripe')

module.exports = async function(payment_method, email) {
    const customer = await stripe.customers.create({
        payment_method: payment_method,
        email: email,
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });

    return customer
}