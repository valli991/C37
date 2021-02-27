class Game{
    constructor(){}
    getState(){
        var getStateRef = database.ref('gameState')
        getStateRef.on("value",function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    start(){
        if(gameState==0){
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display()
        }
    }

    play(){
        form.hide()
        text(30)
        text("Game Start",120,100)
        Player.getPlayerInfo();
        if(allPlayers!=undefined){
            var display_position = 130
            for(var i in allPlayers){
                if (i=="player"+player.index){
                    fill("red")
                }
                else
                    fill("black")
                display_position+=30
                textSize(15)
                text(allPlayers[i].name+":"+allPlayers[i].distance,120,display_position)
            }
        }
        if (keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance+=50;
            player.update()
        }

    }
}