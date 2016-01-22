// Declare Variables we might need later

var currentVolume		    = 1;
var currentTime             = 0;
var currentDuration         = 0;
var currentSeekable			= 0;
var currentPercentAbsolute  = 0;

// Once the page is ready (finished loading), run some things
$(function(){
    
	// Initialize the main player
	var jPlayer_1 = new jPlayerPlaylist({
            jPlayer: "#jPlayer_1",
            cssSelectorAncestor: "#jPlayerContainer"
		},
		[],   // Leave this blank
		{
		timeupdate: function(event) {
			currentTime = parseInt(event.jPlayer.status.currentTime, 10);
			currentDuration = parseInt(event.jPlayer.status.duration, 10);
			currentSeekable = parseInt(event.jPlayer.status.seekPercent, 10);
			currentPercentAbsolute = parseInt(event.jPlayer.status.currentPercentAbsolute, 10);
		},
		progress: function(event) {
			console.log("Progress");
		},
		seeking: function(event) {
			console.log("Seeking...");
		},
		seeked: function(event) {
			console.log("Seeking Finished.");
		},
		stalled: function(event) {
			console.log("Stalled.");
		},
		waiting: function(event) {
			console.log("Waiting");
		},
		ready: function(event) {
			console.log("Player is Ready");
		},
		play: function(event) {
			console.log("Start Playing.");
		},
		playing: function(event) {
			console.log("Buffering Ended and track is playing...");
		},
		pause: function(event) {
			console.log("Pause/Stop Clicked");
		},
		ended: function(event) {
			console.log("End of Song or Playlist");
		},
		cssSelector: {
            videoPlay: ".jp-video-play",
            play: ".jp-play",
            pause: ".jp-pause",
            stop: ".jp-stop",
            seekBar: ".jp-seek-bar",
            playBar: ".jp-play-bar",
            mute: ".jp-mute",
            unmute: ".jp-unmute",
            volumeBar: ".jp-volume-bar",
            volumeBarValue: ".jp-volume-bar-value",
            volumeMax: ".jp-volume-max",
            playbackRateBar: ".jp-playback-rate-bar",
            playbackRateBarValue: ".jp-playback-rate-bar-value",
            currentTime: ".jp-current-time",
            duration: ".jp-duration",
            title: ".jp-title",
            fullScreen: ".jp-full-screen",
            restoreScreen: ".jp-restore-screen",
            repeat: ".jp-repeat",
            repeatOff: ".jp-repeat-off",
            gui: ".jp-gui",
            noSolution: ".jp-no-solution"
        },
        playlistOptions: {
			loopOnPrevious: true,
			addTime: 'fast',
			removeTime: 'fast',
			shuffleTime: 'fast'
		},
		preload: "none",
		swfPath: "./js",
		solution:"flash, html",
		volume: 1,
		supplied: "mp3,m4a,fla,flv",
		wmode: "window"
	});

	/* ===================================================================== */
	// CUSTOM JAVASCRIPT PLAYER FUNCTIONS
	/* ===================================================================== */
		
	// FadeIn Function	
	function volumeFadeIn(){
		console.log("Fading In...");
		var fadeVolume = 0;
		fadeTimer = setInterval(function(){
			if(fadeVolume < 1){
				fadeVolume = Math.round( (fadeVolume + 0.025)*1000 )/1000;
				console.log("FadeVolume: "+fadeVolume);
				$("#jPlayer_1").jPlayer("volume", fadeVolume);
			} else {
				clearInterval(fadeTimer);
			}
		}, 100);
	}
    
	// FadeOut Function
	function volumeFadeOut(){
		console.log("Fading Out...");
		var fadeVolume = currentVolume;
		fadeTimer = setInterval(function(){
			if(fadeVolume > 0){
				fadeVolume = Math.round( (fadeVolume - 0.025)*1000 )/1000;
				console.log("FadeVolume: "+fadeVolume);
				$("#jPlayer_1").jPlayer("volume", fadeVolume);
			} else {
				clearInterval(fadeTimer);
			}
		}, 100);
	}
    
    // Crossfade between two instances of jPlayer
	function crossfadeNext(){
		console.log("Crossfading...");
		//$( player_1_selector_here).jPlayer( "option", "cssSelectorAncestor", "#id of an empty div to detach it" );
		//$( player_2_selector_here).jPlayer( "option", "cssSelectorAncestor", "#id of the div with all the controls" );
        
	}
	
    
    // Hardcoded Playlist
    var playlist = [
        {
           title:"Cro Magnon Man",
            artist:"The Stark Palace",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
        },
        {
            title:"Your Face",
            artist:"The Stark Palace",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
        },
        {
            title:"Lentement",
            artist:"Miaow",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
        }
    ];
    
    // Load the playlist object we just declared
    jPlayer_1.setPlaylist( playlist );
    
});