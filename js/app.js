// Enemies our player must avoid
var Enemy = function ()
{

	this.x = 0;
	let initialY = [ 430, 330, 230, 130, 30 ];
	this.y = initialY[ Math.floor( Math.random() * 4 ) + 0 ]; //randomly assign enemy on row
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.speed = Math.floor( Math.random() * 400 ) + 100;
	this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function ( dt, player )
{
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	//calculate enemy position
	this.x = Math.round( this.x + ( dt * this.speed ) );


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function ()
{
	ctx.drawImage( Resources.get( this.sprite ), this.x, this.y );
};

// player class
// This class requires a render() and
// a handleInput() method.

var Player = function ()
{

	this.x = 200;
	this.y = 430;
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/char-boy.png';
};

Player.prototype.handleInput = function ( key )
{

	//change position of player based on the key they pressed
	switch ( key )
	{
	case ( "up" ):
		if ( this.y == 30 )
		{

			window.alert( "Congratulations! You Win!" );
			this.y = 430;
			this.x = 200;
			break;
		}
		this.y -= 100;
		break;
	case ( "right" ):
		if ( this.x == 400 )
		{
			//if player try to go off screen
			break;
		}
		this.x += 100
		break;
	case ( "left" ):
		if ( this.x == 0 )
		{
			//if player try to go off screen
			break;
		}
		this.x -= 100
		break;
	case ( "down" ):
		if ( this.y == 430 )
		{
			//if player try to go off screen
			break;
		}
		this.y += 100
		break;
	default:
		break;
	}

}

// Draw the player on the screen, required method for game
Player.prototype.render = function ()
{
	ctx.drawImage( Resources.get( this.sprite ), this.x, this.y );
};
// instantiate objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
//init first enemy
let e = new Enemy();
allEnemies.push( e );
//every second and a half create new enemies 
window.setInterval( function ()
{
	for ( var i = 0; i < 2; i++ )
	{
		let e = new Enemy();
		allEnemies.push( e );
	}
}, 1500 );


let player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener( 'keyup', function ( e )
{
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput( allowedKeys[ e.keyCode ] );
} );