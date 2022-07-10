export class Factura {
    constructor(
        public _id:String,
        public nit:String,
        public estado:String,
        public fecha:String,
        public idAdmin:String,
        public idReservacion:String,
    ){}
}
