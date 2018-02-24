let factores = () => {   
    return {
        dividir_factor (x) {
            return x/100
        },
    
        elevar_factor (i, n) {
            return (1 + (this.dividir_factor(i))) ** n
        },
    
        factor_pf (i, n) {
            return 1 /  ((1 + (this.dividir_factor(i)))**n)
        },    
    
        factor_fp (i, n)  {
            return (1 + (this.dividir_factor(i)))**n
        },
    
        factor_pa  (i, n) {
            return (this.elevar_factor(i, n) - 1 ) / (this.dividir_factor(i) * this.elevar_factor(i, n))
        },
    
        factor_ap (i, n)  {
            return (this.dividir_factor(i) * this.elevar_factor(i, n)) / (this.elevar_factor(i, n) - 1 )
        },
    
        factor_af (i, n)  {
            return this.dividir_factor(i) / (this.elevar_factor(i, n) - 1 )
        },
    
        factor_fa (i, n) {
            return  (this.elevar_factor(i, n) - 1 ) / this.dividir_factor(i)
        }
    }   
}

module.exports = factores