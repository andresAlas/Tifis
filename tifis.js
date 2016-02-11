var tablero;

var teclas = 
{
	UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var tifis = 
{
	frenteOK: false,
	atrasOK: false,
	derOK: false,
	izqOK: false,
	velocidad: 20,
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

    document.addEventListener("keydown", teclado);
}

function teclado(evento)
{
	var codigo = evento.keyCode;

	if(codigo == teclas.UP)
	{
		tifis.y -= tifis.velocidad;
	}
	if(codigo == teclas.DOWN)
	{
		tifis.y += tifis.velocidad;
        if(tifis.y > 300)
        {
        	tifis.y -= tifis.velocidad;
        }
	}
	if(codigo == teclas.LEFT)
	{
		tifis.x -= tifis.velocidad;
	}
	if(codigo == teclas.RIGHT)
	{
		tifis.x += tifis.velocidad;
	}
	dibujar(codigo);
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
		tablero.drawImage(tifis.frente, tifis.x, tifis.y);
	} 
	if(liz.imagenOK == true)
	{
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
}