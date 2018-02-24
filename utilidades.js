let utilidades = () => {
    return {
        dividirCadena (cadena){
            return cadena.split(',')
        },
        
        numeroArgumentos (arr){
            return arr.length 
        },
        
        tieneTresElementos(arr){
            return arr.length == 3;
        },
        
        tieneDosElementos(arr){
            return arr.length == 2;
        },
        
        removerCaracteresEspeciales(cadena){
            return cadena.replace(/[^\w\s]/gi, '')
        },
        
        procesarTresElementos(arr) {
            return {      
                i: Number(this.removerCaracteresEspeciales(arr[0])),
                n: Number(arr[1]),
                v: Number(arr[2])
            }
        },
        
        procesarDosElementos(arr) {
            return {        
                i: Number(this.removerCaracteresEspeciales(arr[0])),
                n: Number(arr[1]),       
            }
        },
        
        procesarCadena(a){
            if (this.tieneTresElementos(a)){
                return this.procesarTresElementos(a)
            }
            if (this.tieneDosElementos(a)){
                return this.procesarDosElementos(a)
            }    
        },
        
        getObjectLenght(obj){
            return Object.keys(obj).length == 3
        }, 

        filtrarVacios(n){
            return n != null
        },
        
        Operar(x, tipo, cadena){
            let resultado = this.procesarCadena(this.dividirCadena(cadena))   
            if (x.tipo != tipo){
                return null
            }
            
            if (this.getObjectLenght(resultado)){                
                return x.myfuncion(resultado.i, resultado.n) * resultado.v
            }
            return x.myfuncion(resultado.i, resultado.n)        
        }
    }
}

module.exports = utilidades