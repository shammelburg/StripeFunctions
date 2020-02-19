const stripe = require('../stripe')

module.exports = async function(subscriptionId, planId) {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    let update = stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: false,
        items: [{
            id: subscription.items.data[0].id,
            plan: planId,
        }]
    });

    return update
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