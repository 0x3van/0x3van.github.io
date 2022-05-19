// evan.systems

const daddy = 500; 
const seggs = 1.5 * daddy; 

var interval;

var frames = ["ev", "evan.", ".sy", "syst", "ems", "ev", "evan.", ".sy", "syst", "ems"]; // fill this list with strings of the frames to be cycled

document.title = frames[0]; 
var currentFrame = 0;
var on = false;

function animate() {
	document.title = frames[currentFrame];
	currentFrame += 1;
	if (currentFrame == frames.length) {currentFrame = 0;}
}

$( window ).scroll(function() {
	if (!on) {
		animate();
		interval = setInterval(animate, daddy); 
		on = true;
	}
});
$(window).scroll(function() {
	if (on) {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        clearTimeout(interval)
        on = false;
    }, seggs));
}
});
