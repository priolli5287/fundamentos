function desenhar_quadrado(ctx,x,y,width,height,cor){
    ctx.beginPath();
    ctx.fillStyle=cor;
    ctx.fillRect(x,y,width,height);
    ctx.closePath();
}

function desenhar_triangulo(ctx,x,y,z,w,a,cor){
    ctx.beginPath () ;
    ctx.fillStyle=cor;
    ctx.strokeStyle=cor;
    ctx.moveTo(x,y)
    ctx.lineTo(z,w)
    ctx.lineTo(a,w)
    ctx.lineTo(x,y)
    ctx.stroke()
    ctx.fill()

    ctx.closePath();
}

function desenhar_arco(ctx,x,y,width,height,cor){
    ctx.beginPath();
    ctx.fillStyle=cor;
    ctx.fillRect(x,y,width,height);
    ctx.closePath()
}



let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");  

desenhar_quadrado(ctx,0,200,300,300,'gray');
desenhar_quadrado(ctx,125,150,50,50,'brown')
desenhar_quadrado(ctx,0,200,50,200,'lightskyblue')
desenhar_quadrado(ctx,0,250,100,50,'lightskyblue')
desenhar_quadrado(ctx,50,175,15,25,'brown')
desenhar_quadrado(ctx,130,165,15,15,'lightblue')
desenhar_quadrado(ctx,145,180,10,20,'maroon')
desenhar_quadrado(ctx,155,165,15,15,'lightblue')
desenhar_quadrado(ctx,250,225,15,25,'brown')

desenhar_triangulo(ctx,150,125,175,150,125,"#f56a4d")

desenhar_arco()
desenhar_arco()

