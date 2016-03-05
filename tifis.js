var tablero, direccion;

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
	velocidad: 10,
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
		var antX, antY;
        antX = tifis.x;
        antY = tifis.y;        
        tifis.y -= tifis.velocidad;
        if (tifis.y < 0)
        {
            tifis.y += tifis.velocidad;
        }
        limiteUp(antX , antY);
	}
	if(codigo == teclas.DOWN)
	{
		var antX, antY;
        antX = tifis.x;
        antY = tifis.y;
        tifis.y += tifis.velocidad;
        if(tifis.y > 458)
        {
            tifis.y -= tifis.velocidad;
        }
        limiteDw(antX, antY);
	}
	if(codigo == teclas.LEFT)
	{
		var antXl, antYl;
        antXl = tifis.x;
        antYl = tifis.y;
        tifis.x -= tifis.velocidad;
        if(tifis.x <0)
        {
            tifis.x += tifis.velocidad;
        }
        limiteLf(antXl,antYl);
	}
	if(codigo == teclas.RIGHT)
	{
		var antXl, antYl;
        antXl = tifis.x;
        antYl = tifis.y;
        tifis.x += tifis.velocidad;
        if(tifis.x > 462)
        {
            tifis.x -= tifis.velocidad;
        }
        limiteRg(antXl,antYl)
	}
	direccion = codigo;
	dibujar();
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
	var tifisOrientada = tifis.frente;
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}   
	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
	{
		if(direccion == teclas.DOWN || direccion == undefined)
		{
			tifisOrientada = tifis.frente;
		}
		else if(direccion == teclas.UP)
		{
			tifisOrientada = tifis.atras;
		}
		else if(direccion == teclas.LEFT)
		{
			tifisOrientada = tifis.izq;
		}
		else if(direccion == teclas.RIGHT)
		{
			tifisOrientada = tifis.der;
		}
		tablero.drawImage(tifisOrientada, tifis.x, tifis.y); 
	}
	if(liz.imagenOK == true)
	{
        tablero.drawImage(liz.imagen, liz.x, liz.y);    
    }
}

function limiteUp(antX,antY)
{
    if(tifis.x < 140  && tifis.y > 140 && tifis.y < 242){
        tifis.x = antX;
        tifis.y = antY;
    }
    if(tifis.x < 240 && tifis.x > 167 && tifis.y > 140 && tifis.y < 242)
    {
        tifis.x = antX;
        tifis.y = antY;
    }
    if(tifis.x > 110 && tifis.y < 400 && tifis.y > 300)
    {
        tifis.x = antX;
        tifis.y = antY;
    }
}

function limiteDw(antX,antY)
{
    if(tifis.y > 140 && tifis.y < 242 && tifis.x < 140){
        tifis.x = antX;
        tifis.y = antY;
    }
    if(tifis.x < 240 && tifis.x > 167 && tifis.y > 140 && tifis.y < 242)
    {
        tifis.x = antX;
        tifis.y = antY;
    }
    if(tifis.x > 110 && tifis.y < 400 && tifis.y > 300)
    {
        tifis.x = antX;
        tifis.y = antY;
    }
}

function limiteLf(a,b)
{
    if(tifis.y > 140 && tifis.y < 242 && tifis.x < 140){
        tifis.x = a;
        tifis.y = b;
    }
    if(tifis.x < 240 && tifis.x > 167 && tifis.y > -10 && tifis.y < 242)
    {
        tifis.x = a;
        tifis.y = b;
    }
}

function limiteRg(antX, antY)
{
    if(tifis.x < 240 && tifis.x > 167 && tifis.y > -10 && tifis.y < 242)
    {
        tifis.x = antX;
        tifis.y = antY;
    }
    if(tifis.x > 110 && tifis.y < 400 && tifis.y > 300)
    {
        tifis.x = antX;
        tifis.y = antY;
    }
}
