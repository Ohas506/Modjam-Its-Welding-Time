e.pages.push(`<h2>The Campaign Trail</h2>
                <p>Please select the election you will run in: <br><select name="2032" id="2032"><option value="0">2032</option></select><br><img src=https://i.imgur.com/00fK5rQ.jpeg width="100" 
 
                height="60"><br>Actor Dwayne the "Rock" Johnson will be facing of against incumbent President Josh Hawley. With a stagnent economy and war spirling in Europe, Dwayne will have to cultivate his outsider image while Hawley will have to cling on for dear life</p>`)

                //e.executable.push([3, (() => {e.image = e.image = 'https://i.imgur.com/V2t8ult.png'})])


                function ctsAchievement(achievement, difficultyChecker = true){
                    if ((difficultyChecker && campaignTrail_temp.difficulty_level_multiplier<=1)||!difficultyChecker)
                        if(campaignTrail_temp.CTS){
                        unlockAchievement(achievement);
                    }
                }
                
                e.global_parameter_json[0].fields.question_count = 29
                
                    function getQuestionNumberFromPk(pk) {
                        return campaignTrail_temp.questions_json.map(q=>q.pk).indexOf(pk)-1;
                    }
                
                    e=campaignTrail_temp
                    campaignTrail_temp.cyoa = true
                    cyoAdventure = function(a) {
                        ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length-1];
                
                        if (ans == 3315) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                        if (ans == 3316) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                        if (ans == 3317) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                        if (ans == 3397) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                    if (ans == 3398) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                        if (ans == 3400) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                        if (ans == 3409) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                        if (ans == 3410) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                        if (ans == 3411) {
                            campaignTrail_temp.question_number = getQuestionNumberFromPk(12498);
                        }
                
                    if((ans == 3336)){
                        campaignTrail_temp.running_mate_image_url = "https://imgur.com/CWEBwKy.png"
                        campaignTrail_temp.running_mate_last_name = 'Allard'
                        campaignTrail_temp.running_mate_state_id = 186
                        campaignTrail_temp.candidate_image_url = 'https://imgur.com/QDzxntJ.png';
                        campaignTrail_temp.candidate_last_name = 'Paul';
                        vpTable["Ron E. Paul"] = "A. Wayne Allard"; 
                            campaignTrail_temp.answers_json.find(item => item.pk === 3369).fields.question = '';
                            campaignTrail_temp.answers_json.find(item => item.pk === 12466).fields.question = '';
                            campaignTrail_temp.answers_json.find(item => item.pk === 3330).fields.question = '';
                            campaignTrail_temp.answers_json.find(item => item.pk === 7014).fields.question = '';
                
                            e.candidate_json[1].fields.color_hex = "#d2562d"
                            e.candidate_json[2].fields.color_hex = "#660066"
                            applyDrift(80,-0.0015);
                
                    }
                    
                    if((ans == 3333)){
                    campaignTrail_temp.running_mate_image_url = "https://imgur.com/HNsB5wy.png"
                    campaignTrail_temp.running_mate_last_name = 'Stossel'
                    campaignTrail_temp.running_mate_state_id = 193  
                    campaignTrail_temp.candidate_image_url = 'https://imgur.com/QDzxntJ.png';
                    campaignTrail_temp.candidate_last_name = 'Paul';
                    vpTable["Ron E. Paul"] = "John F. Stossel"; 
                    campaignTrail_temp.questions_json[22] = {
                        "model": "campaign_trail.question",
                        "pk": 2000,
                        "fields": {
                            "priority": 8,
                            "description": "Stossel has been a boon to the ticket, with his tv show being free advertising for the ticket on one of the biggest networks in America. A minor issue is his staunch opposition to Global Warming and other environmental issues, like the DDT ban - he’s been outright aggressive in his opposition to it, and some advisors are worried this is an issue the Dems have a leg up on.",
                            "likelihood": 1
                        }
                    }
                    campaignTrail_temp.questions_json[21] = {
                        "model": "campaign_trail.question",
                        "pk": 2001,
                        "fields": {
                            "priority": 8,
                            "description": "You put down your newspaper - something about the automotive industry - and feel restless. You notice a convenient empty portion on your schedule, and you decide to pay a visit to a competitive state. Where to, Dr. Paul?",
                            "likelihood": 1
                        }
                    }
                    campaignTrail_temp.answers_json.find(item => item.pk === 12344).fields.question = '';
                    campaignTrail_temp.answers_json.find(item => item.pk === 3470).fields.question = '';
                    campaignTrail_temp.answers_json.find(item => item.pk === 3331).fields.question = '';
                    campaignTrail_temp.answers_json.find(item => item.pk === 7013).fields.question = '';
                    e.candidate_json[2].fields.color_hex = "#993333"
                
                
                    }
                
                
                    if((ans == 3411|| ans == 3409 || ans == 3398 || ans == 3397 || ans == 3315)){
                        campaignTrail_temp.running_mate_image_url = "https://imgur.com/wPWfxx1.png"
                        campaignTrail_temp.running_mate_last_name = 'Rice'
                        campaignTrail_temp.running_mate_state_id = 185  
                        campaignTrail_temp.candidate_image_url = 'https://imgur.com/wxQPPnW.png';
                        campaignTrail_temp.candidate_last_name = 'Romney';
                        vpTable["W. Mitt Romney"] = "Condoleezza Rice"; 
                        var id = e.candidate_json.map(p=>p.pk).indexOf(77)
                        e.candidate_json[id].fields.first_name = "W. Mitt"
                        e.candidate_json[id].fields.last_name = "Romney"  
                        campaignTrail_temp.questions_json[28] = {
                            "model": "campaign_trail.question",
                            "pk": 3000,
                            "fields": {
                                "priority": 8,
                                "description": "It's time for your victory lap, Governor - just kidding. Not really kidding. Really, you can pad your margins with the popular vote, or try to strike out into unlikely territory, but it doesn't matter. You will be President, and by a wide margin.",
                                "likelihood": 1
                            }
                        }  
                        var id = e.candidate_json.map(p=>p.pk).indexOf(80)
                        e.candidate_json[id].fields.first_name = ""
                        e.candidate_json[id].fields.last_name = "Various"  
                        vpTable["Various"] = "Various"; 
                        e.candidate_json[2].fields.color_hex = "#660066"
                        e.candidate_json[1].fields.color_hex = "#cc0000"
                
                    }
                    if((ans == 3316) || ans == 3400 || ans == 3410){
                        campaignTrail_temp.running_mate_image_url = "https://imgur.com/AcITawU.png"
                        campaignTrail_temp.running_mate_last_name = 'Pawlenty'
                        campaignTrail_temp.running_mate_state_id = 185  
                        campaignTrail_temp.candidate_image_url = 'https://imgur.com/5wqeeX8.png';
                        campaignTrail_temp.candidate_last_name = 'Huckabee';
                        var id = e.candidate_json.map(p=>p.pk).indexOf(77)
                        e.candidate_json[id].fields.first_name = "Mike D."
                        e.candidate_json[id].fields.last_name = "Huckabee"    
                        vpTable["Mike D. Huckabee"] = "Tim J. Pawlenty"; 
                
                        campaignTrail_temp.questions_json[28] = {
                            "model": "campaign_trail.question",
                            "pk": 3001,
                            "fields": {
                                "priority": 8,
                                "description": "After defying the odds in the Primary, your campaign in the general election has been less of a race and more of a victory lap after Kerry managed to mishandle the economy - to the shock of only liberals. You've spent most of the campaign ensuring you have a governing mandate rather than padding your votes, but you have been an eager campaigner. Where will your last spot be?",
                                "likelihood": 1
                            }
                        }  
                
                
                        var id = e.candidate_json.map(p=>p.pk).indexOf(80)
                        e.candidate_json[id].fields.first_name = ""
                        e.candidate_json[id].fields.last_name = "Various"  
                        vpTable["Various"] = "Various"; 
                        e.candidate_json[2].fields.color_hex = "#660066"
                        e.candidate_json[1].fields.color_hex = "#cc0000"
                
                    }
                    if((ans == 3317)){
                        campaignTrail_temp.running_mate_image_url = "https://imgur.com/xTKIeiX.png"
                        campaignTrail_temp.running_mate_last_name = 'Palin'
                        campaignTrail_temp.running_mate_state_id = 185  
                        campaignTrail_temp.candidate_image_url = 'https://imgur.com/uEq6gzz.png';
                        campaignTrail_temp.candidate_last_name = 'Giuliani';
                        var id = e.candidate_json.map(p=>p.pk).indexOf(77)
                        e.candidate_json[id].fields.first_name = "Rudy W."
                        e.candidate_json[id].fields.last_name = "Giuliani"    
                        vpTable["Rudy W. Giuliani"] = "Sarah L. Palin"; 
                
                        campaignTrail_temp.questions_json[28] = {
                            "model": "campaign_trail.question",
                            "pk": 3002,
                            "fields": {
                                "priority": 8,
                                "description": "Despite a rocky and scandal-filled campaign, you have maintained a clear and significant lead over President Kerry for the length of the campaign - no small thanks to Sarah Palin, who has done her best to stem the conservative hemorrhaging. Where will you make your last stops, Rudy?",
                                "likelihood": 1
                            }
                
                    }
                    e.candidate_json[1].fields.color_hex = "#990147"
                    e.candidate_json[2].fields.color_hex = "#996633"
                
                    }
                    applyDrift(77,-0.003);
                    applyDrift(80,-0.0015);
                
                    if((ans == 3368)){
                        campaignTrail_temp.questions_json[21] = {
                            "model": "campaign_trail.question",
                            "pk": 2001,
                            "fields": {
                                "priority": 8,
                                "description": "You put down your newspaper - something about the automotive industry - and feel restless. You notice a convenient empty portion on your schedule, and you decide to pay a visit to a competitive state. Where to, Dr. Paul?",
                                "likelihood": 1
                            }
                        }
                
                    }
                
                    }
                
                    function applyDrift(candidateId, driftAmount, stateId) {
                        // Loop through each object in the JSON array
                        campaignTrail_temp.candidate_state_multiplier_json.forEach((item) => {
                          // Check if the candidate ID matches the given candidate
                          if (item.fields.candidate === candidateId) {
                            // If stateId is undefined or empty, apply drift to all states for that candidate
                            if (stateId === undefined || stateId.length === 0) {
                              item.fields.state_multiplier += driftAmount;
                              item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
                            } else {
                              // If stateId is an array, loop through it
                              if (Array.isArray(stateId)) {
                                if (stateId.includes(item.fields.state)) {
                                  item.fields.state_multiplier += driftAmount;
                                  item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
                                }
                              } else {
                                // If stateId is a single value, just check it
                                if (item.fields.state === stateId) {
                                  item.fields.state_multiplier += driftAmount;
                                  item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
                                }
                              }
                            }
                          }
                        });
                      }
                
                
                
                    campaignTrail_temp.questions_json = [
                        {
                            "model": "campaign_trail.question",
                            "pk": 397,
                            "fields": {
                                "priority": 0,
                                "description": "John Kerry’s narrow victory in 2004 has been a disaster for America, as he maintained Bush’s draconian legislation and pointless imperialism - while trying to unconstitutionally expand his economic powers. You’re on C-Span now, ready to announce that you’re running for President. What themes will you hit in your announcement?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 367,
                            "fields": {
                                "priority": 1,
                                "description": "The race is stuffed - Romney, Huckabee, Giuliani and McCain are all considered very likely winners, while you’re treated as a joke, as usual. The Iowa and New Hampshire primaries are coming up soon. Huckabee and Thompson are focusing on Iowa, while Giuliani, McCain and Romney are focusing on New Hampshire. Which state will you focus on, and what will your strategy be?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 370,
                            "fields": {
                                "priority": 1,
                                "description": "Your shocking upset win has left the mainstream media reeling, having brought you from joke candidate to leading contender. But an unfortunate fact has emerged - your faction within the GOP is rabid, but small. You need to expand your coalition to maintain your energy - how do you plan to do so?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 344,
                            "fields": {
                                "priority": 2,
                                "description": "Your surge is being taken very seriously now. Rumors are abound that Romney and Huckabee will engage in some kind of “corrupt bargain” where they consolidate their conservative bases to stop you. Will you do anything to try and stop this?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 349,
                            "fields": {
                                "priority": 2,
                                "description": "Before the convention, Mike Duncan invites you to his office. He tells you that you’re not his preferred candidate, but he respects the will of the voters. He wants to talk about your running mate. He suggest retiring Senator from Colorado Wayne Allard, an uncharismatic and unknown man only known for twice submitting amendments to ban gay marriage. Are you willing to play ball?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 345,
                            "fields": {
                                "priority": 2,
                                "description": "You’ve done it. You're the nominee for President, defying every odd placed in your way. You take a deep breath, and prepare to deliver your speech. What themes will you hit on?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 346,
                            "fields": {
                                "priority": 2,
                                "description": "The general campaign is kicking off - and we have official Republican polls. It’s… not good news, Dr. Paul.",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 362,
                            "fields": {
                                "priority": 3,
                                "description": "Your emergence as the Republican standard bearer has been controversial, to say the least. With no prominent Republican politician willing to jeopardize their career by running against you, various right-wing third parties such as the Constitution party, the Prohibition party and the American Independent party have nominated controversial radio host Rush Limbaugh with various running mates, with the stated goal of forcing you to the right. How do you intend to address Limbaugh?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 348,
                            "fields": {
                                "priority": 2,
                                "description": "Former President George W. Bush has settled out of politics rather peacefully, having invested in the Dallas Cowboys and making semi-frequent appearances for their home games. He enjoys high approval ratings, but your base loathes the man. Will you seek his endorsement?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 343,
                            "fields": {
                                "priority": 2,
                                "description": "One key advantage you held over the other candidates in the primary is your strong online presence. With the primaries over, some Republican leaders feel the internet is too fickle to rely on, and think more traditional advertising would be your best bet. Will you return your focus onto TV?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 347,
                            "fields": {
                                "priority": 2,
                                "description": "The economy, having shown warning signs since late 2007, is in utter freefall with the bankruptcy of Lehman Brothers, the largest of its kind.",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 351,
                            "fields": {
                                "priority": 2,
                                "description": "Kerry’s Secretary of Treasury, Roger Altman, has pushed for a bank bailout to try and protect jobs following the crash - the taxpayer would put up $850 billion to fund failed business. I would ask how you intend to vote, but there’s no question here.",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 350,
                            "fields": {
                                "priority": 2,
                                "description": "It’s time for the debates! It’s critical that these go well, to maintain your sudden momentum. What's your plan for the debates?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 352,
                            "fields": {
                                "priority": 3,
                                "description": "During the debates, John Kerry asks you frankly - “will you or will you not try to end the social security system?”",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 358,
                            "fields": {
                                "priority": 3,
                                "description": "The automotive industry is one of those who have been hit hardest by the recession - large manufacturers such as Chrysler or Ford, who employ large parts of the Midwestern population, seem to be teetering on the edge of bankruptcy. To prevent a total meltdown, President Kerry has proposed a significant bailout - how will you counsel the Republican Party to vote?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 6000,
                            "fields": {
                                "priority": 3,
                                "description": "The Democratic convention nominated Mary Landrieu as John Kerry's running mate, following Edwards' mysterious ''health problems'' forcing him to decline a second term. Do you have any comments to make about Senator Landrieu?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 375,
                            "fields": {
                                "priority": 3,
                                "description": "One issue of particular salience is your stance on abortion. As a Chrsitian, you oppose it. But does your support for States Rights extend to abortion?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 391,
                            "fields": {
                                "priority": 3,
                                "description": "You’ve been a consistent opponent of the Iraq war your whole career, even being one of 6 Republican representatives to controversially vote against the Iraq war resolution when first presented in 2002. What are your plans to handle the war when you become President?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 356,
                            "fields": {
                                "priority": 3,
                                "description": "Your old newsletter, the Ron Paul Political Report, has been dug up by liberal muckrakers. The papers featured promises of a race war, anti-semtism and in one memorable occasion, it accused Martin Luther King of being a pedophile. The good news is that you didn’t write these - but they still have your name on them. How will you address these being dug up?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 8000,
                            "fields": {
                                "priority": 3,
                                "description": "Rush Limbaugh has been attacking you nonstop since his entrance into the race. Everything from you surrendering to terror, to ending social security, to letting homosexuals teach in classrooms. He's crossed a line recently however, declaring ''Ron Paul is the candidate that will bring back pederasty. John Kerry, he wants to spit on marriage and make homos marry. But Ron Paul wants to empower gay paedophiles.'' How will you respond?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 363,
                            "fields": {
                                "priority": 3,
                                "description": "You’ve got a complicated history with gay rights. On the one hand, you made comments saying you support gay marriage. On the other, you say you would have voted for the Defense of Marriage Act. What’s your stance of gay marriage?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 360,
                            "fields": {
                                "priority": 3,
                                "description": "No relief has reached America's manufacturing communities, and thousands of workers are now feeling the consequences thereof - Chrysler has just filed for bankruptcy. It's too late to assemble proper polling at this stage, the effect is uncertain, but it's clear you have to comment, Dr. Paul.",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 392,
                            "fields": {
                                "priority": 3,
                                "description": "Allard has been campaigning well for you, but the fact he simply isn’t a libertarian has created a level disconnect in the ticket that has been hard to ignore. How do you plan to address it?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 359,
                            "fields": {
                                "priority": 3,
                                "description": "As November 3rd draws closer, there’s no denying that most people don’t really understand your libertarian policies. The public thinks you’re either a callous lunatic or can’t figure you out. How will you make yourself more or understood?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 364,
                            "fields": {
                                "priority": 3,
                                "description": "President Kerry has restarted his fight for healthcare reform, citing the need to help lift the burden from people struggling in the recession. What are your comments on this development?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 385,
                            "fields": {
                                "priority": -2,
                                "description": "President Kerry, Senator Kennedy and Senator Hatch have been negotiating on a bill to expand immigration. Efforts have slowed, in part due Kerry campaigning and in part due to Kennedy’s ailing health. Will you campaign against the bill?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 382,
                            "fields": {
                                "priority": -1,
                                "description": "While green issues aren’t a major part of the campaign, the Vice-President has made some remarks about your policies exacerbating global warming. Will you address these claims?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 12481,
                            "fields": {
                                "priority": 0,
                                "description": "John Kerry has finally begun to pull out troops out of Iraq, with rather suspicious timing. What are your comments on this development?",
                                "likelihood": 1
                            }
                        },
                        {
                            "model": "campaign_trail.question",
                            "pk": 12498,
                            "fields": {
                                "priority": 0,
                                "description": "One long campaign is over, and your longstanding efforts to spread libertarian ideals are reaching a climax. In this last week, which area of the country will you target?",
                                "likelihood": 1
                            }
                        }
                    ]
                
                    campaignTrail_temp.answers_json = [
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3311,
                            "fields": {
                                "question": 343,
                                "description": "Boy, these guys sure do have a lot of things to say. I appreciate their advice, but a TV spot is limited by time. An email campaign or a blog post, well that’s there for your leisure. We’ll keep focusing online."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3312,
                            "fields": {
                                "question": 343,
                                "description": "Well, sure. A primary is a different beast entirely from the general, and these guys know what they’re doing. I feel more comfortable on Fox than on YouTube anyway. We’ll divert funds online back to getting on TV."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3314,
                            "fields": {
                                "question": 344,
                                "description": "I know we’ve had some close calls, but I feel confident in doing nothing about this. They both want to be President too bad to agree to compromise, and they’ll hurt each other by targeting the same group while I make my case to people that want something different."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3315,
                            "fields": {
                                "question": 344,
                                "description": "Let’s take the fight to Huckabee. He wants to throttle business over the <i>theory</i> of global warming and stop free trade, making us a poorer nation."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3316,
                            "fields": {
                                "question": 344,
                                "description": "I’ll take Mitt on. When it comes to Mitt, one thing I'm afraid of is that Romney might be doing things for religious reasons, and I don't like that."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3317,
                            "fields": {
                                "question": 344,
                                "description": "Why not hit them both? They're equal threats to America, equal supporters of big government, and equal threats to my nomination."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3319,
                            "fields": {
                                "question": 345,
                                "description": "The primaries were a bruising affair. Let’s keep the party united, and take the fight to John Kerry. Welfarism, excessive spending, deficits and socialism divide us - let’s return to the uniting policies of small government and low taxes."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3320,
                            "fields": {
                                "question": 345,
                                "description": "Let’s be clear - <i>I</i> won the nomination. Not Romney, not Huckabee and not Giuliani. Let’s hit the themes I want to hit: The neocon practice of massively exaggerating and endlessly issuing threats has destroyed US credibility, and their obsession with moralistic policy has made them as much pro big government as liberals."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3321,
                            "fields": {
                                "question": 345,
                                "description": "I’ve been getting attention for some time - but now the spotlights on just me, and the media won’t put words in my mouth. Let’s introduce myself, and make my stances clear. America is the most moral nation on earth, founded on moral principles. I will shrink the government, and return America to the way the founding fathers envisioned it."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3322,
                            "fields": {
                                "question": 346,
                                "description": "O-oh. That bad? Really?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3326,
                            "fields": {
                                "question": 347,
                                "description": "I’ve been predicting something like this since 2004 - IT’S HAPPENING!"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3330,
                            "fields": {
                                "question": 348,
                                "description": "I’ll meet up with Bush. I had many issues with Mr. Bush, but I can recognise the importance of a united front against John Kerry. His domestic stances weren’t awful, I suppose…"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3331,
                            "fields": {
                                "question": 348,
                                "description": "I’ll meet up with Bush. I had many issues with Mr. Bush, but I can recognise the importance of a united front against John Kerry. His domestic stances weren’t awful, I suppose…"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3332,
                            "fields": {
                                "question": 348,
                                "description": "I won’t meet with Bush. He was the epitome of a candidate that doesn’t follow his own pronouncements, especially in regards to his awful foreign policy."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3333,
                            "fields": {
                                "question": 349,
                                "description": "Senator Allard is… interesting. I can see a place for him in my administration. But John Stossel is perfect. He has a TV show he can use to do free advertising for us on, he’s charismatic and we’re on the exact same page. I really like John, more than Allard at least."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3336,
                            "fields": {
                                "question": 349,
                                "description": "Hm. Allard keeps the party united? Well, I suppose I’ll need every advantage possible. Colorado is a swing state as well - I can certainly see that he's an alluring pick. I like John, I want him associated with me, but sure. I’ll share a ticket with Allard."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3340,
                            "fields": {
                                "question": 350,
                                "description": "People are ready, now more than ever, to embrace libertarian philosophy. We’ll play all the hits - a total withdrawal from Iraq and Afghanistan, cutting all this nonsense spending and an end to the federal reserve."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3342,
                            "fields": {
                                "question": 351,
                                "description": "Nay."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3345,
                            "fields": {
                                "question": 352,
                                "description": "I certainly won’t. However, we need to accept that the numbers don’t work here - returning to George Bush’s plan to keep social security solvent would be most prudent here."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3346,
                            "fields": {
                                "question": 352,
                                "description": "I definitely want to take a long, hard look at Social Security, and see just how viable it really is. But I’ll maintain the government’s commitments before taking office, and that includes social security."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3359,
                            "fields": {
                                "question": 356,
                                "description": "I want to apologize profusely for the content of my old newsletters. I may not have written them, but I bear moral responsibility. They were published in my name and I let them slip by."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3362,
                            "fields": {
                                "question": 356,
                                "description": "I’ve already addressed the newsletter. I question why Kerry and his cronies have dug up this old story. Do they have no solutions, and they can only attack character?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3368,
                            "fields": {
                                "question": 358,
                                "description": "I'll vote against, but tell the party to vote how they'd like. I have a feeling I can't prevent something of this stature."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3369,
                            "fields": {
                                "question": 358,
                                "description": "We need to prevent this extreme expansion of government authority - I want Boehner and McConnell to stop this at all costs. No more left turns."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3372,
                            "fields": {
                                "question": 359,
                                "description": "The ideas I represent are simple and elegant. Let’s just film some simple ads explaining myself. I believe in tax cuts, because I believe the government shouldn’t steal your money. I believe in peace, because I think the government shouldn’t get you killed. I believe in an end to the federal reserve, because the businessman knows business best."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3374,
                            "fields": {
                                "question": 360,
                                "description": "Kerry's saying this is our fault, and I hate to admit it, but he's right. Let's come out with a statement emphasizing bi-partisanship, and offer to work with the Democrats on a more moderate bailout package."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3375,
                            "fields": {
                                "question": 360,
                                "description": "This is the natural consequence of Kerry and Bush's big government philosophies. Both of them have fault for this crash, and it is past due we choose smaller government - not big and bigger."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3376,
                            "fields": {
                                "question": 360,
                                "description": "I'll express my every sympathy with the folks affected, and then invite myself on a tour of the Midwest. Kerry wants to define this issue? Let's not let him."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3381,
                            "fields": {
                                "question": 362,
                                "description": "If they were such a threat, they would have boosted Huckabee or Romney to the lead. Conservatism has returned to its Taft and Goldwater roots of an actual small government, and if Limbaugh won’t accept that, that’s his problem."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3382,
                            "fields": {
                                "question": 362,
                                "description": "Hm, I hate to admit it, but we’re in a bind here. Let’s stress our commitments to strong borders and tax cuts, and downplay our prior anti-war and states rights rhetoric."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3383,
                            "fields": {
                                "question": 362,
                                "description": "John Kerry has been a total disaster as president. I mean, he broke the economy! If someone wants to play “more conservative than thou” and risk another 4 destructive years of Kerry, then be my guest. But I won’t play along with this nonsense."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3385,
                            "fields": {
                                "question": 363,
                                "description": "I oppose efforts to redefine marriage as something other than a union between one man and one woman, at least on a federal level. Marriage is a sacred union, and as a Christian I would veto any bill that redefines marriage."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3386,
                            "fields": {
                                "question": 363,
                                "description": "Honestly, I don’t understand why the government is involved in marriage to begin with. Biblically and historically, the government was very uninvolved in marriage. I think we should go back to that."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3387,
                            "fields": {
                                "question": 363,
                                "description": "I would object to a federal definition of marriage, because liberals could use this to argue that marriage is a federal issue. So long as gays don’t impose their relations on others, I have no issues with the states handling the issue."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3389,
                            "fields": {
                                "question": 364,
                                "description": "Kerry’s vote buying scheme is dirty, and frankly pathetic. He’s trying to reel back voters with a plan that would cost billions with the same broken economics that led to this recession."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3397,
                            "fields": {
                                "question": 367,
                                "description": "Iowa is less targeted, I think it would be obvious we target there. I think my message of small government would really take root here."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3398,
                            "fields": {
                                "question": 367,
                                "description": "Iowa is less targeted, I think it would be obvious we target there. We should remind them that yes, I am a conservative - anti-abortion, pro-borders, that kind of thing."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3399,
                            "fields": {
                                "question": 367,
                                "description": "New Hampshire being targeted just means unique messaging will stick out more. I think we should take a few pages from McCain’s campaign 8 years ago, press our outsider message. Maybe talk about some of his reform ideas."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3400,
                            "fields": {
                                "question": 367,
                                "description": "New Hampshire being targeted just means unique messaging will stick out more. New England is kind of liberal - let’s focus on how I oppose the moralism that the rest of the party seems to advocate for."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3409,
                            "fields": {
                                "question": 370,
                                "description": "I don’t intend to do so. We can’t risk depressing the base by taking standard conservative positions - if I were to start talking like a Neo-Conservative, I’ll not make a dent into the bases of the other Neo-Cons and make my base stay home."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3410,
                            "fields": {
                                "question": 370,
                                "description": "I’m the candidate of small government. We’ll maintain and expand the Bush tax cuts and let business operate freely. This kind of appeal will work on every Republican, be they Neo, Paleo or like me."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3411,
                            "fields": {
                                "question": 370,
                                "description": "People may get the wrong idea about me. I’m a libertarian candidate, not a liberal candidate. I will maintain conservative values, in line with the morals that founded our nation."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3412,
                            "fields": {
                                "question": 370,
                                "description": "We can expand our base without compromising my other stances - guys like Alan Keyes are strong on the border, and we can marry our bases with our similar economic stances. We need to worry about our borders here at home, not worry about the borders around the world."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3429,
                            "fields": {
                                "question": 375,
                                "description": "When I was a doctor, I witnessed a fellow doctor perform a cesarean section, and pull out a fetus that weighed maybe 2 pounds. It was breathing and crying. And it was put in a bucket and set in the corner of the room, and everybody in the room just pretended that they didn't hear it until it died. That's what I think about abortion."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3430,
                            "fields": {
                                "question": 375,
                                "description": "I’m a former doctor that specializes in obstetrics and gynecology. I’ve personally worked around the clock to save a premature baby. There is never an excuse for an abortion - I oppose abortion, proudly, and I would work with Congress to put limits on the practice."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3431,
                            "fields": {
                                "question": 375,
                                "description": "Appointing judges that will overturn Roe v Wade is of paramount importance to me. However, I disavow some of the ideas I hear about federal abortion laws. This is an issue for the states to resolve."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3457,
                            "fields": {
                                "question": 382,
                                "description": "If there are weather changes, we're not going to be very good at regulating the weather. The needless interference in the free market the Democrats call for will be far more damaging then global warming could ever be."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3458,
                            "fields": {
                                "question": 382,
                                "description": "<i>If</i> global warming is a threat, then it’s the free market that’s best suited to deal with it. Let them find their own solutions instead pouring millions of taxpayer’s money in pointless subsidies and job destroying regulations."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3468,
                            "fields": {
                                "question": 385,
                                "description": "It’s vital I campaign against the bill. I know the Senate is split on the bill, but the House is against this - I’m part of the majority for once! This could go a long way to healing some divisions within the party. Let’s phone up Boehner and arrange a whole GOP riot against the bill."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3469,
                            "fields": {
                                "question": 385,
                                "description": "Well, I certainly support a stronger border. But with Kennedy’s health the way it is, insulting his final effort could backfire. If asked, I oppose it, but I won’t make it an issue this campaign."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3470,
                            "fields": {
                                "question": 385,
                                "description": "It could be controversial to come out against Kennedy’s final bill so heavily. Maybe my running mate can handle things?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3487,
                            "fields": {
                                "question": 391,
                                "description": "My plan is simple. We leave. I won’t listen to the generals, I’ll be the commander in chief. They’ll listen to me. We pull out right away, and put an end to the useless, expensive war."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3488,
                            "fields": {
                                "question": 391,
                                "description": "I would listen to the generals, but leaving would be my top priority. Paying for Iraq’s security during our own economic crisis would be foolishness. Our foreign policy has not made America safer, it has made us weaker and made us more enemies."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3489,
                            "fields": {
                                "question": 391,
                                "description": "My policy is controversial. I won’t hide it or downplay it, but I think we can play compare and contrast with John Kerry - and George Bush. How has President Kerry’s policy meaningfully differentiated from President Bushs?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3490,
                            "fields": {
                                "question": 392,
                                "description": "Let’s not beat around the bush - Allard served his purpose as soon as he hopped on board. Let him schmooze with donors for us and we use the money to hire more surrogates."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3491,
                            "fields": {
                                "question": 392,
                                "description": "We both disagree with John Kerry a good deal more than we disagree with each other. Isn’t the running mate supposed to be an attack dog anyway? Traditionally, I mean."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3492,
                            "fields": {
                                "question": 392,
                                "description": "Let’s just use him to criss-cross through the plains. As a Colorado man, he appeals to them better than I can."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3501,
                            "fields": {
                                "question": 397,
                                "description": "We need to be clear I’m not just spreading a message here. It’s shocking just how much money I was able to raise online, with very little effort and no formal announcement. There are people tired of politics as usual, and I intend to bring real change."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 3502,
                            "fields": {
                                "question": 397,
                                "description": "I’m the only alternative to the announced candidates, frankly. From McCain to Keyes to even Giuliani, they don’t offer a real change. If they win the nomination, they’re offering the American public the choice between big government and bigger government. I’m the only real advocate for a smaller government."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12242,
                            "fields": {
                                "question": 397,
                                "description": "We can focus on my record later. For the time being, we need to be clear that yes, I am conservative. I oppose abortion, President Kerry’s economic tyranny and big government."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12295,
                            "fields": {
                                "question": 348,
                                "description": "I won’t meet with Bush, the base would kill me. But we can allude to him, absolutely. Let’s make some headlines praising the idea behind No Child Left Behind and Bush’s tax cuts."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12299,
                            "fields": {
                                "question": 348,
                                "description": "Not only will I not meet with Bush, I’ll outright denounce him. George Bush represented the worst of the Republican, the same big government ideas proposed by the Democrats with even more spending thanks to his imperious behavior and an unprecedented assault on our freedoms."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12317,
                            "fields": {
                                "question": 350,
                                "description": "Who said “It’s the economy, stupid”? Clinton, right? Despite being a liberal, he was right there. We’re gonna cut your taxes, cut this inflation-inducing spending and knife through the regulations choking businesses. That’s how we get through this recession, freeing business, not through John Kerry’s socialism."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12322,
                            "fields": {
                                "question": 350,
                                "description": "My policy is on my website, people know where to look. For the debate, we just go on the attack. People are suffering while bank executives fly in private jets to demand tax payer money, and President Kerry gave it to them!"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12334,
                            "fields": {
                                "question": 352,
                                "description": "I will, proudly. It’s utterly unconstitutional. Where in the constitution does it say the Government has a right to take your money from your paycheck just so they can give you a percentage of it back later?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12344,
                            "fields": {
                                "question": 358,
                                "description": "We need to prevent this extreme expansion of government authority - I want Boehner and McConnell to stop this at all costs. No more left turns."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12376,
                            "fields": {
                                "question": 356,
                                "description": "I apologized for this before, and I’ll apologize for them again if I have to. I can’t defend them. But I can’t help but wonder why the newsletter is being discussed instead of the poor state John Kerry left the economy."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12434,
                            "fields": {
                                "question": 359,
                                "description": "I’ve been on Fox news a lot, but it’s evident that I need to branch out. Let’s go on late night TV. Nothing like a news show - how about SNL, Stephen Colbert and John Stewart?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12439,
                            "fields": {
                                "question": 359,
                                "description": "People are getting the wrong idea about me. They think I’m some kind of demented loon and libertarians are callous and selfish. I’m a libertarian because I care deeply about people, and I always have. Let’s make an ad with some of the mothers and kids I worked with as a doctor, and show people how much I care."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12445,
                            "fields": {
                                "question": 364,
                                "description": "President Kerry’s tax plan will cost $260 billion dollars. For context, when the entire Medicare program started, it was less than $8 billion. Even when accounting for inflation, that’s $44 billion. This continuous, bloated, tax and spend mentality got us into this massive crash. Fiscal responsibility will get us out."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12446,
                            "fields": {
                                "question": 364,
                                "description": "I have a healthcare plan as well - cuts to taxation and red tape. Your doctors will be able to treat you without having a federal bureaucrat staring over their shoulder, taking a piece of their cut, and you won’t have to deal with the bloated mess healthcare is now."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12466,
                            "fields": {
                                "question": 385,
                                "description": "It could be controversial to come out against Kennedy’s final bill so heavily. Maybe my running mate can handle things?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12482,
                            "fields": {
                                "question": 12481,
                                "description": "This could not be more blatant political interference with foreign policy. I’m glad we finally started to bring an end to this 6 year war, but the motives are obvious. Can we trust John Kerry to maintain this after the election?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12483,
                            "fields": {
                                "question": 12481,
                                "description": "We wouldn’t need to pull out of Iraq if we never arrived. President Kerry voted to invade Iraq, I voted against it. When I’m elected, I’ll finish this half measure and pull out entirely."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12484,
                            "fields": {
                                "question": 12481,
                                "description": "I’m glad I’ve been such an inspiration on President Kerry. Even he thinks my policies are right!"
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12499,
                            "fields": {
                                "question": 12498,
                                "description": "The Midwest, of course. I think we can really punch through the noise, and sell the union men on libertarian ideals."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12500,
                            "fields": {
                                "question": 12498,
                                "description": "These New England states - they're ripe for the libertarian message, and were our strongest base during the primaries."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12501,
                            "fields": {
                                "question": 12498,
                                "description": "The Southwest - it's the new battleground. We've been lagging behind in these states Bush did well in."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 12502,
                            "fields": {
                                "question": 12498,
                                "description": "Thanks to Limbaugh, Kerry's got a real shot in many of these upper South states. Let's shore them up."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 6000,
                            "fields": {
                                "question": 2000,
                                "description": "I think this is great. Let’s have him really stress this opposition to the egghead socialism being pushed by Kerry and Al Gore."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 6001,
                            "fields": {
                                "question": 2000,
                                "description": "We could be a little less pugnacious. No sense in antagonizing people that could vote for us based on our support for keeping the government out of bedrooms and such."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 6002,
                            "fields": {
                                "question": 2001,
                                "description": "How about New Mexico? Bush nearly won it four years ago, and Kerry and I have been trading blows over it."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 6003,
                            "fields": {
                                "question": 2001,
                                "description": "Pennsylvania is an integral part of any winning coalition, so let's pay it a little extra mind."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 6004,
                            "fields": {
                                "question": 2001,
                                "description": "Virginia hasn't been looking too solid, this year, but the fundamentals are ours - let's remind them of that."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 6005,
                            "fields": {
                                "question": 2001,
                                "description": "Michigan, of course. I know my programme of free trade puts me a bit at odds with them, but wev'e got plenty of other aces up our sleeve."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7000,
                            "fields": {
                                "question": 3000,
                                "description": "Let's hold a massive rally in San Francisco - it can only be good for our Congressional candidates, and it'll show the President that people will turn out even in so-called blue states."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7001,
                            "fields": {
                                "question": 3000,
                                "description": "Lord, it's hard to stay humble."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7002,
                            "fields": {
                                "question": 3000,
                                "description": "Well, uh - the Southwest? We could do some good work in New Mexico, Colorado, whatnot. I mean, we'll win them anyways."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7003,
                            "fields": {
                                "question": 3000,
                                "description": "The Midwest. You people are constantly hassling me about it, so let's shore it up."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7004,
                            "fields": {
                                "question": 3001,
                                "description": "New York. The media has always doubted my appeal with Black voters, but they're going to be ones to hand us the Democratic crown jewel."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7005,
                            "fields": {
                                "question": 3001,
                                "description": "We'll do an old school whistlestop tour in the Midwest. They respect the higher powers better than the urban states, and the fair trade message will resonate."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7006,
                            "fields": {
                                "question": 3001,
                                "description": "The Southwest have a lot of Latinos, right? They're faithful people. Kerry is an abortionist, and I'm not. They should be all they need to hear to ditch that so-called ''Catholic'' President."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7007,
                            "fields": {
                                "question": 3001,
                                "description": "Campaigning is tiring stuff. I'm heading home, and helping Janet with preparations for the party."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7008,
                            "fields": {
                                "question": 3002,
                                "description": "I think that we can do some really phenomenal things for our party on the West Coast - Washington and Oregon in particular. So-called blue states, well, I know a thing or two about winning blue states."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7009,
                            "fields": {
                                "question": 3002,
                                "description": "No matter what happens, New York City is my city. That's why I'm America's Mayor, and I wouldn't be much of a Mayor if I didn't stay faithful."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7010,
                            "fields": {
                                "question": 3002,
                                "description": "Connecticut, Delaware, and New Jersey. I'm winning them, and it won't be close, but that doesn't mean I can get complacent. So get me there."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7011,
                            "fields": {
                                "question": 3002,
                                "description": "Rush, that jackass, is threatening us in the South - well guess what, I won't be the first Republican to lose the South since... I don't even know. But I won't lose it."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7012,
                            "fields": {
                                "question": 6000,
                                "description": "I think seeing a woman run for the second highest office is a very good thing, and long overdue. I know I wouldn't be doing anything without Carol. Win or lose, this is a great sign for women everywhere in America."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7013,
                            "fields": {
                                "question": 6000,
                                "description": "I think it's very strange that President Kerry says one thing about homosexuals and Senator Landrieu says another thing. I don't feel comfortable with a ticket that has such a conflicting opinion on the issues."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7014,
                            "fields": {
                                "question": 6000,
                                "description": "I think it's very strange that President Kerry says one thing about homosexuals and Senator Landrieu says another thing. I don't feel comfortable with a ticket that has such a conflicting opinion on the issues."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7015,
                            "fields": {
                                "question": 6000,
                                "description": "Say, what exactly is Vice-President Edwards suffering from? There's been a total obfuscation from the White House about John Edwards. What on earth is happening? This is just another example of the powers that be hiding facts from the American public."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7016,
                            "fields": {
                                "question": 6000,
                                "description": "Senator Landrieu calls herself a moderate, but I'm not fooled. She's voted for abortions, tax hikes and gun grabbing. This ticket is the same far left socialism as 2004."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7017,
                            "fields": {
                                "question": 8000,
                                "description": "That is disgusting. I mean really disgusting! I'm gonna demand an apology for that kind of vile rhetoric. Even a shock jockey like him needs to know there are some lines you can't cross in a civilised country."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7018,
                            "fields": {
                                "question": 8000,
                                "description": "This absolutely disgusting. This is the opposite of the issues focused race I want. Let's call President Kerry, and hash out a bipartisan denouncement."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7019,
                            "fields": {
                                "question": 8000,
                                "description": "This is absurd and insulting. Let me put out a statement saying I have no intention of changing age of consent laws, and put this ugliness behind us."
                            }
                        },
                        {
                            "model": "campaign_trail.answer",
                            "pk": 7020,
                            "fields": {
                                "question": 8000,
                                "description": "He wants attention. We won't give him any. How <i>dare</i> he?"
                            }
                        },
                    ]
                    
                    
                    
                    campaignTrail_temp.states_json = [
                        {
                            "model": "campaign_trail.state",
                            "pk": 181,
                            "fields": {
                                "name": "Alabama",
                                "abbr": "AL",
                                "electoral_votes": 9,
                                "popular_votes": 2099819,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 182,
                            "fields": {
                                "name": "Alaska",
                                "abbr": "AK",
                                "electoral_votes": 3,
                                "popular_votes": 326197,
                                "poll_closing_time": 420,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 183,
                            "fields": {
                                "name": "Arizona",
                                "abbr": "AZ",
                                "electoral_votes": 10,
                                "popular_votes": 2293475,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 184,
                            "fields": {
                                "name": "Arkansas",
                                "abbr": "AR",
                                "electoral_votes": 6,
                                "popular_votes": 1086617,
                                "poll_closing_time": 150,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 185,
                            "fields": {
                                "name": "California",
                                "abbr": "CA",
                                "electoral_votes": 55,
                                "popular_votes": 13561900,
                                "poll_closing_time": 300,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 186,
                            "fields": {
                                "name": "Colorado",
                                "abbr": "CO",
                                "electoral_votes": 9,
                                "popular_votes": 2401462,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 187,
                            "fields": {
                                "name": "Connecticut",
                                "abbr": "CT",
                                "electoral_votes": 7,
                                "popular_votes": 1646797,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 188,
                            "fields": {
                                "name": "Delaware",
                                "abbr": "DE",
                                "electoral_votes": 3,
                                "popular_votes": 412412,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 189,
                            "fields": {
                                "name": "Florida",
                                "abbr": "FL",
                                "electoral_votes": 27,
                                "popular_votes": 8390744,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 190,
                            "fields": {
                                "name": "Georgia",
                                "abbr": "GA",
                                "electoral_votes": 15,
                                "popular_votes": 3924486,
                                "poll_closing_time": 60,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 191,
                            "fields": {
                                "name": "Hawaii",
                                "abbr": "HI",
                                "electoral_votes": 4,
                                "popular_votes": 453568,
                                "poll_closing_time": 360,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 192,
                            "fields": {
                                "name": "Idaho",
                                "abbr": "ID",
                                "electoral_votes": 4,
                                "popular_votes": 655122,
                                "poll_closing_time": 300,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 193,
                            "fields": {
                                "name": "Illinois",
                                "abbr": "IL",
                                "electoral_votes": 21,
                                "popular_votes": 5522371,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 194,
                            "fields": {
                                "name": "Indiana",
                                "abbr": "IN",
                                "electoral_votes": 11,
                                "popular_votes": 2751054,
                                "poll_closing_time": 0,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 195,
                            "fields": {
                                "name": "Iowa",
                                "abbr": "IA",
                                "electoral_votes": 7,
                                "popular_votes": 1537123,
                                "poll_closing_time": 240,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 196,
                            "fields": {
                                "name": "Kansas",
                                "abbr": "KS",
                                "electoral_votes": 6,
                                "popular_votes": 1235872,
                                "poll_closing_time": 240,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 197,
                            "fields": {
                                "name": "Kentucky",
                                "abbr": "KY",
                                "electoral_votes": 8,
                                "popular_votes": 1826620,
                                "poll_closing_time": 0,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 198,
                            "fields": {
                                "name": "Louisiana",
                                "abbr": "LA",
                                "electoral_votes": 9,
                                "popular_votes": 1960761,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 199,
                            "fields": {
                                "name": "Maine",
                                "abbr": "ME",
                                "electoral_votes": 4,
                                "popular_votes": 731163,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 0,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 200,
                            "fields": {
                                "name": "Maryland",
                                "abbr": "MD",
                                "electoral_votes": 10,
                                "popular_votes": 2631596,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 201,
                            "fields": {
                                "name": "Massachusetts",
                                "abbr": "MA",
                                "electoral_votes": 12,
                                "popular_votes": 3080985,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 202,
                            "fields": {
                                "name": "Michigan",
                                "abbr": "MI",
                                "electoral_votes": 17,
                                "popular_votes": 5001766,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 203,
                            "fields": {
                                "name": "Minnesota",
                                "abbr": "MN",
                                "electoral_votes": 10,
                                "popular_votes": 2910369,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 204,
                            "fields": {
                                "name": "Mississippi",
                                "abbr": "MS",
                                "electoral_votes": 6,
                                "popular_votes": 1289865,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 205,
                            "fields": {
                                "name": "Missouri",
                                "abbr": "MO",
                                "electoral_votes": 11,
                                "popular_votes": 2925205,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 206,
                            "fields": {
                                "name": "Montana",
                                "abbr": "MT",
                                "electoral_votes": 3,
                                "popular_votes": 490302,
                                "poll_closing_time": 240,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 207,
                            "fields": {
                                "name": "Nebraska",
                                "abbr": "NE",
                                "electoral_votes": 5,
                                "popular_votes": 801281,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 0,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 208,
                            "fields": {
                                "name": "Nevada",
                                "abbr": "NV",
                                "electoral_votes": 5,
                                "popular_votes": 967848,
                                "poll_closing_time": 240,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 209,
                            "fields": {
                                "name": "New Hampshire",
                                "abbr": "NH",
                                "electoral_votes": 4,
                                "popular_votes": 710970,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 210,
                            "fields": {
                                "name": "New Jersey",
                                "abbr": "NJ",
                                "electoral_votes": 15,
                                "popular_votes": 3868237,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 211,
                            "fields": {
                                "name": "New Mexico",
                                "abbr": "NM",
                                "electoral_votes": 5,
                                "popular_votes": 830158,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 212,
                            "fields": {
                                "name": "New York",
                                "abbr": "NY",
                                "electoral_votes": 31,
                                "popular_votes": 7640931,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 213,
                            "fields": {
                                "name": "North Carolina",
                                "abbr": "NC",
                                "electoral_votes": 15,
                                "popular_votes": 4310789,
                                "poll_closing_time": 90,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 214,
                            "fields": {
                                "name": "North Dakota",
                                "abbr": "ND",
                                "electoral_votes": 3,
                                "popular_votes": 316621,
                                "poll_closing_time": 300,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 215,
                            "fields": {
                                "name": "Ohio",
                                "abbr": "OH",
                                "electoral_votes": 20,
                                "popular_votes": 5708350,
                                "poll_closing_time": 90,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 216,
                            "fields": {
                                "name": "Oklahoma",
                                "abbr": "OK",
                                "electoral_votes": 7,
                                "popular_votes": 1462661,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 217,
                            "fields": {
                                "name": "Oregon",
                                "abbr": "OR",
                                "electoral_votes": 7,
                                "popular_votes": 1827864,
                                "poll_closing_time": 300,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 218,
                            "fields": {
                                "name": "Pennsylvania",
                                "abbr": "PA",
                                "electoral_votes": 21,
                                "popular_votes": 6013272,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 219,
                            "fields": {
                                "name": "Rhode Island",
                                "abbr": "RI",
                                "electoral_votes": 4,
                                "popular_votes": 471766,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 220,
                            "fields": {
                                "name": "South Carolina",
                                "abbr": "SC",
                                "electoral_votes": 8,
                                "popular_votes": 1920969,
                                "poll_closing_time": 60,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 221,
                            "fields": {
                                "name": "South Dakota",
                                "abbr": "SD",
                                "electoral_votes": 3,
                                "popular_votes": 381975,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 222,
                            "fields": {
                                "name": "Tennessee",
                                "abbr": "TN",
                                "electoral_votes": 11,
                                "popular_votes": 2599749,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 223,
                            "fields": {
                                "name": "Texas",
                                "abbr": "TX",
                                "electoral_votes": 34,
                                "popular_votes": 8077795,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 224,
                            "fields": {
                                "name": "Utah",
                                "abbr": "UT",
                                "electoral_votes": 5,
                                "popular_votes": 952370,
                                "poll_closing_time": 240,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 225,
                            "fields": {
                                "name": "Vermont",
                                "abbr": "VT",
                                "electoral_votes": 3,
                                "popular_votes": 325046,
                                "poll_closing_time": 60,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 226,
                            "fields": {
                                "name": "Virginia",
                                "abbr": "VA",
                                "electoral_votes": 13,
                                "popular_votes": 3723260,
                                "poll_closing_time": 60,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 227,
                            "fields": {
                                "name": "Washington",
                                "abbr": "WA",
                                "electoral_votes": 11,
                                "popular_votes": 3036878,
                                "poll_closing_time": 300,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 228,
                            "fields": {
                                "name": "Washington DC",
                                "abbr": "DC",
                                "electoral_votes": 3,
                                "popular_votes": 265853,
                                "poll_closing_time": 120,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 229,
                            "fields": {
                                "name": "West Virginia",
                                "abbr": "WV",
                                "electoral_votes": 5,
                                "popular_votes": 713451,
                                "poll_closing_time": 90,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 230,
                            "fields": {
                                "name": "Wisconsin",
                                "abbr": "WI",
                                "electoral_votes": 10,
                                "popular_votes": 2983417,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.state",
                            "pk": 231,
                            "fields": {
                                "name": "Wyoming",
                                "abbr": "WY",
                                "electoral_votes": 3,
                                "popular_votes": 254658,
                                "poll_closing_time": 180,
                                "winner_take_all_flg": 1,
                                "election": 9
                            }
                        }
                    ]
                
                    campaignTrail_temp.issues_json = [
                        {
                            "model": "campaign_trail.issue",
                            "pk": 27,
                            "fields": {
                                "name": "Economy",
                                "description": "The economy is set to be the defining issue of this election - who exactly has the advantage here however is unclear. On the one hand, Kerry caused this mess and his liberal solutions are controversial. On the other hand, Ron Paul's solutions are to the average observer completely insane, but promise to be the shock therapy this nation needs after decades of complacency \n",
                                "stance_1": "Reovloution",
                                "stance_desc_1": "RON PAUL IS RIGHT, END THE FED\n",
                                "stance_2": "Conservative",
                                "stance_desc_2": "When you have money issues, you don't spend money! Liberals may have forgotten common sense, but this state sure hasn't.\n",
                                "stance_3": "Conservative",
                                "stance_desc_3": "When you have money issues, you don't spend money! Liberals may have forgotten common sense, but this state sure hasn't.\n",
                                "stance_4": "Moderate",
                                "stance_desc_4": "This state isn't sure how to solve the current economic issues, and will approve of any major policy to fix their woes.\n",
                                "stance_5": "Moderate",
                                "stance_desc_5": "This state isn't sure how to solve the current economic issues, and will approve of any major policy to fix their woes.\n",
                                "stance_6": "Liberal",
                                "stance_desc_6": "You need to spend money to make money, that's just common sense. Bailouts and relief are both the humane and practical solution.\n",
                                "stance_7": "Liberal",
                                "stance_desc_7": "You need to spend money to make money, that's just common sense. Bailouts and relief are both the humane and practical solution.\n",
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.issue",
                            "pk": 28,
                            "fields": {
                                "name": "Foreign Policy",
                                "description": "With two wars built on criminality and lies still raging, foreign policy remains important even in this post-cold war America. Kerry is widely considered to hold the advantage. \n",
                                "stance_1": "Wilsonian",
                                "stance_desc_1": "God made America to serve as an example to all other nations. America simply must spread democracy - to do less is blaspheming.\n",
                                "stance_2": "Neo-Conservative",
                                "stance_desc_2": "America has been the spreader and defender of democracy since they beat up Hitler. Whining from liberals won’t change this.\n",
                                "stance_3": "Neo-Conservative",
                                "stance_desc_3": "America has been the spreader and defender of democracy since they beat up Hitler. Whining from liberals won’t change this.\n",
                                "stance_4": "Liberal",
                                "stance_desc_4": "While America has a duty to global democracy, it has a duty to NATO and the UN as well. This state opposes imperious action, but supports actually spreading democracy.\n",
                                "stance_5": "Liberal",
                                "stance_desc_5": "While America has a duty to global democracy, it has a duty to NATO and the UN as well. This state opposes imperious action, but supports actually spreading democracy.\n",
                                "stance_6": "Withdrawal",
                                "stance_desc_6": "America has bigger issues than making sure Islamabad or whatever has ballots, and this state is just tired of the expensive waste of blood. \n",
                                "stance_7": "Withdrawal",
                                "stance_desc_7": "America has bigger issues than making sure Islamabad or whatever has ballots, and this state is just tired of the expensive waste of blood. \n",
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.issue",
                            "pk": 29,
                            "fields": {
                                "name": "Social Issues",
                                "description": "Gay relations, abortion, feminism - 1970 or 2000, the issues remain as thorny as ever. These issues remain firmly polarised, with certain states having the stances you would expect on them.\n",
                                "stance_1": "Godfearing",
                                "stance_desc_1": "It’s Adam and Eve, not Adam and Steve. Woman was made out of Man’s rib, she must be subservient. And different folks belong together. Simple as.\n",
                                "stance_2": "Godfearing",
                                "stance_desc_2": "It’s Adam and Eve, not Adam and Steve. Woman was made out of Man’s rib, she must be subservient. And different folks belong together. Simple as.\n",
                                "stance_3": "Moralist",
                                "stance_desc_3": "People should be free to do what they want behind closed doors, but some things should be kept private. \n",
                                "stance_4": "Moralist",
                                "stance_desc_4": "People should be free to do what they want behind closed doors, but some things should be kept private. \n",
                                "stance_5": "Live And Let Live",
                                "stance_desc_5": "It’s really no one’s business what one does in their time. But at the same time, this state is aware that homosexual relations are different to normal ones. \n",
                                "stance_6": "Live And Let Live",
                                "stance_desc_6": "It’s really no one’s business what one does in their time. But at the same time, this state is aware that homosexual relations are different to normal ones. \n",
                                "stance_7": "Equality For All",
                                "stance_desc_7": "If America is to truly live up to its ideals of a free country, that means religion must be kept very firmly out of the bedroom.",
                                "election": 9
                            }
                        },
                        {
                            "model": "campaign_trail.issue",
                            "pk": 30,
                            "fields": {
                                "name": "President Kerry",
                                "description": "John Kerry won the presidency, but lost the popular vote and has endured a ruby red congress for his whole presidency. Who exactly is to blame for the dysfunction that’s followed is debated.\n",
                                "stance_1": "Liberal Weiner",
                                "stance_desc_1": "As always, Bush was right. John Kerry was nothing more than a tax raising, surrendering Massachusetts liberal.\n",
                                "stance_2": "Liberal Weiner",
                                "stance_desc_2": "As always, Bush was right. John Kerry was nothing more than a tax raising, surrendering Massachusetts liberal.\n",
                                "stance_3": "Just Another Politician",
                                "stance_desc_3": "As always, Bush was right. John Kerry was nothing more than a tax raising, surrendering Massachusetts liberal \n",
                                "stance_4": "Just Another Politician",
                                "stance_desc_4": "As always, Bush was right. John Kerry was nothing more than a tax raising, surrendering Massachusetts liberal \n",
                                "stance_5": "Sensible Problem Solver",
                                "stance_desc_5": "Kerry is little L liberal - he may have certain beliefs, but he’s willing to compromise. A shame Congress isn’t! \n",
                                "stance_6": "Sensible Problem Solver",
                                "stance_desc_6": "Kerry is little L liberal - he may have certain beliefs, but he’s willing to compromise. A shame Congress isn’t! \n",
                                "stance_7": "Our Saviour",
                                "stance_desc_7": "John Kerry has brilliant solutions to all of today's issues",
                                "election": 9
                            }
                        }
                    ]
                
                    campaignTrail_temp.state_issue_score_json = [
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 868,
                            "fields": {
                                "state": 181,
                                "issue": 27,
                                "state_issue_score": -0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 869,
                            "fields": {
                                "state": 181,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 870,
                            "fields": {
                                "state": 181,
                                "issue": 29,
                                "state_issue_score": -0.9,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 871,
                            "fields": {
                                "state": 181,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 873,
                            "fields": {
                                "state": 182,
                                "issue": 27,
                                "state_issue_score": -0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 874,
                            "fields": {
                                "state": 182,
                                "issue": 28,
                                "state_issue_score": -0.4,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 875,
                            "fields": {
                                "state": 182,
                                "issue": 29,
                                "state_issue_score": -0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 876,
                            "fields": {
                                "state": 182,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 878,
                            "fields": {
                                "state": 183,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 879,
                            "fields": {
                                "state": 183,
                                "issue": 28,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 880,
                            "fields": {
                                "state": 183,
                                "issue": 29,
                                "state_issue_score": -0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 881,
                            "fields": {
                                "state": 183,
                                "issue": 30,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 883,
                            "fields": {
                                "state": 184,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 884,
                            "fields": {
                                "state": 184,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 885,
                            "fields": {
                                "state": 184,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 886,
                            "fields": {
                                "state": 184,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 888,
                            "fields": {
                                "state": 185,
                                "issue": 27,
                                "state_issue_score": 0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 889,
                            "fields": {
                                "state": 185,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 890,
                            "fields": {
                                "state": 185,
                                "issue": 29,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 891,
                            "fields": {
                                "state": 185,
                                "issue": 30,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 893,
                            "fields": {
                                "state": 186,
                                "issue": 27,
                                "state_issue_score": 0.1,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 894,
                            "fields": {
                                "state": 186,
                                "issue": 28,
                                "state_issue_score": -0.1,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 895,
                            "fields": {
                                "state": 186,
                                "issue": 29,
                                "state_issue_score": 0.25,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 896,
                            "fields": {
                                "state": 186,
                                "issue": 30,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 898,
                            "fields": {
                                "state": 187,
                                "issue": 27,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 899,
                            "fields": {
                                "state": 187,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 900,
                            "fields": {
                                "state": 187,
                                "issue": 29,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 901,
                            "fields": {
                                "state": 187,
                                "issue": 30,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 903,
                            "fields": {
                                "state": 188,
                                "issue": 27,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 904,
                            "fields": {
                                "state": 188,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 905,
                            "fields": {
                                "state": 188,
                                "issue": 29,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 906,
                            "fields": {
                                "state": 188,
                                "issue": 30,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 908,
                            "fields": {
                                "state": 189,
                                "issue": 27,
                                "state_issue_score": -0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 909,
                            "fields": {
                                "state": 189,
                                "issue": 28,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 910,
                            "fields": {
                                "state": 189,
                                "issue": 29,
                                "state_issue_score": -0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 911,
                            "fields": {
                                "state": 189,
                                "issue": 30,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 913,
                            "fields": {
                                "state": 190,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 914,
                            "fields": {
                                "state": 190,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 915,
                            "fields": {
                                "state": 190,
                                "issue": 29,
                                "state_issue_score": -0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 916,
                            "fields": {
                                "state": 190,
                                "issue": 30,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 918,
                            "fields": {
                                "state": 191,
                                "issue": 27,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 919,
                            "fields": {
                                "state": 191,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 920,
                            "fields": {
                                "state": 191,
                                "issue": 29,
                                "state_issue_score": 0.9,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 921,
                            "fields": {
                                "state": 191,
                                "issue": 30,
                                "state_issue_score": 0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 923,
                            "fields": {
                                "state": 192,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 924,
                            "fields": {
                                "state": 192,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 925,
                            "fields": {
                                "state": 192,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 926,
                            "fields": {
                                "state": 192,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 928,
                            "fields": {
                                "state": 193,
                                "issue": 27,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 929,
                            "fields": {
                                "state": 193,
                                "issue": 28,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 930,
                            "fields": {
                                "state": 193,
                                "issue": 29,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 931,
                            "fields": {
                                "state": 193,
                                "issue": 30,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 933,
                            "fields": {
                                "state": 194,
                                "issue": 27,
                                "state_issue_score": -0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 934,
                            "fields": {
                                "state": 194,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 935,
                            "fields": {
                                "state": 194,
                                "issue": 29,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 936,
                            "fields": {
                                "state": 194,
                                "issue": 30,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 938,
                            "fields": {
                                "state": 195,
                                "issue": 27,
                                "state_issue_score": -0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 939,
                            "fields": {
                                "state": 195,
                                "issue": 28,
                                "state_issue_score": -0.4,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 940,
                            "fields": {
                                "state": 195,
                                "issue": 29,
                                "state_issue_score": -0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 941,
                            "fields": {
                                "state": 195,
                                "issue": 30,
                                "state_issue_score": -0.3,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 943,
                            "fields": {
                                "state": 196,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 944,
                            "fields": {
                                "state": 196,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 945,
                            "fields": {
                                "state": 196,
                                "issue": 29,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 946,
                            "fields": {
                                "state": 196,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 948,
                            "fields": {
                                "state": 197,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 949,
                            "fields": {
                                "state": 197,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 950,
                            "fields": {
                                "state": 197,
                                "issue": 29,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 951,
                            "fields": {
                                "state": 197,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 953,
                            "fields": {
                                "state": 198,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 954,
                            "fields": {
                                "state": 198,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 955,
                            "fields": {
                                "state": 198,
                                "issue": 29,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 956,
                            "fields": {
                                "state": 198,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 958,
                            "fields": {
                                "state": 199,
                                "issue": 27,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 959,
                            "fields": {
                                "state": 199,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 960,
                            "fields": {
                                "state": 199,
                                "issue": 29,
                                "state_issue_score": 0.1,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 961,
                            "fields": {
                                "state": 199,
                                "issue": 30,
                                "state_issue_score": -0.3,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 963,
                            "fields": {
                                "state": 200,
                                "issue": 27,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 964,
                            "fields": {
                                "state": 200,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 965,
                            "fields": {
                                "state": 200,
                                "issue": 29,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 966,
                            "fields": {
                                "state": 200,
                                "issue": 30,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 968,
                            "fields": {
                                "state": 201,
                                "issue": 27,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 969,
                            "fields": {
                                "state": 201,
                                "issue": 28,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 970,
                            "fields": {
                                "state": 201,
                                "issue": 29,
                                "state_issue_score": 0.9,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 971,
                            "fields": {
                                "state": 201,
                                "issue": 30,
                                "state_issue_score": 0.9,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 973,
                            "fields": {
                                "state": 202,
                                "issue": 27,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 974,
                            "fields": {
                                "state": 202,
                                "issue": 28,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 975,
                            "fields": {
                                "state": 202,
                                "issue": 29,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 976,
                            "fields": {
                                "state": 202,
                                "issue": 30,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 978,
                            "fields": {
                                "state": 203,
                                "issue": 27,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 979,
                            "fields": {
                                "state": 203,
                                "issue": 28,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 980,
                            "fields": {
                                "state": 203,
                                "issue": 29,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 981,
                            "fields": {
                                "state": 203,
                                "issue": 30,
                                "state_issue_score": 0.4,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 983,
                            "fields": {
                                "state": 204,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 984,
                            "fields": {
                                "state": 204,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 985,
                            "fields": {
                                "state": 204,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 986,
                            "fields": {
                                "state": 204,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 988,
                            "fields": {
                                "state": 205,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 989,
                            "fields": {
                                "state": 205,
                                "issue": 28,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 990,
                            "fields": {
                                "state": 205,
                                "issue": 29,
                                "state_issue_score": -0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 991,
                            "fields": {
                                "state": 205,
                                "issue": 30,
                                "state_issue_score": -0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 993,
                            "fields": {
                                "state": 206,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 994,
                            "fields": {
                                "state": 206,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 995,
                            "fields": {
                                "state": 206,
                                "issue": 29,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 996,
                            "fields": {
                                "state": 206,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 998,
                            "fields": {
                                "state": 207,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 999,
                            "fields": {
                                "state": 207,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1000,
                            "fields": {
                                "state": 207,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1001,
                            "fields": {
                                "state": 207,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1003,
                            "fields": {
                                "state": 208,
                                "issue": 27,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1004,
                            "fields": {
                                "state": 208,
                                "issue": 28,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1005,
                            "fields": {
                                "state": 208,
                                "issue": 29,
                                "state_issue_score": 0.4,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1006,
                            "fields": {
                                "state": 208,
                                "issue": 30,
                                "state_issue_score": -0.3,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1008,
                            "fields": {
                                "state": 209,
                                "issue": 27,
                                "state_issue_score": 0.1,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1009,
                            "fields": {
                                "state": 209,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1010,
                            "fields": {
                                "state": 209,
                                "issue": 29,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1011,
                            "fields": {
                                "state": 209,
                                "issue": 30,
                                "state_issue_score": 0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1013,
                            "fields": {
                                "state": 210,
                                "issue": 27,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1014,
                            "fields": {
                                "state": 210,
                                "issue": 28,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1015,
                            "fields": {
                                "state": 210,
                                "issue": 29,
                                "state_issue_score": 0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1016,
                            "fields": {
                                "state": 210,
                                "issue": 30,
                                "state_issue_score": 0.55,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1018,
                            "fields": {
                                "state": 211,
                                "issue": 27,
                                "state_issue_score": 0.35,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1019,
                            "fields": {
                                "state": 211,
                                "issue": 28,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1020,
                            "fields": {
                                "state": 211,
                                "issue": 29,
                                "state_issue_score": 0.25,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1021,
                            "fields": {
                                "state": 211,
                                "issue": 30,
                                "state_issue_score": 0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1023,
                            "fields": {
                                "state": 212,
                                "issue": 27,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1024,
                            "fields": {
                                "state": 212,
                                "issue": 28,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1025,
                            "fields": {
                                "state": 212,
                                "issue": 29,
                                "state_issue_score": 0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1026,
                            "fields": {
                                "state": 212,
                                "issue": 30,
                                "state_issue_score": 0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1028,
                            "fields": {
                                "state": 213,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1029,
                            "fields": {
                                "state": 213,
                                "issue": 28,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1030,
                            "fields": {
                                "state": 213,
                                "issue": 29,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1031,
                            "fields": {
                                "state": 213,
                                "issue": 30,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1033,
                            "fields": {
                                "state": 214,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1034,
                            "fields": {
                                "state": 214,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1035,
                            "fields": {
                                "state": 214,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1036,
                            "fields": {
                                "state": 214,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1038,
                            "fields": {
                                "state": 215,
                                "issue": 27,
                                "state_issue_score": 0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1039,
                            "fields": {
                                "state": 215,
                                "issue": 28,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1040,
                            "fields": {
                                "state": 215,
                                "issue": 29,
                                "state_issue_score": -0.35,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1041,
                            "fields": {
                                "state": 215,
                                "issue": 30,
                                "state_issue_score": -0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1043,
                            "fields": {
                                "state": 216,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1044,
                            "fields": {
                                "state": 216,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1045,
                            "fields": {
                                "state": 216,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1046,
                            "fields": {
                                "state": 216,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1048,
                            "fields": {
                                "state": 217,
                                "issue": 27,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1049,
                            "fields": {
                                "state": 217,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1050,
                            "fields": {
                                "state": 217,
                                "issue": 29,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1051,
                            "fields": {
                                "state": 217,
                                "issue": 30,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1053,
                            "fields": {
                                "state": 218,
                                "issue": 27,
                                "state_issue_score": 0.3,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1054,
                            "fields": {
                                "state": 218,
                                "issue": 28,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1055,
                            "fields": {
                                "state": 218,
                                "issue": 29,
                                "state_issue_score": 0.1,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1056,
                            "fields": {
                                "state": 218,
                                "issue": 30,
                                "state_issue_score": -0.3,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1058,
                            "fields": {
                                "state": 219,
                                "issue": 27,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1059,
                            "fields": {
                                "state": 219,
                                "issue": 28,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1060,
                            "fields": {
                                "state": 219,
                                "issue": 29,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1061,
                            "fields": {
                                "state": 219,
                                "issue": 30,
                                "state_issue_score": 0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1063,
                            "fields": {
                                "state": 220,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1064,
                            "fields": {
                                "state": 220,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1065,
                            "fields": {
                                "state": 220,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1066,
                            "fields": {
                                "state": 220,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1068,
                            "fields": {
                                "state": 221,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1069,
                            "fields": {
                                "state": 221,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1070,
                            "fields": {
                                "state": 221,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1071,
                            "fields": {
                                "state": 221,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1073,
                            "fields": {
                                "state": 222,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1074,
                            "fields": {
                                "state": 222,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1075,
                            "fields": {
                                "state": 222,
                                "issue": 29,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1076,
                            "fields": {
                                "state": 222,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1078,
                            "fields": {
                                "state": 223,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1079,
                            "fields": {
                                "state": 223,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1080,
                            "fields": {
                                "state": 223,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1081,
                            "fields": {
                                "state": 223,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1083,
                            "fields": {
                                "state": 224,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1084,
                            "fields": {
                                "state": 224,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1085,
                            "fields": {
                                "state": 224,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1086,
                            "fields": {
                                "state": 224,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1088,
                            "fields": {
                                "state": 225,
                                "issue": 27,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1089,
                            "fields": {
                                "state": 225,
                                "issue": 28,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1090,
                            "fields": {
                                "state": 225,
                                "issue": 29,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1091,
                            "fields": {
                                "state": 225,
                                "issue": 30,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1093,
                            "fields": {
                                "state": 226,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1094,
                            "fields": {
                                "state": 226,
                                "issue": 28,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1095,
                            "fields": {
                                "state": 226,
                                "issue": 29,
                                "state_issue_score": -0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1096,
                            "fields": {
                                "state": 226,
                                "issue": 30,
                                "state_issue_score": -0.2,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1098,
                            "fields": {
                                "state": 227,
                                "issue": 27,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1099,
                            "fields": {
                                "state": 227,
                                "issue": 28,
                                "state_issue_score": 0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1100,
                            "fields": {
                                "state": 227,
                                "issue": 29,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1101,
                            "fields": {
                                "state": 227,
                                "issue": 30,
                                "state_issue_score": 0.6,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1103,
                            "fields": {
                                "state": 228,
                                "issue": 27,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1104,
                            "fields": {
                                "state": 228,
                                "issue": 28,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1105,
                            "fields": {
                                "state": 228,
                                "issue": 29,
                                "state_issue_score": 1,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1106,
                            "fields": {
                                "state": 228,
                                "issue": 30,
                                "state_issue_score": 0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1108,
                            "fields": {
                                "state": 229,
                                "issue": 27,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1109,
                            "fields": {
                                "state": 229,
                                "issue": 28,
                                "state_issue_score": -0.5,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1110,
                            "fields": {
                                "state": 229,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1111,
                            "fields": {
                                "state": 229,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1113,
                            "fields": {
                                "state": 230,
                                "issue": 27,
                                "state_issue_score": 0.3,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1114,
                            "fields": {
                                "state": 230,
                                "issue": 28,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1115,
                            "fields": {
                                "state": 230,
                                "issue": 29,
                                "state_issue_score": 0.1,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1116,
                            "fields": {
                                "state": 230,
                                "issue": 30,
                                "state_issue_score": 0,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1118,
                            "fields": {
                                "state": 231,
                                "issue": 27,
                                "state_issue_score": -0.7,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1119,
                            "fields": {
                                "state": 231,
                                "issue": 28,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1120,
                            "fields": {
                                "state": 231,
                                "issue": 29,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        },
                        {
                            "model": "campaign_trail.state_issue_score",
                            "pk": 1121,
                            "fields": {
                                "state": 231,
                                "issue": 30,
                                "state_issue_score": -0.8,
                                "weight": 1
                            }
                        }
                    ]
                
                    campaignTrail_temp.candidate_issue_score_json = [
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 258,
                            "fields": {
                                "candidate": 77,
                                "issue": 27,
                                "issue_score": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 259,
                            "fields": {
                                "candidate": 77,
                                "issue": 28,
                                "issue_score": 0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 260,
                            "fields": {
                                "candidate": 77,
                                "issue": 29,
                                "issue_score": -0.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 261,
                            "fields": {
                                "candidate": 77,
                                "issue": 30,
                                "issue_score": -0.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 263,
                            "fields": {
                                "candidate": 78,
                                "issue": 27,
                                "issue_score": 0.6
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 264,
                            "fields": {
                                "candidate": 78,
                                "issue": 28,
                                "issue_score": -0.4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 265,
                            "fields": {
                                "candidate": 78,
                                "issue": 29,
                                "issue_score": 0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 266,
                            "fields": {
                                "candidate": 78,
                                "issue": 30,
                                "issue_score": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 268,
                            "fields": {
                                "candidate": 79,
                                "issue": 27,
                                "issue_score": 0.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 269,
                            "fields": {
                                "candidate": 79,
                                "issue": 28,
                                "issue_score": 0.75
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 270,
                            "fields": {
                                "candidate": 79,
                                "issue": 29,
                                "issue_score": 0.75
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 271,
                            "fields": {
                                "candidate": 79,
                                "issue": 30,
                                "issue_score": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 273,
                            "fields": {
                                "candidate": 80,
                                "issue": 27,
                                "issue_score": -0.4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 274,
                            "fields": {
                                "candidate": 80,
                                "issue": 28,
                                "issue_score": -0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 275,
                            "fields": {
                                "candidate": 80,
                                "issue": 29,
                                "issue_score": -0.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 276,
                            "fields": {
                                "candidate": 80,
                                "issue": 30,
                                "issue_score": -1
                            }
                        }
                    ]
                
                    campaignTrail_temp.running_mate_issue_score_json = [
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 298,
                            "fields": {
                                "candidate": 85,
                                "issue": 27,
                                "issue_score": -1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 299,
                            "fields": {
                                "candidate": 85,
                                "issue": 28,
                                "issue_score": 0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 300,
                            "fields": {
                                "candidate": 85,
                                "issue": 29,
                                "issue_score": -0.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_issue_score",
                            "pk": 301,
                            "fields": {
                                "candidate": 85,
                                "issue": 30,
                                "issue_score": -0.8
                            }
                        }
                    ]
                
                    campaignTrail_temp.candidate_state_multiplier_json = [
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 676,
                            "fields": {
                                "candidate": 77,
                                "state": 181,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 677,
                            "fields": {
                                "candidate": 77,
                                "state": 182,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 678,
                            "fields": {
                                "candidate": 77,
                                "state": 183,
                                "state_multiplier": 0.85
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 679,
                            "fields": {
                                "candidate": 77,
                                "state": 184,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 680,
                            "fields": {
                                "candidate": 77,
                                "state": 185,
                                "state_multiplier": 1.65
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 681,
                            "fields": {
                                "candidate": 77,
                                "state": 186,
                                "state_multiplier": 1.12
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 682,
                            "fields": {
                                "candidate": 77,
                                "state": 187,
                                "state_multiplier": 1.5
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 683,
                            "fields": {
                                "candidate": 77,
                                "state": 188,
                                "state_multiplier": 1.35
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 684,
                            "fields": {
                                "candidate": 77,
                                "state": 189,
                                "state_multiplier": 1.2
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 685,
                            "fields": {
                                "candidate": 77,
                                "state": 190,
                                "state_multiplier": 1.04
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 686,
                            "fields": {
                                "candidate": 77,
                                "state": 191,
                                "state_multiplier": 1.5
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 687,
                            "fields": {
                                "candidate": 77,
                                "state": 192,
                                "state_multiplier": 0.4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 688,
                            "fields": {
                                "candidate": 77,
                                "state": 193,
                                "state_multiplier": 1.4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 689,
                            "fields": {
                                "candidate": 77,
                                "state": 194,
                                "state_multiplier": 1.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 690,
                            "fields": {
                                "candidate": 77,
                                "state": 195,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 691,
                            "fields": {
                                "candidate": 77,
                                "state": 196,
                                "state_multiplier": 0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 692,
                            "fields": {
                                "candidate": 77,
                                "state": 197,
                                "state_multiplier": 0.75
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 693,
                            "fields": {
                                "candidate": 77,
                                "state": 198,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 694,
                            "fields": {
                                "candidate": 77,
                                "state": 199,
                                "state_multiplier": 1.22
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 695,
                            "fields": {
                                "candidate": 77,
                                "state": 200,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 696,
                            "fields": {
                                "candidate": 77,
                                "state": 201,
                                "state_multiplier": 2.2
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 697,
                            "fields": {
                                "candidate": 77,
                                "state": 202,
                                "state_multiplier": 1.41
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 698,
                            "fields": {
                                "candidate": 77,
                                "state": 203,
                                "state_multiplier": 1.5
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 699,
                            "fields": {
                                "candidate": 77,
                                "state": 204,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 700,
                            "fields": {
                                "candidate": 77,
                                "state": 205,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 701,
                            "fields": {
                                "candidate": 77,
                                "state": 206,
                                "state_multiplier": 0.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 702,
                            "fields": {
                                "candidate": 77,
                                "state": 207,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 703,
                            "fields": {
                                "candidate": 77,
                                "state": 208,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 704,
                            "fields": {
                                "candidate": 77,
                                "state": 209,
                                "state_multiplier": 0.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 705,
                            "fields": {
                                "candidate": 77,
                                "state": 210,
                                "state_multiplier": 1.4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 706,
                            "fields": {
                                "candidate": 77,
                                "state": 211,
                                "state_multiplier": 1.05
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 707,
                            "fields": {
                                "candidate": 77,
                                "state": 212,
                                "state_multiplier": 2.5
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 708,
                            "fields": {
                                "candidate": 77,
                                "state": 213,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 709,
                            "fields": {
                                "candidate": 77,
                                "state": 214,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 710,
                            "fields": {
                                "candidate": 77,
                                "state": 215,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 711,
                            "fields": {
                                "candidate": 77,
                                "state": 216,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 712,
                            "fields": {
                                "candidate": 77,
                                "state": 217,
                                "state_multiplier": 1.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 713,
                            "fields": {
                                "candidate": 77,
                                "state": 218,
                                "state_multiplier": 1.08
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 714,
                            "fields": {
                                "candidate": 77,
                                "state": 219,
                                "state_multiplier": 1.45
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 715,
                            "fields": {
                                "candidate": 77,
                                "state": 220,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 716,
                            "fields": {
                                "candidate": 77,
                                "state": 221,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 717,
                            "fields": {
                                "candidate": 77,
                                "state": 222,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 718,
                            "fields": {
                                "candidate": 77,
                                "state": 223,
                                "state_multiplier": 0.6
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 719,
                            "fields": {
                                "candidate": 77,
                                "state": 224,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 720,
                            "fields": {
                                "candidate": 77,
                                "state": 225,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 721,
                            "fields": {
                                "candidate": 77,
                                "state": 226,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 722,
                            "fields": {
                                "candidate": 77,
                                "state": 227,
                                "state_multiplier": 1.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 723,
                            "fields": {
                                "candidate": 77,
                                "state": 228,
                                "state_multiplier": 0.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 724,
                            "fields": {
                                "candidate": 77,
                                "state": 229,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 725,
                            "fields": {
                                "candidate": 77,
                                "state": 230,
                                "state_multiplier": 1.24
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 726,
                            "fields": {
                                "candidate": 77,
                                "state": 231,
                                "state_multiplier": 0.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 727,
                            "fields": {
                                "candidate": 78,
                                "state": 181,
                                "state_multiplier": 4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 728,
                            "fields": {
                                "candidate": 78,
                                "state": 182,
                                "state_multiplier": 1.15
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 729,
                            "fields": {
                                "candidate": 78,
                                "state": 183,
                                "state_multiplier": 1.12
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 730,
                            "fields": {
                                "candidate": 78,
                                "state": 184,
                                "state_multiplier": 2.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 731,
                            "fields": {
                                "candidate": 78,
                                "state": 185,
                                "state_multiplier": 0.94
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 732,
                            "fields": {
                                "candidate": 78,
                                "state": 186,
                                "state_multiplier": 0.93
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 733,
                            "fields": {
                                "candidate": 78,
                                "state": 187,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 734,
                            "fields": {
                                "candidate": 78,
                                "state": 188,
                                "state_multiplier": 1.2
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 735,
                            "fields": {
                                "candidate": 78,
                                "state": 189,
                                "state_multiplier": 1.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 736,
                            "fields": {
                                "candidate": 78,
                                "state": 190,
                                "state_multiplier": 1.86
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 737,
                            "fields": {
                                "candidate": 78,
                                "state": 191,
                                "state_multiplier": 0.67
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 738,
                            "fields": {
                                "candidate": 78,
                                "state": 192,
                                "state_multiplier": 1.5
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 739,
                            "fields": {
                                "candidate": 78,
                                "state": 193,
                                "state_multiplier": 0.875
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 740,
                            "fields": {
                                "candidate": 78,
                                "state": 194,
                                "state_multiplier": 1.6
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 741,
                            "fields": {
                                "candidate": 78,
                                "state": 195,
                                "state_multiplier": 0.94
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 742,
                            "fields": {
                                "candidate": 78,
                                "state": 196,
                                "state_multiplier": 1.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 743,
                            "fields": {
                                "candidate": 78,
                                "state": 197,
                                "state_multiplier": 2.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 744,
                            "fields": {
                                "candidate": 78,
                                "state": 198,
                                "state_multiplier": 2.4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 745,
                            "fields": {
                                "candidate": 78,
                                "state": 199,
                                "state_multiplier": 1.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 746,
                            "fields": {
                                "candidate": 78,
                                "state": 200,
                                "state_multiplier": 0.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 747,
                            "fields": {
                                "candidate": 78,
                                "state": 201,
                                "state_multiplier": 0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 748,
                            "fields": {
                                "candidate": 78,
                                "state": 202,
                                "state_multiplier": 0.95
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 749,
                            "fields": {
                                "candidate": 78,
                                "state": 203,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 750,
                            "fields": {
                                "candidate": 78,
                                "state": 204,
                                "state_multiplier": 4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 751,
                            "fields": {
                                "candidate": 78,
                                "state": 205,
                                "state_multiplier": 1.4
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 752,
                            "fields": {
                                "candidate": 78,
                                "state": 206,
                                "state_multiplier": 2.5
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 753,
                            "fields": {
                                "candidate": 78,
                                "state": 207,
                                "state_multiplier": 3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 754,
                            "fields": {
                                "candidate": 78,
                                "state": 208,
                                "state_multiplier": 0.91
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 755,
                            "fields": {
                                "candidate": 78,
                                "state": 209,
                                "state_multiplier": 0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 756,
                            "fields": {
                                "candidate": 78,
                                "state": 210,
                                "state_multiplier": 0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 757,
                            "fields": {
                                "candidate": 78,
                                "state": 211,
                                "state_multiplier": 0.95
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 758,
                            "fields": {
                                "candidate": 78,
                                "state": 212,
                                "state_multiplier": 0.9
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 759,
                            "fields": {
                                "candidate": 78,
                                "state": 213,
                                "state_multiplier": 1.26
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 760,
                            "fields": {
                                "candidate": 78,
                                "state": 214,
                                "state_multiplier": 3.2
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 761,
                            "fields": {
                                "candidate": 78,
                                "state": 215,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 762,
                            "fields": {
                                "candidate": 78,
                                "state": 216,
                                "state_multiplier": 3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 763,
                            "fields": {
                                "candidate": 78,
                                "state": 217,
                                "state_multiplier": 1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 764,
                            "fields": {
                                "candidate": 78,
                                "state": 218,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 765,
                            "fields": {
                                "candidate": 78,
                                "state": 219,
                                "state_multiplier": 0.8
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 766,
                            "fields": {
                                "candidate": 78,
                                "state": 220,
                                "state_multiplier": 3.5
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 767,
                            "fields": {
                                "candidate": 78,
                                "state": 221,
                                "state_multiplier": 3.6
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 768,
                            "fields": {
                                "candidate": 78,
                                "state": 222,
                                "state_multiplier": 2
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 769,
                            "fields": {
                                "candidate": 78,
                                "state": 223,
                                "state_multiplier": 2.6
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 770,
                            "fields": {
                                "candidate": 78,
                                "state": 224,
                                "state_multiplier": 3.5
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 771,
                            "fields": {
                                "candidate": 78,
                                "state": 225,
                                "state_multiplier": 0.89
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 772,
                            "fields": {
                                "candidate": 78,
                                "state": 226,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 773,
                            "fields": {
                                "candidate": 78,
                                "state": 227,
                                "state_multiplier": 0.875
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 774,
                            "fields": {
                                "candidate": 78,
                                "state": 228,
                                "state_multiplier": 0.7
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 775,
                            "fields": {
                                "candidate": 78,
                                "state": 229,
                                "state_multiplier": 2.2
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 776,
                            "fields": {
                                "candidate": 78,
                                "state": 230,
                                "state_multiplier": 1.15
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 777,
                            "fields": {
                                "candidate": 78,
                                "state": 231,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 778,
                            "fields": {
                                "candidate": 79,
                                "state": 181,
                                "state_multiplier": 0.04
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 779,
                            "fields": {
                                "candidate": 79,
                                "state": 182,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 780,
                            "fields": {
                                "candidate": 79,
                                "state": 183,
                                "state_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 781,
                            "fields": {
                                "candidate": 79,
                                "state": 184,
                                "state_multiplier": 0.03
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 782,
                            "fields": {
                                "candidate": 79,
                                "state": 185,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 783,
                            "fields": {
                                "candidate": 79,
                                "state": 186,
                                "state_multiplier": 0.021
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 784,
                            "fields": {
                                "candidate": 79,
                                "state": 187,
                                "state_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 785,
                            "fields": {
                                "candidate": 79,
                                "state": 188,
                                "state_multiplier": 0.0012
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 786,
                            "fields": {
                                "candidate": 79,
                                "state": 189,
                                "state_multiplier": 0.0175
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 787,
                            "fields": {
                                "candidate": 79,
                                "state": 190,
                                "state_multiplier": 0.0075
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 788,
                            "fields": {
                                "candidate": 79,
                                "state": 191,
                                "state_multiplier": 0
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 789,
                            "fields": {
                                "candidate": 79,
                                "state": 192,
                                "state_multiplier": 0.025
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 790,
                            "fields": {
                                "candidate": 79,
                                "state": 193,
                                "state_multiplier": 0.0015
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 791,
                            "fields": {
                                "candidate": 79,
                                "state": 194,
                                "state_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 792,
                            "fields": {
                                "candidate": 79,
                                "state": 195,
                                "state_multiplier": 0.0134
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 793,
                            "fields": {
                                "candidate": 79,
                                "state": 196,
                                "state_multiplier": 0.068
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 794,
                            "fields": {
                                "candidate": 79,
                                "state": 197,
                                "state_multiplier": 0.024
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 795,
                            "fields": {
                                "candidate": 79,
                                "state": 198,
                                "state_multiplier": 0.0288
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 796,
                            "fields": {
                                "candidate": 79,
                                "state": 199,
                                "state_multiplier": 0.02725
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 797,
                            "fields": {
                                "candidate": 79,
                                "state": 200,
                                "state_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 798,
                            "fields": {
                                "candidate": 79,
                                "state": 201,
                                "state_multiplier": 0.0026
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 799,
                            "fields": {
                                "candidate": 79,
                                "state": 202,
                                "state_multiplier": 0.0134
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 800,
                            "fields": {
                                "candidate": 79,
                                "state": 203,
                                "state_multiplier": 0.0325
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 801,
                            "fields": {
                                "candidate": 79,
                                "state": 204,
                                "state_multiplier": 0.04
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 802,
                            "fields": {
                                "candidate": 79,
                                "state": 205,
                                "state_multiplier": 0.002
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 803,
                            "fields": {
                                "candidate": 79,
                                "state": 206,
                                "state_multiplier": 0.15
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 804,
                            "fields": {
                                "candidate": 79,
                                "state": 207,
                                "state_multiplier": 0.085
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 805,
                            "fields": {
                                "candidate": 79,
                                "state": 208,
                                "state_multiplier": 0.0187
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 806,
                            "fields": {
                                "candidate": 79,
                                "state": 209,
                                "state_multiplier": 0.0165
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 807,
                            "fields": {
                                "candidate": 79,
                                "state": 210,
                                "state_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 808,
                            "fields": {
                                "candidate": 79,
                                "state": 211,
                                "state_multiplier": 0.0164
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 809,
                            "fields": {
                                "candidate": 79,
                                "state": 212,
                                "state_multiplier": 0.0302
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 810,
                            "fields": {
                                "candidate": 79,
                                "state": 213,
                                "state_multiplier": 0.001
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 811,
                            "fields": {
                                "candidate": 79,
                                "state": 214,
                                "state_multiplier": 0.16
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 812,
                            "fields": {
                                "candidate": 79,
                                "state": 215,
                                "state_multiplier": 0
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 813,
                            "fields": {
                                "candidate": 79,
                                "state": 216,
                                "state_multiplier": 0
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 814,
                            "fields": {
                                "candidate": 79,
                                "state": 217,
                                "state_multiplier": 0
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 815,
                            "fields": {
                                "candidate": 79,
                                "state": 218,
                                "state_multiplier": 0.001
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 816,
                            "fields": {
                                "candidate": 79,
                                "state": 219,
                                "state_multiplier": 0.0163
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 817,
                            "fields": {
                                "candidate": 79,
                                "state": 220,
                                "state_multiplier": 0.04
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 818,
                            "fields": {
                                "candidate": 79,
                                "state": 221,
                                "state_multiplier": 0.02
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 819,
                            "fields": {
                                "candidate": 79,
                                "state": 222,
                                "state_multiplier": 0.02
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 820,
                            "fields": {
                                "candidate": 79,
                                "state": 223,
                                "state_multiplier": 0.02
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 821,
                            "fields": {
                                "candidate": 79,
                                "state": 224,
                                "state_multiplier": 0.1046
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 822,
                            "fields": {
                                "candidate": 79,
                                "state": 225,
                                "state_multiplier": 0.0234
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 823,
                            "fields": {
                                "candidate": 79,
                                "state": 226,
                                "state_multiplier": 0.0031
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 824,
                            "fields": {
                                "candidate": 79,
                                "state": 227,
                                "state_multiplier": 0.02
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 825,
                            "fields": {
                                "candidate": 79,
                                "state": 228,
                                "state_multiplier": 0.007
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 826,
                            "fields": {
                                "candidate": 79,
                                "state": 229,
                                "state_multiplier": 0.027
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 827,
                            "fields": {
                                "candidate": 79,
                                "state": 230,
                                "state_multiplier": 0.018
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 828,
                            "fields": {
                                "candidate": 79,
                                "state": 231,
                                "state_multiplier": 0.14
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 829,
                            "fields": {
                                "candidate": 80,
                                "state": 181,
                                "state_multiplier": 0.28
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 830,
                            "fields": {
                                "candidate": 80,
                                "state": 182,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 831,
                            "fields": {
                                "candidate": 80,
                                "state": 183,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 832,
                            "fields": {
                                "candidate": 80,
                                "state": 184,
                                "state_multiplier": 0.12
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 833,
                            "fields": {
                                "candidate": 80,
                                "state": 185,
                                "state_multiplier": 0.15
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 834,
                            "fields": {
                                "candidate": 80,
                                "state": 186,
                                "state_multiplier": 0.15
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 835,
                            "fields": {
                                "candidate": 80,
                                "state": 187,
                                "state_multiplier": 0.15
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 836,
                            "fields": {
                                "candidate": 80,
                                "state": 188,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 837,
                            "fields": {
                                "candidate": 80,
                                "state": 189,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 838,
                            "fields": {
                                "candidate": 80,
                                "state": 190,
                                "state_multiplier": 0.11
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 839,
                            "fields": {
                                "candidate": 80,
                                "state": 191,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 840,
                            "fields": {
                                "candidate": 80,
                                "state": 192,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 841,
                            "fields": {
                                "candidate": 80,
                                "state": 193,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 842,
                            "fields": {
                                "candidate": 80,
                                "state": 194,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 843,
                            "fields": {
                                "candidate": 80,
                                "state": 195,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 844,
                            "fields": {
                                "candidate": 80,
                                "state": 196,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 845,
                            "fields": {
                                "candidate": 80,
                                "state": 197,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 846,
                            "fields": {
                                "candidate": 80,
                                "state": 198,
                                "state_multiplier": 0.18
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 847,
                            "fields": {
                                "candidate": 80,
                                "state": 199,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 848,
                            "fields": {
                                "candidate": 80,
                                "state": 200,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 849,
                            "fields": {
                                "candidate": 80,
                                "state": 201,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 850,
                            "fields": {
                                "candidate": 80,
                                "state": 202,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 851,
                            "fields": {
                                "candidate": 80,
                                "state": 203,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 852,
                            "fields": {
                                "candidate": 80,
                                "state": 204,
                                "state_multiplier": 0.27
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 853,
                            "fields": {
                                "candidate": 80,
                                "state": 205,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 854,
                            "fields": {
                                "candidate": 80,
                                "state": 206,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 855,
                            "fields": {
                                "candidate": 80,
                                "state": 207,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 856,
                            "fields": {
                                "candidate": 80,
                                "state": 208,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 857,
                            "fields": {
                                "candidate": 80,
                                "state": 209,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 858,
                            "fields": {
                                "candidate": 80,
                                "state": 210,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 859,
                            "fields": {
                                "candidate": 80,
                                "state": 211,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 860,
                            "fields": {
                                "candidate": 80,
                                "state": 212,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 861,
                            "fields": {
                                "candidate": 80,
                                "state": 213,
                                "state_multiplier": 0.12
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 862,
                            "fields": {
                                "candidate": 80,
                                "state": 214,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 863,
                            "fields": {
                                "candidate": 80,
                                "state": 215,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 864,
                            "fields": {
                                "candidate": 80,
                                "state": 216,
                                "state_multiplier": 0.25
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 865,
                            "fields": {
                                "candidate": 80,
                                "state": 217,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 866,
                            "fields": {
                                "candidate": 80,
                                "state": 218,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 867,
                            "fields": {
                                "candidate": 80,
                                "state": 219,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 868,
                            "fields": {
                                "candidate": 80,
                                "state": 220,
                                "state_multiplier": 0.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 869,
                            "fields": {
                                "candidate": 80,
                                "state": 221,
                                "state_multiplier": 0.12
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 870,
                            "fields": {
                                "candidate": 80,
                                "state": 222,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 871,
                            "fields": {
                                "candidate": 80,
                                "state": 223,
                                "state_multiplier": 0.12
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 872,
                            "fields": {
                                "candidate": 80,
                                "state": 224,
                                "state_multiplier": 0.3
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 873,
                            "fields": {
                                "candidate": 80,
                                "state": 225,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 874,
                            "fields": {
                                "candidate": 80,
                                "state": 226,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 875,
                            "fields": {
                                "candidate": 80,
                                "state": 227,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 876,
                            "fields": {
                                "candidate": 80,
                                "state": 228,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 877,
                            "fields": {
                                "candidate": 80,
                                "state": 229,
                                "state_multiplier": 0.37
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 878,
                            "fields": {
                                "candidate": 80,
                                "state": 230,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.candidate_state_multiplier",
                            "pk": 879,
                            "fields": {
                                "candidate": 80,
                                "state": 231,
                                "state_multiplier": 0.1
                            }
                        }
                    ]
                
                    campaignTrail_temp.answer_score_global_json = [
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1061,
                            "fields": {
                                "answer": 3470,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1118,
                            "fields": {
                                "answer": 3312,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.12
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1124,
                            "fields": {
                                "answer": 3321,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.009
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1128,
                            "fields": {
                                "answer": 3326,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.085
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1131,
                            "fields": {
                                "answer": 3336,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1158,
                            "fields": {
                                "answer": 3387,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1159,
                            "fields": {
                                "answer": 3389,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1163,
                            "fields": {
                                "answer": 3314,
                                "candidate": 78,
                                "affected_candidate": 78,
                                "global_multiplier": -0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1164,
                            "fields": {
                                "answer": 3314,
                                "candidate": 78,
                                "affected_candidate": 79,
                                "global_multiplier": 0.666
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1231,
                            "fields": {
                                "answer": 3311,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.018
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1233,
                            "fields": {
                                "answer": 3314,
                                "candidate": 79,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1234,
                            "fields": {
                                "answer": 3314,
                                "candidate": 79,
                                "affected_candidate": 79,
                                "global_multiplier": -0.25
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1301,
                            "fields": {
                                "answer": 3382,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 1302,
                            "fields": {
                                "answer": 3382,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12244,
                            "fields": {
                                "answer": 3501,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12246,
                            "fields": {
                                "answer": 3502,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12249,
                            "fields": {
                                "answer": 12242,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12250,
                            "fields": {
                                "answer": 12242,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12258,
                            "fields": {
                                "answer": 3412,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12260,
                            "fields": {
                                "answer": 3333,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12269,
                            "fields": {
                                "answer": 3319,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12270,
                            "fields": {
                                "answer": 3319,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12274,
                            "fields": {
                                "answer": 3320,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12275,
                            "fields": {
                                "answer": 3320,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12280,
                            "fields": {
                                "answer": 3322,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.15
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 6000,
                            "fields": {
                                "answer": 3322,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.15
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12281,
                            "fields": {
                                "answer": 3330,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12282,
                            "fields": {
                                "answer": 3330,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12289,
                            "fields": {
                                "answer": 3331,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12290,
                            "fields": {
                                "answer": 3331,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12294,
                            "fields": {
                                "answer": 3332,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12297,
                            "fields": {
                                "answer": 12295,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12301,
                            "fields": {
                                "answer": 12299,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12302,
                            "fields": {
                                "answer": 12299,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12303,
                            "fields": {
                                "answer": 3322,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.8
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12307,
                            "fields": {
                                "answer": 3311,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.04
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12308,
                            "fields": {
                                "answer": 3326,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.12
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12310,
                            "fields": {
                                "answer": 3342,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12311,
                            "fields": {
                                "answer": 3342,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12312,
                            "fields": {
                                "answer": 3340,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12313,
                            "fields": {
                                "answer": 3340,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12314,
                            "fields": {
                                "answer": 3340,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12319,
                            "fields": {
                                "answer": 12317,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12320,
                            "fields": {
                                "answer": 12317,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12324,
                            "fields": {
                                "answer": 12322,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12325,
                            "fields": {
                                "answer": 12322,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12326,
                            "fields": {
                                "answer": 12322,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.02
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12329,
                            "fields": {
                                "answer": 3345,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12331,
                            "fields": {
                                "answer": 3346,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.025
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12332,
                            "fields": {
                                "answer": 3346,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12336,
                            "fields": {
                                "answer": 12334,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.035
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12337,
                            "fields": {
                                "answer": 12334,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12339,
                            "fields": {
                                "answer": 3368,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12340,
                            "fields": {
                                "answer": 3368,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.006
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12342,
                            "fields": {
                                "answer": 3369,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12343,
                            "fields": {
                                "answer": 3369,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12346,
                            "fields": {
                                "answer": 12344,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12347,
                            "fields": {
                                "answer": 12344,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12355,
                            "fields": {
                                "answer": 3381,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.12
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12360,
                            "fields": {
                                "answer": 3383,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.06
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12361,
                            "fields": {
                                "answer": 3383,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12362,
                            "fields": {
                                "answer": 3487,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12363,
                            "fields": {
                                "answer": 3487,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12364,
                            "fields": {
                                "answer": 3487,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12366,
                            "fields": {
                                "answer": 3488,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12367,
                            "fields": {
                                "answer": 3488,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12369,
                            "fields": {
                                "answer": 3489,
                                "candidate": 77,
                                "affected_candidate": 79,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12370,
                            "fields": {
                                "answer": 3489,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12372,
                            "fields": {
                                "answer": 3359,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12373,
                            "fields": {
                                "answer": 3359,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12374,
                            "fields": {
                                "answer": 3362,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.018
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12375,
                            "fields": {
                                "answer": 3362,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12378,
                            "fields": {
                                "answer": 12376,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12380,
                            "fields": {
                                "answer": 3385,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12381,
                            "fields": {
                                "answer": 3385,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.02
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12383,
                            "fields": {
                                "answer": 3386,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12384,
                            "fields": {
                                "answer": 3386,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12386,
                            "fields": {
                                "answer": 3387,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.15
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12388,
                            "fields": {
                                "answer": 3374,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12389,
                            "fields": {
                                "answer": 3374,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12390,
                            "fields": {
                                "answer": 3374,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12399,
                            "fields": {
                                "answer": 3375,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.02
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12400,
                            "fields": {
                                "answer": 3375,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12401,
                            "fields": {
                                "answer": 3375,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12407,
                            "fields": {
                                "answer": 3376,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.035
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12408,
                            "fields": {
                                "answer": 3376,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12416,
                            "fields": {
                                "answer": 3490,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12417,
                            "fields": {
                                "answer": 3490,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.02
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12419,
                            "fields": {
                                "answer": 3491,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.006
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12423,
                            "fields": {
                                "answer": 3492,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.001
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12430,
                            "fields": {
                                "answer": 3372,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12431,
                            "fields": {
                                "answer": 3372,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12436,
                            "fields": {
                                "answer": 12434,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.011
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12437,
                            "fields": {
                                "answer": 12434,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12441,
                            "fields": {
                                "answer": 12439,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12444,
                            "fields": {
                                "answer": 3389,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12448,
                            "fields": {
                                "answer": 12445,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12451,
                            "fields": {
                                "answer": 12445,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12452,
                            "fields": {
                                "answer": 12446,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12454,
                            "fields": {
                                "answer": 12446,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.04
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12455,
                            "fields": {
                                "answer": 3468,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12456,
                            "fields": {
                                "answer": 3468,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12461,
                            "fields": {
                                "answer": 3469,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.025
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12468,
                            "fields": {
                                "answer": 12466,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12469,
                            "fields": {
                                "answer": 3457,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.025
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12470,
                            "fields": {
                                "answer": 3457,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12475,
                            "fields": {
                                "answer": 3458,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12476,
                            "fields": {
                                "answer": 3458,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.005
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12486,
                            "fields": {
                                "answer": 12482,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.045
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12487,
                            "fields": {
                                "answer": 12482,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12490,
                            "fields": {
                                "answer": 12483,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.055
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12491,
                            "fields": {
                                "answer": 12483,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.04
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12494,
                            "fields": {
                                "answer": 12484,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.035
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12497,
                            "fields": {
                                "answer": 12484,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12518,
                            "fields": {
                                "answer": 3397,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12520,
                            "fields": {
                                "answer": 3398,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12521,
                            "fields": {
                                "answer": 3400,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12522,
                            "fields": {
                                "answer": 3409,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12523,
                            "fields": {
                                "answer": 3410,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12524,
                            "fields": {
                                "answer": 3411,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12525,
                            "fields": {
                                "answer": 3315,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12526,
                            "fields": {
                                "answer": 3316,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.04
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12527,
                            "fields": {
                                "answer": 3317,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.06
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 12528,
                            "fields": {
                                "answer": 3317,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 6000,
                            "fields": {
                                "answer": 6000,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 6001,
                            "fields": {
                                "answer": 6001,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 6002,
                            "fields": {
                                "answer": 3430,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 6002,
                            "fields": {
                                "answer": 3430,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 6003,
                            "fields": {
                                "answer": 3431,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 6004,
                            "fields": {
                                "answer": 3431,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.02
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7000,
                            "fields": {
                                "answer": 7000,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.09
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7001,
                            "fields": {
                                "answer": 7001,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.085
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7002,
                            "fields": {
                                "answer": 7002,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.085
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7003,
                            "fields": {
                                "answer": 7003,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.085
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7004,
                            "fields": {
                                "answer": 7003,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7005,
                            "fields": {
                                "answer": 7002,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7006,
                            "fields": {
                                "answer": 7001,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7007,
                            "fields": {
                                "answer": 7000,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7008,
                            "fields": {
                                "answer": 7004,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7009,
                            "fields": {
                                "answer": 7005,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7010,
                            "fields": {
                                "answer": 7006,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7011,
                            "fields": {
                                "answer": 7007,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.9
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7012,
                            "fields": {
                                "answer": 7007,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.045
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7013,
                            "fields": {
                                "answer": 7006,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.045
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7014,
                            "fields": {
                                "answer": 7005,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.045
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7015,
                            "fields": {
                                "answer": 7004,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.05
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7016,
                            "fields": {
                                "answer": 7008,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.09
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7017,
                            "fields": {
                                "answer": 7009,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.09
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7018,
                            "fields": {
                                "answer": 7010,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.09
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7019,
                            "fields": {
                                "answer": 7011,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.09
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7020,
                            "fields": {
                                "answer": 7008,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 1.2
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7021,
                            "fields": {
                                "answer": 7009,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 1.2
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7022,
                            "fields": {
                                "answer": 7010,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 1.2
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7023,
                            "fields": {
                                "answer": 7011,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7024,
                            "fields": {
                                "answer": 3359,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.02
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7025,
                            "fields": {
                                "answer": 7012,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7026,
                            "fields": {
                                "answer": 7012,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7027,
                            "fields": {
                                "answer": 7012,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.006
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7028,
                            "fields": {
                                "answer": 7013,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.006
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7029,
                            "fields": {
                                "answer": 7013,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7030,
                            "fields": {
                                "answer": 7014,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.025
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7031,
                            "fields": {
                                "answer": 7014,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": 0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7032,
                            "fields": {
                                "answer": 7014,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.006
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7033,
                            "fields": {
                                "answer": 7015,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7034,
                            "fields": {
                                "answer": 7016,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": -0.004
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7035,
                            "fields": {
                                "answer": 7016,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": -0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7036,         
                            "fields": {
                                "answer": 7017,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.02
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7037,         
                            "fields": {
                                "answer": 7017,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7037,         
                            "fields": {
                                "answer": 7017,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7038,         
                            "fields": {
                                "answer": 7018,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "global_multiplier": 0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7039,         
                            "fields": {
                                "answer": 7018,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.035
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7040,         
                            "fields": {
                                "answer": 7019,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7041,         
                            "fields": {
                                "answer": 7019,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7042,         
                            "fields": {
                                "answer": 7020,
                                "candidate": 77,
                                "affected_candidate": 80,
                                "global_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_global",
                            "pk": 7043,         
                            "fields": {
                                "answer": 7020,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "global_multiplier": -0.002
                            }
                        },
                    ]
                
                    campaignTrail_temp.answer_score_issue_json = [
                    {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 935,
                            "fields": {
                                "answer": 3429,
                                "issue": 29,
                                "issue_score": -0.3,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 945,
                            "fields": {
                                "answer": 3430,
                                "issue": 29,
                                "issue_score": -0.5,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 953,
                            "fields": {
                                "answer": 3431,
                                "issue": 29,
                                "issue_score": -0.3,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 963,
                            "fields": {
                                "answer": 3432,
                                "issue": 27,
                                "issue_score": 0.4,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 964,
                            "fields": {
                                "answer": 3432,
                                "issue": 28,
                                "issue_score": 0.4,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 965,
                            "fields": {
                                "answer": 3432,
                                "issue": 29,
                                "issue_score": 0.4,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 966,
                            "fields": {
                                "answer": 3432,
                                "issue": 30,
                                "issue_score": 0.4,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 967,
                            "fields": {
                                "answer": 3432,
                                "issue": 31,
                                "issue_score": 0.4,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 1003,
                            "fields": {
                                "answer": 3314,
                                "issue": 29,
                                "issue_score": -0.75,
                                "issue_importance": 2
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 1008,
                            "fields": {
                                "answer": 3319,
                                "issue": 27,
                                "issue_score": -0.8,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 1009,
                            "fields": {
                                "answer": 3320,
                                "issue": 27,
                                "issue_score": -0.9,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 1028,
                            "fields": {
                                "answer": 3336,
                                "issue": 27,
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12245,
                            "fields": {
                                "answer": 3501,
                                "issue": 27,
                                "issue_score": 0,
                                "issue_importance": 0
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12247,
                            "fields": {
                                "answer": 3502,
                                "issue": 30,
                                "issue_score": -0.7,
                                "issue_importance": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12248,
                            "fields": {
                                "answer": 3502,
                                "issue": 27,
                                "issue_score": -0.8,
                                "issue_importance": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12255,
                            "fields": {
                                "answer": 3399,
                                "issue": 27,
                                "issue_score": 0,
                                "issue_importance": 0
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12259,
                            "fields": {
                                "answer": 3412,
                                "issue": 29,
                                "issue_score": -0.3,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12261,
                            "fields": {
                                "answer": 3333,
                                "issue": 27,
                                "issue_score": -0.9,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12262,
                            "fields": {
                                "answer": 3333,
                                "issue": 29,
                                "issue_score": 0,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12263,
                            "fields": {
                                "answer": 3333,
                                "issue": 28,
                                "issue_score": 0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12264,
                            "fields": {
                                "answer": 3333,
                                "issue": 30,
                                "issue_score": -0.8,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12265,
                            "fields": {
                                "answer": 3336,
                                "issue": 29,
                                "issue_score": -0.5,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12266,
                            "fields": {
                                "answer": 3336,
                                "issue": 30,
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12268,
                            "fields": {
                                "answer": 3319,
                                "issue": 30,
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12271,
                            "fields": {
                                "answer": 3320,
                                "issue": 28,
                                "issue_score": 0.3,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12272,
                            "fields": {
                                "answer": 3320,
                                "issue": 29,
                                "issue_score": 0.1,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12273,
                            "fields": {
                                "answer": 3320,
                                "issue": 30,
                                "issue_score": -0.9,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12276,
                            "fields": {
                                "answer": 3321,
                                "issue": 27,
                                "issue_score": -0.75,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12277,
                            "fields": {
                                "answer": 3321,
                                "issue": 28,
                                "issue_score": 0,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12278,
                            "fields": {
                                "answer": 3321,
                                "issue": 29,
                                "issue_score": -0.1,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12279,
                            "fields": {
                                "answer": 3321,
                                "issue": 30,
                                "issue_score": -0.75,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12283,
                            "fields": {
                                "answer": 3330,
                                "issue": 27,
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12284,
                            "fields": {
                                "answer": 3330,
                                "issue": 28,
                                "issue_score": -0.2,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12285,
                            "fields": {
                                "answer": 3330,
                                "issue": 29,
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12291,
                            "fields": {
                                "answer": 3331,
                                "issue": 27,
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12292,
                            "fields": {
                                "answer": 3331,
                                "issue": 27,
                                "issue_score": -0.2,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12293,
                            "fields": {
                                "answer": 3331,
                                "issue": 29,
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12298,
                            "fields": {
                                "answer": 12295,
                                "issue": 27,
                                "issue_score": -0.5,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12304,
                            "fields": {
                                "answer": 12299,
                                "issue": 27,
                                "issue_score": -0.9,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12305,
                            "fields": {
                                "answer": 12299,
                                "issue": 28,
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12309,
                            "fields": {
                                "answer": 3342,
                                "issue": 27,
                                "issue_score": -0.8,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12315,
                            "fields": {
                                "answer": 3340,
                                "issue": 27,
                                "issue_score": -0.8,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12316,
                            "fields": {
                                "answer": 3340,
                                "issue": 28,
                                "issue_score": 0.3,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12321,
                            "fields": {
                                "answer": 12317,
                                "issue": 27,
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12327,
                            "fields": {
                                "answer": 12322,
                                "issue": 27,
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12330,
                            "fields": {
                                "answer": 3345,
                                "issue": 27,
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12333,
                            "fields": {
                                "answer": 3346,
                                "issue": 27,
                                "issue_score": -0.9,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12338,
                            "fields": {
                                "answer": 12334,
                                "issue": 27,
                                "issue_score": -1,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12341,
                            "fields": {
                                "answer": 3368,
                                "issue": 27,
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12348,
                            "fields": {
                                "answer": 3369,
                                "issue": 27,
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12349,
                            "fields": {
                                "answer": 12344,
                                "issue": 27,
                                "issue_score": -0.8,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12356,
                            "fields": {
                                "answer": 3381,
                                "issue": 29,
                                "issue_score": 0,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12357,
                            "fields": {
                                "answer": 3381,
                                "issue": 28,
                                "issue_score": 0.1,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12358,
                            "fields": {
                                "answer": 3382,
                                "issue": 28,
                                "issue_score": -0.4,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12359,
                            "fields": {
                                "answer": 3382,
                                "issue": 29,
                                "issue_score": -0.4,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12365,
                            "fields": {
                                "answer": 3487,
                                "issue": 28,
                                "issue_score": 0.8,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12368,
                            "fields": {
                                "answer": 3488,
                                "issue": 28,
                                "issue_score": 0.65,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12371,
                            "fields": {
                                "answer": 3489,
                                "issue": 28,
                                "issue_score": 0.3,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12382,
                            "fields": {
                                "answer": 3385,
                                "issue": 29,
                                "issue_score": 0,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12385,
                            "fields": {
                                "answer": 3386,
                                "issue": 29,
                                "issue_score": 0.1,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12387,
                            "fields": {
                                "answer": 3387,
                                "issue": 29,
                                "issue_score": 0.3,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12391,
                            "fields": {
                                "answer": 3374,
                                "issue": "27",
                                "issue_score": -0.4,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12398,
                            "fields": {
                                "answer": 3375,
                                "issue": "27",
                                "issue_score": -0.8,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12420,
                            "fields": {
                                "answer": 3491,
                                "issue": "27",
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12432,
                            "fields": {
                                "answer": 3372,
                                "issue": "27",
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12438,
                            "fields": {
                                "answer": 12434,
                                "issue": "27",
                                "issue_score": -0.8,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12442,
                            "fields": {
                                "answer": 12439,
                                "issue": "27",
                                "issue_score": -0.5,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12449,
                            "fields": {
                                "answer": 12445,
                                "issue": "27",
                                "issue_score": -0.6,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12453,
                            "fields": {
                                "answer": 12446,
                                "issue": "27",
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12457,
                            "fields": {
                                "answer": 3468,
                                "issue": 29,
                                "issue_score": -0.2,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12463,
                            "fields": {
                                "answer": 3469,
                                "issue": 29,
                                "issue_score": 0,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12465,
                            "fields": {
                                "answer": 3470,
                                "issue": 29,
                                "issue_score": -0.1,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12471,
                            "fields": {
                                "answer": 3457,
                                "issue": 29,
                                "issue_score": -0.2,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12488,
                            "fields": {
                                "answer": 12482,
                                "issue": 28,
                                "issue_score": -0.1,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12492,
                            "fields": {
                                "answer": 12483,
                                "issue": 28,
                                "issue_score": 0.3,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12496,
                            "fields": {
                                "answer": 12484,
                                "issue": 28,
                                "issue_score": 0,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 12496,
                            "fields": {
                                "answer": 6000,
                                "issue": 27,
                                "issue_score": -0.7,
                                "issue_importance": 1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 6000,
                            "fields": {
                                "answer": 12376,
                                "issue": 29,
                                "issue_score": -0.7,
                                "issue_importance": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 6001,
                            "fields": {
                                "answer": 3362,
                                "issue": 29,
                                "issue_score": -0.9,
                                "issue_importance": 0.2
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 6002,
                            "fields": {
                                "answer": 7012,
                                "issue": 29,
                                "issue_score": 0,
                                "issue_importance": 0.2
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 6003,
                            "fields": {
                                "answer": 7014,
                                "issue": 29,
                                "issue_score": 0.1,
                                "issue_importance": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_issue",
                            "pk": 6004,
                            "fields": {
                                "answer": 7016,
                                "issue": 29,
                                "issue_score": -0.4,
                                "issue_importance": 0.5
                            }
                        },
                    ]
                
                    campaignTrail_temp.answer_score_state_json = [
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 8985,
                            "fields": {
                                "answer": 3332,
                                "state": 223,
                                "candidate": 78,
                                "affected_candidate": 78,
                                "state_multiplier": -0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 9456,
                            "fields": {
                                "answer": 3432,
                                "state": 184,
                                "candidate": 78,
                                "affected_candidate": 78,
                                "state_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 9457,
                            "fields": {
                                "answer": 3432,
                                "state": 197,
                                "candidate": 78,
                                "affected_candidate": 78,
                                "state_multiplier": 0.003
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 9458,
                            "fields": {
                                "answer": 3432,
                                "state": 198,
                                "candidate": 78,
                                "affected_candidate": 78,
                                "state_multiplier": 0.003
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 9459,
                            "fields": {
                                "answer": 3432,
                                "state": 205,
                                "candidate": 78,
                                "affected_candidate": 78,
                                "state_multiplier": 0.003
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 9460,
                            "fields": {
                                "answer": 3432,
                                "state": 222,
                                "candidate": 78,
                                "affected_candidate": 78,
                                "state_multiplier": 0.003
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12252,
                            "fields": {
                                "answer": 3398,
                                "state": 195,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12253,
                            "fields": {
                                "answer": 3399,
                                "state": 209,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.012
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12254,
                            "fields": {
                                "answer": 3400,
                                "state": 209,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12267,
                            "fields": {
                                "answer": 3336,
                                "state": 186,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12287,
                            "fields": {
                                "answer": 3330,
                                "state": 223,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12288,
                            "fields": {
                                "answer": 3331,
                                "state": 223,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12306,
                            "fields": {
                                "answer": 12299,
                                "state": 223,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.038
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12350,
                            "fields": {
                                "answer": 12344,
                                "state": 193,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.014
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12351,
                            "fields": {
                                "answer": 12344,
                                "state": 202,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.014
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12352,
                            "fields": {
                                "answer": 12344,
                                "state": 215,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.014
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12353,
                            "fields": {
                                "answer": 12344,
                                "state": 230,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.014
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12354,
                            "fields": {
                                "answer": 12344,
                                "state": 194,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.014
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12392,
                            "fields": {
                                "answer": 3374,
                                "state": 193,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12393,
                            "fields": {
                                "answer": 3374,
                                "state": 194,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12394,
                            "fields": {
                                "answer": 3374,
                                "state": 202,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12395,
                            "fields": {
                                "answer": 3374,
                                "state": 230,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12396,
                            "fields": {
                                "answer": 3374,
                                "state": 215,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12402,
                            "fields": {
                                "answer": 3375,
                                "state": 193,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12403,
                            "fields": {
                                "answer": 3375,
                                "state": 194,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12404,
                            "fields": {
                                "answer": 3375,
                                "state": 215,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12405,
                            "fields": {
                                "answer": 3375,
                                "state": 230,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12406,
                            "fields": {
                                "answer": 3375,
                                "state": 202,
                                "candidate": 77,
                                "affected_candidate": 78,
                                "state_multiplier": -0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12410,
                            "fields": {
                                "answer": 3376,
                                "state": 193,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12411,
                            "fields": {
                                "answer": 3376,
                                "state": 194,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12412,
                            "fields": {
                                "answer": 3376,
                                "state": 215,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12413,
                            "fields": {
                                "answer": 3376,
                                "state": 230,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12414,
                            "fields": {
                                "answer": 3376,
                                "state": 202,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.015
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12424,
                            "fields": {
                                "answer": 3492,
                                "state": 195,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12425,
                            "fields": {
                                "answer": 3492,
                                "state": 196,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12426,
                            "fields": {
                                "answer": 3492,
                                "state": 214,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12427,
                            "fields": {
                                "answer": 3492,
                                "state": 221,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12428,
                            "fields": {
                                "answer": 3492,
                                "state": 207,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12443,
                            "fields": {
                                "answer": 12439,
                                "state": 223,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12458,
                            "fields": {
                                "answer": 3468,
                                "state": 183,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12459,
                            "fields": {
                                "answer": 3468,
                                "state": 223,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12460,
                            "fields": {
                                "answer": 3468,
                                "state": 211,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12472,
                            "fields": {
                                "answer": 3457,
                                "state": 215,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12473,
                            "fields": {
                                "answer": 3457,
                                "state": 197,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12474,
                            "fields": {
                                "answer": 3457,
                                "state": 229,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12478,
                            "fields": {
                                "answer": 3458,
                                "state": 197,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12479,
                            "fields": {
                                "answer": 3458,
                                "state": 229,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12480,
                            "fields": {
                                "answer": 3458,
                                "state": 215,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12504,
                            "fields": {
                                "answer": 12499,
                                "state": 215,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12505,
                            "fields": {
                                "answer": 12499,
                                "state": 230,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12506,
                            "fields": {
                                "answer": 12499,
                                "state": 202,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12508,
                            "fields": {
                                "answer": 12500,
                                "state": 209,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12509,
                            "fields": {
                                "answer": 12500,
                                "state": 199,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12511,
                            "fields": {
                                "answer": 12501,
                                "state": 211,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12512,
                            "fields": {
                                "answer": 12501,
                                "state": 183,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12513,
                            "fields": {
                                "answer": 12501,
                                "state": 186,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12515,
                            "fields": {
                                "answer": 12502,
                                "state": 229,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12516,
                            "fields": {
                                "answer": 12502,
                                "state": 213,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 12517,
                            "fields": {
                                "answer": 12502,
                                "state": 226,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 6000,
                            "fields": {
                                "answer": 6002,
                                "state": 211,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 6001,
                            "fields": {
                                "answer": 6003,
                                "state": 218,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 6002,
                            "fields": {
                                "answer": 6004,
                                "state": 226,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 600,
                            "fields": {
                                "answer": 6005,
                                "state": 202,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 700,
                            "fields": {
                                "answer": 7000,
                                "state": 185,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.01
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 701,
                            "fields": {
                                "answer": 7002,
                                "state": 186,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 702,
                            "fields": {
                                "answer": 7002,
                                "state": 211,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 703,
                            "fields": {
                                "answer": 7003,
                                "state": 230,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 704,
                            "fields": {
                                "answer": 7003,
                                "state": 202,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 705,
                            "fields": {
                                "answer": 7003,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 706,
                            "fields": {
                                "answer": 7004,
                                "state": 212,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 707,
                            "fields": {
                                "answer": 7005,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 708,
                            "fields": {
                                "answer": 7005,
                                "state": 202,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 709,
                            "fields": {
                                "answer": 7005,
                                "state": 230,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 710,
                            "fields": {
                                "answer": 7006,
                                "state": 183,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 711,
                            "fields": {
                                "answer": 7006,
                                "state": 186,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 712,
                            "fields": {
                                "answer": 7006,
                                "state": 211,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.008
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 713,
                            "fields": {
                                "answer": 7006,
                                "state": 199,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 714,
                            "fields": {
                                "answer": 7005,
                                "state": 199,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 715,
                            "fields": {
                                "answer": 7004,
                                "state": 199,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 716,
                            "fields": {
                                "answer": 7007,
                                "state": 199,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 717,
                            "fields": {
                                "answer": 7006,
                                "state": 209,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.17
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 718,
                            "fields": {
                                "answer": 7005,
                                "state": 209,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.17
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 719,
                            "fields": {
                                "answer": 7004,
                                "state": 209,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.17
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 720,
                            "fields": {
                                "answer": 7007,
                                "state": 209,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.17
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 721,
                            "fields": {
                                "answer": 7006,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 721,
                            "fields": {
                                "answer": 7005,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 722,
                            "fields": {
                                "answer": 7004,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 723,
                            "fields": {
                                "answer": 7007,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 721,
                            "fields": {
                                "answer": 7006,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 721,
                            "fields": {
                                "answer": 7005,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 722,
                            "fields": {
                                "answer": 7004,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.03
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 724,
                            "fields": {
                                "answer": 7008,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.12
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 725,
                            "fields": {
                                "answer": 7009,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.12
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 726,
                            "fields": {
                                "answer": 7010,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.12
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 727,
                            "fields": {
                                "answer": 7011,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.12
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 727,
                            "fields": {
                                "answer": 7011,
                                "state": 203,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": -0.12
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 730,
                            "fields": {
                                "answer": 7011,
                                "state": 212,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 731,
                            "fields": {
                                "answer": 7010,
                                "state": 212,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 732,
                            "fields": {
                                "answer": 7009,
                                "state": 212,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 1.2
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 733,
                            "fields": {
                                "answer": 7008,
                                "state": 212,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 1.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 740,
                            "fields": {
                                "answer": 7008,
                                "state": 210,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.6
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 741,
                            "fields": {
                                "answer": 7009,
                                "state": 210,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.6
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 742,
                            "fields": {
                                "answer": 7010,
                                "state": 210,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.65
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 743,
                            "fields": {
                                "answer": 7011,
                                "state": 210,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.6
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 744,
                            "fields": {
                                "answer": 7011,
                                "state": 188,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 745,
                            "fields": {
                                "answer": 7010,
                                "state": 188,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.55
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 746,
                            "fields": {
                                "answer": 7009,
                                "state": 188,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 747,
                            "fields": {
                                "answer": 7008  ,
                                "state": 188,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 750,
                            "fields": {
                                "answer": 7008  ,
                                "state": 187,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 751,
                            "fields": {
                                "answer": 7009  ,
                                "state": 187,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 752,
                            "fields": {
                                "answer": 7010  ,
                                "state": 187,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.55
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 753,
                            "fields": {
                                "answer": 7011  ,
                                "state": 187,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.5
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 754,
                            "fields": {
                                "answer": 7011  ,
                                "state": 227,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 755,
                            "fields": {
                                "answer": 7010  ,
                                "state": 227,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 756,
                            "fields": {
                                "answer": 7009  ,
                                "state": 227,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 757,
                            "fields": {
                                "answer": 7008  ,
                                "state": 227,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 760,
                            "fields": {
                                "answer": 7008  ,
                                "state": 217,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.1
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 761,
                            "fields": {
                                "answer": 7009  ,
                                "state": 217,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 762,
                            "fields": {
                                "answer": 7010  ,
                                "state": 217,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.08
                            }
                        },
                        {
                            "model": "campaign_trail.answer_score_state",
                            "pk": 763,
                            "fields": {
                                "answer": 7011  ,
                                "state": 217,
                                "candidate": 77,
                                "affected_candidate": 77,
                                "state_multiplier": 0.08
                            }
                        },
                    ]
                
                    campaignTrail_temp.answer_feedback_json = [
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 709,
                            "fields": {
                                "answer": 3311,
                                "candidate": 77,
                                "answer_feedback": "More money on the internet. More teeth gnashing from the GOP. Perhaps you know something they don’t?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 710,
                            "fields": {
                                "answer": 3312,
                                "candidate": 77,
                                "answer_feedback": "You gab about your libertarian philosophy Bill O’Riley and shoot some stiff infomercials. Your core base is deflated, but the bigwigs are happy."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 712,
                            "fields": {
                                "answer": 3314,
                                "candidate": 77,
                                "answer_feedback": "Very astute, Dr. Paul. Huckabee’s remarks on Romney’s faith ensure that any alliance would be tenuous at best, and they can’t make a deal. Come the convention, it’s you who has defied the odds. You grin as you stand at the convention, giving your acceptance speech."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 713,
                            "fields": {
                                "answer": 3315,
                                "candidate": 77,
                                "answer_feedback": "This slap fighting muddies you both, and Mitt is able to unify the neo-conservatives around him."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 714,
                            "fields": {
                                "answer": 3316,
                                "candidate": 77,
                                "answer_feedback": "Romney takes the bait, and spends valuable time debating your assertions. Your slapfight only serves to propel the eventual nominee, Mike Huckabee."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 715,
                            "fields": {
                                "answer": 3317,
                                "candidate": 77,
                                "answer_feedback": "A three-way pitched battle erupts, dragging all three of you down. Your wing of the Republican Party watches with horror as America's Mayor seizes the nomination in a shock."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 717,
                            "fields": {
                                "answer": 3319,
                                "candidate": 77,
                                "answer_feedback": "Red baiting so blatantly in 2008? Snark about your age fills the airwaves, but most Republicans see where you’re coming from."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 718,
                            "fields": {
                                "answer": 3320,
                                "candidate": 77,
                                "answer_feedback": "This is a horrible theme to start on - you need to keep the usual base happy, as well as keeping your own base happy."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 719,
                            "fields": {
                                "answer": 3321,
                                "candidate": 77,
                                "answer_feedback": "You've questioned if you belong in the party before - a speech like this reminds you and the party of the fundemental morality of small government, and why you align with them."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 720,
                            "fields": {
                                "answer": 3322,
                                "candidate": 77,
                                "answer_feedback": "Unfortunately so, Dr. Paul. But it’s fine - we can work through this. We have to."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 724,
                            "fields": {
                                "answer": 3326,
                                "candidate": 77,
                                "answer_feedback": "The election has been flipped on its head! You’ve gone from a joke to a Casandra figure - your radical solutions may never be more popular than at this moment."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 728,
                            "fields": {
                                "answer": 3330,
                                "candidate": 77,
                                "answer_feedback": "Bush is warm and polite, and eager to keep himself relevant after he lost in 2004. You shoot an ad where you chat and drink some - non-alcoholic - beer. As affable Texans, the ad is solid, even if your base whispers sellout."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 729,
                            "fields": {
                                "answer": 3331,
                                "candidate": 77,
                                "answer_feedback": "The libertarians, already not entirely behind Allard, become deeply suspicious when the ad of you sharing a - non-alcoholic - beer with a grinning Bush is aired. You can’t win just with your base, but be careful to not <i>completely</i> alienate them."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 730,
                            "fields": {
                                "answer": 3332,
                                "candidate": 77,
                                "answer_feedback": "Fair enough, but with your current poll numbers, you’ll need to do <i>something</i> to stay relevant."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 731,
                            "fields": {
                                "answer": 3333,
                                "candidate": 77,
                                "answer_feedback": "Duncan smiles thinly at your explanation, and tries to prattle on about party unity and so on. After a tense few minutes, he tells you that the party will respect your choice - but the donors won’t."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 734,
                            "fields": {
                                "answer": 3336,
                                "candidate": 77,
                                "answer_feedback": "Duncan is visibly relieved by your compromise. You have an awkward chat with Allard a few days later, where you work to plan to avoid contradicting each other on the Campaign Trail."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 737,
                            "fields": {
                                "answer": 3340,
                                "candidate": 77,
                                "answer_feedback": "It makes total sense to me Dr. Paul - but the American public just doesn't get it. John Kerry is considered the winner of the debates."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 740,
                            "fields": {
                                "answer": 3346,
                                "candidate": 77,
                                "answer_feedback": "This is a flop, and all but saying you will. Still, at least you said you’ll pay the current seniors…"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 751,
                            "fields": {
                                "answer": 3359,
                                "candidate": 77,
                                "answer_feedback": "Apologizing and moving on is a safe bet. This will sting, but it’s not election defining."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 754,
                            "fields": {
                                "answer": 3362,
                                "candidate": 77,
                                "answer_feedback": "It’s good to not take this lying down, but the stuff in the newsletter was pretty indefensible. It would have been perhaps better to issue an apology."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 761,
                            "fields": {
                                "answer": 3374,
                                "candidate": 77,
                                "answer_feedback": "This is a betrayal of the base - and throwing the Republican leadership, who you convinced to abort the original bailout doesn't make you popular there, either. You've conceded you were wrong, and Kerry will hammer you on it."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 762,
                            "fields": {
                                "answer": 3375,
                                "candidate": 77,
                                "answer_feedback": "Why the potshot at Bush? The base agrees totally with this sentiment, and at a time like this, people are generally predisposed to accept radical explanations for issues, but few are sure of how your laissez-faire attitude would solve the situation."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 763,
                            "fields": {
                                "answer": 3376,
                                "candidate": 77,
                                "answer_feedback": "Kerry attacks you relentlessly on the failure of the bailout, but he's the President. He's the face of this crisis, and you're speaking with more factory workers every day."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 766,
                            "fields": {
                                "answer": 3381,
                                "candidate": 77,
                                "answer_feedback": "Him not accepting this is by the literal definition your problem. Of course, perhaps the loss of support is worth it to make your governing mandate as strong as possible - but you're counting your eggs a little early, aren’t you?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 768,
                            "fields": {
                                "answer": 3385,
                                "candidate": 77,
                                "answer_feedback": "This is about the only acceptable answer. You don’t talk about intervening on a state level, so libertarians are happy, but you still provide a spirited defense of marriage, so christians are happy."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 769,
                            "fields": {
                                "answer": 3387,
                                "candidate": 77,
                                "answer_feedback": "Limbaugh is surging with this answer, although a lot of homosexuals are giving you a second look. But it’s safe to say this was a poor answer."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 854,
                            "fields": {
                                "answer": 3368,
                                "candidate": 77,
                                "answer_feedback": "You might be right, Dr. Paul. The bill passes, though with a narrower margin than Kerry would've preferred. You include attacks on it in your stump speeches, and conservatives like it well enough."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 868,
                            "fields": {
                                "answer": 3386,
                                "candidate": 77,
                                "answer_feedback": "Rightfully or wrongly, this is taken as soft support for gay marriage or civil unions. Limbaugh’s numbers soar, but the Log Cabin Republicans are extremely enthusiastic about your candidacy. Overall, you probably lost votes with this."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 872,
                            "fields": {
                                "answer": 3397,
                                "candidate": 77,
                                "answer_feedback": "Huckabee’s fear mongering about you cutting farm subsidies puts you in a distant third, winning a few counties. The campaign isn’t able to build momentum, and Mitt Romney wins the nomination."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 873,
                            "fields": {
                                "answer": 3398,
                                "candidate": 77,
                                "answer_feedback": "You drown in a sea of similar conservative messaging, while depressing the base. You come 4th, and your campaign has no momentum.You offer eventual winner of the campaign, Mitt Romney, muted congratulations."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 874,
                            "fields": {
                                "answer": 3399,
                                "candidate": 77,
                                "answer_feedback": "A week before the New Hampshire primary, McCain announces he’s exiting the race following a cancer scare. In a race of more conservative than thou, you’re able to snag enough moderates and reformists and win the state."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 875,
                            "fields": {
                                "answer": 3400,
                                "candidate": 77,
                                "answer_feedback": "New England may be a liberal state, but it’s Republicans voting in this primary, and Romney wins the state. Headlines of you being the “homosexual’s favorite republican” are printed throughout the other states, and you provide plenty of fodder for Governor Mike Huckabee."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 876,
                            "fields": {
                                "answer": 3409,
                                "candidate": 77,
                                "answer_feedback": "You can’t maintain the energy generated by New Hampshire, and burn out in a few weeks. Romney eventually gets the nomination, and your sudden rise to front runner is regarded as a strange anomaly."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 877,
                            "fields": {
                                "answer": 3410,
                                "candidate": 77,
                                "answer_feedback": "Yes, this appeals to everyone - that’s why everyone is using this appeal. Your milquetoast speeches and boring platitudes are much similiar to Governor Romney's, the overlap lets Mike Huckabee champion the nomination in something of a surprise."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 878,
                            "fields": {
                                "answer": 3411,
                                "candidate": 77,
                                "answer_feedback": "This pivot is an outrage to your libertarian base, while Huckabee and Romney maintain a monopoly social conservatives. You flounder rapidly, and Romney dispatches Huckabee swiftly."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 879,
                            "fields": {
                                "answer": 3412,
                                "candidate": 77,
                                "answer_feedback": "Libertarians enjoy this anti-war pitch, and Paleoconservatives enjoy your focus on the border. When Alan Keyes drops out, he endorses you, and Pat Buchnanan follows him. Your coalition expands wider and wider."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 880,
                            "fields": {
                                "answer": 3429,
                                "candidate": 77,
                                "answer_feedback": "You've long been opposed to baby murder, even winning your 1988 primary against an abortionist Libertarian. This is light enough on policy to keep your base happy, but your clear morality appeals to the Republican base. You feel a tug of guilt as you think about the babies that will be killed in Blue States when you win. "
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 881,
                            "fields": {
                                "answer": 3430,
                                "candidate": 77,
                                "answer_feedback": "You've taken the moral stand, and the Republican base is happy. Your base is more split on the issue, and your support for big government morality for this issue plays on your mind."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 882,
                            "fields": {
                                "answer": 3431,
                                "candidate": 77,
                                "answer_feedback": "This is a middle ground that pleases not many - pro abortion libertarians aren’t happy at the vow to repeal Roe v Wade, and anti-abortion activists are frustrated that you won’t do more to stop baby murder."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 892,
                            "fields": {
                                "answer": 3457,
                                "candidate": 77,
                                "answer_feedback": "As expected, you’ve sided with the free market and against scientific consensus. This is the common stance in the party, so you’ve built some bridges there, but independents generally believe in global warming."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 893,
                            "fields": {
                                "answer": 3458,
                                "candidate": 77,
                                "answer_feedback": "This is a more populist slant at attacking global warming, and it’s not a bad use of populism. Making the issue about jobs is popular in this economic climate."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 896,
                            "fields": {
                                "answer": 3468,
                                "candidate": 77,
                                "answer_feedback": "I bet it feels good to be in the majority for once. Limbaugh voters will certainly be reconsidering you, and the party bosses are relieved you’re not totally alien with the GOP base."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 897,
                            "fields": {
                                "answer": 3469,
                                "candidate": 77,
                                "answer_feedback": "Fair enough. Limbaugh raves about the bill, generating more controversial headlines and wins over some Buchanan acolytes that won you the primary, but they’re a marginal force in America."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 898,
                            "fields": {
                                "answer": 3470,
                                "candidate": 77,
                                "answer_feedback": "Allard is anti-immigration, but can’t convince Hatch to stop working on the bill. Nonetheless he hits against it, earning some modest headlines."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 901,
                            "fields": {
                                "answer": 3487,
                                "candidate": 77,
                                "answer_feedback": "“Come home America!” You’ve become a candidate of the ultra-doves, but even doves have a more nuanced take on the war then this. Perhaps this can bolster turnout for you?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 902,
                            "fields": {
                                "answer": 3488,
                                "candidate": 77,
                                "answer_feedback": "Anytime you bring up the recession is a win for you, but this is still a little too dovish for the public at large."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 903,
                            "fields": {
                                "answer": 3489,
                                "candidate": 77,
                                "answer_feedback": "Divide and conquer. You won’t win over most but the devout liberal doves, but you can convince them to stay home or vote third party."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 952,
                            "fields": {
                                "answer": 3369,
                                "candidate": 77,
                                "answer_feedback": "They tell you to pound sand, in more polite words. The bill passes, and it becomes terribly clear that the Republican establishment has no love lost for you."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 964,
                            "fields": {
                                "answer": 3382,
                                "candidate": 77,
                                "answer_feedback": "For better or worse, Limbaugh gets what he wants. He’s still calling you a worse John Kerry on his show, but hopefully you can break through the noise."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 965,
                            "fields": {
                                "answer": 3383,
                                "candidate": 77,
                                "answer_feedback": "Good hedge. Conservatives should be able to hold their nose and vote for you - but still, make sure you throw them <i>some</i> red meat."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 969,
                            "fields": {
                                "answer": 3389,
                                "candidate": 77,
                                "answer_feedback": "This may be true, but his proposed expansions are very popular with the voting public right now - it would have been better to try and attack the plan, rather than the politics behind the plan."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12240,
                            "fields": {
                                "answer": 3501,
                                "candidate": 77,
                                "answer_feedback": "There’s some snickering about a man in his 70s representing change, but this is a solid launch to the campaign. I’ve gotten you some polls - you do well against Kerry!"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12241,
                            "fields": {
                                "answer": 3502,
                                "candidate": 77,
                                "answer_feedback": "Big government and bigger government quickly becomes a favorite line in the primary campaign, and gives you a solid bounce when the primary begins. Looking at the polls I’ve gotten you, even Kerry supporters seem swayed!"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12243,
                            "fields": {
                                "answer": 12242,
                                "candidate": 77,
                                "answer_feedback": "This is kind of a thud, Dr. Paul. Everyone is a conservative in the race - you should focus on doing what other people aren’t. Still, despite the thud of an opening, our polls say you do well against Kerry!"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12296,
                            "fields": {
                                "answer": 12295,
                                "candidate": 77,
                                "answer_feedback": "This is a good middle ground between appealing to the typical Republican base and not alienating your own base. The party bosses aren’t thrilled that you won’t meet with him, but you can’t please anyone."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12300,
                            "fields": {
                                "answer": 12299,
                                "candidate": 77,
                                "answer_feedback": "My lord Paul. You can disassociate from Bush without outright insulting him."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12318,
                            "fields": {
                                "answer": 12317,
                                "candidate": 77,
                                "answer_feedback": "Kerry is visibly flummoxed as you explain that the recession was caused by too much regulation. He seems to reflect the opinion of the median American, and is viewed as the overall winner - although your tax cuts are popular."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12323,
                            "fields": {
                                "answer": 12322,
                                "candidate": 77,
                                "answer_feedback": "This really resonates. Kerry can insist it’s necessary all he wants - people <i>hate</i> this policy."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12328,
                            "fields": {
                                "answer": 3345,
                                "candidate": 77,
                                "answer_feedback": "This answer offends only the most diehard libertarian, who are offended by your massive pivot. Your new position isn’t popular, but it’s still much better than saying you would."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12335,
                            "fields": {
                                "answer": 12334,
                                "candidate": 77,
                                "answer_feedback": "Your honesty has an appeal but… wow."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12345,
                            "fields": {
                                "answer": 12344,
                                "candidate": 77,
                                "answer_feedback": "Neither of them are very happy about your meddling, but they can only concede that you have played ball so far - evident by Allard on the ticket. They whip up a defeat, and your polls dip in the Midwest."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12377,
                            "fields": {
                                "answer": 12376,
                                "candidate": 77,
                                "answer_feedback": "This is the best answer you could have given. Acknowledging that the newsletter was wrong, but being pugnacious enough to generate a defense."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12415,
                            "fields": {
                                "answer": 3490,
                                "candidate": 77,
                                "answer_feedback": "This is probably his best use. He was hardly a tour de force of personality anyway."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12418,
                            "fields": {
                                "answer": 3491,
                                "candidate": 77,
                                "answer_feedback": "Allard gives dull, long speeches on the campaign trail about restoring fiscal responsibility and morality to the White House. The issue isn’t solved exactly, but the message is consistent."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12422,
                            "fields": {
                                "answer": 3492,
                                "candidate": 77,
                                "answer_feedback": "On the one hand, his language is fine tuned for appealing to farmers. On the other hand, the plains weren’t really in doubt."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12429,
                            "fields": {
                                "answer": 3372,
                                "candidate": 77,
                                "answer_feedback": "You’ve been explaining yourself since the 80s - people still don’t fully back your eccentric ideas. Still, tax cuts are always popular."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12435,
                            "fields": {
                                "answer": 12434,
                                "candidate": 77,
                                "answer_feedback": "SNL are gracious hosts, and Colbert hams up his neoconservative character to make you seem reasonable. John Stewart is a total disaster however - he directly asks you if you support the Civil Rights Act of 1964, and you weakly stammer that it’s ancient history and irrelevant."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12440,
                            "fields": {
                                "answer": 12439,
                                "candidate": 77,
                                "answer_feedback": "You helped at least half the mothers in your district give birth, and your partner helped the other half. These ads are schmaltzy, but feel good affairs that should convince Americans to give you some second thoughts."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12447,
                            "fields": {
                                "answer": 12445,
                                "candidate": 77,
                                "answer_feedback": "It’s good to use figures in your attacks on Healthcare. Tying this spending to the recession should help take the luster out."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12450,
                            "fields": {
                                "answer": 12446,
                                "candidate": 77,
                                "answer_feedback": "Kerry’s plan might be popular, but it’s not what the doctor prescribes. Your plan has some support."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12467,
                            "fields": {
                                "answer": 12466,
                                "candidate": 77,
                                "answer_feedback": "Stossel privately tells you he has some issue with the rhetoric being used. He gives a blank commitment to enforcing the laws, and the story fades away."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12485,
                            "fields": {
                                "answer": 12482,
                                "candidate": 77,
                                "answer_feedback": "This is a decent attack, but a lot of people are happy to see a possible end to the war. Hopefully this isn’t too much of an October surprise!"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12489,
                            "fields": {
                                "answer": 12483,
                                "candidate": 77,
                                "answer_feedback": "The Neo-Conservatives in the party are split between backing the Republican party and getting behind Kerry, who despite being liberal still values foreign policy. Hopefully this isn’t too much of an October surprise!"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12493,
                            "fields": {
                                "answer": 12484,
                                "candidate": 77,
                                "answer_feedback": "Kerry clarifies that he only pulled out when generals said it was reasonable to pull out - but various anonymous leaks suggest that the decision was indeed politically motivated. Hopefully this will help mitigate this October surprise."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12503,
                            "fields": {
                                "answer": 12499,
                                "candidate": 77,
                                "answer_feedback": "Some listen. Some don't. The recession has hit these people hard. There's a growing attitude of distrust and disillusionment that concerns even you."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12507,
                            "fields": {
                                "answer": 12500,
                                "candidate": 77,
                                "answer_feedback": "You're greeted well in Kerry's home region, but the polling shows you getting little over 10 electoral votes. The Democrats have a near chokehold."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12510,
                            "fields": {
                                "answer": 12501,
                                "candidate": 77,
                                "answer_feedback": "You're not Bush, but your opponent also is no Al Gore. Your minority outreach has been middling, at best, and that counts for Hispanics as well."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 12514,
                            "fields": {
                                "answer": 12502,
                                "candidate": 77,
                                "answer_feedback": "Indeed he does. Your appeal in North Carolina, Virginia, and West Virginia in particular is extremely limited, and at your final rallies, it shows. Let's hope they hate Kerry more than you."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 6000,
                            "fields": {
                                "answer": 6000,
                                "candidate": 77,
                                "answer_feedback": "Stossel cheerfully reiterates his support for DDT and opposition to green regulation. On the one hand, a majority of Americans believe in Global Warming, and Stossel’s remarks are unpopular. On the other hand, people who considered green issues election defining certainly wouldn’t vote for you."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 6001,
                            "fields": {
                                "answer": 6001,
                                "candidate": 77,
                                "answer_feedback": "A republican candidate being less pugnacious? That’s nearly heresy. Stossel changes his attitude, and his ratings dwindle slightly."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 6002,
                            "fields": {
                                "answer": 6002,
                                "candidate": 77,
                                "answer_feedback": "New Mexico is very winnable, and the weather's nice. They like you well enough, and your polls see a boost there."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 6002,
                            "fields": {
                                "answer": 6002,
                                "candidate": 77,
                                "answer_feedback": "New Mexico is very winnable, and the weather's nice. They like you well enough, and your polls see a boost there."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 6003,
                            "fields": {
                                "answer": 6003,
                                "candidate": 77,
                                "answer_feedback": "You speak at a 'Rally for the Republic' in Philadelphia, and all your fans turn up to meet you. Campaign boost aside, it's a pretty good day."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 6004,
                            "fields": {
                                "answer": 6004,
                                "candidate": 77,
                                "answer_feedback": "You fit in poorly with both evangelicals in the state, and the growing moderate suburban base - but Republicans of most stripes turn out to greet you reluctantly. They've little interest in another term of Kerry."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 6005,
                            "fields": {
                                "answer": 6005,
                                "candidate": 77,
                                "answer_feedback": "You're right - your programme generally puts you at odds with Michigan. But it means something that you bother to campaign there, and polling reflects that."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 6006,
                            "fields": {
                                "answer": 3342,
                                "candidate": 77,
                                "answer_feedback": "Dr. No strikes! The bailout is popular with anyone familiar with established economics, and your opposition is used to attack you in the future. At the same time, there’s certainly outrage that the people are bankrolling the corporations that gambled with their homes, their futures. This could go well for you."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 7000,
                            "fields": {
                                "answer": 7000,
                                "candidate": 77,
                                "answer_feedback": "Indeed, people do turn out - though winning California is, of course, a pipe dream. Looking into the crowd, you see a bright future for America."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 7001,
                            "fields": {
                                "answer": 7001,
                                "candidate": 77,
                                "answer_feedback": "Ain't it though?"
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 7002,
                            "fields": {
                                "answer": 7002,
                                "candidate": 77,
                                "answer_feedback": "There's little doubt you'll sweep the Southwest, so the rallies are informal and cordial. The energy is brimming, even as the sun beams."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 7003,
                            "fields": {
                                "answer": 7003,
                                "candidate": 77,
                                "answer_feedback": "In Detroit, you sign a poster from your father's 1968 campaign. He'd be proud of how far you've come, Mitt."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 7004,
                            "fields": {
                                "answer": 7004,
                                "candidate": 77,
                                "answer_feedback": "Governor Huckabee, we keep trying to tell you that you don't have high appeal wit- Fine. Fine. New York it is."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 7005,
                            "fields": {
                                "answer": 7005,
                                "candidate": 77,
                                "answer_feedback": "The Midwest have always been the Bellwether states in the Union, and a last minute tour will help ensure they stay red."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 7006,
                            "fields": {
                                "answer": 7006,
                                "candidate": 77,
                                "answer_feedback": "You and Bush have similar appeals, and continuing his work should prove effective."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 7007,
                            "fields": {
                                "answer": 7007,
                                "candidate": 77,
                                "answer_feedback": "Fair enough."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8000,
                            "fields": {
                                "answer": 7012,
                                "candidate": 77,
                                "answer_feedback": "People are surprised at your polite tone. Your genial attitude helps disarm notions that you're an extremist, at least a little."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8001,
                            "fields": {
                                "answer": 7013,
                                "candidate": 77,
                                "answer_feedback": "That's very rich, considering Senator Allard submitted a constitutional amendment banning marriage. Still, the contradiction is more glaring with Kerry and Landrieu."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8002,
                            "fields": {
                                "answer": 7014,
                                "candidate": 77,
                                "answer_feedback": "Landrieu can insist she personally supports Civil Unions all she wants - her voting record is a liability for Kerry, and could reduce turn out."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8003,
                            "fields": {
                                "answer": 7015,
                                "candidate": 77,
                                "answer_feedback": "You have a point, but to most voters you sound unhinged when you ramble about the White House lying about John Edwards."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8004,
                            "fields": {
                                "answer": 7016,
                                "candidate": 77,
                                "answer_feedback": "This attack is a little out of the mainstream, but pressing this kind of attack on her could draw battle lines, and rally Republicans behind you."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8005,
                            "fields": {
                                "answer": 7017,
                                "candidate": 77,
                                "answer_feedback": "Rush cackles on the next episode, smugly boasting ''the truth hurts, right Ronnie?'' You're disgusted, and unsettled at the idea that conservatives could support this man."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8006,
                            "fields": {
                                "answer": 7018,
                                "candidate": 77,
                                "answer_feedback": "You and Kerry issue a strongly worded statement against Limbaugh's demagoguery. Kerry earns credit for his bipartisan support of you, and Rush gets some new lines about the Duopoly."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8007,
                            "fields": {
                                "answer": 7019,
                                "candidate": 77,
                                "answer_feedback": "You get a lot of questions that you feel your ''Statement denouncing paedophilia'' already answers."
                            }
                        },
                        {
                            "model": "campaign_trail.answer_feedback",
                            "pk": 8008,
                            "fields": {
                                "answer": 7020,
                                "candidate": 77,
                                "answer_feedback": "Rush doesn't stop using the line, but he does suffer some negative headlines about the tasteless jokes. And fortunately, most listeners seem to take them as jokes."
                            }
                        },
                    ]
                
                    campaignTrail_temp.candidate_image_url = "https://imgur.com/BURMyeT.png";
                    campaignTrail_temp.running_mate_image_url = "https://imgur.com/3aNallm.png";
                    campaignTrail_temp.candidate_last_name = "Ron Paul";
                    campaignTrail_temp.running_mate_last_name = "For President!";
                
                    let vpName = "Mary L. Landrieu";
                
                    vpTable = {
                        "John F. Kerry" : vpName,
                        
                        "Ron E. Paul" : "Wayne Allard",
                        
                        
                        "Rush H. Limbaugh" : "Various",
                
                        "Ralph Nader" : "Matt Gonzalez"
                
                
                    }
                
                    vpTableHistorical = {
                        "John F. Kerry" : "Mary L. Landrieu",
                        "Ron E. Paul" : "A. Wayne Allard",
                        "Rush H. Limbaugh" : "Chuck O. Baldwin",
                        "Ralph Nader" : "Matt E. Gonzalez"
                    }
                    HistHexcolour=["#5875ca","#d2562d","#660066","#289143"];
                    HistName=[" John F. Kerry"," Ron E. Paul"," Rush H. Limbaugh", " Ralph Nader"];
                    HistEV=[283,250,5,0];
                    HistPV=["62,582,045","58,926,452","7,822,366","1,232,123"];
                    HistPVP=["43.2%","40.7%","9.2%","0.9%"];
                
                    function onGameWindowChangeCandidates() {
                        const resultsTableHolder = document.getElementById("overall_details_container");
                
                        if(!resultsTableHolder || resultsTableHolder.classList.contains("done")) {
                            return;
                        }
                
                        resultsTableHolder.classList.add("done");
                
                        const resultsTable = resultsTableHolder.childNodes[3].childNodes[3].children[0];
                        
                        for(let i = 0; i < resultsTable.children.length; i++) {
                            const row = resultsTable.children[i];
                            let name = row.firstChild.innerText;
                            row.insertCell(1);
                            if(name) {
                                name = name.replaceAll("-", "").trim();
                                console.log("name is:" + name)
                            }
                
                            if(i == 0) {
                                row.children[1].innerHTML = `<span style="font-weight:bold">Running Mate<span>`;
                            }
                            else {
                                row.children[1].innerHTML = vpTable[name];
                            }
                        }
                
                        
                        const resultsTableHistorical = resultsTableHolder.childNodes[5].childNodes[3].children[0];
                        
                        for(let i = 0; i < resultsTableHistorical.children.length; i++) {
                            const row = resultsTableHistorical.children[i];
                            let name = row.childNodes[1].innerText;
                            row.insertCell(1);
                            if(name) {
                                name = name.replaceAll("-", "").trim();
                            }
                
                            if(i == 0) {
                                row.children[1].innerHTML = `<span style="font-weight:bold">Running Mate<span>`;
                            }
                            else {
                                row.children[1].innerHTML = vpTableHistorical[name];
                            }
                        }
                    }
                    const gameWindowNode = document.getElementById("game_window");
                    const candidateWatcherConfig = { attributes: true, childList: true, subtree: true };
                
                    const candidateObserver = new MutationObserver(onGameWindowChangeCandidates);
                    candidateObserver.observe(gameWindowNode, candidateWatcherConfig);
                
                
                    campaignTrail_temp.jet_data = [{
                        "banner_enabled": true,
                        "banner_data": {
                            "canName": "Ron Paul",
                            "runName": "For President!",
                            "canImage": "https://imgur.com/BURMyeT.png",
                            "runImage": "https://imgur.com/3aNallm.png"
                        },
                        "endings_enabled": false,
                        "ending_data": {
                        },
                    }
                    ]
                
                
                    construct = (a = 1) => {
                    
                        e.page = e.page + a < e.pages.length ? e.page + a : 0
                        let html = e.header;
                        html += e.pages[e.page] + "<br>";
                        if (e.page > 0) {
                        
                        html += `<button onclick='endingConstructor(a = -1)'>Back</button>`
                        }
                        if (e.page < e.pages.length - 1) {
                        
                        html += `<button onclick='endingConstructor(a = 1)'>Next</button>`
                        }
                        
                        for (i in e.executable) {
                        if (e.executable[i][0] == e.page) {
                            e.executable[i][1]();
                            
                        }
                        }
                        
                        if (e.image == true)
                        setTimeout(()=>{
                          candImg = $(".person_image")[0]
                          if (candImg) {
                            candImg.remove()
                            console.log("TRYING");
                            $("#final_results_description")[0].style = `
                              text-align:left;
                              width: 72%;
                              height:71%;
                              display: block;
                              margin-left: auto;
                              margin-right: auto;
                              overflow: auto;
                              color: #000000
                            `
                             console.log("RESULTS UPDATED");
                          }
                        }, 10)
                        else if (e.image)
                        setTimeout(()=>{
                          candImg = $(".person_image")[0];
                          if (candImg) {
                            candImg.src = e.image;
                            console.log("TRYING");
                            $("#final_results_description")[0].style = `
                              text-align:left;
                              width: 72%;
                              height:71%;
                              display: block;
                              margin-left: auto;
                              margin-right: auto;
                              overflow: auto;
                              color: #000000
                            `
                             console.log("RESULTS UPDATED");
                          }		
                        }, 10)
                        
                        return html;
                        }
                        
                        endingConstructor = (a = 1) => {
                        $("#final_results_description")[0].innerHTML = construct(a);
                        }
                        
                      // ENDINGS -- this is slightly more reliable than the ending code method
                    
                    
                    
                    
                      e.multiple_endings = true;
                    
                    //This is the only part of the notes that is actually me Onkel Danny - this shit is all chatgpt. Chatgpt is a useful tool. We also used chatgpt for the writing. Halligan Elysium would also like to credit Chatgpt
                      function autoHalveVolumeOnce() {
                        // Function to halve the volume
                        const halveVolume = (element) => {
                            element.volume = element.volume / 5;
                    
                            // Add a one-time event listener to prevent volume increase beyond half
                            element.addEventListener('volumechange', function preventVolumeIncrease() {
                                if (element.volume > 0.5) {
                                    element.volume = 0.5;
                                }
                            });
                        };
                    
                        // Apply the function to all current audio and video elements
                        document.querySelectorAll('audio, video').forEach((element) => {
                            if (!element.dataset.volumeHalved) {
                                halveVolume(element);
                                element.dataset.volumeHalved = true; // Mark the element as processed
                            }
                        });
                    
                        // Observer to detect new media elements added to the DOM
                        const observer = new MutationObserver((mutations) => {
                            mutations.forEach((mutation) => {
                                mutation.addedNodes.forEach((node) => {
                                    if ((node.tagName === 'AUDIO' || node.tagName === 'VIDEO') && !node.dataset.volumeHalved) {
                                        halveVolume(node);
                                        node.dataset.volumeHalved = true; // Mark the element as processed
                                    }
                                });
                            });
                        });
                    
                        // Configure the observer to watch for additions of child elements
                        observer.observe(document.body, {
                            childList: true,
                            subtree: true
                        });
                    }
                    
                    
                      e.header = "<h1> something went wonjg</h1>";
                      e.pages = ["<p>huh.</p>"];
                      e.page = 0;
                    
                      endingPicker = (out, totv, aa, quickstats) => {
                        //out = "win", "loss", or "tie" for your candidate
                        //totv = total votes in entire election
                        //aa = all final overall results data
                        //quickstat = relevant data on candidate performance (format: your candidate's electoral vote count, your candidate's popular vote share, your candidate's raw vote total)
                    
                        /*
                        e.header = "<h2></h2>"
                        e.pages = ["<p></p>",
                                  "<p></p>"]
                        */
                        e.pages = []
                        e.header = "";
                        e.executable = []
                    
                        if (quickstats[0] >= 270 && campaignTrail_temp.candidate_json[1]["fields"].last_name == "Giuliani") { // Giuliani win
                        e.pages.push(`<h2>''It seems like the polls were dead on the money, John Kerry has been rejected thoroughly.''</h2>
                                    <p>Ron Paul sighed, watching as the states were called. Kerry had been rejected. This was good news, obviously. John Kerry had won without popular support and been rightfully pilloried by Republicans winning in nearly every election held. With the new President, there would be no more abuse of the bully pulpit. There would be some fiscal discipline.</p>
                                    <p>That was a good thing.</p>
                                    <p>He supposed.</p>
                                    <p>The opportunity was gone. The chance to spread the message of liberty further than it had ever been was snatched away by the same big government neo-conservatives, who would continue to pour trillions of dollars into the coffers of warmongers and pointless moral grandstanding like the war on drugs.</p>
                                    <p>At least there would be less handouts. Ron Paul turned off his TV, the screen’s dark reflection showing nothing at all.</p>
                                    `)
                                    e.pages.push 
                                    (`<h2>Rudy Giulani drops out of Republican Primary, remains in the General Election.</h2>
                                    <p>It’s been rumored ever since many Congressional Republicans won their close races by denouncing President Giulani, but it seems Michelle Bachmann’s shock upset win in the Iowa caucus has forced Giulani’s hands. Issuing a stunning press statement, the President ''recognises that the Republican party has issues with me (...) but I will not stop serving the American people.''</p>
                                    <p>The President has left the Republican party and the long rumored ''Forward Party'' that was discussed between known moderates within Congress is going ahead. Independent Democratic Senator Joe Liberman has officially joined the Forward Party, while Senator John McCain praised the concept but declined to join.</p>
                                    <p>In a joint statement issued by the current members of the party, they claimed ''too many in America are forced into backing positions they do not fully believe in, to ensure that the other side cannot win. This attitude can be found left and right, and is calamitous for America’s health. The Forward party is not dedicated to being left or right, but forwards with a mutual consensus from all.''</p>
                                    `)
                                    e.pages.push(`<h2>The Campaign Trail</h2>
                                    <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/COE446m.png><br>For the first time since 1992, there are three credible contenders to the White House. Former Speaker of the House Newt Gingrich must provide conservative answers for America while appealing to moderates, President Rudy Giulani needs to try and expand his appeal as far as he can and Senator Hillary Clinton must try and keep her base united while offering middle ground solutions.</p>`)
                                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/VMOY1VruWUCSBWXvwRySrNpheGh2wrz2.mp3"));
                        //e.image = ""
                        e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/jSDokll.jpg'})])
                        e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/RNRWgLI.jpg'})])
                        e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                        } else if (quickstats[0] >= 270 && campaignTrail_temp.candidate_json[1]["fields"].last_name == "Romney") { // Romney win
                        e.pages.push(`<h2>''It seems like the polls were dead on the money, John Kerry has been rejected thoroughly.''</h2>
                                    <p>Ron Paul sighed, watching as the states were called. Kerry had been rejected. This was good news, obviously. John Kerry had won without popular support and been rightfully pilloried by Republicans winning in nearly every election held. With the new President, there would be no more abuse of the bully pulpit. There would be some fiscal discipline.</p>
                                    <p>That was a good thing.</p>
                                    <p>He supposed.</p>
                                    <p>The opportunity was gone. The chance to spread the message of liberty further than it had ever been was snatched away by the same big government neo-conservatives, who would continue to pour trillions of dollars into the coffers of warmongers and pointless moral grandstanding like the war on drugs.</p>
                                    <p>At least there would be less handouts. Ron Paul turned off his TV, the screen’s dark reflection showing nothing at all.</p>
                                    `)
                                    e.pages.push 
                                    (`<h2>White House Press Conference 09/06/10.</h2>
                                    <p>''Good evening, esteemed members of the press. Yesterday, we held elections - this morning I spoke to Senator McConnel and told him that I’m glad I get to keep working with him. I phoned Mr. Boener and told him how much I had enjoyed working with him, and then phoned Mrs. Pelosi and said that I look forward to working with her, when she is nominated to become the Speaker of the House.''</p>
                                    <p>''I’ve been in politics long enough to have witnessed all kinds of elections, and I’ve been on all sides of every result. Last night, we saw great results - we saw that people have faith in my plan to help lift them out of the difficult situation we have found ourselves in.''</p>
                                    <p>''The American people have come to realize that the Government is not, and should not, be their savior. Instead, we must provide people with the tools they need to help themselves. This has meant tax cuts, this has meant refunds, and this has meant fostering the creative spirit of all Americans.''</p>
                                    <p>''We’re going to continue these steps of helping Americans to help themselves over the course of our administration. We’ll crackdown on illegal immigration, which creates dependents on the welfare system who do not pay back in and creates unfair competition. We will continue to cut through the red tape in healthcare and in environmental regulations to create more jobs. That’s the mandate the American people have given us, and I look forward to fulfilling it.''</p>
                                    `)
                                    e.pages.push(`<h2>The Campaign Trail</h2>
                                    <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/5EwIC1a.png><br>President Mitt Romney seeks re-election while Senator Hillary Clinton seeks to bring a more liberal vision to the White House. Key issues in this election are tax rates, immigration and healthcare.</p>`)
                                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/VMOY1VruWUCSBWXvwRySrNpheGh2wrz2.mp3"));
                        //e.image = ""
                        e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/5UXkhZT.jpg'})])
                        e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/UbGbQ1L.jpg'})])
                        e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                        } else if (quickstats[0] >= 270 && campaignTrail_temp.candidate_json[1]["fields"].last_name == "Huckabee") { // Huckabee win
                        e.pages.push(`<h2>''It seems like the polls were dead on the money, John Kerry has been rejected thoroughly.''</h2>
                                    <p>Ron Paul sighed, watching as the states were called. Kerry had been rejected. This was good news, obviously. John Kerry had won without popular support and been rightfully pilloried by Republicans winning in nearly every election held. With the new President, there would be no more abuse of the bully pulpit. There would be some fiscal discipline.</p>
                                    <p>That was a good thing.</p>
                                    <p>He supposed.</p>
                                    <p>The opportunity was gone. The chance to spread the message of liberty further than it had ever been was snatched away by the same big government neo-conservatives, who would continue to pour trillions of dollars into the coffers of warmongers and pointless moral grandstanding like the war on drugs.</p>
                                    <p>At least there would be less handouts. Ron Paul turned off his TV, the screen’s dark reflection showing nothing at all.</p>
                                    `)
                                    e.pages.push 
                                    (`<h2>Remarks on signing the Freedom Of Faith In Schools Act.</h2>
                                    <p>''After far too long, we have taken critical steps to restore the soul of America. Through the signing of this bill, we are bringing back faith in schools. Despite what critics have claimed, this does not impede on the First Amendment. Christian or Jewish, all religious symbols will be permitted in schools. Since the war on faith was declared by faithless people, we’ve seen America grow colder and darker.''</p>
                                    <p>''When kids bring bibles into schools, they don’t bring guns into school. That is simply a fact. By putting into text that kids and their teachers cannot be punished for freely expressing their faith, we will restore the moral fibre of America.''</p>
                                    <p>''I would like to take the time to thank the various legislators in Congress that worked hard to ensure this bill passed. In particular, I commend Senator Robert Byrd who’s bipartisan support for this bill demonstrates an undeniable fact - we are all God’s children first, and Republican or Democrat a distant second.''</p>
                                    `)
                                    e.pages.push(`<h2>The Campaign Trail</h2>
                                    <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/OTqNRzn.png><br>President Huckabee is put up to the test against the dynamic liberal Senator Barack Obama. President Huckabee is controversial and oversees a lagging economy, while Senator Obama is considered to be somewhat inexperienced. Senator Obama is also the first black candidate for President, a fact that could hinder his odds of victory.</p>`)
                                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/VMOY1VruWUCSBWXvwRySrNpheGh2wrz2.mp3"));
                        //e.image = ""
                        e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/y6lNOub.jpg'})])
                        e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/lZOmKFD.jpg'})])
                        e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                        } else if (quickstats[0] < 270 && campaignTrail_temp.candidate_json[1]["fields"].last_name == "Huckabee") { // Huckabee loss
                        e.pages.push(`<h2>''It seems like the polls were dead wrong! John Kerry has managed to win!''</h2>
                                    <p>Well, that’s a shock. When the President ruined the economy, most people called the election for the Republicans. That made sense - elections were decided by the economy, and Kerry screwed up as bad as Herbert Hoover. It was a done deal!</p>
                                    <p>Maybe riding in that tank was a bad idea. Or promising to tax the 1% to balance the budget ended up backfiring. In all likelihood, it was probably that hot mic, and what they said about women and minorities that ended up really dooming the campaign.</p>
                                    <p>Ron Paul felt guilty for being relieved. Things were going to be bad. Outright dire, even. But that left the field wide open - after the traditional Neo-Conservatives managed to mess up <i>royally</i>, the Republicans would be outright eager to listen to him. Probably.</p>
                                    `)
                                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/WkRKo3YgZkVKrVBpWPlpzFmkNbeUV6xD.mp3"));
                        //e.image = ""
                        e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/0hiO0Jk.jpg'})])
                        } else if (quickstats[0] < 270 && campaignTrail_temp.candidate_json[1]["fields"].last_name == "Romney") { // Romney loss
                        e.pages.push(`<h2>''It seems like the polls were dead wrong! John Kerry has managed to win!''</h2>
                                    <p>Well, that’s a shock. When the President ruined the economy, most people called the election for the Republicans. That made sense - elections were decided by the economy, and Kerry screwed up as bad as Herbert Hoover. It was a done deal!</p>
                                    <p>Maybe riding in that tank was a bad idea. Or promising to tax the 1% to balance the budget ended up backfiring. In all likelihood, it was probably that hot mic, and what they said about women and minorities that ended up really dooming the campaign.</p>
                                    <p>Ron Paul felt guilty for being relieved. Things were going to be bad. Outright dire, even. But that left the field wide open - after the traditional Neo-Conservatives managed to mess up <i>royally</i>, the Republicans would be outright eager to listen to him. Probably.</p>
                                    `)
                                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/WkRKo3YgZkVKrVBpWPlpzFmkNbeUV6xD.mp3"));
                        //e.image = ""
                        e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/0hiO0Jk.jpg'})])
                        } else if (quickstats[0] < 270 && campaignTrail_temp.candidate_json[1]["fields"].last_name == "Giuliani") { // Giuliani loss
                        e.pages.push(`<h2>''It seems like the polls were dead wrong! John Kerry has managed to win!''</h2>
                                    <p>Well, that’s a shock. When the President ruined the economy, most people called the election for the Republicans. That made sense - elections were decided by the economy, and Kerry screwed up as bad as Herbert Hoover. It was a done deal!</p>
                                    <p>Maybe riding in that tank was a bad idea. Or promising to tax the 1% to balance the budget ended up backfiring. In all likelihood, it was probably that hot mic, and what they said about women and minorities that ended up really dooming the campaign.</p>
                                    <p>Ron Paul felt guilty for being relieved. Things were going to be bad. Outright dire, even. But that left the field wide open - after the traditional Neo-Conservatives managed to mess up <i>royally</i>, the Republicans would be outright eager to listen to him. Probably.</p>
                                    `)
                                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/WkRKo3YgZkVKrVBpWPlpzFmkNbeUV6xD.mp3"));
                        //e.image = ""
                        e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/0hiO0Jk.jpg'})])
                        } else if (quickstats[0] >= 350 ) { // Paul landslide win
                        e.pages.push(`<h2>''IT’S HAPPENING!''</h2>
                                    <p>The Staples Center sounded like a riot. Roar after roar, cheer after cheer, scream after scream. After an early start, where the South was called nearly unanimously for Paul and a few coastal states for Kerry, the men on TV called state after state. The apex came when the bellwether states, Nevada, Florida and Ohio were all called comfortably for Paul - while New York was too close to call. The building itself seemed to come alive at the idea that the liberals that had brought destruction to this country had lost even their safest seats.</p>
                                    <p>Backstage, Ron Paul was alone in the bathroom, with the Secret Service waiting outside. He splashed his face with cold water, struggling to comprehend the results. Perhaps this was some glorious dream - but the water didn’t wake him up. This was all too real. Limbaugh’s temper tantrum was utterly swept away. John Kerry’s agenda had been crushed. The rejection had been immediate and brutal. The American people didn’t just want Ron Paul - they needed him. They needed less taxes, less control, less government. Nothing could change that.</p>
                                    <p>As Washington crossed the Delaware river, so too did Paul stride through the backstage area on to the stage to give his victory speech, the high of his victory coursing through his veins. The American people had demanded nothing less than a revolution - and that’s exactly what Paul intended to give them.</p>
                                    `)
                                    e.pages.push 
                                    (`<h2>Net Approval of President Paul’s cuts.</h2>
                                    <p>Following the 20 day government shutdown following Paul’s original budget, Democrats in the House have agreed to pass a more thorough cut to restore the government. We polled the public to see which cuts had the most and least support.</p>
                                    <p>Veteran Affairs cut net approval: -67%<br>SNAP/Food stamps cut net approval: -57%<br>Military Funding cuts net approval: -45%<br>Social Security cuts net approval: -52%<br>Medicare cuts net approval: -58%<br>PEPFAR cuts net approval: 1%<br>Military Foreign Aid cuts net approval: 3%<br>Housing Choice Voucher cuts net approval: -36%<br>Unemployment Insurance cuts net approval: -44%<br></p>`)
                                    e.pages.push(`<h2>The Campaign Trail</h2>
                                    <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/FkwOvhi.png><br>After a difficult four years, President Ron Paul faces a referendum held by controversial businessman Donald Trump, who snatched the nomination from an adrift Democratic leadership. President Paul will have to unite a fractured Republican Party, whilst Donald Trump will have to press the poor economy, unstable international situation, and various other issues.</p>`)
                                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/4z5k4jugxfntD57fFGQkhuYOtB1HNxVz.mp3"));
                        //e.image = ""
                        e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/Xv4usEc.jpg'})])
                        e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/TiNSADu.jpg'})])
                        e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                        
                        }  else if (quickstats[0] >= 300 && quickstats[0] < 350) { // Paul medium win
                        e.pages.push(`<h2>''It was touch and go for a moment, but Ron Paul is now President-elect.''</h2>
                                    <p>The German term “schadenfreude” leapt to mind, as Paul watched the final state called. Rush’s little riot amounted to absolutely nothing, Kerry’s ad hominem attacks bounced off the grandest armor a man could wear; that of a righteous cause. After nearly a century of liberalism bringing about economic devastation, Americans had woken up and rejected big governance. He imagined George Washington smiling down on him in heaven, the America he fought for restored at last after decades of perversion.</p>
                                    <p>He was handed a phone, where a morose John Kerry conceded the election. Paul congratulated him on a hard fight, and they had a brief but polite chat to time the presidential briefings. Despite how terrible John Kerry had been, he was just a symptom. The disease of big government was going to need a thorough cleansing if they were going to cure it - luckily America had given its doctor a clear mandate.</p>
                                    <p>Ron Paul strided out on stage at the Staples Center, Carol on his arm. He grinned widely looking at his adoring crowd, admiring the broad coalition he had built. Men wearing strange graphic t-shirts were next to skinny women holding an anti war sign, who was next to an utterly befuddled man in a business shirt and slacks. They had demanded a change, and Ron Paul would bring it.</p>
                                    `)
                                    e.pages.push 
                                    (`<h2>Backlash President Paul’s proposed cuts.</h2>
                                    <p>AP -<br> Millions of US Veterans march to DC to protest President Paul’s planned cuts to Veteran Affairs. The President released a statement claiming that while he will maintain commitments the government made, he seeks to “wean people off Government handouts” arguing that the end of the wars the United States was involved in meant that the United States Government would owe soldiers less.</p>
                                    <p>The proposed cuts have been met with bipartisan backlash. A statement signed by 30 Senators, including Senator Orrin Hatch of Utah, Senator John McCain of Arizona and Senator Daniel Akaka of Hawaii, has condemned the cuts as “unimaginably cruel (...) betrayal of our bravest citizens” and called for cuts in other areas. In a separate statement, Senator Akaka pledged to filibuster any possible cuts to Veteran Affairs.</p>
                                    <p>Former primary opponents of Ron Paul, Mitt Romney and Mike Huckabee, have condemned the cuts as weakening the military and international prestige as a whole, Huckabee claiming “this is about what we can expect from our President after the disgraceful pull-out.” Minority Leader of the House John Boehner and Senate Majority Leader McConnell have both refused to comment on whether they will support the proposed cuts.</p>    
                                    `)
                                    e.pages.push(`<h2>The Campaign Trail</h2>
                                    <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/PDUl2Pp.png>	<br>Moderate Democrat Evan Bayh controversially faces off against Ron Paul after a tumultuous four years. Bayh must move the Democratic Party past Kerry whilst ensuring liberals turn out, whereas President Paul must bank on limited Democratic turnout and his few successes to secure another four years.</p>`)
                                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/iHwV7NUqviGubjYYTes3fWo8ps9lAxrH.mp3"));
                        //e.image = ""
                        e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/2O2wAYt.jpg'})])
                        e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/iTuNPxT.jpg'})])
                        e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                      
                      }     else if (quickstats[0] >= 270 && quickstats[0] < 300) { // Paul close win
                      e.pages.push(`<h2>''Our early forecast suggests... Ron Paul has been elected President.''</h2>
                                  <p>Victory.</p>
                                  <p>They could talk about the close states all they want. They can say that Rush won some states, or that Kerry should have been wiped out. They can say that Paul’s victory tonight means nothing. That’s all they can do, talk and talk. Ron Paul had won. He had proved everyone wrong. The naysayers, the liberals - even himself. Even he doubted that a politician who dared to offer people nothing but freedom could hope to win. But he had. And America could finally put an end to the calamitous social experiment it had been running since Woodrow Wilson.</p>
                                  <p>He was informed that John Kerry was calling him, no doubt offering his concession speech. He asked Kerry to wait - he needed to see his people. As he walked out on stage at the Staples Center in Minneapolis, he gazed into the crowd. Thousands of excited patriots stared up to him lovingly, enthralled by his one of a kind campaign. He saw men with ponytails and mullets, others wearing tricorne hats and other colonial clothing. People that would never back one of Limbaugh's candidates had propelled him past the finish line.</p>
                                  <p>He wore a smile that grew a mile wide. He wasn’t going to do anything to them. He wouldn’t control these people. He wouldn’t control the economy. He wasn’t going to rule the world. The constitution wouldn’t let him, and that thought filled his heart with joy.</p>
                                  `)
                                  e.pages.push 
                                  (`<h2>President Ron Paul repeals Don’t Ask, Don’t Tell.</h2>
                                  <p>Issuing executive order number 13530, President Ron Paul has officially brought an end to the policy of Don’t Ask Don’t Tell. In a statement issued to the press, President Paul said ''I won’t say I support the kind of lifestyle homosexuals lead. But I will say, as a man who served in the army, that I don’t consider it something that precludes service. And I certainly don’t consider the nearly $400 million spent on the policy worthwhile to the American taxpayers. To discharge an otherwise well-trained, professional, and highly skilled member of the military for personal reasons is unfortunate and makes no financial sense.''</p>
                                  <p>There has been immediate controversy following the issuing of the order. Ellain Donnally of the Center for Military Readiness has prepared a lawsuit on the legality of the order, while Senator Jeff Sessions called President Paul’s actions ''overreach'', saying ''The civil libertarians among us would rather defend the Constitution than protect our nation’s security.'' Ron Paul’s primary rival Mitt Romney commented on the order: ''I consider this an error. Don’t Ask Don’t Tell has worked for nearly 20 years. The military says it's working and they don't want to change it, and they're the people closest to the front. Even if this order is legal, President Paul has acted very irresponsibly.''</p>
                                  <p>Across the aisle, Democrats have offered muted praise. Senator Joe Biden of Delaware argues that it should have been passed through Congress, but praised the initiative as ''being the most effective path for the military to go down'' while Senator Russ Feingold of Wisconsin called it a ''rare moment where I am in complete and total agreement with President Paul. It is beyond ridiculous that it has taken this long to have been repealed.''</p>
                                  <p>Updates as they come.</p>
                                  `)
                                  e.pages.push(`<h2>The Campaign Trail</h2>
                                  <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/QdtxkGC.png>	<br>For the first time since 1992, there are three credible contenders for the Presidency, following Rick Santorum's schocking coup of the Republican Party. Senator Barack Obama must exploit the divide between the various factions while giving himself the strongest possible governing mandate, former Senator Rick Santorum must try and heal the divide in the party while distancing himself from the Paul administration and President Ron Paul must point to his limited successes whilst tying the popular Barack Obama to unpopular prior administrations.</p>`)
                                  autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/BT8cjevl27WhK2Ljy084kGsei5Vfp2Pe.mp3"));
                      //e.image = ""
                      e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/4Vc4FbA.jpg'})])
                      e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/STclS20.jpg'})])
                      e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                    
                    } else if (aa[0].electoral_votes < 270 && aa[3].electoral_votes < 270 && aa[2].electoral_votes < 270 && quickstats[0] < 270) { // Deadlock
                    e.pages.push(`<h2>''For the first time since 1824, we can predict an electoral deadlock.''</h2>
                                <p>There's confusion in the Staples Center as the various networks predict an electoral deadlock. Perhaps it was Limbaugh, perhaps Paul and Kerry just tied, but it seems like no candidate received a majority. The talking heads on TV declare that it'll lead to a period of negotiations, of compromises - they sure declare a lot. Ron Paul knows it's all bogus, and on the stage, he tells his supporters just that.</p>
                                <p>The Republican House, of which he is a member, will obviously elevate the Republican candidate to the Presidency - and with a trifecta, Paul will be making a massive difference in Washington. The countless supporters, eager for the comfort of victory, accept the explanation, and the good feelings are back.</p>
                                <p>Paul sits down in the homely back office of the center, and dials the Speaker. He doesn't pick up - probably busy celebrating. Paul leaves a message, and joins the victory party. After an hour, he calls the Speaker again, and again receives no answer.</p>
                                <p>It continues, and it becomes a long night indeed.</p>
                                 `)
                                e.pages.push 
                                (`<h2>Vice President Allard’s remarks on the death of Osama Bin Laden.</h2>
                                <p>‘’President Kerry has already delivered, earlier today, a statement on the execution of Osama Bin Laden more focused on the details thereof, so I will keep mine shorter and more to the point. Despite the fact that neither of us intended for this unconventional pairing(...) both the President and I are proud of this blow against the enemies of our Republic.’’</p>
                                <p>‘’Osama Bin Laden was a criminal and a terrorist who held nothing but contempt for America(...) and his death marks a vital milestone in our war on terror - one which we intend to continue at full speed. We thank God for being with us in this struggle, and for protecting the brave troops who made this operation possible.’’</p>
                                <p>‘’It is, also, almost ten years since the fateful September morning where this attack on America began. President George Bush announced the beginning of it and I pray that a President in my lifetime will announce the end of it. Thank you.’’</p>
                                `)
                                e.pages.push(`<h2>The Campaign Trail</h2>
                                <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/jPpsCsh.png><br>With the end of the Kerry-Allard Administration, both major party establishments have been put under pressure, leading to the nomination of two anti-establishment activists. Ralph Nader must appeal to disaffected liberals and moderates, while Alan Keyes must re-assure foreign policy minded conservatives and reclaim the coalition that won Ron Paul the Republian nomination four years ago.</p>`)
                                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/lyBFQiNEB5iigEJq0HXXedOkBAUk6de6.mp3"));
                    //e.image = ""
                    e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/UzY4zSi.jpg'})])
                    e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/6eLmRNT.jpg'})])
                    e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                    
                    } else if (aa[0].electoral_votes >= 270 && aa[0].electoral_votes < 300 ) { // Paul close loss
                    e.pages.push(`<h2>''While he gave the President a run for his money, we can as of now predict that John Kerry has been re-elected.''</h2>
                                <p>The mood in the Staples Center was tense. People drank and chatted away, but the noise couldn’t hide the tension in the air. Had Paul done it? Had he brought liberty to America after 100 years of federal expansion? Beneath the bravado of the campaign operators, there was a crippling uncertainty. Rush Limbaugh had stolen millions of voters from key regions, and Kerry had proven himself to be a cunning operator. With the election coming down to the wire and as the final states were called, the truth became apparent; tonight, it’s not happening.</p>
                                <p>In a backstage room, Paul was upset but unsurprised. The American public had generally proven itself unwilling to make the tough choices when slimy politicians promised them that big government could make everything better, liberal or “conservative”. This loss, following the crash, was a humiliation - but it wasn’t all his fault. The Neo-Conservatives, those bitter losers, had cost him the election. That much was clear. Had Limbaugh just accepted the will of the Republican primary, Kerry wouldn’t have his 4 more years to ruin the economy. Oh, they’ll try and finger point, blame him for losing - but they know who cost them the election.</p>
                                <p>It’s not happening, not tonight. But the fight is far from over.</p>
                    
                                `)
                                e.pages.push 
                                (`<h2>Rush Limbaugh Radio Show - 26/07/10.</h2>
                                <p>''And I do believe I just heard the er, dulcet tones of ''Up, Up and Away'', so it’s time for the condom update. The Log Cabin so-called Republicans, which frankly RINO is far too kind of a word for the kind of pervert these guys are, have officially announced that they are disappointed that ''Don’t Ask Don’t Tell'' failed its repeal despite President Kerry carrying water for that garbage. The leftists and their allies, not happy with infesting schools with its depraved views, are obsessed with making sure the American military is also perverted with that lifestyle.''</p>
                                <p>''It’s not enough that our kids need to be at risk of the paedophiles and sickos, now our troops need to be made vulnerable as well. It’d be funny if it wasn’t so sickening. Fortunately, we’re not standing for it. We have enough patriots in congress to shut down this utter nonsense and humiliate John Kerry again. At this point, even I’m getting depressed! We as Americans have shown time and time again, midterm after midterm, that we are not willing to listen to this pro-abortion, pro-gay, pro-handout nonsense.''</p>
                                <p>''Of course, not everyone got the memo. Ron Paul, what a disgrace. If it took him winning to stop John Kerry, then winning wasn’t worth it. I have said it time and time again, I was not responsible for Kerry winning. Ron Paul’s support for gay marriage and abortion were utterly indefensible and his coup of the Republican party was unacceptable. When we nominate a man again, he needs to be an actual christian. Luckily, there’s a certain man I have in mind - there was this just fantastic speech at the university of Dubuque…''</p>
                                <p>To President Paul - we are eager to help continue your work to shrink the government, and preserve and expand our valuable majority.</p>
                                `)
                                e.pages.push(`<h2>The Campaign Trail</h2>
                                <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/8yMPmZR.png>	<br>With the controversial Kerry administration coming to a close, Governor Rick Perry hopes to bring a more conservative vision to the White House, while Governor Bill Richardson hopes to preserve the accomplishments of the prior administrations. Each candidate must present credible answers to issues such as the lagging economy, foreign policy, and social issues, whilst expanding their base to restore optimism to America.</p>`)
                                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/AZnXp7mTdDlRqJiylPFT6RfkqiXaMagR.mp3"));
                    //e.image = ""
                    e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/gRi765P.jpg'})])
                    e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/BUXqYkz.jpg'})])
                    e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                    
                    } else if (aa[0].electoral_votes >= 300 && aa[0].electoral_votes < 350 ) { // Paul medium loss
                    e.pages.push(`<h2>''He narrowed it a bit, but Dr. Paul has been decisively defeated, and President Kerry re-elected.''</h2>
                                <p>Ron Paul was at the edge of his seat as states were called. After more than 100 years of government oppression in America, Republicans had woken up and had chosen a real conservative. A conservative that actually fought against the tyranny that had been at best, maintained by men like Reagan and Bush. When he won the nomination, big government conservatives cried louder than any baby he helped deliver - but he was unperturbed. After what Kerry did to the economy, Rush’s riot would be put down.</p>
                                <p>The plains were called for Paul, while Kerry swept the coastal states. He grimaced slightly seeing the massive difference between the electoral votes, but the race was early. The key swing states, Ohio, Pennsylvania and Florida, were too early to call - but so were key states in the South. A direly bleak sign for things to come. Sure enough, key states were called for John Kerry, and Ron Paul’s rejection had been made resolute.</p>
                                <p>Ron Paul had succeeded beyond his wildest dreams. He never expected to become a congressman, let alone a serious contender for President. He had raised the issue of liberty further than anyone had in over a century. He had a lot to be proud of. But when he saw the map, blue covering the nation like a cancer, he knew that he failed his cause and his country. The best he could hope for is that his platform would have enough influence to force concessions in the future…</p>
                                `)
                                e.pages.push 
                                (`<h2>The case to intervene in Libya - Between Opportunistic Humanitarianism and Value-Free Pragmatism.</h2>
                                <p>If there has been one thing to learn from the most recent military conflicts, it’s been that military action must be the last resort, after careful consideration to the goals of what intervention would be. What we cannot learn is that we must never get involved, as Congressman Ron Paul tried to declare in 2008. As the most powerful military force in the world, America has a duty to safeguard the basic human rights of all people in this world - and that means that there must be involvement with the Libyan civil war.</p>
                                <p>Qaddafi has long rejected basic civil rights in his reign as dictator of Libya. Just weeks ago, Qaddafi ordered peaceful protestors marching to Benghazi gunned down. It was his brutal actions that sparked the armed rebellion the world now watches, and he has shown no regret for his actions. In a speech where he used the language of genocidaires, he vowed to cleanse the region of ''cockroaches (...) inch by inch, house by house, home by home, alleyway by alleyway.''</p>
                                <p>We only have a rough estimate of the current kill count, but it’s ranging anywhere from 2000 to 8000 civilians killed in this shocking display of violence. This is America. We don’t sit idly by and watch dictators slaughter their own people. With the exit from Iraq being merely months old, it’s understandable why people are hesitant about NATO involvement in another region. But just because it’s understandable, doesn’t make it right.</p>
                                <p>According to some dubiously reliable leaks, President Kerry is receiving advice to either create a no-fly zone over Libya, or intervene directly, and allegedly leans towards the latter. That a no-fly zone is even being considered is farcical - that won’t do anything to stop Qaddafi’s tanks or chemical weapons. We can only pray that President Kerry intervenes - to protect the civilians at risk, and ensure that democracy can rise from the ashes of the Qaddafi regime.</p>
                                `)
                                e.pages.push(`<h2>The Campaign Trail</h2>
                                <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/NxXwy9J.png>	<br>As the controversial Kerry tenure comes to a close, two passionate ideologues battle it out to take control of the White House. Chuck Schumer must maintain and expand the coalition that won President Kerry's re-election, whilst Rick Santorum will provide conservative solutions to the lagging economy and other issues.</p>`)
                                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/c8qzmAa46vkVlkFMFifdvPtKCIhleYDR.mp3"));
                    //e.image = ""
                    e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/1nHQoxu.jpg'})])
                    e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/4fUf9AB.jpg'})])
                    e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                    
                    } else if (aa[0].electoral_votes >= 350 ) { // Paul landslide loss
                    e.pages.push(`<h2>''The polls were right, and John Kery has won in a landslide.''</h2>
                                <p>At last, the humiliation was over. Paul sank into his couch backstage in the Staples Center, exhausted. Despite the bump he got following the crash that John Kerry caused, it wasn’t meant to last. An assault from all sides destroyed him - the liberals rallied behind Kerry, the big government conservatives spitefully wasted their support on Rush Limbaugh and the fat cats profiting off of an unsustainable status quo used the media to tear him down for everyone else. There was nothing Paul could have done. He had been granted the opportunity of a lifetime to reshape America, and it had been denied to him.</p>
                                <p>On the floor of the Staples Center, there was an outpouring of grief. People tired of the wars, the taxation, the spying - they had done their best. But it wasn’t good enough. The powers that be had taunted them with the idea that America could be saved, dangled Ron Paul in front of them, and snatched him away. There was no hope for America. Things would get so much worse before they were ready for the change the country desperately needed.</p>
                                <p>Paul had failed. The cause of liberty failed. The carnivorous expansion of power would continue to consume individual liberty, destabilising currency and entangling the world in more conflicts - until they were dragged to the abyss, with no hope of rescue.</p>
                    
                    
                                `)
                                e.pages.push 
                                (`<h2>GOP Doctors Caucus Denounce the Healthcare Reform Act.</h2>
                                <p>Hosting a press conference, the GOP Doctors Caucus denounced the Healthcare Reform Act as ineffective, marking a break from the Senate Republicans who have attacked the bill primarily from ideological grounds. Representative Cane MMD stated in the conference that ''It is clear to anyone that healthcare needs reform, and the late Kennedy’s efforts to pass healthcare were born from clearly the best of intentions. But the Democrats were so eager to pass Healthcare reform that they have decided to draw battle lines over rushed and ineffective legislation.''</p>
                                <p>Representative Price called the policy ''a costly and misguided encroachment of government that will destroy jobs and drive our nation further toward a fiscal crisis (...) The purpose of health reform should be to advance accessibility, affordability, quality, responsiveness and innovation. None of this is accomplished with the HRA.''</p>
                                <p>When informed by journalists that Presidential Candidate Ron Paul shared in their opposition, there was a silence for a few minutes. ''Dr. Paul is free to oppose the bill for whatever reason he sees fit. Despite being a doctor, he is not in the caucus and distantly related to us and our goals.''</p>
                                `)
                                e.pages.push(`<h2>The Campaign Trail</h2>
                                <p>Please select the election you will run in: <br><select name="2012" id="2012"><option value="0">2012</option></select><br><img src=https://imgur.com/ivSuLJz.png>	<br>With the Kerry administration coming to an end, Senator Chuck Schumer faces off against controversial businessman Donald Trump, who snatched the nomination from an adrift Republican leadership. Trump will have to unite a Republican Party still grappling with the shock nomination of Ron Paul, whilst Senator Schumer must point to the succesful record of President Kerry and adress issues such as foreign policy and social change.</p>`)
                                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/FSGqItDxP4L2KIBWDvnXvJWq2Is9FwDU.mp3"));
                    //e.image = ""
                    e.executable.push([0, (() => {e.image = e.image = 'https://imgur.com/ZIgMZgP.jpg'})])
                    e.executable.push([1, (() => {e.image = e.image = 'https://imgur.com/BTgjcjR.jpg'})])
                    e.executable.push([2, (() => {e.image = e.image = 'https://imgur.com/qIqBzyn.jpg'})])
                    
                    }
                
                if (quickstats[0] >= 270 && (e.player_answers.includes(3333))) { // Pick Stossel and win
                ctsAchievement("Conservative Libertarian");  
                }
                if (quickstats[0] >= 270 && (e.player_answers.includes(3336))) { // Pick Allard and win
                ctsAchievement("Libertarian Conservative");  
                }
                if (quickstats[0] >= 270 && (e.player_answers.includes(3317))) { // Have Rudy win
                ctsAchievement("Tested. Ready. Now.");  
                }
                if (quickstats[0] >= 270 && (e.player_answers.includes(3411) || e.player_answers.includes(3409) || e.player_answers.includes(3398) || e.player_answers.includes(3397) || e.player_answers.includes(3315))) { // Have Romney win
                ctsAchievement("Believe In America");  
                }
                if (quickstats[0] >= 270 && (e.player_answers.includes(3316) || e.player_answers.includes(3400) || e.player_answers.includes(3410))) { // Have Huckabee win
                ctsAchievement("From Hope To Higher Ground");  
                }  
                if (quickstats[0] >= 270 && (e.player_answers.includes(3333) && e.player_answers.includes(12299) && e.player_answers.includes(3489))) { // Denounce Bush
                ctsAchievement("I Demolish My Bridges Behind Me");  
                }    
                        return construct(0);
                      }
                    
                      setMusic = (url, override = false) => {
                        let aud;
                        if ($("#music_player")[0]) {
                          $("#music_player")[0].remove();
                        } 
                        if (override && document.getElementById("endingAudio")) {
                          aud = document.getElementById("endingAudio");
                          aud.src = url;
                          aud.play();
                          return 0;
                        }
                        if (document.getElementById("endingAudio")) {
                          return 0;
                        }
                        aud = document.createElement("audio");
                        aud.id = "endingAudio";
                        aud.src = url;
                        aud.loop = false;
                        aud.autoplay = true;
                        document.body.appendChild(aud);
                        aud.play();
                        return 0;
                      }
                
                
                