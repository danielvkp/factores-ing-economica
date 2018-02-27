const factores = require("./factores.js")
const utilidades = require("./utilidades.js")

let f = factores()
let u = utilidades()

let obj = [
    { myfuncion: f.factor_pf, tipo: 'pf' },
    { myfuncion: f.factor_fp, tipo: 'fp' },
    { myfuncion: f.factor_pa, tipo: 'pa' },
    { myfuncion: f.factor_ap, tipo: 'ap' },
    { myfuncion: f.factor_fa, tipo: 'fa' },
    { myfuncion: f.factor_af, tipo: 'af' },
]

let bindearFactores = (obj) =>{    
    return {
        myfuncion: obj.myfuncion.bind(factores()), tipo: obj.tipo
    }
}

let factoresBindeados = obj.map(bindearFactores)

const shortcode_regex = /\[(.+?):(.+?)\]/g

const cadena = "[pa: 5%, 5] + [fa: 5%, 5] + ([af:8%, 11] + [pa:5%, 3])"

let resultadoFactores = cadena
    .replace(shortcode_regex, (match, tipo, valor) => {  
        return factoresBindeados.map(x => {
            return u.Operar(x, tipo, valor)
        }).filter(u.filtrarVacios)
    })

let resultado = eval(resultadoFactores)

console.log(resultado)


