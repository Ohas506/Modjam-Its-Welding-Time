e = campaignTrail_temp

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "Madam President",
            "summary": "<p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">America has entered the 21st century down to the wire. It chose you over Trump, proving the old political establishment is not quite dead. Sadly, that is not the end of it. A radicalized GOP waits for the chance to take a cut of your conquests. Just one state away from winning last time, many in the field can smell blood. After all, if you almost lost to that unelectable joke, evicting you should be a freebie.</p><p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">Globally, all illusions of an ‘end of history’ are shattered. Emergent powers threaten to uproot Washington's dominance, and it seems as though terror is the order of the day.</p><p style= \"font-size: 97%; font-family:helvetica; margin:7px; font-weight: bold;\">For all the politics, the anger, and the uncertainty, many want nothing more than to blame just one woman.</p>",
            "image_url": "https://i.imgur.com/kiyIUTN.jpeg",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/BI7DnsZ.png",
            "recommended_reading": ``,
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



e=campaignTrail_temp

var changeGameDisp = (hide) => {
  disp = "";
  if (hide) {
    disp = "none";
  }
  document.getElementsByClassName("inner_window_w_desc")[0].style.display = disp
};
e.creditsPage = () => {
  credits_html = `
    <h3>Producer</h3>
    <p style='font-size: 20px;'>u/Divisive_Devices</p>
    <h3>Public Relations</h3>
    <h3>Game Designers</h3>
    <h3>Audio/Visual Director</h3>
    <h3>Chief Editor</h3>
    <a href='https://www.patreon.com/StephRees?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink' style='font-size: 20px;'target='_blank'>u/Stell7</a>
    <h3>Editor</h3>
    <h3>Programmer</h3>
    <a href='https://www.patreon.com/StephRees?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink' style='font-size: 20px;'target='_blank'>u/Stell7</a>
    <h3>Programming Help</h3>
    <p style='font-size: 20px;'>_ohas</p>
    <h3>Writers</h3>
    <p style='font-size: 20px;'>Iceber</p>
    <p style='font-size: 20px;'>pizzagamer888</p>
    <p style='font-size: 20px;'>tannenberg</p>
    <p style='font-size: 20px;'>thund3r_struck</p>
    <p style='font-size: 20px;'>tungstenite_07</p>
    <h3>Playtesting/Misc. Help</h3>
    </div>
  `
  changeGameDisp(true);
  var CredDisp = document.createElement("creditmakingmenu");
  CredDisp.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  document
    .getElementsByClassName("inner_window_w_desc")[0]
    .children[1].appendChild(CredDisp);
    changeGameDisp(true);
    var menuHeader = document.createElement("div");
    menuHeader.classList.add("inner_window_front");
    menuHeader.innerHTML = `<h1><font color='#C9C9C9'>Credits</font></h1>`;
    menuHeader.id = "creditsheader";
    menuHeader.style = "height: 50px;background-color:rgb(1, 34, 87);";
    var newMenu = document.createElement("div");
    newMenu.classList.add("inner_window_front");
    newMenu.id = "creditsmenu";
    newMenu.style = `height:260px;background-color:rgb(1, 34, 87);color:white;overflow-y: scroll;`;

    newMenu.innerHTML = credits_html;
    let z = document.getElementById("game_window");
    var backButton = document.createElement("button");
    backButton.style =
      "position: relative; bottom: -13px; left: -380px; width: 60px; height: 20px;font-size:100%;";
    backButton.id = "backcredits";
    backButton.innerHTML = `<b>Return</b>`;
    backButton.onclick = function () {
      document.getElementById("creditsheader").remove();
      document.getElementById("creditsmenu").remove();
      document.getElementById("backcredits").remove();
      changeGameDisp(false);
    };
    z.appendChild(menuHeader);
    z.appendChild(newMenu);
    z.appendChild(backButton);

}

campaignTrail_temp.credits = `
    <button onclick='e.creditsPage()' style='background-color: #223b61;' id='closey' aria-label='Show credits'><span style='color:#ff0000;'>T</span><span style='color:#ff4000;'>e</span><span style='color:#ffc400;'>a</span><span style='color:#00ff0d;'>m </span><span style='color:#00c3ff;'>F</span><span style='color:#0011ff;'>r</span><span style='color:#7700ff;'>i</span><span style='color:#ff00fb;'>e</span><span style='color:#ff0066;'>n</span><span style='color:#ff0000;'>d</span><span style='color:#ff4000;'>s</span><span style='color:#ffc400;'>h</span><span style='color:#00ff0d;'>i</span><span style='color:#00c3ff;'>p</span></button>
`;






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
            "party": "The Democracy", // RETURN TO 1856!!! THE DEMOCRACY IS A COOL NAME
            "state": "New York",
            "priority": 1,
            "description": "<p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">An entrepreneur and former Governor of New Mexico Johnson is perhaps the last man anybody thought would get the nomination. His time as Governor was marked by tax cuts and school choice programs, along with his fragrant use of the veto pen. In 1999 he set of a political firestorm after endorsing legalization of cannabis, leading to condemnation by National Drug Czar Bary McCaffery, and by his own states Republican party.<br><br>Now he's secured the Republican nomination. After a crucial endorsement by Ron Paul, Johnson has wildly outperformed expectations to cruise to victory, no doubt due to his young and dedicated supporters, known for their embrace of the Internet. With Gary taking liberal positions on abortion, weed, and immigration, the bread and butter Evangelical GOP base is up in arms, with a splinter campaign almost certain. If Garies to win he's going to have to find some way to regain these disillusioned voters, or somehow peel them off from Obama.</p>",
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
            "description": "<p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">Hillary R. Clinton’s political career has hardly been stellar.</p><p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">First rising to prominence by riding her husband’s popularity into the White House, she took her newly found high profile and crashed it into the ground by losing what should have been a coronation primary to a freshman Senator in 2008. She managed to rebound by becoming State Secretary just in time to get an ambassador killed in a country most Americans couldn’t point out on a map, and went on to almost lose again, this time to a self-proclaimed socialist in the primary and an open tax-dodger and sexist known for doing reality TV in the general.</p><p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">Seen by the left as a neoliberal shill and by the right as a marxist witch, the task of navigating a world that is growing out of control, or even keeping her own party in line for the next four years seems, at best, herculean. But maybe, just this once, she can actually pull off a victory without the odds being comically favorable to her?</p>",
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
            "description": "",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/SOnaMyB.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">Timothy M. Kaine is a man so remarkably unremarkable you’d hardly think he’s one bad day away from becoming leader of the free world.</p><p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">You picked Timothy M. Kaine as a so-called ‘Governing Partner’, not as an electrifying campaigner, and though you didn’t say it out loud, you wanted to keep those uncomfortable with a woman president in line. With nearly all discussion of him revolving around you, it’s cliche to say that Tim Kaine is not someone many people think of in their day-to-day life.</p><p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">It’s clear you will not be able to lose an inch of her support if you want to successfully defend your newly gained position, so perhaps the Vice President-elect will have to either learn to pull his weight on the trail, or take his leave.</p>",
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
          "party": "The Republic", // the republic and the democracy are cool, and i want them back, PLEASE!!!! why dont the democrats and republicans do this anymore, it was cool af
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
          "description_as_running_mate": "<p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">Timothy M. Kaine is a man so remarkably unremarkable you’d hardly think he’s one bad day away from becoming leader of the free world.</p><p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">You picked Timothy M. Kaine as a so-called ‘Governing Partner’, not as an electrifying campaigner, and though you didn’t say it out loud, you wanted to keep those uncomfortable with a woman president in line. With nearly all discussion of him revolving around you, it’s cliche to say that Tim Kaine is not someone many people think of in their day-to-day life.</p><p style= \"font-size: 97%; font-family:helvetica; margin:7px;\">It’s clear you will not be able to lose an inch of her support if you want to successfully defend your newly gained position, so perhaps the Vice President-elect will have to either learn to pull his weight on the trail, or take his leave.</p>",
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
    "bannerImageUrl": "https://i.imgur.com/QO906X9.jpeg",
    "backgroundImageUrl": "https://i.imgur.com/24KPjVk.jpeg",
    "endingTextColor": "#000000",
    "customQuote": "\"It's impossible to know what happens in the fog of war.\" - Hillary Clinton",
    "gameTitle": "HILLARY"
}
$("#music_player").children().slice(0, 2).hide();
$("#modLoadReveal, #modloaddiv").hide();
function hiderr() {
    $(".game_header").hide(); // This line hides the game header

    // Request the next frame
    requestAnimationFrame(hiderr);
}

// Start the constant hiding process
requestAnimationFrame(hiderr);

function updateGameHeaderContentAndStyling() {
    // Intentionally left blank to disable the function
}
updateGameHeaderContentAndStyling();
// Function to create and prepend the new header
function reallyUpdate() {
    // Remove the existing header if it exists
    $("#game_header22").remove();

    const newHeader = $("<div>", {
        id: "game_header22",
        style: "background-color: #2354b5;",
        html: `<img src="https://i.imgur.com/S0pLcyj.png" alt="MADAM PRESIDENT" style="width: 960px;background-color: #2354b5; line-height: normal;">`
    });

    $("#game_window").prepend(newHeader); // Add the new header at the top of the game_window
}

// Set up the event listener for button clicks
$(document).on("click", "button", function() {
    reallyUpdate(); // Call the update function each time a button is clicked
});









const songs = [
    {
        title: 'Deviltown',
        artist: 'Cavetown',
        audioSrc: 'https://files.catbox.moe/461m6a.mp3', // Banger, more bernie bro depressed vibe? demoted when mod priority chnaged
        albumArt: 'https://i.imgur.com/WecG0Pe.jpeg'   // cool forest
    },
    {
        title: 'Amour plastique',
        artist: 'Videoclub',
        audioSrc: 'https://files.catbox.moe/w87vxn.mp3',  // This is such a bop, it earns its place here by right of god and the french empire
        albumArt: 'https://i.imgur.com/mr89PaW.jpeg'    // videoclub? why would they name themselves that? like, what does thaat mean? they LITERALLY make music, and call it VIDEOclub, do they also make video? i dont know, and its more interesting that way
    },
    {
        title: 'Mrs Magic',
        artist: 'Strawberry Guy',
        audioSrc: 'https://files.catbox.moe/94gaaa.mp3',  // Tannenberg INSISTED on this one, and its decent
        albumArt: 'https://i.imgur.com/d0kDKlA.png'    // THAT GIRL IS LITERALLY ME
    },
    {
        title: 'Everybody Wants to Rule the World',
        artist: 'PomplamooseMusic',
        audioSrc: 'https://files.catbox.moe/4bjz79.mp3',  // VERY common song, we found this cover so it still sounds different. Pomplamoose is cool
        albumArt: 'https://i.imgur.com/kVlGrvH.jpeg'    // She is literally me (again)
    },
    {
        title: 'Edge of Seventeen',
        artist: 'Stevie Nicks',
        audioSrc: 'https://files.catbox.moe/phrkys.mp3',  // The only reason this song is in here is the dove line, it sounds so cool
        albumArt: 'https://i.imgur.com/2aBAwVC.jpeg'    // it took way too long to find this (five minutes) with stevie nicks on it
    },
    {
        title: 'Enemy',
        artist: 'Imagine Dragons',
        audioSrc: 'https://files.catbox.moe/h5hjty.mp3', //normie song, absolute banger
        albumArt: 'https://i.imgur.com/7PQCwTk.jpeg'   // OMG IS THAT ARCANE!!!!!!
    }//,
    //{
    //    title: 'Money Game, Pt. 2',
    //    artist: 'Ren',
    //    audioSrc: 'https://files.catbox.moe/2e1ckh.mp3',  // The only reason this song is in here is the dove line, it sounds so cool
    //    albumArt: 'https://i.imgur.com/r8lQGbz.jpeg'    // it took way too long to find this (five minutes) with stevie nicks on it
    //}
  ];
  //document.cookie = "myCookie=value; SameSite=None; Secure"; // the banner for the mod is totally fucked btw
  
  let currentSongIndex = 0;
  
  // Select the existing '.footer' div
  const basert = document.querySelector('.base');
  
  
  
  // Clear existing content if necessary
  //footer.innerHTML = '';
  
  // Create a container for the music player inside the footer
  const playerContainer = document.createElement('div');
  playerContainer.style.width = '150px';
  playerContainer.style.backgroundColor = '#c82e2e'; // Crimson background
  playerContainer.style.borderRadius = '15px';
  playerContainer.style.padding = '20px';
  playerContainer.style.color = 'white';
  playerContainer.style.fontFamily = 'Arial, sans-serif';
  playerContainer.style.position = 'relative';
  playerContainer.style.top = '300px'; 
  playerContainer.style.left = '0px';
  playerContainer.style.textAlign = 'center';
  playerContainer.style.borderStyle = 'groove';
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
  const audio3 = document.createElement('audio');
  audio3.id = 'campaigntrailmusic'; // Ensure id matches
  audio3.loop = false;
  audio3.style.display = 'none'; // Hide the default audio element
  playerContainer.appendChild(audio3);
  
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
      audio3.pause();
      playButton.innerHTML = '&#9658;'; // Play icon
    } else {
      audio3.play();
      playButton.innerHTML = '&#10073;&#10073;'; // Pause icon
    }
    isPlaying = !isPlaying;
  });
  
  // Update the progress bar as the song plays
  audio3.addEventListener('timeupdate', () => {
    const progressPercent = (audio3.currentTime / audio3.duration) * 100;
    progressBar.style.width = progressPercent + '%';
  
    // Update current time display
    currentTimeDisplay.textContent = formatTime(audio3.currentTime);
  
    // Update duration display
    const timeRemaining = audio3.duration - audio3.currentTime;
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
      
      // Set song title and artist
      songTitle.textContent = song.title;
      artistName.textContent = song.artist;
  
      // Set audio source and album art
      audio3.src = song.audioSrc;
      albumArt.src = song.albumArt;
  
      // Reset play button and progress bar
      playButton.innerHTML = '&#9658;'; // Set to play icon
      progressBar.style.width = '0%'; // Reset progress bar
      currentTimeDisplay.textContent = '0:00'; // Reset current time
      durationDisplay.textContent = '-0:00'; // Reset duration
      isPlaying = false; // Reset playing state
  
      // Play the song automatically
      audio3.play(); // Start playing the loaded song
      playButton.innerHTML = '&#10073;&#10073;'; // Update play button to pause icon (since music is playing)
      isPlaying = true; // Set playing state to true
  
      // Update duration display after loading the song
      durationDisplay.textContent = '-'; // Reset the display initially
      //audio3.load(); // Load the new audio source
  }
  
  // Check if the song has ended and load the next song
  audio3.addEventListener('ended', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length; // Move to the next song
      loadSong(currentSongIndex); // Load the next song
  });
  
  // Update duration display after loading the song
  audio3.addEventListener('loadedmetadata', () => {
      durationDisplay.textContent = '-' + formatTime(audio3.duration);
  });
  
  
  // Next song
  nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to first song after the last
    loadSong(currentSongIndex);
    audio3.play();
    playButton.innerHTML = '&#10073;&#10073;'; // Pause icon
    isPlaying = true;
  });
  
  // Previous song
  prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to last song if on the first
    loadSong(currentSongIndex);
    audio3.play();
    playButton.innerHTML = '&#10073;&#10073;'; // Pause icon
    isPlaying = true;
  });
  
  
  // Ensure the container has absolute or fixed positioning
  playerContainer.style.position = 'absolute';
  
  // Variables to track dragging state
  let isDragging = false;
  let offsetX, offsetY;
  
  // Mouse down event to start dragging
  playerContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    // Calculate the offset between mouse click position and player container's position
    offsetX = e.clientX - playerContainer.offsetLeft;
    offsetY = e.clientY - playerContainer.offsetTop;
    playerContainer.style.cursor = 'grabbing'; // Change cursor to grabbing while dragging
  });
  
  // Mouse move event to drag the container
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      // Update player container position based on mouse movement
      playerContainer.style.left = `${e.clientX - offsetX}px`;
      playerContainer.style.top = `${e.clientY - offsetY}px`;
    }
  });
  
// Mouse up event to stop dragging
document.addEventListener('mouseup', () => {
    isDragging = false;
    playerContainer.style.cursor = 'move'; // Revert cursor to move after dragging
  });
  
  // Add a small image to the corner of the player
  const cornerImage = document.createElement('img');
  cornerImage.style.position = 'absolute';
  cornerImage.style.bottom = '10px'; // Positioned at the bottom corner
  cornerImage.style.left = '10px';  // Positioned at the right corner
  cornerImage.style.width = '30px';  // Set width of the image
  cornerImage.style.height = '30px'; // Set height of the image
  cornerImage.style.cursor = 'pointer'; // Add pointer cursor for interaction
  cornerImage.src = 'https://i.imgur.com/If5RB3q.jpeg'; // Add your image source here
  playerContainer.appendChild(cornerImage);
//#startcode

  
  // Load the first song initially
  loadSong(currentSongIndex);
  let newRelationsData = false;

const headlines = [
    {
        article: 'clintonTPPpassed',
        headline: "The devastating economics of president Clinton's TPP",
        contributors: "",
        date: "",
        imageUrl: "https://via.placeholder.com/600x300", // Placeholder image
        content: ""
    },
    {
        article: 'clintonSchultzAppointed',
        headline: "",
        contributors: "",
        date: "",
        imageUrl: "https://via.placeholder.com/600x300", // Placeholder image
        content: ""
    },
    {
        article: 'syrianStrikesMinorIntervention',
        headline: "Bolton Lashes out at Clinton admin",
        contributors: "By Paul Kiernan",
        date: "Updated 7:20 PM EDT, Wed October 18, 2024",
        imageUrl: "https://i.imgur.com/dnktA5Q.png", // Placeholder image
        content: "Private fixed investment in manufacturing structures reached an annual pace of $236 billion in the third quarter, more than double the rate at the height of Trump’s presidency after accounting for inflation. The last period in which factory investment grew this fast was at the height of the space race in the 1960s.Some of that boom appears to be linked to the Chips and Science Act, funneling $53 billion in subsidies and tax credits toward semiconductor manufacturing facilities, and the Inflation Reduction Act, authorizing hundreds of billion dollars in tax credits and loans toward low-carbon technologies. President Biden signed both into law in 2022. "
    }
];

// Function to add "National News" button
function addNewsButton() {
    if (document.getElementById('administration_button')) {
        return;
    }

    const refButton = document.getElementById('view_electoral_map');
    if (!refButton) {
        return;
    }

    const newButton = document.createElement('button');
    newButton.id = 'administration_button';
    newButton.innerHTML = 'National News';
    newButton.addEventListener('click', openRelationsView);
    refButton.insertAdjacentElement('afterend', newButton);
}

// Function to open the Administration Relations View
function openRelationsView() {
    newRelationsData = false; // Reset new data indicator
    document.getElementById('administration_button').innerHTML = 'National News';
    let questions = document.querySelector(".inner_window_question");
    questions.style.display = 'none';

    let relationsDiv = document.createElement('div');
    relationsDiv.id = 'relations_view';
    relationsDiv.style.height = '100%';
    setupRelationsArea(relationsDiv, questions);

    questions.parentNode.insertBefore(relationsDiv, questions.nextSibling);
}

// Update the setupRelationsArea function
function setupRelationsArea(parentDiv, toggleDiv) {
    let headerDiv = createHeader(parentDiv, toggleDiv);
    parentDiv.appendChild(headerDiv);

    let containerDiv = document.createElement('div');
    containerDiv.style.display = 'flex';
    containerDiv.style.gap = '20px';
    containerDiv.style.padding = '10px';
    parentDiv.appendChild(containerDiv);

    // Populate the container with articles based on the headlines array
    headlines.forEach((headline, index) => {
        let articleColumn = document.createElement('div');
        articleColumn.style.flex = '1';
        articleColumn.style.border = '2px solid #C9C9C9';
        articleColumn.style.padding = '15px';
        articleColumn.style.boxSizing = 'border-box';
        articleColumn.style.backgroundColor = '#EAEAEA'; // Set background color
        articleColumn.style.overflow = 'hidden';
        articleColumn.style.borderRadius = '8px'; // Rounded corners
        articleColumn.style.boxShadow = '0px 0px 5px 1px rgba(0, 0, 0, 0.1)'; // Soft shadow for outline
        articleColumn.style.textAlign = 'left'; // Left-align all text within the column

        // Article headline
        let headlineElement = document.createElement('h2');
        headlineElement.textContent = headline.headline;
        headlineElement.style.fontWeight = 'bold';
        headlineElement.style.margin = '0 0 8px 0';
        articleColumn.appendChild(headlineElement);

        // Article image
        let imageElement = document.createElement('img');
        imageElement.src = headline.imageUrl;
        imageElement.alt = "Article image";
        imageElement.style.width = '100%';
        imageElement.style.marginBottom = '10px';
        articleColumn.appendChild(imageElement);

        // Contributors
        let contributorsElement = document.createElement('p');
        contributorsElement.textContent = headline.contributors;
        contributorsElement.style.color = '#555';
        contributorsElement.style.fontSize = '0.9em';
        contributorsElement.style.margin = '0';
        articleColumn.appendChild(contributorsElement);

        // Date
        let dateElement = document.createElement('p');
        dateElement.textContent = headline.date;
        dateElement.style.color = '#555';
        dateElement.style.fontSize = '0.9em';
        dateElement.style.margin = '5px 0 10px 0';
        articleColumn.appendChild(dateElement);

        // Horizontal line
        let line = document.createElement('hr');
        line.style.border = 'none';
        line.style.borderTop = '1px solid #C9C9C9';
        line.style.margin = '10px 0';
        articleColumn.appendChild(line);

        // Article content with scrollbar
        let contentElement = document.createElement('div');
        contentElement.textContent = headline.content;
        contentElement.style.maxHeight = '150px'; // Limit height of article content
        contentElement.style.overflowY = 'auto'; // Enable vertical scrollbar
        contentElement.style.fontSize = '0.95em';
        contentElement.style.color = 'black';
        articleColumn.appendChild(contentElement);

        containerDiv.appendChild(articleColumn);
    });
}

// Create a header with back button and title
function createHeader(parentDiv, toggleDiv) {
    let headerDiv = document.createElement('div');
    headerDiv.style.display = 'flex';
    headerDiv.style.color = '#C9C9C9';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';
    headerDiv.style.marginRight = '36px';
    headerDiv.appendChild(createBackButton(parentDiv, toggleDiv));
    headerDiv.appendChild(createHeaderText('National News'));
    return headerDiv;
}

// Create a back button to return to the previous view
function createBackButton(parentDiv, toggleDiv) {
    let backButton = document.createElement('button');
    backButton.innerText = 'Back';
    backButton.style.margin = '5px';
    backButton.style.backgroundColor = '#223b61';
    backButton.onclick = function () {
        parentDiv.remove();
        toggleDiv.style.display = '';
    };
    return backButton;
}

// Create header text for the Administration Relations view
function createHeaderText(text) {
    let headerText = document.createElement('h2');
    headerText.textContent = text;
    headerText.style.flexGrow = 1;
    headerText.style.textAlign = 'center';
    return headerText;
}

// Mutation observer setup
let observerRunning = false;
let element = document.getElementById('controlElement');
if (!element) {
    let singleObserver = new MutationObserver(handleMutations);
    singleObserver.observe(document.documentElement, { childList: true, subtree: true });
    let controlElement = document.createElement('div');
    controlElement.style.display = 'none';
    controlElement.id = 'controlElement';
    document.body.appendChild(controlElement);
}

// Handle DOM mutations to add the button in case the target is not present
function handleMutations(mutationsList, observer) {
    if (observerRunning) return;
    observerRunning = true;
    addNewsButton();
    observer.observe(document.documentElement, { childList: true, subtree: true });
    observerRunning = false;
}

// Function to refresh relations view
function refreshRelationsView() {
    let relationsDiv = document.getElementById('relations_view');
    if (relationsDiv) {
        relationsDiv.innerHTML = ''; // Clear the existing content
        setupRelationsArea(relationsDiv, document.querySelector(".inner_window_question"));
    }
}

document.querySelectorAll('h4').forEach(h4 => h4.style.textIndent = '-9999px');

document.styleSheets[0].insertRule("#game_header22 h2 {font-family: 'SharpUnity'; background-color: '#2354b5'; line-height: normal; font-style: normal}", 0);

//nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#2354b5";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "rgb(23, 52, 94)";

//document.getElementById("game_header22").style = 'background-color = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#960000";

$("#inner_window_1 h3").css("text-align", "center").text("Are you ready to bridge the path forward for America?");

document.getElementById("inner_window_1").style = "background-color: #012257; color: #d8dde6; text-align: center;"

document.getElementById("inner_window_1").children[1].innerHTML = `<p>Welcome, Madam President.</p><p>Hillary Clinton, for all of her faults, has been elected President of the United States</p><p>The 45th President of this country will be tested against crises within and without America</p><p>Every action she takes will affect the arc of the American people</p><p>The character of the Democratic and Republican party is an extention of the character of America</p><p>With secret endings, secret candidates, and various forms of achievements and CYOA, Hillary has many paths to take the American story</p><p>It's time to see if America is stronger together</p>`;

document.getElementById('game_start').innerHTML = 'Take Office';

document.getElementById("header").src = "https://i.imgur.com/QO906X9.jpeg";

document.querySelector('.campaign_trail_start_emphasis').style.backgroundColor = '#0f2c59';

document.body.background = "https://i.imgur.com/rlO9noF.jpeg";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color: #17345e !important}</style>";

document.styleSheets[0].insertRule(".base { background-repeat: no-repeat; }", 0);

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

document.styleSheets[0].insertRule("#progress_bar { color: #C9C9C9; background-color: #111d2b }", 0);

document.styleSheets[0].insertRule(`#map_footer i { color:#C9C9C9;)`, 0);

document.styleSheets[0].insertRule(`tr {color:#C9C9C9; background-color: #182144; border-color: blue; bgcolor: inherit)`, 0);

document.styleSheets[0].insertRule(`th {color:#C9C9C9; background-color: #182144; border-color: blue; bgcolor: inherit)`, 0);

document.styleSheets[0].insertRule(`#final_results_description {color:#C9C9C9; overflow-y:scroll; height: 300px;)`, 0);

document.styleSheets[0].insertRule(`p {font-size: 97%; font-family:helvetica; margin:7px; margin-bottom: 30px; color:#C9C9C9;background-color: transparent !important;}`, 0);

document.styleSheets[0].insertRule(`#trackSel label { color: #C9C9C9 ;background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#trackSel { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#map_container { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`#menu_container { background-color: #223b61;)`, 0);

document.styleSheets[0].insertRule(`.inner_window_sign_display { background-color: #111d2b;}`, 0);

document.styleSheets[0].insertRule(`#game_window { height: 650px;}`, 0);

document.styleSheets[0].insertRule(`#campaign_sign { background-position: center ; width: 270 ;margin-top: -20px; text-indent: -9999px; color: #0077c5; background-repeat: no-repeat; background-image: url("https://i.imgur.com/jF6O8Wj.png"); background-size: 190px; height: 110px; color: #C9C9C9; border-color: #1c244a; }`, 0);

document.styleSheets[0].insertRule(`.visit_text {font-weight: 700; font-size: 1.1em; text-indent: -9999999px;}`, 0);

  const C922ColorScheme = [
    ".base { background-repeat: no-repeat; }",
    
    "#relations_view div:nth-of-type(1) button, #confirm_visit_button, #no_visit_button, #final_results_description, #ok_button, #no_feedback_button, #sort_tab, #state_tab, #ExportFileButton, #feedback_window, #feedback_window h3, #nextyButton, #backyButton, #visit_content h3, #final_result_button, #overlay_result_button, #state_result, #state_result h3, #state_result p, #themePicker, #trackSel label, #trackSel, #selectSoundtrack, #map_container, #menu_container, #new_game_window h3, #new_game_window, #new_game_button, #cancel_button, #achButton, #goBackButton, #administration_button, #overall_result, #overall_result_container, #overall_result h3, #state_info, #state_info h3, #state_info p, #state_info ul, #pvswitcher, #ev_est, #resume_questions_button, #margin_switcher, #AdvisorButton, #game_start, #election_id_button, #election_id, #candidate_id, #candidate_id_button, #candidate_id_back, #running_mate_id, #running_mate_id_back, #running_mate_id_button, #game_type_id, #difficulty_level_id, #opponent_selection_id_button, #opponent_selection_id_back, #answer_select_button, #view_electoral_map, #visit_window, #election_night_window, #election_night_window h3, .final_menu_button {color: #C9C9C9;background-color: #223b61;}",

  ];
  
  // Insert each rule into the stylesheet
  C922ColorScheme.forEach((rule, index) => {
    document.styleSheets[0].insertRule(rule, index);
  });






// document.getElementById('feedback_content').textContent = "New text";

campaignTrail_temp.modBoxTheme = {
    "header_color": "#020073",
    "header_text_color": "#C9C9C9",
    "description_text_color": "#C9C9C9",
    "description_background_color": "#610b0b",
    "main_color": "#4e3a52",
    "secondary_color": "#02003a",
   "ui_text_color": "#C9C9C9"
  }

//document.styleSheets[0].insertRule(`.base {cursor: url(http://www.rw-designer.com/cursor-extern.php?id=32594);}` , 0);
// Create a <style> element for the custom cursor for specific elements
//const style = document.createElement('style');
//style.innerHTML = `
//  /* Change cursor for interactive elements on hover */
 // button:hover,
 // select:hover,
//  input[type="button"]:hover,
///  input[type="submit"]:hover,
//  a:hover,
//  .interactive-hover:hover {
//    cursor: url(https://cur.cursors-4u.net/cursors/cur-11/cur1021.ani), 
 ///          url(https://cur.cursors-4u.net/cursors/cur-11/cur1021.png), 
//           auto;
  //}

  /* Default cursor for the body */
 // body {
   // cursor: url(https://cur.cursors-4u.net/cursors/cur-11/cur1030.cur), 
 //          auto;
  //}
//`;

// Append the style element to the document head

// Create an <a> element for the cursor link and image
///const cursorLink = document.createElement('a');
//cursorLink.href = 'https://www.cursors-4u.com/cursor/2012/01/22/x-steel-link-select-2.html';
///cursorLink.target = '_blank';
//cursorLink.title = 'X-Steel - Link Select 2';

// Create an <img> element for the cursor image
//const cursorImage = document.createElement('img');
//cursorImage.src = 'https://cur.cursors-4u.net/cursor.png';
//cursorImage.alt = 'X-Steel - Link Select 2';
//cursorImage.style.position = 'absolute';
//cursorImage.style.top = '0px';
//cursorImage.style.right = '0px';
//cursorImage.style.border = '0px';

// Append the image to the anchor (<a>) element
///cursorLink.appendChild(cursorImage);
///document.body.appendChild(cursorLink);

//endcode