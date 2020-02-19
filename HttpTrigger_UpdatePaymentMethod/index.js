const attachPaymentMethod = require('../services/attach-payment-method')
const updateCustomerPaymentMethod = require('../services/update-customer-payment-method')
const reAttemptPayment = require('../services/re-attempt-payment')

module.exports = async function(context, req) {

    const customerId = 'cus_GlO0Qb0OeFGGeB'
    const attachPaymentMethodResult = await attachPaymentMethod(context, req.body.payment_method, customerId)
    const updatePaymentMethodResult = await updateCustomerPaymentMethod(req.body.payment_method, customerId)
    const reAttemptPaymentResult = await reAttemptPayment('in_1GDrEpGqJlx8u1zUh764JbCJ')

    context.res.json({
        status: 200,
        attachPaymentMethodResult,
        updatePaymentMethodResult,
        reAttemptPaymentResult
    });
};