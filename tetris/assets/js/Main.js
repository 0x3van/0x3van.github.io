
const COLS = 10;
const ROWS = 20;
const DELAY = 750;
const CONTROL_DELAY = 70;
const CONTROL_REPEAT = 35;
const ANIMATION_TIME = 80;
const COYOTE_TIME = 25; 
const RIGHT = 'R';
const LEFT = 'L';
const DOWN = 'D';
const BOTTOM = 'B';
const SHAPES = [15, 78, 102, 108, 198, 226, 232];
const COLORS = ['#FFD836','#f58d41','#b565f3','#f54c95','#427EFF','#7ce634','#4ceae7'];

var autoSwitch = true;


class Main {

	
	static run() {
		Main.initVars();
		Board.init();
		Main.initSize();
		Main.initAccordion();
		Main.initSettings();
		Main.initAlert();
		Main.initControls();
	}


	static initVars() {
		Main.window = $(window);
		Main.pressing = null;
		Main.repeating = null;
		Main.interval = 0;
		Main.timeout = 0;
		Main.blocked = false;
		Main.startButton = $('#container .start');
		Main.pauseButton = $('#container .pause');
		Main.messageBox = $('#container .modal');
		Main.alertBox = $('#container .alert');
		Main.accordionButtons = $('#container .tab-button');
		Main.accordionContents = $('#container .tab-content');
	}


	static initSize() {
		Main.resize();
		Main.window.resize(Main.resize);
	}

	static initAccordion() {
		Main.accordionButtons.click(function(e) {
			e.preventDefault();
			if (this.classList.contains('disabled')) {
				return;
			}
			const target = $('#' + this.dataset.target);
			if (target.is(':visible')) {
				target.slideUp();
				$(this).removeClass('active');
			} else {
				Main.accordionButtons.filter('.active').removeClass('active');
				Main.accordionContents.each((index, element) => {
					element = $(element);
					if (element.is(':visible')) {
						element.slideUp();
					} else if (target.is(element)) {
						element.slideDown();
					}
				});
				$(this).addClass('active');
			}
		});
	}

	static initSettings() {
		var message = 'You will can change settings once your current game has been finished';
		$('#container .tab-content .auto-switch a').click(function(e) {
			e.preventDefault();
			if (Board.playing) {
				Main.alert(message);
			} else {
				autoSwitch = !autoSwitch;
				$(this).toggleClass('selected');
			}
		});
		SHAPES.forEach((shape, index) => {
			let element = $('<div/>').addClass('tetrimino').data('index',index);
			let value = shape.toString(2).padStart(8, '0');
			for (let i = 0; i < 8; i++) {
				let block = $('<a href="#"/>').data('position', i);
				if (value[i] === '1') block.addClass('selected');
				block.click(function(e) {
					e.preventDefault();
					let block = $(this);
					if (Board.playing) {
						Main.alert(message);
					} else if (!block.hasClass('selected') || block.parent().find('.selected').length > 2) {
						let index = block.parent().data('index');
						let position = block.data('position');
						SHAPES[index] += (block.hasClass('selected')?-1:1)*Math.pow(2, 7-position);
						block.toggleClass('selected');
					}
				});
				element.append(block);
			}
			$('#container #settings-content').append(element);
		});
	}

	static initAlert() {
		Main.alertBox.find('.close, .cancel, .ok').click((e) => {
			e.preventDefault();
			Main.alertBox.fadeOut(50);
			Main.blocked = false;
		});
		Main.alertBox.find('.ok').click(() => Main.confirmed());
	}

	static initControls() {
		var message = 'bro this games gonna end are you really that salty lmao';
		Main.startButton.click((e) => {
			e.preventDefault();
			if (!Board.playing) Board.start();
			else Main.alert(message, Board.finish);
		});
		Main.pauseButton.click((e) => {
			e.preventDefault();
			Board.pause();
		});
		Main.window.keydown((e) => {
			if (Main.blocked) return;
			if (!Board.playing) {
				if (e.key === 's') Main.action(e.key, Board.start);
				return;
			}
			switch (e.key) {
				case 'c': if (!autoSwitch) Main.action(e.key, Board.switch); break;
				case 'ArrowLeft': Main.action(e.key, Board.move, LEFT, true); break;
				case 'ArrowRight': Main.action(e.key, Board.move, RIGHT, true); break;
				case 'ArrowDown': Main.action(e.key, Board.move, DOWN, true); break;
				case ' ': Main.action(e.key, Board.move, BOTTOM); break;
				case 'ArrowUp': Main.action(e.key, Board.rotate); break;
				case 'p': case 'Escape': Main.action(e.key, Board.pause); break;
				case 's': Main.action(e.key, Main.alert.bind(undefined, message, Board.start)); break;
				default: return;
			}
			e.preventDefault();
		});
		Main.window.keyup((e) => {
			if (Main.repeating === e.key) {
				Main.clear();
				Board.undo();
			}
			if (Main.pressing === e.key)
				Main.pressing = null;
		});
	}

	static resize() {
		let windowHeight = Main.window.innerHeight();
		let windowWidth = Main.window.innerWidth();
		let gameHeight = ROWS*4+4;
		let gameWidth = Math.max(COLS*2+30, COLS*4+6)*2;
		for (var base = 12; base >= 4; base-=1)
			if (gameHeight*base < windowHeight && gameWidth*base < windowWidth)
				break;
		$('html').css('font-size', base+'px');
	}

	static accordion(enable = true) {
		if (enable) {
			Main.accordionButtons.removeClass('disabled');
		} else {
			Main.accordionButtons.addClass('disabled').removeClass('active');
			Main.accordionContents.slideUp();
		}
	}

	static action(key, callback, param, repeat = false) {
		if (repeat) {
			if (Main.repeating !== key) {
				Main.repeating = key;
				callback.bind(Board)(param);
				clearInterval(Main.interval);
				clearTimeout(Main.timeout);
				Main.timeout = setTimeout(() =>
					Main.interval = setInterval(callback.bind(undefined, param), CONTROL_REPEAT),
				CONTROL_DELAY);
			}
		} else if (Main.pressing !== key){
			Main.pressing = key;
			callback(param);
		}
	}

	static clear() {
		Main.pressing = null;
		Main.repeating = null;
		clearInterval(Main.interval);
		clearTimeout(Main.timeout);
	}

	static alert(message, callback = false) {
		Main.blocked = true;
		if (Board.playing && !Board.paused) Board.pause();
		Main.alertBox.fadeIn(50).find('.text').text(message);
		if (!callback) {
			Main.alertBox.removeClass('confirmable');
		} else {
			Main.confirmed = callback;
			Main.alertBox.addClass('confirmable');
		}
	}

	static message(text = '', timeout = 0) {
		Main.messageBox.finish();
		if (timeout)
			Main.messageBox.delay(timeout).queue(() => {
				Main.message();
				Main.messageBox.dequeue();
			});
		Main.messageBox.find('.letter').stop(true).remove();
		if (text.length > 0) {
			let letter;
			for (let i = text.length-1; i >= 0; i--) {
				letter = $('<span/>').text(text[i]).addClass('letter').css({
					opacity: 0,
					marginTop: '-1.5rem'
				});
				Main.messageBox.prepend(letter);
			}
			if (letter) Main.showLetter(letter);
		}
	}

	static showLetter(letter) {
		letter.delay(20).queue(() => {
			letter.animate({ opacity: 1, marginTop: 0 }, 80).dequeue();
			Main.showLetter(letter.next());
		});
	}
	
}

$(document).ready(Main.run);
