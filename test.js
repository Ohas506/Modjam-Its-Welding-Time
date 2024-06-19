
    
    campaignTrail_temp.candidate_image_url = "https://i.imgur.com/EWNTwJX.jpeg";
    campaignTrail_temp.running_mate_image_url = "https://people.com/thmb/7X8p2cxu948bC8W_mw7hNxiiBWI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/colin-powell-7-94fc90b47f844f429f30a83d3b6bfecd.jpg";
    campaignTrail_temp.candidate_last_name = "Weld";
    campaignTrail_temp.running_mate_last_name = "Powell";
    
    
    ampaignTrail_temp.candidate_image_url = "https://i.imgur.com/GdKpLFs.jpeg";
    campaignTrail_temp.running_mate_image_url = "";
    campaignTrail_temp.candidate_last_name = "Weld";
    campaignTrail_temp.running_mate_last_name = "For President";
    
    
    //VP Switcher
    var changeGameDisp = (hide) => {
        disp = "";
        if (hide) {
          disp = "none";
        }
        Array.from(gameWindow.children).forEach(f=>{
            if(!f.classList.contains("game_header") && (f.id != "main_content_area" || !$("#campaign_sign")[0])) 
                f.style.display = disp
        });
      };
      
      e.vpSwitcher = () => {
        let potential_running_mate_pks = e.running_mate_json.filter(f=>f.fields.candidate == e.candidate_id).map(f=>f.fields.running_mate);
        let pot_run_mat = potential_running_mate_pks.map(f=>e.candidate_json.find(_f=>_f.pk===f));
        let running_mate_options = ``;
        pot_run_mat.forEach(f=> {
            running_mate_options += `<option value="${f.pk}">${f.fields.first_name} ${f.fields.last_name}</option>\n`
        });
    
        let vp_html = `
            <div id="running_mate_form">
                <form name="running mate">
                    <p></p>
                    <h3>Please select your running mate:</h3> 
                    <select name="running_mate_id" id="running_mate_id">
                        ${running_mate_options}
                    </select>
                    <p></p>
                </form>
            </div>
            <div class="person_description_window" id="running_mate_description_window">
                <div class="person_image" id="running_mate_image"> <img src="${pot_run_mat[0].fields.image_url}" width="210" height="250"> </div>
                <div class="person_summary" id="running_mate_summary">
                    <ul>
                        <li>Name: ${pot_run_mat[0].fields.first_name} ${pot_run_mat[0].fields.last_name}</li>
                        <li>Party: ${pot_run_mat[0].fields.party}</li>
                        <li>Home State: ${pot_run_mat[0].fields.state}</li>
                    </ul>
                    ${pot_run_mat[0].fields.description_as_running_mate}
                </div>
            </div>
            <p> <button class="person_button" id="running_mate_id_button">Continue</button> </p>
        `
    
        let vp_screen = document.createElement("div");
        vp_screen.classList.add("inner_window_w_desc");
        vp_screen.id = "inner_window_4";
        vp_screen.innerHTML = vp_html;
    
        changeGameDisp(true);
    
        gameWindow.appendChild(vp_screen);
    
        // now we make the stuff do stuff!
    
        $("#running_mate_id").change((_e)=>{
            _e.preventDefault()
    
            let value = Number($("#running_mate_id").val());
            let i = potential_running_mate_pks.findIndex(f=>f === value);
    
            let screen_html = `
                <div class="person_image" id="running_mate_image"> <img src="${pot_run_mat[i].fields.image_url}" width="210" height="250"> </div>
                <div class="person_summary" id="running_mate_summary">
                    <ul>
                        <li>Name: ${pot_run_mat[i].fields.first_name} ${pot_run_mat[i].fields.last_name}</li>
                        <li>Party: ${pot_run_mat[i].fields.party}</li>
                        <li>Home State: ${pot_run_mat[i].fields.state}</li>
                    </ul>
                    ${pot_run_mat[i].fields.description_as_running_mate}
                </div>
            `
    
            $("#running_mate_description_window").html(screen_html);
    
        });
    
        // VP selected!
    
        $("#running_mate_id_button").click((_e)=>{
            _e.preventDefault();
    
            let value = Number($("#running_mate_id").val());
            let i = potential_running_mate_pks.findIndex(f=>f === value);
    
            e.running_mate_last_name = pot_run_mat[i].fields.last_name;
            e.running_mate_image_url = pot_run_mat[i].fields.image_url;
            e.selected_running_mate = pot_run_mat[i];
    
            if ($("#campaign_sign")[0]) {
                $("#campaign_sign").html(`<p>${e.candidate_last_name}</p><p>${e.running_mate_last_name}</p>`);
                $("#running_mate_pic").attr("src", e.running_mate_image_url)
            }
    
            $("#inner_window_4").remove();
            changeGameDisp(false);
        })
      
      }
    
    campaignTrail_temp.cyoa = true;
    
    var Trump = 0;
    var Evengelical = 0;
    var Center = 0;
    
    
    var TrumpMap = {
        3363: -1,
        3364: 1,
        3388: 1,
        3389: 2,
        3481: -2,
        12252: 2,
        3464: 2,
      }
    
    var EvengelicalMap = {
        3363: 1,
        3364: -1,
        3388: 1,
        12250: -2,
        3481: 1,
        3483: 2,
        12252: -1,
        3465: 1
    
    }
    
    var CenterMap = {
        3365: 1,
        3388: 1,
        3389: 1,
        12250: 1,
        3481: 1,
        12252: -1,
        3464: 1,
        3465: 1,
        3466: 2,
    
    
    
    }
    
    
    
    
    
    
    
    
    cyoAdventure = function(a) {
    ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length - 1]
    
        if (EvengelicalMap.hasOwnProperty(ans)) {
            Evengelical += EvengelicalMap[ans];
          }
        if (TrumpMap.hasOwnProperty(ans)) {
            Trump += TrumpMap[ans];
          }
        if (CenterMap.hasOwnProperty(ans)) {
            Center += CenterMap[ans];
          }
    
    
        if (e.question_number == 4) {
            window.setTimeout(e.vpSwitcher, 20)
        }
    
    
    function tunnel(new_q){
        e = campaignTrail_temp;
        return e.questions_json[e.questions_json.map(f=>f.pk).indexOf(new_q)];
    }
    
    getQuestionFromPk = function(pk) {
      let index = questionSheath.map(f=>f.pk).indexOf(pk)
      if (index < 0) {
        return false
      } 
      return questionSheath[index]
    }
    getQuestionFromLabel = function(label) {
      let index = questionSheath.map(f=>f.label).indexOf(label)
      if (index < 0) {
        return false
      }
      return questionSheath[index]
    }
    //Trigger if you win the primaries
    if (campaignTrail_temp.question_number == 4 && Trump >= 2 && Evengelical >= 2 && Center >=2) {
    
        campaignTrail_temp.questions_json[7] = {
            
                "model": "campaign_trail.question",
                "pk": 381,
                "fields": {
                    "priority": -1,
                    "description": "The day that you've been waiting for has arrived. As the delegates arrive in Cleveland Ohio to determine the Presidential nominee of the GOP, a tenseness is apparent in the air. On the first ballot, no nominee, second, third, fourth, they all carry on like this until the fifth ballot. On the fifth ballot of the Republican National Convention, a ramshackle alliance of former Trump delegates, paired with some Opportunistic Dole delegates along with some delegates of the so called “center”, rallied behind a message of unity, a message that the Republican Party must unite in nominating Governor Bill Weld of Massachusetts for president! Your tiptoeing across the various factions of the party has paid off as you have been officially confirmed as the GOP’s nominee! As you step on to the stage to address the convention, what will your first message to America as the GOPs candidate for president be?",
                    "likelihood": 1
                
            }
            
        }
             
    }
    if (campaignTrail_temp.question_number == 4 && Trump < 2 || Evengelical < 2 || Center < 2) {
        
        campaignTrail_temp.questions_json[8] = {
            
                "model": "campaign_trail.question",
                "pk": 12254,
                "fields": {
                    "priority": 1,
                    "description": "The day that you've been waiting for has arrived. As the delegates arrive in Cleveland Ohio to determine the Presidential nominee of the GOP, a tenseness is apparent in the air. On the first ballot, no nominee, second, third, until the fourth ballot. On the fourth ballot in a squeaker, it appears that Bob Dole has edged out Trump for the GOP nomination. Game Over. It appears that your longshot bid for the Republican nomination was just that; a longshot. As Dole takes to the stage to give his acceptance speech, the feeling of defeat slowly creeps in. As Doles speeches raps up he walks down to shake your hand.\n",
                    "likelihood": 1
                }
            }
             
    } 
    if (campaignTrail_temp.question_number == 4 && Trump >= 2 && Evengelical >= 2 && Center >= 2){campaignTrail_temp.questions_json[campaignTrail_temp.question_number + 1] = tunnel(381);                                                                                                                                                                                
    }
    
    if(campaignTrail_temp.question_number == 4 && Trump < 2 || Evengelical < 2 || Center < 2){campaignTrail_temp.questions_json[campaignTrail_temp.question_number + 1] = tunnel(12254);}
    
    }
        
    
    
    
    