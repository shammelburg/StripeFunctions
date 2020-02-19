const stripe = require('../stripe')

module.exports = async function(context, payment_method, customerId) {
    let attached = stripe.paymentMethods.attach(
        payment_method, { customer: customerId },
        function(err, payment_method) {
            // asynchronously called
            context.log(payment_method, err)
        }
    );

    return attached
}

// Returns
// {
//     "id": "pm_1FYeznClCIKljWvssSbEXRww",
//     "object": "payment_method",
//     ...
//     "customer": "cus_4fdAW5ftNQow1a"
//     ...
//   }