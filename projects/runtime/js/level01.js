var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
         // your code goes here
       
        function createSawBlade(x,y){
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
            
             myObstacle.x = x;
        myObstacle.y = y;
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        game.addGameItem(myObstacle);
        
        myObstacle.addChild(obstacleImage);
        }
        createSawBlade(556,453);
        createSawBlade(821,368);
        createSawBlade(1042,444);
        createSawBlade(1200,359);
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}