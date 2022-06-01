interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number | undefined; //opcional
    sueldo?: number; //opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    //funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
    //calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    //estadoActual no reciba parametros, 'AP' 'AF' 'AT'
}

let user:Usuario = {
    nombre: 'Alexis',
    apellido: 'Tapia',
    edad: 24,
    casado: 0,
    estado: 'AC',
    imprimirUsuario:(mensaje)=>{
        return 'El mensaje es: '+mensaje;
    },
    calcularImpuesto:(impuesto)=>{
        return this.sueldo + this.sueldo*impuesto;
    },
    estadoActual:()=>{
        switch (this.estado){
            case "AC":
                return 'AP';
            case 'IN':
                return  'AF';
            case 'AT':
                return 'AT';
        }
    }
}
