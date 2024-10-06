e = campaignTrail_temp

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "Madam President",
            "summary": "<p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">America has entered the 21st century down to the wire. It chose you over Trump, proving the old political establishment is not quite dead. Sadly, that is not the end of it. A radicalized GOP waits for the chance to take a cut of your conquests. Just one state away from winning last time, many in the field can smell blood. After all, if you almost lost to that unelectable joke, evicting you should be a freebie.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">Globally, all illusions of an ‘end of history’ are shattered. Emergent powers threaten to uproot Washington's dominance, and it seems as though violence is the order of the day.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px; font-weight: bold;\">For all the uncertainty, the pomp, and hatred, many want nothing more than to blame just one woman.</p>",
            "image_url": "https://i.imgur.com/HXD3M7D.jpeg",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/BI7DnsZ.png",
            "recommended_reading": "<ul>\n<p><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></p>\n<p><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></p>\n<p><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></p>\n<p><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></p>\n<p><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></p>\n</ul>",
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
        "display_year": "Madam President"
    }
]

campaignTrail_temp.credits = "the Madam President Team"

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
            "question_count": 35,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 131,
        "fields": {
            "first_name": "Hillary",
            "last_name": "Clinton",
            "election": 20,
            "party": "The Democracy",
            "state": "New York",
            "priority": 1,
            "description": "<p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">Safe to say, your political career has hardly been stellar.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">Again and again you failed despite the fact that it <i>should</i> have been easy. Losing what should have been a coronation primary to a freshman Senator in 2008. It was only a matter of time until your inauguration though. A matter of time until he stepped down for you to take his place.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">You managed to rebound by becoming Secretary of State; just in time to get an ambassador killed in a country most Americans couldn’t point out on a map. Then, you nearly lost the primary to a self-proclaimed <i>socialist</i>. Finally, at the finish line, you had a red mark etched into your legacy, barely scraping by with 2,000 votes against a racist, sexist, tax dodging, reality show host.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">Seen by the left as a neoliberal shill and by the right as a marxist witch, the task of navigating a world, nation, and party that are each growing out of control seems herculean. But maybe, just this once, you can actually pull off a win without the odds being comically favorable to you.</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/LHGLkG9.png",
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
        "pk": 132,
        "fields": {
            "first_name": "Republicans",
            "last_name": "Party",
            "election": 20,
            "party": "The Republic",
            "state": "New York",
            "priority": 1,
            "description": "<p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">Hillary R. Clinton’s political career has hardly been stellar.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">First rising to prominence by riding her husband’s popularity into the White House, she took her newly found high profile and crashed it into the ground by losing what should have been a coronation primary to a freshman Senator in 2008. She managed to rebound by becoming State Secretary just in time to get an ambassador killed in a country most Americans couldn’t point out on a map, and went on to almost lose again, this time to a self-proclaimed socialist in the primary and an open tax-dodger and sexist known for doing reality TV in the general.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">Seen by the left as a neoliberal shill and by the right as a marxist witch, the task of navigating a world that is growing out of control, or even keeping her own party in line for the next four years seems, at best, herculean. But maybe, just this once, she can actually pull off a victory without the odds being comically favorable to her?</p>",
            "color_hex": "#c40000",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/LHGLkG9.png",
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
        "pk": 137,
        "fields": {
            "first_name": "Tim",
            "last_name": "Kaine",
            "election": 20,
            "party": "The Democracy",
            "state": "Virginia",
            "priority": 1,
            "description": "Windows.",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/SOnaMyB.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">Timothy M. Kaine is a man so remarkably unremarkable you’d hardly think he’s one bad day away from becoming leader of the free world.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">You picked Timothy M. Kaine as a so-called ‘Governing Partner’, not as an electrifying campaigner, and though you didn’t say it out loud, you wanted to keep those uncomfortable with a woman president in line. With nearly all discussion of him revolving around you, it’s cliche to say that Tim Kaine is not someone many people think of in their day-to-day life.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">It’s clear you will not be able to lose an inch of her support if you want to successfully defend your newly gained position, so perhaps the Vice President-elect will have to either learn to pull his weight on the trail, or take his leave.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
      "model": "campaign_trail.candidate",
      "pk": 138,
      "fields": {
          "first_name": "Republican",
          "last_name": "Committee",
          "election": 20,
          "party": "The Republic",
          "state": "Virginia",
          "priority": 1,
          "description": "Windows.",
          "color_hex": "#c40000",
          "secondary_color_hex": null,
          "is_active": 0,
          "image_url": "https://i.imgur.com/SOnaMyB.png",
          "electoral_victory_message": "This guy wins!",
          "electoral_loss_message": "This guy loses!",
          "no_electoral_majority_message": "We all win?",
          "description_as_running_mate": "<p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">Timothy M. Kaine is a man so remarkably unremarkable you’d hardly think he’s one bad day away from becoming leader of the free world.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">You picked Timothy M. Kaine as a so-called ‘Governing Partner’, not as an electrifying campaigner, and though you didn’t say it out loud, you wanted to keep those uncomfortable with a woman president in line. With nearly all discussion of him revolving around you, it’s cliche to say that Tim Kaine is not someone many people think of in their day-to-day life.</p><p style= \"font-size: 94%; font-family:helvetica; margin:7px;\">It’s clear you will not be able to lose an inch of her support if you want to successfully defend your newly gained position, so perhaps the Vice President-elect will have to either learn to pull his weight on the trail, or take his leave.</p>",
          "candidate_score": 1,
          "running_mate": true
      }
  }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 109261,
        "fields": {
            "candidate": 131,
            "running_mate": 137
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 109262,
        "fields": {
            "candidate": 132,
            "running_mate": 138
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            131,
            132
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            131,
            132
        ]
    }
]

jet_data = {
    "headerColor": "#020070",
    "windowColor": "#253641",
    "containerColor": "#f57fae",
    "innerWindowColor": "#61878f",
    "bannerImageUrl": "https://jetsimon.com/public/placeholderbanner.png",
    "backgroundImageUrl": "https://i.imgur.com/24KPjVk.jpeg",
    "endingTextColor": "#000000",
    "customQuote": "\"It's impossible to know what happens in the fog of war.\" - Hillary Clinton",
    "gameTitle": "HILLARY"
}

// Song list array
const songs = [
  {
      title: 'Deviltown',
      artist: 'Cavetown',
      audioSrc: 'https://files.catbox.moe/461m6a.mp3', // Replace with actual audio file URL
      albumArt: 'https://i.imgur.com/WecG0Pe.jpeg'   // Replace with actual album art URL
  },
  {
      title: 'Enemy',
      artist: 'Imagine Dragons',
      audioSrc: 'https://files.catbox.moe/h5hjty.mp3', // Replace with actual audio file URL
      albumArt: 'https://i.imgur.com/7PQCwTk.jpeg'   // Replace with actual album art URL
  },
  {
      title: 'Mrs Magic',
      artist: 'Strawberry Guy',
      audioSrc: 'https://files.catbox.moe/94gaaa.mp3',  // Replace with actual audio file URL
      albumArt: 'https://i.imgur.com/d0kDKlA.png'    // Replace with actual album art URL
  },
  {
      title: 'Everybody Wants to Rule the World',
      artist: 'PomplamooseMusic',
      audioSrc: 'https://files.catbox.moe/4bjz79.mp3',  // Replace with actual audio file URL
      albumArt: 'https://i.imgur.com/kVlGrvH.jpeg'    // Replace with actual album art URL
  },
  {
      title: 'Edge of Seventeen',
      artist: 'Stevie Nicks',
      audioSrc: 'https://files.catbox.moe/phrkys.mp3',  // Replace with actual audio file URL
      albumArt: 'https://i.imgur.com/2aBAwVC.jpeg'    // Replace with actual album art URL
  }
];


let currentSongIndex = 0;

// Select the existing '.footer' div
const footer = document.querySelector('.footer');


const basert = document.querySelector('.base');


// Clear existing content if necessary
//footer.innerHTML = '';

// Create a container for the music player inside the footer
const playerContainer = document.createElement('div');
playerContainer.style.width = '300px';
playerContainer.style.backgroundColor = '#c82e2e'; // Crimson background
playerContainer.style.borderRadius = '15px';
playerContainer.style.padding = '20px';
playerContainer.style.color = 'white';
playerContainer.style.fontFamily = 'Arial, sans-serif';
playerContainer.style.position = 'relative';
playerContainer.style.top = '-1120px'; 
playerContainer.style.left = '10px';
playerContainer.style.textAlign = 'center';
basert.appendChild(playerContainer);

// Create the album art
const albumArt = document.createElement('img');
albumArt.style.width = '100%';
albumArt.style.borderRadius = '15px';
playerContainer.appendChild(albumArt);

// Create the song title
const songTitle = document.createElement('h2');
songTitle.style.marginTop = '10px';
playerContainer.appendChild(songTitle);

// Create the artist name
const artistName = document.createElement('p');
artistName.style.fontSize = '14px';
artistName.style.marginTop = '-10px'; // Adjust spacing
artistName.style.opacity = '0.8'; // Slight transparency for artist name
playerContainer.appendChild(artistName);

// Create the audio element
const audio = document.createElement('audio');
audio.id = 'campaigntrailmusic'; // Ensure id matches
audio.loop = true;
audio.style.display = 'none'; // Hide the default audio element
playerContainer.appendChild(audio);

// Create the controls container
const controlsContainer = document.createElement('div');
controlsContainer.style.display = 'flex';
controlsContainer.style.justifyContent = 'space-around';
controlsContainer.style.marginTop = '20px';
playerContainer.appendChild(controlsContainer);

// Create previous button
const prevButton = document.createElement('button');
prevButton.innerHTML = '&#9664;&#9664;'; // Left arrow (previous)
prevButton.style.background = 'none';
prevButton.style.border = 'none';
prevButton.style.color = 'white';
prevButton.style.fontSize = '20px';
prevButton.style.cursor = 'pointer';
controlsContainer.appendChild(prevButton);

// Create play/pause button
const playButton = document.createElement('button');
playButton.innerHTML = '&#9658;'; // Play icon
playButton.style.background = 'none';
playButton.style.border = 'none';
playButton.style.color = 'white';
playButton.style.fontSize = '20px';
playButton.style.cursor = 'pointer';
controlsContainer.appendChild(playButton);

// Create next button
const nextButton = document.createElement('button');
nextButton.innerHTML = '&#9654;&#9654;'; // Right arrow (next)
nextButton.style.background = 'none';
nextButton.style.border = 'none';
nextButton.style.color = 'white';
nextButton.style.fontSize = '20px';
nextButton.style.cursor = 'pointer';
controlsContainer.appendChild(nextButton);

// Create the progress bar container
const progressBarContainer = document.createElement('div');
progressBarContainer.style.marginTop = '10px';
progressBarContainer.style.width = '100%';
progressBarContainer.style.height = '5px';
progressBarContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
progressBarContainer.style.borderRadius = '5px';
progressBarContainer.style.position = 'relative';
playerContainer.appendChild(progressBarContainer);

// Create the progress bar itself
const progressBar = document.createElement('div');
progressBar.style.width = '0%';
progressBar.style.height = '100%';
progressBar.style.backgroundColor = 'white';
progressBar.style.borderRadius = '5px';
progressBarContainer.appendChild(progressBar);

// Create the time display
const timeDisplay = document.createElement('p');
timeDisplay.style.fontSize = '12px';
timeDisplay.style.display = 'flex';
timeDisplay.style.justifyContent = 'space-between';
timeDisplay.style.marginTop = '5px';
playerContainer.appendChild(timeDisplay);

const currentTimeDisplay = document.createElement('span');
currentTimeDisplay.textContent = '0:00';
timeDisplay.appendChild(currentTimeDisplay);

const durationDisplay = document.createElement('span');
durationDisplay.textContent = '-0:00';
timeDisplay.appendChild(durationDisplay);

// Play/Pause functionality
let isPlaying = false;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playButton.innerHTML = '&#9658;'; // Play icon
  } else {
    audio.play();
    playButton.innerHTML = '&#10073;&#10073;'; // Pause icon
  }
  isPlaying = !isPlaying;
});

// Update the progress bar as the song plays
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progressPercent + '%';

  // Update current time display
  currentTimeDisplay.textContent = formatTime(audio.currentTime);

  // Update duration display
  const timeRemaining = audio.duration - audio.currentTime;
  durationDisplay.textContent = '-' + formatTime(timeRemaining);
});

// Format time in minutes:seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Load the current song
function loadSong(songIndex) {
  const song = songs[songIndex];
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  audio.src = song.audioSrc;
  albumArt.src = song.albumArt;

  // Reset play button and progress bar
  playButton.innerHTML = '&#9658;'; // Play icon
  progressBar.style.width = '0%';
  currentTimeDisplay.textContent = '0:00';
  durationDisplay.textContent = '-0:00';
  isPlaying = false;
}

// Load the first song initially
loadSong(currentSongIndex);

// Next song
nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to first song after the last
  loadSong(currentSongIndex);
  audio.play();
  playButton.innerHTML = '&#10073;&#10073;'; // Pause icon
  isPlaying = true;
});

// Previous song
prevButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to last song if on the first
  loadSong(currentSongIndex);
  audio.play();
  playButton.innerHTML = '&#10073;&#10073;'; // Pause icon
  isPlaying = true;
});


//autoplay
audio.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to first song after the last
  loadSong(currentSongIndex);
  audio.play(); // Automatically start playing the next song
  playButton.innerHTML = '&#10073;&#10073;'; // Update to pause icon
  isPlaying = true;
});









//#startcode

quotes = [
    `“If I want to knock a story off the front page, I just change my hairstyle.” - Hillary Clinton`,
    `“Probably my worst quality is that I get very passionate about what I think is right. ” - Hillary Clinton`,
    `“Life is too short to dwell on what might have been.” - Hillary Clinton`,
    `“In this world and the world of tomorrow, we must go forward together or not at all.” - Hillary Clinton`,
    `“Joan of Arc said a lot of interesting things before they burned her at the stake.” - Hillary Clinton`,
    `"It is impossible to know what happens in the fog of war." - Hillary Clinton`,
    `“Everything that happens in America happens in New York.” - Hillary Clinton`
    ]
selQuote = quotes[Math.round(Math.random()*(quotes.length - 1))]

corrr = `
  <h2 style="font-style: normal;">
    <img src="https://i.imgur.com/1GP31bs.png" alt="Madam President" style="margin-top: 5px;">
  </h2>
</div>`;












document.styleSheets[0].insertRule(".game_header h2 {font-family: 'SharpUnity'; background-color: '#2354b5'; line-height: normal; font-style: normal}", 0);

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#2354b5";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "rgb(23, 52, 94)";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#960000";

document.getElementById("header").src = "https://i.imgur.com/uONHG5h.jpeg";

document.body.background = "https://i.imgur.com/rlO9noF.jpeg";

document.styleSheets[0].insertRule(".base { background-repeat: no-repeat; }", 0);

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color: #17345e !important}</style>";

document.getElementById("inner_window_1").style = `background-color: #012257; color: #d8dde6; text-align: center;`

document.getElementById("inner_window_1").children[1].innerHTML = `<p>Welcome, Madam President.</p><p>Hillary Clinton, for all of her faults, has been elected President of the United States</p><p>Mrs. 45 will be tasked with dealing with various crises within and without this great country</p><p>Across America, every action she takes will affect the soul of the American people</p><p>The character of the Democratic and Republican party is an extention of the character of America</p><p>With secret endings, secret candidates, and various forms of acheivements and CYOA, Hillary has many paths to take the American story</p><p>It's time to see if America is truly stronger together</p>`;

document.getElementById('game_start').innerHTML = 'Take Office';

$("#inner_window_1 h3").text("Are you ready to bridge the path forward for America?");

document.styleSheets[0].insertRule("#campaign_sign { background-color: #0077c5; }", 0);

document.styleSheets[0].insertRule("#credits { color: #d8dde6; }", 0);

document.styleSheets[0].insertRule('#election_year_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#candidate_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#running_mate_form h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#game_options h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule('#difficulty_level h3 { color: #d8dde6; }', 0);

document.styleSheets[0].insertRule("#candidate_description_window { color: #C9C9C9; background-color: #012257; }", 0);

document.styleSheets[0].insertRule("#running_mate_description_window { color: #C9C9C9; background-color: #012257 }", 0);

document.styleSheets[0].insertRule("#election_description_window { background-color: #012257 }", 0);

document.styleSheets[0].insertRule("#opponent_selection_description_window { color: #C9C9C9; background-color: #012257 }", 0);

document.styleSheets[0].insertRule(".inner_inner_window { color: #C9C9C9;}", 0);

document.styleSheets[0].insertRule('#election_summary { color: #C9C9C9;}', 0);

document.styleSheets[0].insertRule('.inner_window_question h3 {margin: 6px 1em .5em;border: double;border-color: #C9C9C9;background-color: #0f2c59}', 0);

document.styleSheets[0].insertRule('.inner_window_question {margin: 6px 1em .5em;border: double;border-color: #C9C9C9;background-color: #012257; height: 300px}', 0);

document.querySelector('.campaign_trail_start_emphasis').style.backgroundColor = '#0f2c59';

document.styleSheets[0].insertRule("#progress_bar { color: #C9C9C9; background-color: #111d2b }", 0);

document.styleSheets[0].insertRule(`#overall_result { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#overall_result_container { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#overall_result h3 { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_info { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_info h3 { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_info p { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_info ul { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#pvswitcher { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#ev_est { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#resume_questions_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#margin_switcher { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#AdvisorButton { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#game_start { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#election_id_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#election_id { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#candidate_id { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#candidate_id_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#candidate_id_back { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#running_mate_id { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#running_mate_id_back { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#running_mate_id_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#game_type_id { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#difficulty_level_id { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#opponent_selection_id_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#opponent_selection_id_back { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#answer_select_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#view_electoral_map { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#visit_window { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#election_night_window { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#election_night_window h3 { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#map_footer i { color:#C9C9C9;)`, 0);

document.styleSheets[0].insertRule(`tr {color: white; background-color: #182144; border-color: blue; bgcolor: inherit)`, 0);

document.styleSheets[0].insertRule(`th {color: white; background-color: #182144; border-color: blue; bgcolor: inherit)`, 0);


document.styleSheets[0].insertRule(`#final_results_description {color: white; overflow-y:scroll; height: 300px;)`, 0);

document.styleSheets[0].insertRule(`p {  margin-bottom: 30px; }`, 0);


document.styleSheets[0].insertRule(`#confirm_visit_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#no_visit_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`.final_menu_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#ok_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#no_feedback_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#sort_tab { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_tab { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#ExportFileButton { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#feedback_window { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#feedback_window h3 { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#nextyButton { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#backyButton { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#visit_content h3 { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#final_result_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#overlay_result_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_result { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_result h3 { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#state_result p { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#themePicker { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#trackSel label { color: #C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#trackSel { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#selectSoundtrack { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#map_container { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#menu_container { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`.inner_window_sign_display { background-color: #111d2b;}`, 0);

document.styleSheets[0].insertRule(`#game_window { height: 650px;}`, 0);

document.styleSheets[0].insertRule(`#campaign_sign { background-position: center ; width: 270 ;margin-top: -20px; text-indent: -9999px; color: #0077c5; background-repeat: no-repeat; background-image: url("https://i.imgur.com/jF6O8Wj.png"); background-size: 190px; height: 110px; color: #C9C9C9; border-color: #1c244a; }`, 0);

document.styleSheets[0].insertRule(`.visit_text {font-weight: 700; font-size: 1.1em; text-indent: -9999999px;}`, 0);

document.styleSheets[0].insertRule(`#new_game_window h3 { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#new_game_window { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#new_game_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#cancel_button { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#achButton { color:#C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#goBackButton { color:#C9C9C9 ;background-color: #223b61;)`, 0);
document.querySelectorAll('h4').forEach(h4 => h4.style.textIndent = '-9999px');

// document.getElementById('feedback_content').textContent = "New text";


//#endcode

