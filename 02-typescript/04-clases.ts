class Persona {
    public nombre:string;
    public apellido:string;
    static nombreReferencial: string = 'Humano';
    protected nombreApellido = ''; //Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreApellido = nombreParametro +' '+apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return  this.nombreApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string, //Parametros del constructor
        apellidoParametro: string,
        public cedula: string, //Modificar de acceso -> Propiedad de la clase
        public estadoCivil: string,
    ) {
        super(nombreParametro,apellidoParametro);
    }
}

const alexis = new Usuario(
    'alexis','tapia','1726503103', 'soltero'
);

alexis.nombre;
alexis.apellido;
alexis.cedula;
alexis.estadoCivil;



