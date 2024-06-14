campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "1996 IWT Demo",
            "summary": "<div style='overflow-y:scroll;height:200px;'>With the conclusion of President George H. W. Bush’s two terms in office the time has come for the nation to decide if a fresh face will continue on sixteen years of Republican administration or if a resurgent Democratic Party can claim Victory. <br><br>Key issues include NAFTA, Immigration, and of course affairs abroad.<br><br> -The Democratic Party has rallied behind the candidacy of House Minority leader Dick Gephardt of Missouri, a man mostly known for his vehement opposition to NAFTA. Gephardt benefits from the nation's generally apathy towards four more years of Republican governance.<br><br>-The Republican Party has yet to decide on a nominee, with a few high profile figures duking it out. Vice President Trump is the front runner, with senator Bob Dole in a close second, along with Massachusetts Governor Bill Weld in a distant third. With the Republican nominee yet to be chosen, it's fair to say it's anybody's game as to who it will be.\n</div>",
            "image_url": "https://i.natgeofe.com/n/3cb29742-425b-4391-80a3-86beb771a49c/south-lawn_16x9.jpg?w=1200",
            "winning_electoral_vote_number": 270,
            "advisor_url": "123",
            "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "1996 IWT Demo"
    }
]

campaignTrail_temp.credits = "Ohas for the Summer Mod Jam"

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 25,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 77,
        "fields": {
            "first_name": "Bill",
            "last_name": "Weld",
            "election": 20,
            "party": "Republican",
            "state": "Massachussets",
            "priority": 1,
            "description": "<div style='overflow-y:scroll;height:200px;'>Bill Weld is the current Governor of Massachusts. In getting elected Governor he did the impossible, win as a Republican in a Heavily Blue state. He would defy expectations again, winning re-election in a landslide carrying even Boston, a city that in living memory had never voted Republican.\n\n Before becoming Governor he served on the Nixon Impeachment inquiry and was head of the Criminal Division of Reagan's Justice Department. This Judicial experience has given him a “Law and order” reputation.<br><br>Weld's win in Massachusetts was partly a result of his liberal views on social issues, something that will be to his detriment among Evangelical Republicans, a significant wing of the party. <br><br>Weld has yet to comment on NAFTA, an issue that has split the Republican Party right down the middle. <br><br>Weld is a fresh face on the national scene, being much younger than Dole or Trump. He's also relatively controversy free while also being energetic and exciting, something that can not be said about Trump or Dole.<br><br>Weld will have to walk a tightrope if he is to win the party nomination, balancing his liberal credentials with overtures to the Evengelicals, positioning himself as a fresh face in contrast to Dole, and presenting an image of stability in contrast to Trump.\n</div>",
            "color_hex": "#ff2600",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/GdKpLFs.jpeg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 78,
        "fields": {
            "first_name": "Dick",
            "last_name": "Gephardt ",
            "election": 20,
            "party": "Democrat",
            "state": "Missouri",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1002,
        "fields": {
            "first_name": "Dick",
            "last_name": "Chenny",
            "election": 20,
            "party": "Republican",
            "state": "Wyoming",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Secretary_of_Defense_Richard_B._Cheney%2C_official_portrait.jpg/220px-Secretary_of_Defense_Richard_B._Cheney%2C_official_portrait.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "After serving on the staff of President Nixion, Cheney was elected to congress in 1978, representing Wyoming in the House of Representatives until 1989. In that same year he would be appointed Secretary of Defense by president elect Bush. He has overseen American-led interventions in Iraq and Somalia, an overall reduction in the US military budget following the end of the Cold War, and a US and UN bombing campaign in Bosnia.<br><br>Selecting Chenny would lend your campaign a sense of credibility when it comes to foreign policy, but it would also align it with the deeply unpopular Bush administration. In particular Bush, and by extension Chennies, inaction in regards to the Rwandan Genocide and  perceived mishandling of the ongoing crisis in Yugoslavia continue to be points of controversy.",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1003,
        "fields": {
            "first_name": "Jim",
            "last_name": "Jeffords",
            "election": 20,
            "party": "Republican",
            "state": "Vermont",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/JeffordsJim%28I-VT%29.jpg/330px-JeffordsJim%28I-VT%29.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Jim Jeffords is currently representing the state of Vermont in the House of Representatives. Before serving in the House he was a captain in the Navy. During his tenure in the House, Jeffords has been noted as a moderate Republican, championing education and healthcare reform. Additionally he condemned President Bush for his inaction in regards to the Rwanden Genocide, arguing that the President should have done more to prevent the situation from spirling out of control.<br><br>Selecting Jeffords as your running mate can help you establish yourself as a “New Republican”, someone different from Bush or Reagan. Despite this, selecting Jeffords would also further alienate Evangelical Republicans, a group that's already uneasy about your candidacy as is.",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1004,
        "fields": {
            "first_name": "Jack",
            "last_name": "Kemp",
            "election": 20,
            "party": "Republican",
            "state": "New York",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jack_Kemp_official_portrait.jpg/300px-Jack_Kemp_official_portrait.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Jack Kemp represented New York in the House of Representatives from 1971 to 1989, wherein he gained a reputation for being a “bleeding heart” conservative. In 1989 he was appointed Secretary of the HUD by president Bush. During his time at the helm of the HUD, he has pursued various policies all of which have run into roadblocks from a Democrat controlled legislature. He also played college level football before getting into politics.<br><br>Picking Kemp can help you pander to both factions of the GOP, the more conservative wing of the party is comfortable with a “bleeding heart” being on the ticket, while the more liberal wing is reassured by Kemp's more liberal views on some social issues. On the flip side, Kemp has been seen as an unsuccessful HUD secretary, so choosing him might signal to voters that you'd be an extension of the Bush administration's failures.",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1005,
        "fields": {
            "first_name": "Bob",
            "last_name": "Dole",
            "election": 20,
            "party": "Republican",
            "state": "Kansas",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.gannett-cdn.com/presto/2021/02/18/NTCJ/80c031b8-d9e4-4222-9bed-232868251a7f-199204_Sen.BobDole.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Bob Dole is a senator from Kansas who is well entrenched with the party apparatus. Before deciding to mount a run for the presidency, Dole was serving as Party Minority Leader, a post now held by Trent Lott. While Doles voting history in the senate has proved to be quite moderate, following Buchanan’s departure from the race and key endorsements from Pat Robertson and Strom Thurmond; he has gained the support of the Evangelical wing of the party. Ultimately he would lose the race to you in a squeaker, although you already know that.<br><br>Dole is the logical choice for a running mate. His age and experience is a counterweight to your youth and outsider status, his Evangelical support base is something you lack, and his hailing from the Midwest contrasts well with your Massachusetts blood. Picking Dole has little downsides, one of these small downsides is his age, at almost seventy three Dole is pushing the barrier when it comes to what Americans think is an acceptable age to be running the country.",
            "candidate_score": 1,
            "running_mate": true
        }
    },
]
campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 56,
        "fields": {
            "candidate": 77,
            "running_mate": 1002
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 57,
        "fields": {
            "candidate": 77,
            "running_mate": 1003
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 58,
        "fields": {
            "candidate": 77,
            "running_mate": 1004
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 58,
        "fields": {
            "candidate": 77,
            "running_mate": 1005
        }
    }

]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            50000
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            50000
        ]
    }
]

jet_data = {
    "headerColor": "#ffe4a8",
    "windowColor": "#caf0fe",
    "containerColor": "#94e3fe",
    "innerWindowColor": "#E8FBFF",
    "bannerImageUrl": "https://cdn.discordapp.com/attachments/1149804892538552370/1225929993230487693/1996__MILLENIUM_OF_SCANDAL.png?ex=6666d087&is=66657f07&hm=2eedfd50f12bc9a8a68b3154fe9451d40dec9968ff53d2b2efc72e77263df36c&",
    "backgroundImageUrl": "https://live.staticflickr.com/163/361267882_2373e69bbe_b.jpg",
    "endingTextColor": "#000000",
    "customQuote": ""
}

//#startcode



nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#ffe4a8";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#caf0fe";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#94e3fe";

document.getElementById("header").src = "https://i.imgur.com/f25g5vu.jpeg";

document.body.background = "https://live.staticflickr.com/163/361267882_2373e69bbe_b.jpg";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#E8FBFF!important;}</style>";

//#endcode
