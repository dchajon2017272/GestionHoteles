export class Reservacion {
    constructor(
        public _id:String,
        public idUsuario:String,
        public nombre:String,
        public numeroDeHabitacion:String,
        public nombreEvento:String,
        public nombreServicio:String,
        public fechaInicio:String,
        public fechaFinal:String,
    ){}
}
