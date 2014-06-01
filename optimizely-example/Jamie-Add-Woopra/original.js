(function(optimizely, woopra) {
    var data,
        state,
        experiments,
        experimentId,
        i;
 
    if (optimizely && optimizely.data && woopra) {
        // assume if data is set, that we will have a state
        state = optimizely.data.state;
 
        for (i = 0; i < state.activeExperiments.length; i++) {
            experimentId = state.activeExperiments[i];
 
            woopra.track('ab_test', {
                url: window.location.href,
                experiment_id: experimentId,
                experiment_name: optimizely.data.experiments[experimentId].name,
                variation_id: state.variationIdsMap[experimentId],
                variation_name: state.variationNamesMap[experimentId]
            });
        }
    }
})(window.optimizely, window.woopra)
  
  
window.setTimeout(function() {

    window.userData = {}; // Use this to fix the null problem

    var firstName = window.optly.page.account.firstName;
    var lastName = window.optly.page.account.lastName;
    var email = window.optly.account["email"];
    var company = window.optly.page.account.company;
    var plan = window.optly.account["subscription_plan"];
    var accountID = window.optly.account["accountId"];

    var isSignedIn = window.optly.account['isSignedIn'];
    var name = '';

    if(firstName) {name += firstName;}
    if(lastName) {name += ' ' + lastName;}

    if(name) {userData.name = name;}
    if(email) {userData.email = email;}
    if(company) {userData.company = company;}
    if(plan) {userData.plan = plan;}
    if(accountID) {userData.accountid = accountID.toString();}

    if(window.optly.page.header.viewModel.isAdmin()) {
        name = "GAE_Admin";
        email = "GAE_Admin " + email;
    }

    if(isSignedIn) {
        window.woopra.identify(userData);
        window.woopra.track();
    }
}, 3000);