e = campaignTrail_temp;

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#00f900";

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#3a88fe";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#ffffff";

            document.getElementById("header").src = "https://i.imgur.com/eEMF3Dn.jpeg";

            document.body.background = "https://i.imgur.com/HgDeDlQ.jpeg";

e.election_json = [{"model":"campaign_trail.election","pk":9,"fields":{"year":2000,"summary":"The 2004 election is now upon the nation. Chock full of the usual gripes that occupy the newswaves, this year is bound to be filled with talk of war overseas and failures on the home front.<br><br>President Bush will have to defend his last four years of governance, with the added responsibility of fighting off a challenger from his flank.<br><br>Enter John Sidney McCain the third, a maverick, no nonsense man, fed up with the president's KowTowing to the Religious Right. Switching his allegiance from Red to Blue, McCain has taken the Democrats by storm.<br><br> McCains not changed, he still detests the left's spending and peace hawk nature. They in turn wont stand for him, instead throwing their weight behind Vermont senator Bernie Sanders.<br>","image_url":"https://i.imgur.com/DmrQUgT.jpeg","winning_electoral_vote_number":270,"advisor_url":"","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":1,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":9,"year":2000,"is_premium":0,"display_year":"2004 Sonder"}];e.credits = "Ohas";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":25,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];e.candidate_json = [{"model":"campaign_trail.candidate","pk":1001,"fields":{"first_name":"John","last_name":"McCain","election":9,"party":"The Democrats","state":"Arizona","priority":1,"description":"Nobody wanted this. A Maverick, yes, but a traitor? Such is the story of John McCain, a man who never lets the party line get in the way of what he believes. A war hero, a maverick, and now the Democratic Nominee for President.<br><br>It all started in 2000, Bush ran a nasty disgusting campaign in South Carolina, one that revealed his true colors to you. After a reluctant endorsement, and Jebs machinations, he took office, disaster ensued. Failure at home with tax cuts, failure abroad in Iraq, licking the boot heels of Robertson and Fallwell. You could never stand for it.<br><br>So you didn't. You became an Independent, and now a Democrat. While you've got some allies in the party, serving in congress for as long as you have will do that, many are still skeptical of your “flip flop”. For there part the Republicans have gone full traitor.Such is life for John Sidney McCain the third  <br><br><br>","color_hex":"#3a88fe","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/5ktd4Kx.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}}];e.running_mate_json = [];

styling = document.createElement("style");
document.head.appendChild(styling);          
styling.innerHTML = `
body {
background-size: cover;
}
`


document.styleSheets[0].insertRule("button{font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans, Geneva, Verdana, sans-serif !important; font-size: 92.5% !important; border-radius:100vw !important; border: 1px solid #5d5d5d !important; background-repeat: no-repeat !important; background-position: top, top center, top left, top right, center !important; padding: 0.1em 1em !important; background-image: linear-gradient(hsl(0 0% 100% / 0.85), transparent 9px), linear-gradient(hsl(0 0% 100% / 0.25) 9px, transparent 9px), radial-gradient( circle at 4px 4px, hsl(0 0% 100% / 0.25) 5px, transparent 5px ), radial-gradient( circle at -1px 4px, hsl(0 0% 100% / 0.25) 5px, transparent 5px ), linear-gradient(#ccc, #fff);background-size: 100%, calc(100% - 5px), 2.5px 10px, 2.5px 10px, 100% !important;cursor:pointer;box-shadow:rgba(0, 0, 0, 0.5) 0px 1px 1px;}", 0);
//document.styleSheets[0].insertRule("button:hover{background-image: linear-gradient(hsl(0 0% 100% / 0.85), transparent 10px), linear-gradient(hsl(0 0% 100% / 0.25) 10px, transparent 10px), radial-gradient( circle at 3px 5px, hsl(0 0% 100% / 0.25) 5px, transparent 5px ), radial-gradient( circle at -1px 5px, hsl(0 0% 100% / 0.25) 5px, transparent 5px ), linear-gradient(#0342b9, #81DBFF);}");
document.styleSheets[0].insertRule("button:hover{background-image: linear-gradient(hsl(0 0% 100% / 0.85), transparent 8px), linear-gradient(hsl(0 0% 100% / 0.25) 9px, transparent 9px), radial-gradient( circle at 4px 4px, hsl(0 0% 100% / 0.25) 5px, transparent 5px ), radial-gradient( circle at -1px 4px, hsl(0 0% 100% / 0.25) 5px, transparent 5px ), linear-gradient(#999, #fff);}", 0);
document.styleSheets[0].insertRule("button:active{background-image: linear-gradient(hsl(0 0% 100% / 0.85), transparent 10px), linear-gradient(hsl(0 0% 100% / 0.25) 9px, transparent 9px), radial-gradient( circle at 4px 4px, hsl(0 0% 100% / 0.25) 5px, transparent 5px ), radial-gradient( circle at -1px 4px, hsl(0 0% 100% / 0.25) 5px, transparent 5px ), linear-gradient(#0342b9, #AFF9FF) !important;}", 0);

document.getElementById("bottomBar").style.display = "";
document.getElementById("bottomBar").style.backgroundColor = "#fff";
document.getElementById("bottomBar").style.backgroundSize = "0%";
document.getElementById("bottomBar").style.borderStyle = "none";
document.getElementById("bottomBar").style.padding = "0";
document.getElementById("bottomBar").style.height = "60px";

banners = ["https://i.imgur.com/SJLSPbt.jpeg","https://i.imgur.com/Wtt2uP4.jpeg","https://i.imgur.com/bXYb6Fm.jpeg","https://i.imgur.com/vEFnA0b.gif",]
bannerad = banners[Math.floor((Math.random() * banners.length))]
document.getElementById("bottomBar").innerHTML = `<img src='`+bannerad+`'/>`

// Define a list of banner URLs
