// Local Screen goes blank when sharing content 
// This code use Input HDMI 2 for content and Output HDMI 2 for Blank Monitor
// No additional configuration need to be done on the codec, can use all it's defaults
// Codec should not be in a video call to use this feature.


const xapi = require('xapi');

function log(entry){
  console.log(entry);
}

xapi.event.on('PresentationPreviewStarted', event => {
    log ('Share Button Enabled');
	if (event.Cause == "userRequested" && event.LocalSource == "2") {
	    log ('Set the Screen Blank');
		xapi.command('video matrix assign', {
		  mode: 'replace',
		  output: '2',
		  remotemain: '1'
		});
		log('Second Screen is Blank');
	} 
});
xapi.event.on('PresentationPreviewStopped', event => {
    log ('Share Button Disabled');
	if (event.Cause == "userRequested" && event.LocalSource == "2") {
	    log ('Set the Screen to Idle');
		xapi.command('video matrix reset');
		}
		log('Second Screen is Idle');
	}); 
	
// Code created by Jerry Gavin Nov 7 2019	
	
