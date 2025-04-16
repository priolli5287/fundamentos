let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");  



//retangulo (no fill/stroke react é x,y,largura,altura)
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="blue";
ctx.fillStyle="red";
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50)
ctx.closePath();

//circulo  (no arc a ordem é x,y,r,ponto de origem, ponto de destino)
ctx.beginPath();
ctx.lineWidth=5;
ctx.fillStyle="red";
ctx.strokeStyle="blue";
ctx.arc(200,200,50,Math.PI/2,Math.PI*1.5);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath () ;
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx. strokeStyle = 'red' ;
ctx. font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Ola",200,350) ;
ctx.strokeText("Ola",200,350)
ctx.closePath();