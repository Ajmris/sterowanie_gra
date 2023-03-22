window.onload=function(){
    var LEFT=37, UP=38, RIGHT=39, DOWN=40;
    var cnv=document.querySelector("canvas");
    var ctx=cnv.getContext("2d");
    var spritesheet=new Image();
    spritesheet.src="character.png";
    var zezin=new Sprite(spritesheet);

    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
    function keydownHandler(e){
        switch(e.keyCode){
            case RIGHT:
                zezin.mvRight=true;
                zezin.mvLeft=false;
                zezin.mvUp=false;
                zezin.mvDown=false;
                break;
            case LEFT:
                zezin.mvRight=false;
                zezin.mvLeft=true;
                zezin.mvUp=false;
                zezin.mvDown=false;
                break;
            case UP:
                zezin.mvRight=false;
                zezin.mvLeft=false;
                zezin.mvUp=true;
                zezin.mvDown=false;
                break;
            case DOWN:
                zezin.mvRight=false;
                zezin.mvLeft=false;
                zezin.mvUp=false;
                zezin.mvDown=true;
                break;
        }
    }
    function keyupHandler(e){
        switch(e.keyCode){
            case RIGHT:
                zezin.mvRight=false;
                break;
            case LEFT:
                zezin.mvLeft=false;
                break;
            case UP:
                zezin.mvUp=false;
                break;
            case DOWN:
                zezin.mvDown=false;
                break;
        }
    }
    spritesheet.onload=function(){
        init();
    }
    function init(){
        loop();
    }
    function update(){
        zezin.move();
    }
    function draw(){
        ctx.clearRect(0,0,cnv.width, cnv.height);
        zezin.draw(ctx);
    }
    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        draw();
    }
}