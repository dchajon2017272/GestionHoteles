export class Habitacion {
    constructor(
        public _id:String,
        public numeroDeHabitacion:String,
        public descripcion:String,
        public precio:Number,
        public disponible:String,
        public idAdmin:String,
        public idHotel:String,
    ){}
}
