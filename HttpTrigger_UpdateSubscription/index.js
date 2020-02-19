const updateSubscription = require('../services/update-subscription')

module.exports = async function(context, req) {

    const updateResult = await updateSubscription('sub_GlNI86In5AfJgs', 'plan_GkzYRMYKMF69g3')

    context.res.json({
        status: 200,
        updateResult
    });
};