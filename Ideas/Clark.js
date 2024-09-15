e = campaignTrail_temp;

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#1757ab";

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#f5e6d8";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#b51a00";

            document.getElementById("header").src = "https://i.imgur.com/9IIOZn3.jpeg";

            document.body.background = "https://i.imgur.com/Gn1anif.jpeg";

            e.election_json = [{"model":"campaign_trail.election","pk":9,"fields":{"year":2000,"summary":"<p>The 2004 election is now upon the nation. The usual issues will ring across the newswaves, talk of war overseas and failure on the homefront. The fallout from the 9/11 attacks continue to send shockwaves throughout the political climate.</p><p><ul><li>Incumbent President George W Bush will have to defend the increasingly unpopular war in Iraq and his stalled domestic agenda.<br></li><li>Democratic challenger, former general Wesley Clark, will have to establish himself to an American Public unfamiliar with him and subsequently his vision for America.<br></li></p><p></p>","image_url":"https://i.imgur.com/PY76cfe.png","winning_electoral_vote_number":270,"advisor_url":"","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":1,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":9,"year":2000,"is_premium":0,"display_year":"2004"}];e.credits = "Ohas";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":25,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];e.candidate_json = [{"model":"campaign_trail.candidate","pk":1001,"fields":{"first_name":"Wesley","last_name":" Clark","election":9,"party":"The Democrats","state":"Arkansas","priority":1,"description":"Wesley Clark is a most unusual man to enter politics. A former general, Clark would would first see service in the Vietnam War, kicking of a military career that would lead him to becoming Supreme Allied Commander of NATO forces during the 1999 air war in Kosovo. <br><br>Clark has emerged as an outspoken critic of the Bush administration's invasion of Iraq, criticisms that are lent more credence do to his military background. Despite that, Clark has  also established a repuation as a quasi hawk, alienating some withen the party. Clark is not a politician, and is relatively obscure on the national stage. Subsequently, despite having close connections with the Clintons, due to his experiences working with them during the war in Kosovo, he has the thinest of connections with the party apparatus, even at one point floating the possibility of running as a Republican.<br><br> Couple this with Clarks propensity towards making various gaffes, and you've got a recipe for an uphill battle.","color_hex":"#3a88fe","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/0PkBEQi.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1002,"fields":{"first_name":"George","last_name":"Bush","election":9,"party":"Republicans","state":"Texas","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#ff6251","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1003,"fields":{"first_name":"Ralph","last_name":"Nader","election":9,"party":"Greens","state":"Hell","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}}];e.running_mate_json = [];


bannerArr=0
bannerlist=["https://i.imgur.com/9IIOZn3.jpeg","https://i.imgur.com/TBCgvYr.jpeg", "https://i.imgur.com/nIcYri9.jpeg"]
var changeBanner = () =>
{
bannerArr+=1
document.getElementById("header").src=bannerlist[bannerArr % bannerlist.length]
}
document.getElementById("header").src=bannerlist[0]
footer = $(".footer")[0]
var button = document.createElement("button") // <button onclick="changeBanner()" style="font-weight: bold; height:19.49px; position: static; right: 770px; top: 0px;">Change banner</button>
button.style = `font-weight: bold; height:19.49px; position: static; right: 770px; top: 0px;`
button.innerHTML = "Change banner"
footer.insertBefore(button, footer.firstChild);
button.onclick = changeBanner;
