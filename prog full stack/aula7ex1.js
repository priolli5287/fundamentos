let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");  

//qd r
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="blue";
ctx.fillStyle="red";
ctx.fillRect(0,0,40,40);
//qd b
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="blue";
ctx.fillStyle="blue";
ctx.fillRect(360,0,40,40);
//qd a
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="blue";
ctx.fillStyle="yellow";
ctx.fillRect(0,360,40,40);
ctx.stroke();
ctx.closePath();
//circ1
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="green";
ctx.fillStyle="yellow"
ctx.arc(340,150,20,Math.PI*0,Math.PI*2);
ctx.stroke();
ctx.fill();
ctx.closePath();
//circ2
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="green";
ctx.fillStyle="yellow"
ctx.arc(60,150,20,Math.PI*0,Math.PI*2);
ctx.stroke();
ctx.fill();
ctx.closePath();
//qd g
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="blue";
ctx.fillStyle="green";
ctx.fillRect(360,360,40,40);
ctx.closePath();

//circulo  (no arc a ordem é x,y,r,ponto de origem, ponto de destino)
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="green";
ctx.arc(200,200,70,Math.PI*0,Math.PI);
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath () ;
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle="red";
ctx. font = "25px Arial"
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web",200,75) ;
ctx.closePath();
//line r
ctx.beginPath () ;
ctx.strokeStyle="red";
ctx.moveTo(0,0)
ctx.lineTo(400,400)
ctx.stroke()
ctx.closePath();
//line b
ctx.beginPath () ;
ctx.strokeStyle="blue";
ctx.moveTo(400,0)
ctx.lineTo(0,400)
ctx.stroke()
ctx.closePath();
//line g
ctx.beginPath () ;
ctx.strokeStyle="green";
ctx.moveTo(400,200)
ctx.lineTo(0,200)
ctx.stroke()
ctx.closePath();
