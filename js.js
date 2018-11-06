var game;
var map = {
    "layers":[{"name":"world","tileset":"tile.png","data":[0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.6,9.4,9.4,9.4,9.4,9.4,9.4,9.4,9.4,9.4,9.4,9.4,6.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.6,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,6.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,6.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,6.6,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.6,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,6.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.6,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,6.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,6.6,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.2,15.4,6.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.6,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,6.6,0.8,0.8,0.8,0.8,0.8,0.8,3.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.6,
    15.4,15.2,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,15.4,6.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,3.12,0.8,0.8,0.8,0.8,0.8,0.8,9.4,15.4,9.4,15.4,9.4,15.4,9.4,15.4,9.4,15.4,9.4,15.4,9.4,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.13,7.13,8.13,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,9.5,0.8,6.13,7.13,8.13,0.8,0.8,0.8,0.8,0.8,0.8,6.13,7.13,8.13,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.14,7.14,8.14,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,9.6,0.8,6.14,7.14,8.14,0.8,0.8,0.8,0.8,0.8,0.8,6.14,7.14,8.14,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.15,7.15,8.15,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,9.7,0.8,6.15,7.15,8.15,0.8,0.8,0.8,0.8,0.8,0.8,6.15,7.15,8.15,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,0.8,0.8,0.8,16.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,16.8,0.8,0.8,0.8,0.8,9,9,0.8,0.8,0.8,0.8,0.8,0.8,
    0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,9,9,9,9,9,9,9,9,9,9,9,9,9,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.13,7.13,8.13,0.8,0.8,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,3.12,0.8,0.12,0.8,0.8,0.8,0.8,0.12,9,9,9,9,9,9,9,9,9,9,9,9,9,0.8,0.8,0.8,0.8,0.8,0.8,6.13,7.13,8.13,0.8,0.8,0.8,0.8,6.14,7.14,8.14,0.8,0.8,9,9,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.14,7.14,8.14,0.8,0.8,0.8,0.8,6.15,7.15,8.15,0.8,0.8,9,9,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.15,7.15,8.15,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,6.13,7.13,8.13,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,9,9,16.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,6.14,7.14,8.14,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,6.13,7.14,7.14,8.14,0.8,0.8,0.8,0.8,6.13,7.13,8.13,0.8,17.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,6.14,7.14,7.14,8.14,0.8,0.8,0.8,0.8,6.14,7.14,8.14,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,
    0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,6.13,7.13,8.13,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,6.15,7.14,7.14,8.14,0.8,0.8,0.8,0.8,6.15,7.15,8.15,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,6.14,7.14,8.14,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,6.14,7.14,8.14,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,9,9,0.8,6.15,7.15,8.15,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,6.15,7.15,8.15,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,9,9,9,9,9,9,9,9,9,9,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.13,7.13,8.13,0.8,0.8,0.8,0.8,0.8,9,9,9,9,9,9,9,9,9,9,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,3.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.14,7.14,8.14,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,6.15,7.15,8.15,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,
    0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.12,0.8,0.8,0.8,0.8,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.12,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8]}],
    "tilesets":[{"name":"tile.png","image":"tile.png","imagewidth":480,"imageheight":256,"tilewidth":16,"tileheight":16}],
    "canvas":{"width":800,"height":608}
};
$(function() {
    game = new Vue({
        el: '#gameContainer',
        data: {
            items: [],
            tileSize: map.tilesets[0].tilewidth,
            x: 5,
            y: 5,
            screenWidth: 13,
            screenHeight: 9,
            offScreenBuffer: 1,
            mapWidth: map.canvas.width / map.tilesets[0].tilewidth,
            //mapHeight: map.canvas.height / map.tilesets[0].tilewidth,
            imageWidth: map.tilesets[0].imagewidth / map.tilesets[0].tilewidth,
            imageHeight: map.tilesets[0].imageheight / map.tilesets[0].tilewidth
            
        },
        mounted:  function(){
        	$('#gameContainer').width(this.screenWidth * this.tileSize);
        },
        methods: {
            buildGameContainer: function() {
                var content = [];
                for(var r = 0; r < this.screenHeight; r++){
                    for(var c = 0; c < this.screenWidth; c++){
                        content.push(this.getMapFromIndex( c + ( r * this.mapWidth ) ) );
                    }
                }
                this.items = content;
            },
            getMapFromIndex: function(index) {
                var mapTile = map.layers[0].data[index];
                return {
                    column: Math.floor(mapTile),
                    row : mapTile.toString().includes(".")? mapTile.toString().split(".")[1]:0
                };
            }
        }
    });
    
    game.buildGameContainer();
});
