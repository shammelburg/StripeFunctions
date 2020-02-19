const stripe = require('../stripe')

module.exports = async function(invoiceId) {
    const invoice = await stripe.invoices.pay(invoiceId, {
        expand: ['payment_intent'],
    });

    return invoice
}

// Returns
// {
//     "id": "sub_1ELI8bClCIKljWvsvK36TXlC",
//     "object": "subscription",
//     "status": "incomplete",
//     ...
//     "latest_invoice": {
//       "id": "in_EmGqfJMYy3Nt9M",
//       "status": "open",
//       ...
//       "payment_intent": {
//         "status": "requires_action",
//         "client_secret": "pi_91_secret_W9",
//         "next_action": {
//           "type": "use_stripe_sdk",
//           ...
//         },
//         ...
//       }
//     }
//   }