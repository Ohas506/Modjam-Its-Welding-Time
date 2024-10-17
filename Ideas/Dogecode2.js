campaignTrail_temp.cyoa = true;
cyoAdventure = function (a) { if (campaignTrail_temp.question_number == 1){
    mailbox.mails.push(new Mail(1, "Paolo Sarpi", `Leonardo
I have recently been made aware of your plans to elevate yourself to the standing of the Doge of our fine Republic.

My freind I am sure that you know however, that your and mine common fight with the now Pope Pual the V will be up for consideration.

I the matamatician, scientest, and theologin have some advice for you the ruler.

Our fight with Rome is not by all means an unpopuler one, however in the eyes of the Councill you must seak moderation with your rethoric regarding it.

In due time I hope to be writing you as the Doge

Your freind
Paolo Sarpi`))}
if (campaignTrail_temp.question_number == 2){
    mailbox.mails.push(new Mail(1, "Baldosa", ` Prosocuter Donato

    Hello
   
   You have probably never heard of me, or for that matter any of my people, however we reside in your Republic. 

   My name is Levi Baldosa and I am writting on behalf of the Jews currently living in Vennice.

   I understand if you are probably indifrent to our situation, but I ask for you to simply here us out.

   As you no doubt know us Jews are forced to live in the Ghetto.

   For merchents like myself this means that many of us are forced to live in this part of the city, even if it is temporary.
   
   This leads to a situation of poor living conditions and not enough acomedation for the populace of the Ghetto.

   I am aware just as you are in the convictions of the Ventian people.

   I sincerly ask for you to ignore them, and to if you become Doge, to change this system.
   
   
   The people in the shadows,
    The Jews of Vennice.`))}
}
  campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 623,
        "fields": {
            "priority": 0,
            "description": "It is December 25th, 1605, and Marino Grimani has passed away.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 624,
        "fields": {
            "priority": 1,
            "description": "The Great Council of Venice is set to convene on January 25th to pick the next doge. In light of this fact, how will you spend the time before the Council convenes.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 625,
        "fields": {
            "priority": 2,
            "description": "The five hundred man Great Council of Venice has convened to elect the next Doge.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 639,
        "fields": {
            "priority": 3,
            "description": "How will you touch on your position as the Procurator of St Mark's?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 638,
        "fields": {
            "priority": 4,
            "description": "The conclusion of the fiftieth century saw the loss of Cyprus to the Ottoman Empire. How will we recover from such a catastrophic loss?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 626,
        "fields": {
            "priority": 5,
            "description": "The secretive Council of Ten has for a long time reigned as one of the most powerful Venetian governmental institutions, tasked with maintaining the \"Security of the Republic\". Is the Council to powerful?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 636,
        "fields": {
            "priority": 3,
            "description": "The thirty councillors selected by lot voting shall now convene with the rest of the Council to choose the next nine electors from among them by lot voting.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 637,
        "fields": {
            "priority": 3,
            "description": "Cotten as well as Silk prices, have continued to rise, putting strain on our textile and fabric industries. What can we do to stop this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 635,
        "fields": {
            "priority": 4,
            "description": "Since 1516 our Republic has required the Jews living in Venice, to reside in the Venetian Ghetto. In exchange for free practice of their faith they must also agree to several other arrangements, particular in regards to Jewish Merchants wanting to live in the city. What do you make of this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 628,
        "fields": {
            "priority": 4,
            "description": "The nine electors must choose who shall proceed to the next round of voting, what should we do to curry there favor?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 634,
        "fields": {
            "priority": 4,
            "description": "Today is the Venetian Carnival!",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 632,
        "fields": {
            "priority": 4,
            "description": "Along the Dalmatian Coast the ever present threat of Uscocchi Piracy has interfered with our trade for generations. What would you do to stop this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 631,
        "fields": {
            "priority": 4,
            "description": "It's about time we address the elephant in the room, your feed with the now Pope Paul V. How will you address this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 633,
        "fields": {
            "priority": 4,
            "description": "Was there really a bargain (a “Corrupt Bargain” to many) between yourself and John Quincy Adams which elevated him to the Presidency in 1825?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 629,
        "fields": {
            "priority": 4,
            "description": "Cassius Clay, your cousin, has published a letter stating you are in accord with the abolitionist movement. How will you respond to this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 630,
        "fields": {
            "priority": 4,
            "description": "There are a number of attacks which focus on your fondness for horse-racing, drinking, gambling, female conversation, and the like. Do you have a response to this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 644,
        "fields": {
            "priority": 5,
            "description": "Do you support any changes to our current naturalization laws?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 649,
        "fields": {
            "priority": 5,
            "description": "What is your position on the Oregon boundary question?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 641,
        "fields": {
            "priority": 5,
            "description": "Aside from the issue of Texas, do you support the expansion of the United States in general? Into Oregon, other parts of Mexico, Cuba, etc.?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 645,
        "fields": {
            "priority": 5,
            "description": "Do you support any effort to establish a unified, national currency?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 648,
        "fields": {
            "priority": 5,
            "description": "Regardless of your personal feelings, would you sign an act which established an independent Treasury for the government's funds?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 646,
        "fields": {
            "priority": 5,
            "description": "Do you agree with Robert Walker's letter, arguing that that slavery issue will be diluted by national expansion?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 643,
        "fields": {
            "priority": 5,
            "description": "Do you have any statement to make on John Calhoun's “Packenham Letter”, stating slavery to be a positive blessing, and justifying the annexation of Texas as a pro-slavery move?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 650,
        "fields": {
            "priority": 5,
            "description": "Do you have any criticism of the authorities in Illinois, regarding their failure to properly protect Joseph Smith before his assassination in June?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 651,
        "fields": {
            "priority": -1,
            "description": "Is there a particular state where your party should concentrate its resources and most talented speakers as the election draws near?",
            "likelihood": 1
        }
    }
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 4154,
        "fields": {
            "question": 623,
            "description": "<i>Possa la sua anima riposare in paradiso!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4155,
        "fields": {
            "question": 623,
            "description": "<i>Possa la sua anima riposare in paradiso!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4156,
        "fields": {
            "question": 624,
            "description": "There is no use to trieing to play the game of influence peddling among the nobility. I will bide my time."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4157,
        "fields": {
            "question": 624,
            "description": "Money is of no problem to me, lets pass out bribes, to pad our chances."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4158,
        "fields": {
            "question": 624,
            "description": "I want to focus on portraying me as a master diplomat. Lets get the painters and artisans to make various pieces of art portraying me in such a light."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4159,
        "fields": {
            "question": 624,
            "description": "Let's ramp up my public appearances. I want to make every Venetian and every noblemen know my face."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4160,
        "fields": {
            "question": 625,
            "description": "<i>speriamo per il meglio!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4161,
        "fields": {
            "question": 625,
            "description": "<i>speriamo per il meglio!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4162,
        "fields": {
            "question": 625,
            "description": "<i>speriamo per il meglio!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4163,
        "fields": {
            "question": 626,
            "description": "Given the recent threats to our Republic, the Council has an adequate amount of power, and its powers are checked by the one year term limits of its members."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4164,
        "fields": {
            "question": 626,
            "description": "I gain little from focusing on the Council, lets ignore the issue altogether."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4165,
        "fields": {
            "question": 626,
            "description": "The Council is too powerful. This secretive organization has ties to the Papacy and has long been a tool to bring down the politics of Venice to point of mere church puppetry."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4168,
        "fields": {
            "question": 628,
            "description": "We should promise the college members government appointments and the like."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4169,
        "fields": {
            "question": 628,
            "description": "Let us use bribes, to court the less wealthy among the electors."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4170,
        "fields": {
            "question": 628,
            "description": "Our main opponent Marcantonio Memmo  is a member of the \"vecchie\" (\"old\"), Venetian noble families, lets use this fact to court support from the new families."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4171,
        "fields": {
            "question": 629,
            "description": "We must put out a letter, clarifying that we only support abolition if slaveholders can be fairly compensated, with reasonable notice, and if freed slaves can be recolonized to Africa."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4172,
        "fields": {
            "question": 629,
            "description": "We must attack Cassius Clay's statements at once, for the dishonest falsehoods that they are. I am in no way an abolitionist in this debate."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4173,
        "fields": {
            "question": 629,
            "description": "I'm not going to dignify this letter with a response."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4174,
        "fields": {
            "question": 630,
            "description": "There are a lot of places in America where men like that kind of thing. We will win the Yankee Puritan vote in any case."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4175,
        "fields": {
            "question": 630,
            "description": "I've undertaken the amusements of our times, perhaps a little more than most, but it has never had any bearing on the work I have done."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4176,
        "fields": {
            "question": 630,
            "description": "In anticipation of this attack, I've actually made some effort in the past year or so to scale back my amusements. I don't believe it is ever too late for a man to change their conduct."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4177,
        "fields": {
            "question": 631,
            "description": "My fight with the Pope is one that the people of Venice know to well, the papacy can not force its will on to the Republic."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4178,
        "fields": {
            "question": 631,
            "description": "Pope Paul the V is a fraud one that I have fought for many years, and as a matter of fact his whole church is one fraud, the faith he so clings to is one of complete and utter falsehoods we must all recognize what a sham and utter lunacy we have all put up with, I KNOW FOR A FACT I WILL NOT PUT UP WITH IT ANY LONGER, FOR THE POPE IS A WOLF IN SHEEPS CLOTHING, ALL HAIL THE ANTI CHRIST!."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4179,
        "fields": {
            "question": 631,
            "description": "Lets avoid the issue when we can, when pressed on it lets stress my opposition to Church is strictly political, not theological."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4180,
        "fields": {
            "question": 632,
            "description": "If elected Doge, I will commission a fleet to set out into the Adriatic to destroy the Uscocchi Pirates."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4181,
        "fields": {
            "question": 632,
            "description": "Austria is the main encourager of the Uscocchi pirates, thus we must besiege there camps in Austria, and reassert our supremacy in the Adriatic."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4182,
        "fields": {
            "question": 632,
            "description": "We must force the Uscocchi to move inland, with limited conflict with Austria, as that is the only sure fire way to eliminate this issue."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4183,
        "fields": {
            "question": 633,
            "description": "I don't know how many times a man can deny an unjust allegation before fatigue sets in."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4184,
        "fields": {
            "question": 634,
            "description": "Oh, get my mask!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4186,
        "fields": {
            "question": 635,
            "description": "The system is fine as it is. The Jews can come and go, but they must be separated to maintain our Republics character."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4187,
        "fields": {
            "question": 635,
            "description": "In recent years our spice, silk, and publishing businesses have all seen downturns. If we are to regain our cities status as the economic powerhouse of the Mediterranean, it would be wise to loosen restrictions on Jewish Commerce within the city."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4188,
        "fields": {
            "question": 636,
            "description": "<i>Speriamo per il meglio!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4189,
        "fields": {
            "question": 636,
            "description": "<i>Speriamo per il meglio!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4190,
        "fields": {
            "question": 636,
            "description": "<i>Speriamo per il meglio!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4191,
        "fields": {
            "question": 636,
            "description": "<i>Speriamo per il meglio!</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4192,
        "fields": {
            "question": 637,
            "description": "In order to regain economic security, we need to regain control over the spice trade. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4193,
        "fields": {
            "question": 637,
            "description": "We should seek economic partnerships with Austria and France, to lessen the cost of such imports."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4194,
        "fields": {
            "question": 637,
            "description": "In order to offset these losses, we should seek new partners, to export the products of our salt industry. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4195,
        "fields": {
            "question": 638,
            "description": "The loss of Cyprus underscores a much bigger problem our republic is facing. With the discovery of the Americas, our spice trade in the east is loosing its relevance. We must then reinforce our book publishing enterprises to provide a source of stable revenue. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4196,
        "fields": {
            "question": 638,
            "description": "The loss of Cyprus to the Ottomans shows us that our Republic must ally itself with the powers of the Papal States the Holy Roman Empire as well as Spain. This will form a bulwark against the Ottomans."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4197,
        "fields": {
            "question": 638,
            "description": "We need to increase funding into our Republics military. Venice the city famed for her navy, must keep that navy ever strong as to be able to compete with the powers of Europe."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4198,
        "fields": {
            "question": 638,
            "description": "We should seek to reinforce our military, in particular we should work to ally our self with the Knights of Malta and similar Holy Orders."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4199,
        "fields": {
            "question": 639,
            "description": "I will emphasize my experience in Ventilation politics, and my numerous qualifications to be Doge, including the position of Procurator."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4200,
        "fields": {
            "question": 639,
            "description": "I will emphasize how as procurator I am experienced in the up keep of the public infrastructure of Venice, and thus if I am elected Doge the cities infrastructure will prosper. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4201,
        "fields": {
            "question": 639,
            "description": "The Procurator of St Mark's is a common position for potential Doges to hold, by not commentating on it I can highlight my lineage from the noble family of Donà."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4205,
        "fields": {
            "question": 641,
            "description": "I am against the annexation of Texas. And just to show that this does derive from sectional prejudice, I am also against expansion into Oregon or other regions."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4206,
        "fields": {
            "question": 641,
            "description": "I believe that the United States, in line with the “Manifest Destiny” ideal, should expand wherever feasible."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4210,
        "fields": {
            "question": 643,
            "description": "I would not go to the lengths of John Calhoun, but Texas would certainly help expand the market for slavery in our country."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4211,
        "fields": {
            "question": 643,
            "description": "We will frame Texas as an issue of national pride and national expansion. I rebuke the idea of Calhoun that this is purely a Southern enterprise."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4212,
        "fields": {
            "question": 643,
            "description": "I disagree with John Calhoun across the board, which leads to my opposition to the annexation of Texas."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4213,
        "fields": {
            "question": 644,
            "description": "I support our current naturalization laws as they stand."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4214,
        "fields": {
            "question": 644,
            "description": "Only some very minor changes, like increasing the waiting period before new citizens may vote."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4215,
        "fields": {
            "question": 644,
            "description": "Our current laws are in need of great revision, in light of the troubles we have had with recent immigrants."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4216,
        "fields": {
            "question": 645,
            "description": "I support a national bank, and one clear argument for the bank is the total chaos we've had with our currency since 1837."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4217,
        "fields": {
            "question": 645,
            "description": "Only if we could establish one without chartering a new national bank."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4218,
        "fields": {
            "question": 645,
            "description": "I support an independent Treasury, but not one that would disseminate a national currency."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4219,
        "fields": {
            "question": 645,
            "description": "Our current system is more democratic than any alternative that could be devised. Let the private banks issue currency in line with their own strength and prosperity."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4220,
        "fields": {
            "question": 646,
            "description": "I believe this letter to be disingenuous at best. Further expansion will reopen the debate on slavery rather than suppress it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4221,
        "fields": {
            "question": 646,
            "description": "We won't address Mr. Walker's letter directly, but we are in favor of annexation."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4224,
        "fields": {
            "question": 648,
            "description": "The independent Treasury is a halfway measure, designed to cover for the disaster that was the war against the Second Bank of the United States."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4225,
        "fields": {
            "question": 648,
            "description": "I would prefer a national bank, but I would be willing to sign a bill which created an independent Treasury."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4226,
        "fields": {
            "question": 648,
            "description": "The creation of an independent Treasury will be one of the key initiatives of my Presidency."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4227,
        "fields": {
            "question": 648,
            "description": "I support our current banking system, and would not support any ill-conceived attempts to centralize our finances."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4228,
        "fields": {
            "question": 649,
            "description": "We need to be just as aggressive on this issue as we are anywhere else. “Fifty-four Forty or Fight!”"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4229,
        "fields": {
            "question": 649,
            "description": "We need to negotiate a permanent agreement with Great Britain that grants some of all of the Oregon Territory to the United States."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4230,
        "fields": {
            "question": 649,
            "description": "I would support any agreement, as long as the United States keeps the land that is south and east of the Colombia River."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4231,
        "fields": {
            "question": 650,
            "description": "Regardless of our personal feelings, it always concerning when a religious leader and Presidential candidate can simply be killed by a mob."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4232,
        "fields": {
            "question": 650,
            "description": "This is not an issue that we plan to address in our campaign."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4233,
        "fields": {
            "question": 651,
            "description": "New York"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4234,
        "fields": {
            "question": 651,
            "description": "Pennsylvania"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4235,
        "fields": {
            "question": 651,
            "description": "Ohio"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4236,
        "fields": {
            "question": 651,
            "description": "Virginia"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 4237,
        "fields": {
            "question": 641,
            "description": "Oregon is a different issue than that of Texas. In Oregon we have an existing, legitimate claim."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 14484,
        "fields": {
            "question": 635,
            "description": "The Venetian Ghetto must end. Our republic was founded on a radical idea, the idea that all people are equal under the laws of the state. The Jews of the republic are hard working, and economically prosperous people, we must extend full rights to them."
        }
    }
]

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 405,
        "fields": {
            "name": "Tennessee",
            "abbr": "TN",
            "electoral_votes": 13,
            "popular_votes": 119957,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 13
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 407,
        "fields": {
            "name": "Virginia",
            "abbr": "VA",
            "electoral_votes": 17,
            "popular_votes": 95539,
            "poll_closing_time": 30,
            "winner_take_all_flg": 1,
            "election": 13
        }
    }
]


campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1896,
        "fields": {
            "state": 405,
            "issue": 47,
            "state_issue_score": -0.075,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1898,
        "fields": {
            "state": 407,
            "issue": 47,
            "state_issue_score": -0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1922,
        "fields": {
            "state": 405,
            "issue": 48,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1924,
        "fields": {
            "state": 407,
            "issue": 48,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1948,
        "fields": {
            "state": 405,
            "issue": 49,
            "state_issue_score": 0,
            "weight": 0.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1950,
        "fields": {
            "state": 407,
            "issue": 49,
            "state_issue_score": 0,
            "weight": 0.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1974,
        "fields": {
            "state": 405,
            "issue": 50,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1976,
        "fields": {
            "state": 407,
            "issue": 50,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2000,
        "fields": {
            "state": 405,
            "issue": 51,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 2002,
        "fields": {
            "state": 407,
            "issue": 51,
            "state_issue_score": -0.45,
            "weight": 1
        }
    }
]

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 524,
        "fields": {
            "candidate": 131,
            "issue": 47,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 525,
        "fields": {
            "candidate": 131,
            "issue": 48,
            "issue_score": -0.25
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 526,
        "fields": {
            "candidate": 131,
            "issue": 49,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 527,
        "fields": {
            "candidate": 131,
            "issue": 50,
            "issue_score": -0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 528,
        "fields": {
            "candidate": 131,
            "issue": 51,
            "issue_score": -0.55
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 529,
        "fields": {
            "candidate": 132,
            "issue": 47,
            "issue_score": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 530,
        "fields": {
            "candidate": 132,
            "issue": 48,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 531,
        "fields": {
            "candidate": 132,
            "issue": 49,
            "issue_score": -0.15
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 532,
        "fields": {
            "candidate": 132,
            "issue": 50,
            "issue_score": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 533,
        "fields": {
            "candidate": 132,
            "issue": 51,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 534,
        "fields": {
            "candidate": 133,
            "issue": 47,
            "issue_score": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 535,
        "fields": {
            "candidate": 133,
            "issue": 48,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 536,
        "fields": {
            "candidate": 133,
            "issue": 49,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 537,
        "fields": {
            "candidate": 133,
            "issue": 50,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 538,
        "fields": {
            "candidate": 133,
            "issue": 51,
            "issue_score": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 539,
        "fields": {
            "candidate": 134,
            "issue": 47,
            "issue_score": -0.65
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 540,
        "fields": {
            "candidate": 134,
            "issue": 48,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 541,
        "fields": {
            "candidate": 134,
            "issue": 49,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 542,
        "fields": {
            "candidate": 134,
            "issue": 50,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 543,
        "fields": {
            "candidate": 134,
            "issue": 51,
            "issue_score": -0.6
        }
    }
]

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 554,
        "fields": {
            "candidate": 137,
            "issue": 47,
            "issue_score": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 555,
        "fields": {
            "candidate": 137,
            "issue": 48,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 556,
        "fields": {
            "candidate": 137,
            "issue": 49,
            "issue_score": -0.15
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 557,
        "fields": {
            "candidate": 137,
            "issue": 50,
            "issue_score": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 558,
        "fields": {
            "candidate": 137,
            "issue": 51,
            "issue_score": 0
        }
    }
]

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1452,
        "fields": {
            "candidate": 131,
            "state": 405,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1454,
        "fields": {
            "candidate": 131,
            "state": 407,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1478,
        "fields": {
            "candidate": 132,
            "state": 405,
            "state_multiplier": 1.279
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1480,
        "fields": {
            "candidate": 132,
            "state": 407,
            "state_multiplier": 1.3602
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1504,
        "fields": {
            "candidate": 133,
            "state": 405,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1506,
        "fields": {
            "candidate": 133,
            "state": 407,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1530,
        "fields": {
            "candidate": 134,
            "state": 405,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 1532,
        "fields": {
            "candidate": 134,
            "state": 407,
            "state_multiplier": 0.1
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1987,
        "fields": {
            "answer": 4188,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1988,
        "fields": {
            "answer": 4190,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1989,
        "fields": {
            "answer": 4192,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1990,
        "fields": {
            "answer": 4194,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1991,
        "fields": {
            "answer": 4195,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1993,
        "fields": {
            "answer": 4199,
            "candidate": 131,
            "affected_candidate": 131,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1994,
        "fields": {
            "answer": 4201,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1996,
        "fields": {
            "answer": 4205,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1999,
        "fields": {
            "answer": 4212,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2000,
        "fields": {
            "answer": 4214,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2001,
        "fields": {
            "answer": 4215,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2002,
        "fields": {
            "answer": 4216,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2003,
        "fields": {
            "answer": 4217,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2004,
        "fields": {
            "answer": 4220,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2006,
        "fields": {
            "answer": 4224,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2007,
        "fields": {
            "answer": 4225,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2008,
        "fields": {
            "answer": 4228,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": -0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2009,
        "fields": {
            "answer": 4229,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2010,
        "fields": {
            "answer": 4230,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2011,
        "fields": {
            "answer": 4231,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.033
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2012,
        "fields": {
            "answer": 4233,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2013,
        "fields": {
            "answer": 4234,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2014,
        "fields": {
            "answer": 4235,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2015,
        "fields": {
            "answer": 4236,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2016,
        "fields": {
            "answer": 4155,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2018,
        "fields": {
            "answer": 4156,
            "candidate": 132,
            "affected_candidate": 131,
            "global_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2021,
        "fields": {
            "answer": 4158,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.115
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2023,
        "fields": {
            "answer": 4159,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2024,
        "fields": {
            "answer": 4160,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2025,
        "fields": {
            "answer": 4160,
            "candidate": 132,
            "affected_candidate": 131,
            "global_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2026,
        "fields": {
            "answer": 4161,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2027,
        "fields": {
            "answer": 4161,
            "candidate": 132,
            "affected_candidate": 131,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2028,
        "fields": {
            "answer": 4162,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2029,
        "fields": {
            "answer": 4162,
            "candidate": 132,
            "affected_candidate": 131,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2030,
        "fields": {
            "answer": 4163,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2033,
        "fields": {
            "answer": 4168,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2034,
        "fields": {
            "answer": 4171,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2035,
        "fields": {
            "answer": 4172,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2036,
        "fields": {
            "answer": 4173,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2037,
        "fields": {
            "answer": 4173,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2038,
        "fields": {
            "answer": 4180,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2039,
        "fields": {
            "answer": 4183,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2040,
        "fields": {
            "answer": 4184,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2041,
        "fields": {
            "answer": 4184,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2042,
        "fields": {
            "answer": 4186,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2043,
        "fields": {
            "answer": 4186,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2044,
        "fields": {
            "answer": 4189,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2045,
        "fields": {
            "answer": 4190,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2046,
        "fields": {
            "answer": 4191,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2047,
        "fields": {
            "answer": 4193,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2048,
        "fields": {
            "answer": 4194,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2049,
        "fields": {
            "answer": 4196,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2050,
        "fields": {
            "answer": 4197,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2051,
        "fields": {
            "answer": 4198,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2052,
        "fields": {
            "answer": 4201,
            "candidate": 132,
            "affected_candidate": 131,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2057,
        "fields": {
            "answer": 4205,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2058,
        "fields": {
            "answer": 4205,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2059,
        "fields": {
            "answer": 4206,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2060,
        "fields": {
            "answer": 4206,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2063,
        "fields": {
            "answer": 4210,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2064,
        "fields": {
            "answer": 4210,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2065,
        "fields": {
            "answer": 4211,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2066,
        "fields": {
            "answer": 4212,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2067,
        "fields": {
            "answer": 4212,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": -0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2068,
        "fields": {
            "answer": 4215,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2069,
        "fields": {
            "answer": 4217,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2070,
        "fields": {
            "answer": 4218,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2071,
        "fields": {
            "answer": 4219,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2072,
        "fields": {
            "answer": 4220,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2073,
        "fields": {
            "answer": 4220,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": -0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2074,
        "fields": {
            "answer": 4221,
            "candidate": 132,
            "affected_candidate": 133,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2077,
        "fields": {
            "answer": 4226,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2078,
        "fields": {
            "answer": 4227,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2079,
        "fields": {
            "answer": 4228,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2080,
        "fields": {
            "answer": 4231,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2081,
        "fields": {
            "answer": 4233,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2082,
        "fields": {
            "answer": 4234,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2083,
        "fields": {
            "answer": 4235,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2084,
        "fields": {
            "answer": 4236,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2086,
        "fields": {
            "answer": 4189,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2087,
        "fields": {
            "answer": 4193,
            "candidate": 131,
            "affected_candidate": 132,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 14476,
        "fields": {
            "answer": 4154,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 14477,
        "fields": {
            "answer": 4157,
            "candidate": 131,
            "affected_candidate": 131,
            "global_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 14478,
        "fields": {
            "answer": 4200,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 14479,
        "fields": {
            "answer": 4195,
            "candidate": 132,
            "affected_candidate": 131,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 14482,
        "fields": {
            "answer": 4164,
            "candidate": 132,
            "affected_candidate": 132,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 14483,
        "fields": {
            "answer": 4165,
            "candidate": 131,
            "affected_candidate": 131,
            "global_multiplier": -0.45
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1658,
        "fields": {
            "answer": 4188,
            "issue": 48,
            "issue_score": 0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1659,
        "fields": {
            "answer": 4191,
            "issue": 48,
            "issue_score": -0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1660,
        "fields": {
            "answer": 4192,
            "issue": 48,
            "issue_score": 0.55,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1661,
        "fields": {
            "answer": 4192,
            "issue": 50,
            "issue_score": 0.55,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1663,
        "fields": {
            "answer": 4196,
            "issue": 50,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1667,
        "fields": {
            "answer": 4205,
            "issue": 47,
            "issue_score": 0.5,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1670,
        "fields": {
            "answer": 4210,
            "issue": 51,
            "issue_score": -0.75,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1671,
        "fields": {
            "answer": 4212,
            "issue": 47,
            "issue_score": 0.5,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1672,
        "fields": {
            "answer": 4214,
            "issue": 49,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1673,
        "fields": {
            "answer": 4215,
            "issue": 49,
            "issue_score": -0.5,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1674,
        "fields": {
            "answer": 4216,
            "issue": 50,
            "issue_score": 0.6,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1675,
        "fields": {
            "answer": 4217,
            "issue": 50,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1676,
        "fields": {
            "answer": 4219,
            "issue": 50,
            "issue_score": -0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1677,
        "fields": {
            "answer": 4220,
            "issue": 47,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1678,
        "fields": {
            "answer": 4220,
            "issue": 51,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1681,
        "fields": {
            "answer": 4224,
            "issue": 50,
            "issue_score": 0.6,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1682,
        "fields": {
            "answer": 4225,
            "issue": 50,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1683,
        "fields": {
            "answer": 4227,
            "issue": 50,
            "issue_score": -0.55,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1684,
        "fields": {
            "answer": 4163,
            "issue": 49,
            "issue_score": 0.5,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1687,
        "fields": {
            "answer": 4168,
            "issue": 49,
            "issue_score": -0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1688,
        "fields": {
            "answer": 4172,
            "issue": 51,
            "issue_score": -0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1689,
        "fields": {
            "answer": 4179,
            "issue": 47,
            "issue_score": 0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1690,
        "fields": {
            "answer": 4179,
            "issue": 51,
            "issue_score": 0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1691,
        "fields": {
            "answer": 4180,
            "issue": 50,
            "issue_score": 0.75,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1692,
        "fields": {
            "answer": 4181,
            "issue": 50,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1693,
        "fields": {
            "answer": 4184,
            "issue": 47,
            "issue_score": 0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1694,
        "fields": {
            "answer": 4184,
            "issue": 51,
            "issue_score": 0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1695,
        "fields": {
            "answer": 4186,
            "issue": 47,
            "issue_score": -0.45,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1696,
        "fields": {
            "answer": 4186,
            "issue": 51,
            "issue_score": -0.2,
            "issue_importance": 3
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14257,
        "fields": {
            "answer": 4188,
            "state": 407,
            "candidate": 131,
            "affected_candidate": 132,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14273,
        "fields": {
            "answer": 4194,
            "state": 407,
            "candidate": 131,
            "affected_candidate": 132,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14280,
        "fields": {
            "answer": 4205,
            "state": 407,
            "candidate": 131,
            "affected_candidate": 132,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14287,
        "fields": {
            "answer": 4212,
            "state": 407,
            "candidate": 131,
            "affected_candidate": 132,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14294,
        "fields": {
            "answer": 4216,
            "state": 407,
            "candidate": 131,
            "affected_candidate": 132,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14337,
        "fields": {
            "answer": 4236,
            "state": 407,
            "candidate": 131,
            "affected_candidate": 132,
            "state_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14384,
        "fields": {
            "answer": 4174,
            "state": 407,
            "candidate": 132,
            "affected_candidate": 132,
            "state_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14398,
        "fields": {
            "answer": 4176,
            "state": 407,
            "candidate": 132,
            "affected_candidate": 132,
            "state_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14412,
        "fields": {
            "answer": 4186,
            "state": 407,
            "candidate": 132,
            "affected_candidate": 132,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 14435,
        "fields": {
            "answer": 4236,
            "state": 407,
            "candidate": 132,
            "affected_candidate": 132,
            "state_multiplier": 0.007
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1631,
        "fields": {
            "answer": 4188,
            "candidate": 132,
            "answer_feedback": "They shall now vote."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1635,
        "fields": {
            "answer": 4192,
            "candidate": 131,
            "answer_feedback": "Without"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1636,
        "fields": {
            "answer": 4193,
            "candidate": 131,
            "answer_feedback": "This answer satisfies the Southern wing of the party while providing some concession to Northern Democrats in states like New York."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1637,
        "fields": {
            "answer": 4194,
            "candidate": 131,
            "answer_feedback": "This is certainly the party line on the tariff issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1638,
        "fields": {
            "answer": 4195,
            "candidate": 132,
            "answer_feedback": "While it is true that the Venetian spice trade is loosing relevance do to the expeditions of such people as Vasco da Gama, the book publishing sector has increasingly become a less profitable sector of the economy due to the high cost of Silk and Cotten."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1643,
        "fields": {
            "answer": 4200,
            "candidate": 132,
            "answer_feedback": "Highlighting your role as procurator in this unique way can help you highlighting your uniqueness in a comment role to hold for Doge canidates."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1648,
        "fields": {
            "answer": 4205,
            "candidate": 131,
            "answer_feedback": "People are wondering if they are reading your words correctly. Annexation was supposed to be the primary issue of your campaign."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1650,
        "fields": {
            "answer": 4211,
            "candidate": 131,
            "answer_feedback": "This is probably the best stance to take."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1651,
        "fields": {
            "answer": 4212,
            "candidate": 131,
            "answer_feedback": "People are wondering if they are reading your words correctly. Annexation was supposed to be the primary issue of your campaign."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1652,
        "fields": {
            "answer": 4213,
            "candidate": 131,
            "answer_feedback": "This is probably the best stance to take, particularly if you care to win a state like New York or Pennsylvania."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1653,
        "fields": {
            "answer": 4215,
            "candidate": 131,
            "answer_feedback": "Immigration restriction is more of a Whig position, and it does you little good to advocate for it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1654,
        "fields": {
            "answer": 4216,
            "candidate": 131,
            "answer_feedback": "A national bank is anathema to most Democrats."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1655,
        "fields": {
            "answer": 4218,
            "candidate": 131,
            "answer_feedback": "There's nothing wrong with taking this position."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1656,
        "fields": {
            "answer": 4219,
            "candidate": 131,
            "answer_feedback": "There's nothing wrong with taking this position."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1657,
        "fields": {
            "answer": 4220,
            "candidate": 131,
            "answer_feedback": "Better to just ignore this letter."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1659,
        "fields": {
            "answer": 4224,
            "candidate": 131,
            "answer_feedback": "What is the idea behind this outburst? The Bank War was, perhaps, Andrew Jackson's central initiative as President."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1660,
        "fields": {
            "answer": 4225,
            "candidate": 131,
            "answer_feedback": "A national bank is anathema to most Democrats."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1661,
        "fields": {
            "answer": 4226,
            "candidate": 131,
            "answer_feedback": "This is a good position to run a campaign on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1662,
        "fields": {
            "answer": 4227,
            "candidate": 131,
            "answer_feedback": "There's nothing wrong with taking this position."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1663,
        "fields": {
            "answer": 4228,
            "candidate": 131,
            "answer_feedback": "This is a rallying cry that can certainly help your party in the North and West."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1664,
        "fields": {
            "answer": 4229,
            "candidate": 131,
            "answer_feedback": "There's no reason to equivocate on the Oregon issue. People want aggressive action there."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1665,
        "fields": {
            "answer": 4230,
            "candidate": 131,
            "answer_feedback": "There's no reason to equivocate on the Oregon issue. People want aggressive action there."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1666,
        "fields": {
            "answer": 4231,
            "candidate": 131,
            "answer_feedback": "Are you trying to win the Mormon vote this year? This is one case where it's definitely best to keep your opinions private."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1667,
        "fields": {
            "answer": 4233,
            "candidate": 131,
            "answer_feedback": "Good luck in this crucial state."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1668,
        "fields": {
            "answer": 4234,
            "candidate": 131,
            "answer_feedback": "Good luck in this crucial state."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1669,
        "fields": {
            "answer": 4235,
            "candidate": 131,
            "answer_feedback": "Good luck in this crucial state."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1670,
        "fields": {
            "answer": 4236,
            "candidate": 131,
            "answer_feedback": "Good luck in this crucial state."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1671,
        "fields": {
            "answer": 4237,
            "candidate": 131,
            "answer_feedback": "This is a strange aside to take, but one that is unlikely to make much of an impression."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1672,
        "fields": {
            "answer": 4154,
            "candidate": 132,
            "answer_feedback": "Word make's its way to the people of Venice, of your respects to the popular Grimani"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1673,
        "fields": {
            "answer": 4155,
            "candidate": 132,
            "answer_feedback": "Word makes its way to Venice that you have not payed your respects to Grimani in a timely matter. Your already damaged reputation, is hurt more."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1674,
        "fields": {
            "answer": 4156,
            "candidate": 132,
            "answer_feedback": "As the voting noblemen are chosen in a complex random order bribes from the get go, are not very effective. However doing nothing with this time is in many regards a waste."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1675,
        "fields": {
            "answer": 4157,
            "candidate": 132,
            "answer_feedback": "The noblemen who end up electing the Doge are assigned randomly, thus the effectiveness of your bribes is hard to judge at this point. The system of randomness is a hedge against bribing thus, any reports of bribing will hurt your standing with the public, and hurt the Republican system as whole. However if your bribes do succeed your almost guaranteed the position of Doge."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1676,
        "fields": {
            "answer": 4158,
            "candidate": 132,
            "answer_feedback": "Your efforts in this regard can help boost your perceived unpopularity. It can also help play up your best qualities to the Venetian public."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1677,
        "fields": {
            "answer": 4159,
            "candidate": 132,
            "answer_feedback": "The effectiveness of this strategy is limited, do to your unpopularity."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1678,
        "fields": {
            "answer": 4160,
            "candidate": 132,
            "answer_feedback": "The first round of lot voting shall convene to choose the next thirty voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1679,
        "fields": {
            "answer": 4161,
            "candidate": 132,
            "answer_feedback": "The first round of lot voting shall convene to choose the next thirty voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1680,
        "fields": {
            "answer": 4162,
            "candidate": 132,
            "answer_feedback": "The first round of lot voting shall convene to choose the next thirty voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1681,
        "fields": {
            "answer": 4163,
            "candidate": 132,
            "answer_feedback": "Given the loss of Cyprus to the Ottomans only a few decades prior, this is a satisfactory answer."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1682,
        "fields": {
            "answer": 4165,
            "candidate": 132,
            "answer_feedback": "This only fuels the fires of accusations that you are a Protestant, a dangerous thing to be in Venice."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1684,
        "fields": {
            "answer": 4168,
            "candidate": 132,
            "answer_feedback": "This is certainly a strategy, but there are more powerful ones out there."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1685,
        "fields": {
            "answer": 4170,
            "candidate": 132,
            "answer_feedback": "This is your biggest area of support, using it is bound to help you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1686,
        "fields": {
            "answer": 4171,
            "candidate": 132,
            "answer_feedback": "This will obviously be a more popular position in certain regions."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1687,
        "fields": {
            "answer": 4172,
            "candidate": 132,
            "answer_feedback": "This will obviously be a more popular position in certain regions."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1688,
        "fields": {
            "answer": 4173,
            "candidate": 132,
            "answer_feedback": "Silence is the worst of all choices here."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1689,
        "fields": {
            "answer": 4174,
            "candidate": 132,
            "answer_feedback": "Talk of personal foibles is probably just sound and fury in this election."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1690,
        "fields": {
            "answer": 4175,
            "candidate": 132,
            "answer_feedback": "Talk of personal foibles is probably just sound and fury in this election."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1691,
        "fields": {
            "answer": 4176,
            "candidate": 132,
            "answer_feedback": "Talk of personal foibles is probably just sound and fury in this election."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1692,
        "fields": {
            "answer": 4180,
            "candidate": 132,
            "answer_feedback": "While this is certainly a solution, many question if Venice has the navel power to go through with it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1693,
        "fields": {
            "answer": 4181,
            "candidate": 132,
            "answer_feedback": "While it is true that Austria does harbor support for the Uscocchi, in order to reset our supremacy over Austria we would need a far larger military than we possess now."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1694,
        "fields": {
            "answer": 4182,
            "candidate": 132,
            "answer_feedback": "This is a sure fire solution to our Uscocchi problem, and one that seems realistic."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1695,
        "fields": {
            "answer": 4183,
            "candidate": 132,
            "answer_feedback": "Sadly, some attacks never lose their luster."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1697,
        "fields": {
            "answer": 4186,
            "candidate": 132,
            "answer_feedback": "This position is broadly popular."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1698,
        "fields": {
            "answer": 4187,
            "candidate": 132,
            "answer_feedback": "Manny are agree for an economic solution to the cities woes, but while outright rights to the Jews is taboo, walking this thin line maybe the way to go."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1699,
        "fields": {
            "answer": 4189,
            "candidate": 132,
            "answer_feedback": "They shall now vote."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1700,
        "fields": {
            "answer": 4190,
            "candidate": 132,
            "answer_feedback": "They shall now vote"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1701,
        "fields": {
            "answer": 4191,
            "candidate": 132,
            "answer_feedback": "They shall now vote."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1702,
        "fields": {
            "answer": 4193,
            "candidate": 132,
            "answer_feedback": "This is a little out of step with Whig ideology."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1703,
        "fields": {
            "answer": 4194,
            "candidate": 132,
            "answer_feedback": "This is a little out of step with Whig ideology."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1704,
        "fields": {
            "answer": 4196,
            "candidate": 132,
            "answer_feedback": "These powers made up the so called \"Holy alliance\" which fought the Ottomans in the war in which we lost Venice. While reinforcing ties with these empires may be popular, your own feud with the pope makes your works unconvincing. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1705,
        "fields": {
            "answer": 4197,
            "candidate": 132,
            "answer_feedback": "The loss of Cyprus was in part due to a strong Ottoman naval presence, thus a commitment to sure up our own navy is a good bet."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1706,
        "fields": {
            "answer": 4198,
            "candidate": 132,
            "answer_feedback": "As you make your way back down to your seat you see something\n<I>I tell you that God has drawn this response from you to express the feeling which he has inspired in your hearts!</I> Suddenly you awake and see how ridiculous your answer is."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1707,
        "fields": {
            "answer": 4199,
            "candidate": 132,
            "answer_feedback": "Having served as the Procurator of St Mark's is an almost prerequisite to becoming Doge. This response does little to separate you from your opponents."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1709,
        "fields": {
            "answer": 4201,
            "candidate": 132,
            "answer_feedback": "Considering your main opponent Marcantonio Memmo is from a old noble house, highlighting your lineage from the more dominant new noble houses works to reinforce your electability among the Council Members.\n "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1715,
        "fields": {
            "answer": 4210,
            "candidate": 132,
            "answer_feedback": "It's a difficult issue to address, but putting yourself in sympathy with John Calhoun is certainly not the right way to do it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1716,
        "fields": {
            "answer": 4211,
            "candidate": 132,
            "answer_feedback": "This is probably your best choice. It's just unfortunate that the Democrats continue to demagogue the public on this issue, rather than address the failures of their banking policy."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1717,
        "fields": {
            "answer": 4215,
            "candidate": 132,
            "answer_feedback": "Nativism appears to be on the rise, but you are probably better off, on the whole, taking a more moderate tack."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1718,
        "fields": {
            "answer": 4217,
            "candidate": 132,
            "answer_feedback": "What's wrong with a national bank? Your supporters are concerned by this statement."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1719,
        "fields": {
            "answer": 4219,
            "candidate": 132,
            "answer_feedback": "Henry Clay takes the Democratic line?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1720,
        "fields": {
            "answer": 4220,
            "candidate": 132,
            "answer_feedback": "Probably best to ignore this letter."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1721,
        "fields": {
            "answer": 4221,
            "candidate": 132,
            "answer_feedback": "Probably best to ignore this letter."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1724,
        "fields": {
            "answer": 4226,
            "candidate": 132,
            "answer_feedback": "Supporters are surprised and upset to hear you take a new position on the bank issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1725,
        "fields": {
            "answer": 4227,
            "candidate": 132,
            "answer_feedback": "Supporters are surprised and upset to hear you take a new position on the bank issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1726,
        "fields": {
            "answer": 4228,
            "candidate": 132,
            "answer_feedback": "This is a good way to rally Northern support."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1727,
        "fields": {
            "answer": 4231,
            "candidate": 132,
            "answer_feedback": "Are you trying to win the Mormon vote this year? This is one case where it's definitely best to keep your opinions private."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1728,
        "fields": {
            "answer": 4233,
            "candidate": 132,
            "answer_feedback": "Good luck in this crucial state."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1729,
        "fields": {
            "answer": 4234,
            "candidate": 132,
            "answer_feedback": "Good luck in this crucial state."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1730,
        "fields": {
            "answer": 4235,
            "candidate": 132,
            "answer_feedback": "Good luck in this crucial state."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1731,
        "fields": {
            "answer": 4236,
            "candidate": 132,
            "answer_feedback": "Good luck in this crucial state."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1732,
        "fields": {
            "answer": 4237,
            "candidate": 132,
            "answer_feedback": "This is a good way to rally Northern support."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 14481,
        "fields": {
            "answer": 4164,
            "candidate": 132,
            "answer_feedback": "The Council does not concern most people."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 14486,
        "fields": {
            "answer": 14484,
            "candidate": 131,
            "answer_feedback": "With your feud with the Pope, and now this, many are convinced you are the living embodiment of at the best a Protestant, and at worst Satin. \n\n                           <I>La storia ti ricorderà</i>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 14488,
        "fields": {
            "answer": 4169,
            "candidate": 132,
            "answer_feedback": "This is an old, but an effective strategy."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 14491,
        "fields": {
            "answer": 4184,
            "candidate": 131,
            "answer_feedback": "The carnival is a joyous occasion."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 14495,
        "fields": {
            "answer": 4178,
            "candidate": 132,
            "answer_feedback": "what the fuck"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 14497,
        "fields": {
            "answer": 4179,
            "candidate": 132,
            "answer_feedback": "This strikes a good balance on the issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 14499,
        "fields": {
            "answer": 4177,
            "candidate": 132,
            "answer_feedback": "Given recent conflicts with the Church this strikes a chord with the electorate."
        }
    }
]



campaignTrail_temp.jet_data = [{}
]


campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/0mJPHx9.jpg'; campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/hOXfy3I.png'; campaignTrail_temp.candidate_last_name = 'Leonardo'; campaignTrail_temp.running_mate_last_name = 'Donato'; campaignTrail_temp.running_mate_state_id = '402'; campaignTrail_temp.player_answers = []; campaignTrail_temp.player_visits = []; campaignTrail_temp.answer_feedback_flg = 1; campaignTrail_temp.game_start_logging_id = '3668715';

function checkIfCanAddMap() {
    map = document.getElementById("map_container");
    
    if(map) {
        map.style.backgroundImage = "url('https://i.imgur.com/AaDmA6o.png')"; 
    }
}

endingConstructor = (a = 1) => {
    $("#final_results_description")[0].innerHTML = construct(a);
  }
  
  // ENDINGS -- this is slightly more reliable than the ending code method
  
  e.multiple_endings = true;


   
     
  var newMail = false;
  // Mail class to represent each mail instance
  class Mail {
      constructor(id, sender, message) {
          this.id = id
          this.sender = sender;
          this.message = message;
          newMail = true;
      }
  }
  
  class Recipient {
      constructor(id, name, prewrittenMessage, sent) {
          this.id = id;
          this.name = name;
          this.sent = sent;
      }
  }
  
  var mailSentTo = []
  
  // To add a mail to the mailbox, use mailbox.mails.push(new Mail(1, "Thomas Jefferson", "Hi there!"))
  //similar for recipients: mailbox.recipients.push(new Recipient (1, "George Washington", false))
  let mailbox = {
      mails: [
        
         ],
   recipients: [
          new Recipient(1, "Abigail Adams", false),
       
      ]
  };
  
  // Function to add Mailbox button
  function addMailboxButton() {
      if (document.getElementById('mailbox_button')) {
          return;
      }
  
      const refButton = document.getElementById('view_electoral_map');
      if (!refButton) {
          return;
      }
  
      const newButton = document.createElement('button');
      newButton.id = 'mailbox_button';
      newButton.style.marginLeft = '1.5em';
      newButton.innerHTML = 'Your Study';
      if (newMail == true) { newButton.innerHTML = '<strong>You have Mail</strong>';}
      newButton.addEventListener('click', openMailbox);
      refButton.insertAdjacentElement('afterend', newButton);
  }
  
  function openMailbox() {
      newMail = false;
      document.getElementById('mailbox_button').innerHTML = 'Your Study';
      let questions = document.querySelector(".inner_window_question");
      questions.style.display = 'none';
  
      let mbDiv = document.createElement('div');
      mbDiv.id = 'mailbox';
      mbDiv.style.height='100%'
      setupMainArea(mbDiv, questions); // Setup the dynamic image area
  
      questions.parentNode.insertBefore(mbDiv, questions.nextSibling);
  }
  
  function setupMainArea(parentDiv, toggleDiv) {
      let headerDiv = createHeader(parentDiv, toggleDiv);
      parentDiv.appendChild(headerDiv);
  
      let containerDiv = document.createElement('div');
      containerDiv.style.position = 'relative';
      containerDiv.style.height = '80%'; // Set the height of the container
      parentDiv.appendChild(containerDiv);
  
      let image = document.createElement('img');
      image.style.width = '100%';
      image.style.height = '100%';
      image.style.display = 'block'; // Ensure the image fills the container
      containerDiv.appendChild(image);
  
      // Check the number of mails and set the image source accordingly
      let mailCount = mailbox.mails.length;
      if (mailCount === 0) {
          image.src = 'https://i.ibb.co/DzvGPfB/No-Letters-Quill.png';
      } else if (mailCount >= 1 && mailCount <= 1) {
          image.src = 'https://i.ibb.co/6gPN0Nf/Letter-Quill.png';
      } else if (mailCount >= 2 && mailCount <= 4) {
          image.src = 'https://i.ibb.co/wMPnNLH/Some-Letters-Quill.png';
      } else {
          image.src = 'https://i.ibb.co/1vZGczN/Many-Letters-Quill.png';
      }
      createInteractiveArea(containerDiv, 61.56, 15.47, 32.88, 73.49, showWriteLetterOverlay);
      createInteractiveArea(containerDiv, 3.5, 19.06, 54.19, 73.11, showReceivedLettersOverlay);
  }
  
  function createInteractiveArea(container, left, top, width, height, clickCallback) {
      let areaDiv = document.createElement('div');
      areaDiv.style.position = 'absolute';
      areaDiv.style.left = left + '%';
      areaDiv.style.top = top + '%';
      areaDiv.style.width = width + '%';
      areaDiv.style.height = height + '%';
      areaDiv.style.cursor = 'pointer';
      areaDiv.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Initially transparent
      areaDiv.style.transition = 'background-color 0.3s';
  
      areaDiv.addEventListener('mouseenter', () => areaDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'); // Transparent white on hover
      areaDiv.addEventListener('mouseleave', () => areaDiv.style.backgroundColor = 'rgba(255, 255, 255, 0)'); // Revert to transparent when not hovered
      areaDiv.addEventListener('click', clickCallback);
  
      container.appendChild(areaDiv);
  }
  
  
  // Create a header with back button and title
  function createHeader(parentDiv, toggleDiv) {
      let headerDiv = document.createElement('div');
      headerDiv.style.display = 'flex';
      headerDiv.style.justifyContent = 'space-between';
      headerDiv.style.alignItems = 'center';
      headerDiv.appendChild(createBackButton(parentDiv, toggleDiv));
      headerDiv.appendChild(createHeaderText('Your Study'));
      return headerDiv;
  }
  
  function createBackButton(parentDiv, toggleDiv) {
      let backButton = document.createElement('button');
      backButton.innerText = 'Back';
      backButton.style.margin = '5px';
      backButton.style.backgroundColor = 'grey';
      backButton.onclick = function() {
          parentDiv.remove();
          toggleDiv.style.display = '';
      };
      return backButton;
  }
  
  function createHeaderText(text) {
      let headerText = document.createElement('h2');
      headerText.textContent = text;
      headerText.style.flexGrow = 1;
      headerText.style.textAlign = 'center';
      return headerText;
  }
  
  // Function to show overlay with received letters
  function showReceivedLettersOverlay() {
      let overlay = createOverlay();
  
      // Container for letters
      let lettersContainer = document.createElement('div');
      lettersContainer.style.padding = '10px';
      lettersContainer.style.maxWidth = '300px';
      lettersContainer.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/00/47/71/42/360_F_47714212_N5Pn5FA4YCIWxBrXHJjwL8e1FhoxVU0i.jpg')";
      lettersContainer.style.backgroundSize = 'cover';
      lettersContainer.style.borderRadius = '5px';
      lettersContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
      lettersContainer.style.overflowY = 'auto';
      lettersContainer.style.maxHeight = '400px';
  
      // List out received letters
      mailbox.mails.forEach((mail, index) => {
          let letterItem = document.createElement('div');
          letterItem.innerText = `From: ${mail.sender}`;
          letterItem.style.padding = '10px';
          letterItem.style.margin = '5px 0';
          letterItem.style.backgroundImage = "url('https://i.pinimg.com/originals/4c/65/f9/4c65f913798dcd566fb929d0973a37e6.jpg')";
          letterItem.style.backgroundSize = 'cover'; // Changed from 'contain' to 'cover'
          letterItem.style.backgroundPosition = 'center';
          letterItem.style.border = '1px solid #ddd';
          letterItem.style.borderRadius = '5px';
          letterItem.style.cursor = 'pointer';
          letterItem.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
          letterItem.style.color = 'black'; // Ensure text is readable on the letter background
  
          // Hover effect
          letterItem.onmouseover = function() {
              this.style.opacity = '0.8';
          };
          letterItem.onmouseout = function() {
              this.style.opacity = '1';
          };
  
          letterItem.onclick = () => openMailContent(mail, index);
          lettersContainer.appendChild(letterItem);
      });
  
      // Close button
      let closeButton = document.createElement('button');
      closeButton.innerText = 'Close';
      closeButton.style.display = 'block';
      closeButton.style.margin = '10px auto';
      closeButton.style.padding = '5px 10px';
      closeButton.style.backgroundColor = '#ddd';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '5px';
      closeButton.style.cursor = 'pointer';
      closeButton.onclick = () => overlay.remove();
  
      // Append the close button to the lettersContainer
      lettersContainer.appendChild(closeButton);
  
      overlay.appendChild(lettersContainer);
      document.body.appendChild(overlay);
  }
  
  
  // Utility function to create a generic overlay
  function createOverlay() {
      let overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      overlay.style.zIndex = '1000';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      return overlay;
  }
  
  // Function to open and display the content of a mail
  function openMailContent(mail, index) {
      let mailContentOverlay = createOverlay();
  
      // Container for the mail content
      let mailContentContainer = document.createElement('div');
      mailContentContainer.style.padding = '20px';
      mailContentContainer.style.backgroundImage = "url('https://i.pinimg.com/originals/4c/65/f9/4c65f913798dcd566fb929d0973a37e6.jpg')";
      mailContentContainer.style.backgroundSize = 'cover';
      mailContentContainer.style.borderRadius = '5px';
      mailContentContainer.style.maxWidth = '500px';
      mailContentContainer.style.textAlign = 'left';
  
      // Sender's name
      let senderName = document.createElement('h3');
      senderName.innerText = `From: ${mail.sender}`;
      senderName.style.marginBottom = '10px';
  
      // Mail message
      let mailMessage = document.createElement('p');
      mailMessage.innerText = mail.message;
      mailMessage.style.whiteSpace = 'pre-wrap'; // To preserve line breaks and spaces
  
      // Close button
      let closeButton = document.createElement('button');
      closeButton.innerText = 'Close';
      closeButton.style.marginTop = '20px';
      closeButton.style.padding = '5px 10px';
      closeButton.style.backgroundColor = '#ddd';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '5px';
      closeButton.style.cursor = 'pointer';
      closeButton.onclick = () => mailContentOverlay.remove();
  
      // Appending elements to the container
      mailContentContainer.appendChild(senderName);
      mailContentContainer.appendChild(mailMessage);
      mailContentContainer.appendChild(closeButton);
  
      // Append the container to the overlay
      mailContentOverlay.appendChild(mailContentContainer);
  
      // Append the overlay to the body
      document.body.appendChild(mailContentOverlay);
  }
  
  function showWriteLetterOverlay() {
      let overlay = createOverlay();
      overlay.classList.add('myoverlay');
  
      let writeLetterContainer = document.createElement('div');
      writeLetterContainer.style.padding = '20px';
      writeLetterContainer.style.backgroundImage = "url('https://i.pinimg.com/originals/4c/65/f9/4c65f913798dcd566fb929d0973a37e6.jpg')";
      writeLetterContainer.style.backgroundSize = 'cover';
      writeLetterContainer.style.borderRadius = '5px';
      writeLetterContainer.style.maxWidth = '500px';
      writeLetterContainer.style.textAlign = 'left';
      writeLetterContainer.style.display = 'flex';
      writeLetterContainer.style.flexDirection = 'column';
  
      let recipientLabel = document.createElement('p');
      recipientLabel.innerHTML = "<strong>Recipient:</strong>";
      writeLetterContainer.appendChild(recipientLabel);
  
      let recipientSelect = document.createElement('select');
      recipientSelect.style.marginBottom = '10px';
      recipientSelect.style.backgroundColor = 'transparent'
  
      let unsentRecipients = mailbox.recipients.filter(recipient => !recipient.sent);
  
      unsentRecipients.forEach(recipient => {
          let option = document.createElement('option');
          option.value = recipient.id;
          option.text = recipient.name;
          recipientSelect.appendChild(option);
      });
  
      let otherOption = document.createElement('option');
      otherOption.value = 'other';
      otherOption.text = 'Other';
      recipientSelect.appendChild(otherOption);
  
      writeLetterContainer.appendChild(recipientSelect);
  
      let recipientNameInput = document.createElement('input');
      recipientNameInput.type = 'text';
      recipientNameInput.placeholder = 'Enter your recipient here';
      recipientNameInput.style.marginBottom = '10px';
      recipientNameInput.style.display = 'none'; // Initially hidden
      recipientNameInput.style.backgroundColor = 'transparent';
  
      recipientSelect.onchange = function() {
          recipientNameInput.style.display = this.value === 'other' ? 'block' : 'none';
      };
  
      writeLetterContainer.appendChild(recipientNameInput);
  
      let messageInput = document.createElement('textarea');
      messageInput.style.whiteSpace = 'pre-wrap';
      messageInput.style.marginBottom = '10px';
      messageInput.style.backgroundColor = 'transparent';
      messageInput.rows = 12;  // Number of lines
      messageInput.cols = 60;
  
      writeLetterContainer.appendChild(messageInput);
  
      let sendButton = document.createElement('button');
      sendButton.innerText = 'Send';
      sendButton.style.marginTop = '10px';
      sendButton.style.padding = '5px 10px';
      sendButton.style.backgroundColor = '#ddd';
      sendButton.style.border = 'none';
      sendButton.style.borderRadius = '5px';
      sendButton.style.cursor = 'pointer';
      sendButton.onclick = () => sendMail(recipientSelect.value, recipientNameInput.value || recipientSelect.options[recipientSelect.selectedIndex].text, messageInput.value);
  
      writeLetterContainer.appendChild(sendButton);
  
      let closeButton = document.createElement('button');
      closeButton.innerText = 'Close';
      closeButton.style.marginTop = '10px';
      closeButton.style.padding = '5px 10px';
      closeButton.style.backgroundColor = '#ddd';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '5px';
      closeButton.style.cursor = 'pointer';
      closeButton.onclick = () => overlay.remove();
  
      writeLetterContainer.appendChild(closeButton);
  
      overlay.appendChild(writeLetterContainer);
      document.body.appendChild(overlay);
  }
  
  
  function sendMail(recipientId, recipientName, message) {
      // Add the recipient's name to the mailSentTo array
      mailSentTo.push(recipientName);
  
      // Your logic for sending mail
      if (recipientId === 'other' || !mailbox.recipients.some(r => r.id == recipientId && r.sent === false)) {
          alert("Mail sent to " + recipientName);
          document.querySelector('.myoverlay').remove();
      } else {
          let recipient = mailbox.recipients.find(r => r.id == recipientId);
          recipient.sent = true;
          alert("Mail sent to " + recipient.name);
          document.querySelector('.myoverlay').remove();
      }
  }
  
  
  
  // Mutation observer setup
  let observerRunning = false;
  let element = document.getElementById('controlElement');
  if (!element) {
      let singleObserver = new MutationObserver(handleMutations);
      singleObserver.observe(document.documentElement, { childList: true, subtree: true });
      var controlElement = document.createElement('div');
      controlElement.style.display = 'none';
      controlElement.id = 'controlElement';
      document.body.appendChild(controlElement);
  }
  
  function handleMutations(mutationsList, observer) {
      if (observerRunning) return;
      observerRunning = true;
      addMailboxButton();
      observer.observe(document.documentElement, { childList: true, subtree: true });
      observerRunning = false;
  }


  
  document.head.appendChild(style_overwrite);


  let style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'dynamic-style';
  
  style.innerHTML = `
    .inner_window_question h3 {
      background-color: #e1e1e1;
    }
    .overlay_window h3 {
      background-color: #b4b4b4;
    }
  `;
  
  document.head.appendChild(style);
  
  const customStyling = document.createElement("style");
  customStyling.innerHTML = `
  #map_container {
      background-image: url("https://raw.githubusercontent.com/FlongydOlson/OlsonMods/main/mapground.png");
      background-size: cover;
  }
  `;
  document.head.appendChild(customStyling);
a  