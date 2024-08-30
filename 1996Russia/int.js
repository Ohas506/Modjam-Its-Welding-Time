e = campaignTrail_temp;

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#e32400";

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#3a88fe";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#ffffff";

            document.getElementById("header").src = "https://i.imgur.com/6lzQdhs.png";

            document.body.background = "https://upload.wikimedia.org/wikipedia/commons/4/4f/Каменные_джунгли.jpg";

            e.election_json = [{"model":"campaign_trail.election","pk":9,"fields":{"year":2000,"summary":"<p>Following the overthrow of the Soviet System, Incumbent President Boris Yeltsin has seen his approval rating plummet as the new Russian state continues to be beset by rampant poverty and corruption. In the face of these challenges Yeltsin has sought to consolidate power for himself through a reformation of the Russian Constitution and a curtailing of the free media<p><ul><li>Gennady Zyuganov is widely expected to win the election, building on gains made by the Communists during the 1995 legislative election cycle.</li><li> In the face of his popularity falling to the low single digits Yeltsin is desperate to find anyway to cling onto power</li></p>","image_url":"https://i.imgur.com/SZfeGnP.png","winning_electoral_vote_number":270,"advisor_url":"https://i.imgur.com/BN5qLyQ.png","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":1,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":9,"year":2000,"is_premium":0,"display_year":"1996"}];e.credits = "Ohas";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":15,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];e.candidate_json = 
            [{"model":"campaign_trail.candidate","pk":78,"fields":{"first_name":"Gennady","last_name":" Zyuganov","election":9,"party":"Communist Party of the Russian Federation","state":" Oryol Oblast","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'>Gennady Zyuganov is the leader of the CPRF and is the favorite to win the election. Originally joining the CPSU in 1967, he would become first secretary of Komsomol in his native  Oryol Oblast. He would later work on other propaganda and ideological matters, emerging in the 1980s as a sharp critic of the glasnost policies championed by Mikhail Gorbachev. <br><br>Following the collapse of the Soviet Union, Zyuganov helped found the CPRF, a successor to the now in disarray CPSU. In 1993 he became its chairman.<br><br>Zyuganov’s grassroots organizing efforts have led to victory in the 95 legislative elections, garnering significant momentum for the party.<br></div></div></div></div></div></div></div></div>","color_hex":"#ff4013","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/pfp6OpQ.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":true}},
            {"model":"campaign_trail.candidate","pk":77,"fields":{"first_name":"Boris","last_name":"Yeltsin","election":9,"party":"Independent","state":"Moscow","priority":1,"description":"<b>(Not Playable)</b>","color_hex":"#0056d6","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/IFwGG8V.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},
            {"model":"campaign_trail.candidate","pk":79,"fields":{"first_name":"Alexander ","last_name":" Lebed","election":9,"party":"Independent","state":"Rostov Oblast","priority":1,"description":"Coming Soon! No seriously if I do realse this, it will be for a dedicated Lebed path","color_hex":"#fecb3e","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/KntTckt.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},
            {"model":"campaign_trail.candidate","pk":80,"fields":{"first_name":"Vladimir","last_name":" Zhirinovsky","election":9,"party":"Example Party","state":"Hell","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#74a7fe","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},
            {"model":"campaign_trail.candidate","pk":13990,"fields":{"first_name":"Grigory","last_name":"Yavlinsky","election":9,"party":"Example Party","state":"Hell","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#00FF00","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},
            {"model":"campaign_trail.candidate","pk":13900,"fields":{"first_name":"","last_name":"AgainstAll/Others","election":9,"party":"Example Party","state":"Hell","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#444444","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}}];
            
            e.running_mate_json = [];


if (!e.done) {
    e.done = true;
    
    // paste the rest of your code 1 here - it has to be wrapped around the "if (!e.done)" line for it to work on the loader
    
    styling = document.createElement("style");
    document.head.appendChild(styling);
    
    styling.innerHTML = `
    #opponent_selection_id_back {
        display: none;
    }
    body {
        background-size: cover;
    }
    `
    
    let z = new MutationObserver((mutationsList, observer) => {
        let runningMateSummary = document.querySelector("#running_mate_summary");
        if (runningMateSummary) {
            $("#running_mate_id_button").click();
            observer.disconnect()
        }
    });
    
    
    z.observe(document, { subtree: true, childList: true });
    
    }
    campaignTrail_temp.opponents_default_json = [
        {
            "election": 9,
            "candidates": [
                77,
                78,
                79,
                80,
                13990,
                13900,
            ]
        }
    ]