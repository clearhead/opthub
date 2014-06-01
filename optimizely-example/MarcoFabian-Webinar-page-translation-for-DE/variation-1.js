$(".grid6 > .a-center").html("Wir haben das Webinar auch auf Deutsch!");
$(".grid6 > h5").replaceWith("<h5>Klicken Sie hier für die Anmeldung am 45-minütigen Webinar auf Deutsch</h5>");
$("h3.blue").html("3 großartige Gründe für dieses Webinar");
$(".ordered-rounded-numbers > li:eq(0)").html("Das Webinar ist eine personalisierte Demo, die zeigt wie man erste Tests erstellt bis hin zu wie man die Ergebnisse interpretiert. Natürlich erklären wir Ihnen alle wichtigen Optimizely Funktionen.");
$(".ordered-rounded-numbers > li:eq(1)").html("Alle Fragen zu Optimizely werden Ihnen während der Demo von einem Optimizely Experten beantwortet.");
$(".ordered-rounded-numbers > li:eq(2)").html("Sie werden Ihre Websiteoptimierung beschleunigen und den sofortigen Effekt von A/B Tests mit Optimizely auf Ihre Website erkennen.&nbsp;");
$(".page-heading").html("Live Optimizely Webinar");
//$(".grid6").css({"width":"390px"});
//$(".dates-container .grid8").css({"margin":"0 5px 0 45px"});
//$(".dates-container .grid8").css({"width":"450px"});
//$(".grid8 > .a-center").css({"padding":"0px 10px 0 0"});
//$(".grid8 > .a-center").replaceWith("<h4 class=\"a-center\" style=\"padding: 0px 10px 0px 0px;\">Every Thursday at 11 <span class=\"small-caps\">AM</span> PST <span class=\"small-caps\">(English)</span></h4>");
$(".dates-container .grid8").css('display', 'none'); // remove english webinars
$(".ordered-rounded-numbers").css({"margin-bottom":"0px"});

// Green Button
$(".grid6").replaceWith("<div class=\"grid6 offset1 signup-blurb\" style=\"width: 390px;\"><h4 class=\"a-center\">Erfahren Sie alles über Optimizely in unserem deutschen Webinar.</h4><h5>Klicken Sie hier für die Teilnahme am 45-minütigen live Webinar auf Deutsch.</h5>\n<a href=\"http://pages.optimizely.com/IntlWebinars_GeneralLP.html\" class=\"primary-button small\">Melden Sie sich für das Webinar an</a><br><br>Bevorzugen Sie das Webinar auf Englisch? <a href=\"https://www.optimizely.com/resources/live-demo-webinar\">Hier geht es zum Webinar auf Englisch.</a></div>");
$(".grid6 > .primary-button").css({"display":"inline-block", "margin-top":"10px"});
$(".grid6").css({"text-align":"center", "margin-top":"55px", "margin-left":"50px", "width":"100%"});
$(".dates-container > .grids-container") 
//tmp