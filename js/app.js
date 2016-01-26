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
	
    
    	// Initialize the second player
	var jPlayer_2 = new jPlayerPlaylist({
            jPlayer: "#jPlayer_2",
            cssSelectorAncestor: "#jPlayerEmpty"
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
     var srcvalue = "";
     var i=0;
     var switchnumber=0;//used for calling either player1 or 2 as needed later on when the crossfade function is performed multiple times
	
    function crossfadeNext(){// *Only call this function in the last 10 seconds of the song*
		console.log("Crossfading...");
        
        
        
        i = i+1;//always going to play the next song
       
        srcvalue = playlist[i].mp3;//updating the source link to the second song
        
        var playernumber= switchnumber%2; // alternates between two players
        
        
        switch(playernumber){
                
            case 0:
        $(jPlayer_2).jPlayer("setMedia", {//Placing new song in the player
        mp3: srcvalue
    }
        
        $(jPlayer_2).jPlayer( "load" );//Going to Preload all the media set in jPlayer beforehand
        
        
        //need to create a PreLoad feature at the 10 second mark
        
        /* Preloading feature notes
        
        $(id).jPlayer( "load" ) : jQuery
Description
This method is used to preload the media before the play command is given. There is no point using load if you are going to jPlayer("play", [time]) immediately afterwards, just play it. Likewise, with jPlayer("pause", [time]), if a time greater than zero is given.

This method allows you to selectively preload the files you choose after changing the file using setMedia. If you want all files to preload by default, use the jPlayer constructor option {preload:"auto"}.

This command is affected by browser and some ignore the command, or require a gesture to initiate it the 1st time.

    Currenttime
    event.jPlayer.status.currentTime
    Number : The current time in seconds

*/
        
        
        //$( player_1_selector_here).jPlayer( "option", "cssSelectorAncestor", "#id of an empty div to detach it" );
        $(jPlayer_1).jPlayer("option", "cssSelectorAncestor", "#jPlayerEmpty");
		//$( player_2_selector_here).jPlayer( "option", "cssSelectorAncestor", "#id of the div with all the controls" );
        $(jPlayer_2).jPlayer("option", "cssSelectorAncestor", "#jPlayerContainer");
        
        while(event.jPlayer.status.currentTime - event.jPlayer.status.duration > 5){
           //do nothing while time left is greater than 5 seconds 
        };
        
        if (event.jPlayer.status.currentTime - event.jPlayer.status.duration <= 5){
            //set initial volume of player 2 to be zero
            $(jPlayer_2).jPlayer("volume",0) 
            
            //Play the new song in the other player
             $(jPlayer_2).play();
            
            var presentVolume= currentVolume;
            var previousVolume=0;
            
            setInterval(function(){//Fading into the next song
                $(jPlayer_1).jplayer("volume", (presentVolume - 0.02 );
                $(jPlayer_2).jPlayer("volume",(previousVolume + 0.02 );
                
                presentVolume= (presentVolume - 0.02 );
                previousVolume= (previousVolume + 0.02 );
                
                
            }, 100);//going to take a total of fifty steps in a span of 5 seconds
        };
                
            case 1:
                
                $(jPlayer_1).jPlayer("setMedia", {//Placing new song in the player
        mp3: srcvalue
    }
        
        $(jPlayer_1).jPlayer( "load" );//Going to Preload all the media set in jPlayer beforehand
        
        
        //need to create a PreLoad feature at the 10 second mark
        
        /* Preloading feature notes
        
        $(id).jPlayer( "load" ) : jQuery
Description
This method is used to preload the media before the play command is given. There is no point using load if you are going to jPlayer("play", [time]) immediately afterwards, just play it. Likewise, with jPlayer("pause", [time]), if a time greater than zero is given.

This method allows you to selectively preload the files you choose after changing the file using setMedia. If you want all files to preload by default, use the jPlayer constructor option {preload:"auto"}.

This command is affected by browser and some ignore the command, or require a gesture to initiate it the 1st time.

    Currenttime
    event.jPlayer.status.currentTime
    Number : The current time in seconds

*/
        
        
        //$( player_1_selector_here).jPlayer( "option", "cssSelectorAncestor", "#id of an empty div to detach it" );
        $(jPlayer_2).jPlayer("option", "cssSelectorAncestor", "#jPlayerEmpty");
		//$( player_2_selector_here).jPlayer( "option", "cssSelectorAncestor", "#id of the div with all the controls" );
        $(jPlayer_1).jPlayer("option", "cssSelectorAncestor", "#jPlayerContainer");
        
        while(event.jPlayer.status.currentTime - event.jPlayer.status.duration > 5){
           //do nothing while time left is greater than 5 seconds 
        };
        
        if (event.jPlayer.status.currentTime - event.jPlayer.status.duration <= 5){
            //set initial volume of player 2 to be zero
            $(jPlayer_1).jPlayer("volume",0) 
            
            //Play the new song in the other player
             $(jPlayer_1).play();
            
            var presentVolume= currentVolume;
            var previousVolume=0;
            
            setInterval(function(){//Fading into the next song
                $(jPlayer_2).jplayer("volume", (presentVolume - 0.02 );
                $(jPlayer_1).jPlayer("volume",(previousVolume + 0.02 );
                
                presentVolume= (presentVolume - 0.02 );
                previousVolume= (previousVolume + 0.02 );
                
                
            }, 100);//going to take a total of fifty steps in a span of 5 seconds
        };
                
                
        }
        
        
        
        
        
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