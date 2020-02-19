const stripe = require('../stripe')

module.exports = async function(payment_method, customerId) {
    const customer = await stripe.customers.update(
        customerId, {
            invoice_settings: {
                default_payment_method: payment_method,
            },
        }
    );

    return customer
}

// Returns
// {
//     "id": "cus_4fdAW5ftNQow1a",
//     "object": "customer",
//     ...
//     "invoice_settings": {
//       ...
//       "default_payment_method": "pm_1FYeznClCIKljWvssSbEXRww",
//       ...
//     },
//     ...
//   }