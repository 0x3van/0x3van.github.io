/* evan */
class Block {
	
// no need for some of this shit but please dont kill me 
	constructor(position, color = false) {
		this.position = { col: position.col, row: position.row };
		this.previous = {};
		this.undoable = false;
		this.element = $('<div/>');
		this.element.addClass('block');
		this.projection = !Boolean(color);
		this.element.css({ height: 100/ROWS+'%', width: 100/COLS+'%' });
		if (!this.projection) {
			this.square = $('<div/>');
			this.square.addClass('square');
			this.square.css('background', color);
			this.element.append(this.square);
			this.shadow = $('<div/>');
			this.shadow.addClass('shadow');
			this.element.append(this.shadow);
		} else {
			this.element.hide();
			this.element.addClass('projection');
		}
	}


	canRotate(origin) {
		let distance = {
			col: origin.col - this.position.col,
			row: origin.row - this.position.row
		};
		this.destination = {
			col: this.position.col + distance.col + distance.row,
			row: this.position.row - distance.col + distance.row
		};
		return !Board.isFilled(this.destination);
	}


	rotate() {
		this.translate(this.destination, ANIMATION_TIME/2);
	}


	canMove(direction) {
		this.destination = { col: this.position.col, row: this.position.row	};
		switch (direction) {
			case DOWN: this.destination.row++; break;
			case LEFT: this.destination.col--; break;
			case RIGHT: this.destination.col++; break;
		}
		return !Board.isFilled(this.destination);
	}


	move(direction = false) {
		if (direction && !this.canMove(direction))
			return false;
		this.translate(this.destination, ANIMATION_TIME);
		return true;
	}


	moveTo(destination, finish = true) {
		this.translate(destination, ANIMATION_TIME, finish, true);
	}


	translate(destination, animationTime, finish = true, clearPrevious = false) {
		if (finish)
			this.element.finish();
		else
			this.element.stop(true, false);
		this.setPrevious(clearPrevious);
		this.position = {
			col: destination.col,
			row: destination.row
		};
		let css = {
			left: (this.position.col*100/COLS)+'%',
			top: (this.position.row*100/ROWS)+'%'
		};
		if (this.projection) {
			this.element.delay(COYOTE_TIME).queue(() => {
				css.display = 'block';
				this.element.css(css);
				this.element.dequeue();
			});
		} else if (animationTime) {
			this.element.animate(css, animationTime);
		} else {
			this.element.css(css);
		}
	}


	setPrevious(clear = false) {
		if (this.projection)
			return;
		clearTimeout(this.previousTimeout);
		if (clear) {
			this.undoable = false;
		} else {
			this.undoable = true;
			this.previous.col = this.position.col;
			this.previous.row = this.position.row;
			this.previousTimeout = setTimeout(() => this.undoable = false, COYOTE_TIME);
		}
	}


	remove() {
		if (!this.projection) {
			this.element.css('z-index', 20).animate({
				height: 400/ROWS+'%',
				width: 400/COLS+'%',
				margin: '-'+100/ROWS+'% -'+100/COLS+'%',
				opacity: 0
			}, {
				duration: 400,
				always: () => this.element.remove()
			});
		} else {
			this.element.remove();
		}
	}
	
}