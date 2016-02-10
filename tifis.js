var tablero;

var tifis = 
{
	frenteOK: false,
	atrasOK: false,
	derOK: false,
	izqOK: false,
	velosidad: 20,
	x: 0,
	y: 0
};

var liz =
{
	imagenOK: false,
	x: 400,
	y: 200
};

var fondo = 
{
	imagenURL: "imagenes/fondo.png",
	imagenOK: false
};

function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    tifis.frente = new Image();
	tifis.frente.src = "imagenes/diana-frente.png";
    tifis.frente.onload = confirmarFrente;

    tifis.atras = new Image();
	tifis.atras.src = "imagenes/diana-atras.png";
    tifis.atras.onload = confirmarAtras;

    tifis.der = new Image();
	tifis.der.src = "imagenes/diana-der.png";
    tifis.der.onload = confirmarDer;

    tifis.izq = new Image();
	tifis.izq.src = "imagenes/diana-izq.png";
    tifis.izq.onload = confirmarIzq;

    liz.imagen = new Image();
    liz.imagen.src = "imagenes/liz.png";
    liz.imagen.onload = confirmarLiz;
}

function confirmarFondo()
{
	fondo.imagenOK = true;
    dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK = true;
    dibujar();
}

function confirmarAtras()
{
	tifis.atrasOK = true;
    dibujar();
}

function confirmarDer()
{
	tifis.derOK = true;
    dibujar();
}

function confirmarIzq()
{
	tifis.izqOK = true;
    dibujar();
}

function confirmarLiz()
{
	liz.imagenOK = true;
	dibujar();
}

function dibujar()
{
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}   
	if(tifis.frenteOK == true)
	{
		tablero.drawImage(tifis.frente, 0, 0);
	} 
	if(tifis.atrasOK == true)
	{
		tablero.drawImage(tifis.atras, 0, 0);
	} 
	if(tifis.derOK == true)
	{
		tablero.drawImage(tifis.der, 0, 0);
	} 
	if(tifis.izqOK == true)
	{
		tablero.drawImage(tifis.izq, 0, 0);
	} 
	if(liz.imagenOK == true)
	{
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
}