//DOCUMENTION
//This experiment is an activor for: https://www.optimizely.com/edit?experiment_id=593751629
//It works by declaring a global JavaScript variable in the global JavaScript which causes the native JS code to activate the experiment. Code in this PR: https://github.com/optimizely/optimizely/pull/1425
//To test this experiment, the activator experiment is set to look for the following cookie:
//document.cookie = "anonymous_wall_experiment=1; expires=0; path=/";