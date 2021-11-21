class Mundial {
    constructor(anfitrion,fecha,año,mascota,nSelecciones,duracion,version){

        this.anfitrion = anfitrion,
        this.fecha = fecha;
        this.año = año;
        this.mascota = mascota;
        this.nSelecciones =nSelecciones;
        this.duracion = duracion;
        this.version = version;
    }

    IniciarMundial(){
        console.log('Hoy',this.fecha,"del",this.año,'inicia el mundial, en',this.anfitrion,"con la participacion de",this.nSelecciones,"selecciones");
    }
}

let mundial2022 = new Mundial("Qatar","10 de Junio",2022,"Perro",32,"1 mes",34)
mundial2022.IniciarMundial();
console.log(mundial2022);


class Selecciones{
    constructor(nombre,Teliminatoria,ranking){
    this.nombre = nombre;
    this.Teliminatoria = Teliminatoria;
    this.ranking = ranking;
    }
}

let selecciones2002 = new Selecciones("Colombia","Conmebol",34)
console.log(selecciones2002);

class Partidos{
    constructor(cantidadP,estadio,hora,fechaP){
        // super(nombre,this.Teliminatoria,this.ranking)

        this.cantidadP = cantidadP;
        this.estadio = estadio;
        this.hora = hora;
        this.fechaP = fechaP;
    }
    ComenzarEncuentros(){
        console.log();
    }
}

let Partidos2022 = new Partidos(4,"DubaiStadium",17.00,"10 de Junio")
console.log(Partidos2022);