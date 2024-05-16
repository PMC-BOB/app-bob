export class Trabajador {
    nombre : string;
    descripcion : string;
    especialidad : string;
    calificacion : number;
    foto : string;
    showInfo: boolean;

    public constructor(nombre : string, descripcion : string, especialidad : string, calificacion : number, foto : string, showInfo: boolean = true){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.especialidad = especialidad;
        this.calificacion = calificacion;
        this.foto = foto;
        this.showInfo = showInfo;
    }
}


