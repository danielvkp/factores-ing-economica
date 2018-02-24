# factores-ing-economica
Script para encontrar factores de ing economica

# Factores

Valor Presente, pago unico:  P/F
Cantidad Compuesta, pago unico: F/P
Valor Presente, serie uniforme: P/A
Recuperacion de Capital: A/P
Fondo de Amortizacion: A/F
Cantidad Compuesta, serie uniforme: F/A

# Alternativamente

Encontrar :

Presente, dado Futuro   P/F
Futuro, dado presente: F/P
Presente, dada anualidad: P/A
Anualidad, dado presente: A/P
Anualidad, dado futuro: A/F
Futuro, dado Anualidad: F/A

# Como usarlo

Simplemente escribir los factores como una cadena de texto entre brackets

cadena = "[pa: 5%, 10]"

En este caso encontrara el factor, P/A del 5% para 10 años

# Formas de construir la cadena

Para hallar solo el valor del factor, usamos una cadena como la anterior

cadena = "[pa: 5%, 10]"

Para hallar el valor del factor y multiplicarlo por otro numero, la escribimos de esta forma 

cadena = "[pa: 5%, 10, 50]"

En este caso encontrara el factor, P/A del 5% para 10 años y lo multiplicada por 50

# Escribir multiples factores

Tambien podemos agrupar multiples factores con parentesis y sumarlo, dividirlo, multiplicarlo, o restarlo con el resultado de otros factores

Ejemplo: 

cadena = "[pa: 5%, 5] + [fa: 5%, 5] + ([af:8%, 11, 1000] + [ap:5%, 3, 10])"

En este caso tomara el resultado de la suma de los factores A/F y A/P entre parentesis, y lo sumara con los factores P/A y F/A.