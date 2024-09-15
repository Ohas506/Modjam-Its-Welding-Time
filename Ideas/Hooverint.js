e = campaignTrail_temp;

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#7c2a00";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#831100";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#173373";

$("#game_window")[0].style.borderColor = "#fff4dd" 
nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#fff4dd"

$(".footer a").css({"color":"#fff4dd"});
nct_stuff.themes[nct_stuff.selectedTheme].text_col = "#fff4dd"

let style = document.createElement('style');
style.type = 'text/css';
style.id = 'dynamic-style';

style.innerHTML = `
  .campaign_trail_start_emphasis {
    background-color: #8f332e;
  }
  a:-webkit-any-link {
      color: #431b19;
  }
  .content_single {
    border-color: #431b19;
  }
  .container {
    border: .3em solid #431b19;
  }
  .footer {
  	border-color: #fff4dd;
  }
  .game_header {
  	border-color: #fff4dd;
  }
  .inner_window_front {
  	background-color: #fff4dd;
  	border-color: #fff4dd;
  }
  button {
  	background-color: #fff4dd;
  	border-color: #431b19;
  		border-top-color: #431b19;
  		border-right-color: #431b19;
  		border-bottom-color: #431b19;
  		border-left-color: #431b19;
  	border-style: solid;
  	border-width: 1px;
  }
  select {
  	background-color: #fff4dd;
  }
`;

document.head.appendChild(style);

document.getElementById("header").src = "https://i.imgur.com/UTxa3fZ.jpeg";

document.body.background = "https://live.staticflickr.com/4091/4845184552_e180c2fd9d_b.jpg";

e.election_json = 
[{"model":"campaign_trail.election","pk":11,"fields":{"year":1960,"summary":"In the wake of President Kennedy's assassination, the nation stands bitterly divided over Civil Rights and the Invasion of Vietnam. <br><br>Lyndon Baines Johnson, Kennedys vice president and successor, must stand strong in defending his choice to intervene in Vietnam and his continuation of the late president's Civil Rights initiatives.<br><br>In a shock to the nation, a divided and deadlocked GOP convention has drafted former president, Herbert Hoover, to be the party's nominee. The elderly Hoover will have to establish himself to an American electorate deeply unfamiliar with this relic of the past.<br>","image_url":"https://i.imgur.com/wySFG7X.jpeg","winning_electoral_vote_number":270,"advisor_url":"","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":1,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":11,"year":1960,"is_premium":0,"display_year":"1964"}];e.credits = "Ohas";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":25,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];e.candidate_json = [{"model":"campaign_trail.candidate","pk":1001,"fields":{"first_name":"Herbert","last_name":"Hoover","election":11,"party":"Republican","state":"Iowa","priority":1,"description":"Herbert Clark Hoover. That's a name the nation hasn't heard in a very long time. Those who do remember it associate it with the worst of times. Since leaving office thirty odd years ago you've kept a low profile, making sharp critiques of FDR'S New Deal Policies and developing a friendship with President Truman, under whom you toured war torn Europe directing food aid, the great humanitarians true area of expertise. You've kept a cordial relationship with Kennedy, his assassination leaving you distraught.<br><br>But all of that is in the past now. You've always been eager to prove the New Dealers wrong, show the nation that arch Conservatism is the way, and to vindicate yourself for the History books. Thus you announced your willingness to accept the Republican nomination if offered it, a decision that you quite honestly thought you'd never have to entertain. <br><br>But here you are now. At 90 years of age and in ill health, many have already written you off.<br>","color_hex":"#ff2600","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/Ztz1Yer.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1002,"fields":{"first_name":"John","last_name":"Tower","election":11,"party":"Republican","state":"Texas","priority":1,"description":"There is quite possibly no greater embarrassment to president Johnson than John Tower, the man who stole his former senate seat right out from under him in 1961. Standing as a beacon for the lilly white Republican base that you yourself courted back in 28, Tower has voiced stalwart opponent to the presidents Civil Rights and Great Society programs, making him an icon to the Conservatve Wing of the party.<br><br>Towers views regarding the Great Society fall right in line with your views regarding the New Deal and other such big government democratic proposals. Selecting Tower would likely mean voicing an opposition to Civil Rights legislation, making the South a competitive region for the first time since you faced that Papist Smith, at the cost of alientatinng the Rockefellers and Romneys in the party.<br>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/agE0grt.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"There is quite possibly no greater embarrassment to president Johnson than John Tower, the man who stole his former senate seat right out from under him in 1961. Standing as a beacon for the lilly white Republican base that you yourself courted back in 28, Tower has voiced stalwart opponent to the presidents Civil Rights and Great Society programs, making him an icon to the Conservatve Wing of the party.<br><br>Towers views regarding the Great Society fall right in line with your views regarding the New Deal and other such big government democratic proposals. Selecting Tower would likely mean voicing an opposition to Civil Rights legislation, making the South a competitive region for the first time since you faced that Papist Smith, at the cost of alientatinng the Rockefellers and Romneys in the party.<br>","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}},{"model":"campaign_trail.candidate","pk":1003,"fields":{"first_name":"Perscot","last_name":"Bush","election":11,"party":"Republican","state":"Connecticut","priority":1,"description":"Prescot Sheldon Bush was formerly the senator from Connecticut, retiring last year. A member of the parties moderate to liberal wing, Bush was a strong ally of former President Eisenhower, helping draft legislation for the Interstate Highway system.<br><br>Bush would make for a quizical choice, having retired from politics last year. Despite this, his selection would undoubtedly help you in New England, in the process extending an Olive Branch to the Rockefeller wing of the party. Additionally, Bushs good relationship with the popular Eisenhower could be key to convince him to back you, after you criticized him for failing to roll back the new deal.<br>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/9927Gpm.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"Prescot Sheldon Bush was formerly the senator from Connecticut, retiring last year. A member of the parties moderate to liberal wing, Bush was a strong ally of former President Eisenhower, helping draft legislation for the Interstate Highway system.<br><br>Bush would make for a quizical choice, having retired from politics last year. Despite this, his selection would undoubtedly help you in New England, in the process extending an Olive Branch to the Rockefeller wing of the party. Additionally, Bushs good relationship with the popular Eisenhower could be key to convince him to back you, after you criticized him for failing to roll back the new deal.<br>","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}},{"model":"campaign_trail.candidate","pk":1004,"fields":{"first_name":"Walter H.","last_name":"Judd","election":11,"party":"Republican","state":"Minnesota","priority":1,"description":"Prior to loosing relection last year thanks to democrat redistricting, Representative from Minnesota Walter Judd was one of the most influential members of the Republican Party, giving the keynote speech at Nixon's nomination in 1960. Judd stands as a prominet member of the Interventionist Wing of the pary, making a name for himself as a stalwart anti communist and supporter of Chiang Kai Shek’s Nationalists. In addition to his impressive foreign policy reputuware, Judd has also stood as a vocal advocate for Civil Rights.<br><br>Selecting Judd would mean a departure from your conventional philosophy. Judd is an Interventionist, you were an America Firster, he supports Civil Rights, your a lilly white. Such a difference in beliefs would certainly lead to disagreements, but could also open the door up to cooperation with the Rockfeller wing of the party. Judds foreign policy credentials are a valuable asset, given how important the issue is this election season. Selecting Judd would also mean committing to Civil Rights, giving up on the South entirely. <br>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/4b0btr1.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"Prior to loosing relection last year thanks to democrat redistricting, Representative from Minnesota Walter Judd was one of the most influential members of the Republican Party, giving the keynote speech at Nixon's nomination in 1960. Judd stands as a prominet member of the Interventionist Wing of the pary, making a name for himself as a stalwart anti communist and supporter of Chiang Kai Shek’s Nationalists. In addition to his impressive foreign policy reputuware, Judd has also stood as a vocal advocate for Civil Rights.<br><br>Selecting Judd would mean a departure from your conventional philosophy. Judd is an Interventionist, you were an America Firster, he supports Civil Rights, your a lilly white. Such a difference in beliefs would certainly lead to disagreements, but could also open the door up to cooperation with the Rockfeller wing of the party. Judds foreign policy credentials are a valuable asset, given how important the issue is this election season. Selecting Judd would also mean committing to Civil Rights, giving up on the South entirely. <br>","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}},{"model":"campaign_trail.candidate","pk":1005,"fields":{"first_name":"Gerald","last_name":"Ford","election":11,"party":"Republican","state":"Michigan","priority":1,"description":"The lion of congress, Gerald Ford is a man anyone can get along with. Serving as a representative from Michigan, Ford has made a career out of not offending a soul, in the process standing as the leader of the Congressional GOP. <br><br>Ford's selection would be a non offensive pick, and could help pull the party together after the bruising affair of the primaries. Ford also has considerable connections within the party apparatus, and could potentially mobilize their collective support behind you.<br>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/cRT6oiF.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"The lion of congress, Gerald Ford is a man anyone can get along with. Serving as a representative from Michigan, Ford has made a career out of not offending a soul, in the process standing as the leader of the Congressional GOP. <br><br>Ford's selection would be a non offensive pick, and could help pull the party together after the bruising affair of the primaries. Ford also has considerable connections within the party apparatus, and could potentially mobilize their collective support behind you.<br>","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}}];e.running_mate_json = [{"model":"campaign_trail.running_mate","pk":2001,"fields":{"candidate":1001,"running_mate":1002}},{"model":"campaign_trail.running_mate","pk":2002,"fields":{"candidate":1001,"running_mate":1003}},{"model":"campaign_trail.running_mate","pk":2003,"fields":{"candidate":1001,"running_mate":1004}},{"model":"campaign_trail.running_mate","pk":2004,"fields":{"candidate":1001,"running_mate":1005}}];
styling = document.createElement("style");
document.head.appendChild(styling);          
styling.innerHTML = `
body {
background-size: cover;
}
`



          