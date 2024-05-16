export class Trabajador {
    nombre : string;
    descripcion : string;
    especialidad : string;
    calificacion : number;
    foto : string;

    public constructor(nombre : string, descripcion : string, especialidad : string, calificacion : number, foto : string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.especialidad = especialidad;
        this.calificacion = calificacion;
        this.foto = foto;
    }
}


