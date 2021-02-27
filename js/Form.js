class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("START")
        this.msg = createElement("h3")
    }
    hide(){
        this.msg.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACING")
        title.position(130,0)

        
        this.input.position(130,160)

        
        this.button.position(250,200)

        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount);

            this.msg.html("Hello "+player.name)
            this.msg.position(130,160)
        })
    }
}