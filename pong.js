 class Vec
{
	constructor(x = 0, y = 0)
	{
		this.x = x;
		this.y = y;
	} 
}

class Rect {
	constructor(w, h) 
	{
		this.pos = new Vec;
		this.size = new Vec(w, h);
	}
}

class Ball extends Rect {
	constructor()
	{	
		super(10, 10);
		this.vel = new Vec;
	}
}

const canvas = document.getElementById('pong');
//const context = canvas.getContext(
//const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const ball = new Ball;
ball.pos.x = 100;
ball.pos.y = 50;
console.log(ball); 

function update(dt) {
	ball.pos.x += ball.cel.x * dt;
	ball.pos.y += ball.vel.y * dt;

	context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = 'white';
context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}

 