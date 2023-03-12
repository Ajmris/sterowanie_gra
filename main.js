function BackGround(x){
    this.x=x;
    this.image=new Image();
    this.image.src='grafics/bg.png'
    this.draw=function(ctx){
        ctx.drawImage(this.image, this.x, 0, ctx.canvas.width, ctx.canvas.height);
    }
}