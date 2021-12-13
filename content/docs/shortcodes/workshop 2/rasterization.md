# Rasterización de una línea

Para partir con la idea de la rasterizacion de una linea debemos definir primero sus componentes,
una linea se puede expresar a partir de dos puntos de la forma (x,y) en el que tenemos un punto inical y un punto final

<div class="img" style="display: flex; justify-content: center;">
    <img src="https://www.ecured.cu/images/0/0d/Distancia_entre_dos_puntos_1.JPG" alt="drawing" width="400" > 
    </img>
</div><br>

las lineas rectas son continuas, pero contamos con una precisicion limitada para su representacion por medio de la pantalla, por lo que se hace uso de una serie de puntos discretos (píxeles) para aproximarnos a esto.
<div class="img" style="display: flex; justify-content: center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Ejemplo_de_Bresenham.gif" alt="drawing" width="400" > 
    </img>
</div><br>

para la rasterizacion de una linea un concepto vital es la pendiente, que relaciona la variacion en el eje X y el eje Y

<div class="img" style="display: flex; justify-content: center;">
    <img src="https://sites.google.com/site/geometriaanaliticalmaf/_/rsrc/1521033317656/pendiente-de-una-recta/S6.png" alt="drawing" width="400" > 
    </img>
</div><br>

la dimensión de esta variación a su vez nos indica nos indica hechos claves a la hora de la representación de la línea como lo son en qué eje varía más rápido la línea y en qué dirección va la línea, de esta manera se agrupa en 4 grupos:
### Mayor que 1
Cuando se da esta situación la variación de y es mayor a la de x por lo que se sugiere que el algoritmo de rasterización evalúe por cada coordenada de y a que coordenada de x corresponde ( ya que para cada y hay un x, pero para cada x hay varios y), por otro lado su valor positivo indica que al incrementarse en x se incrementa y viéndose como una línea ascendente, esta observación puede ser útil en un ciclo que evalúe los puntos por ejemplo.
### Menor que -1
Al ser la variación de y mayor a la de x, evaluar por cada coordenada de y a que coordenada de x corresponde es una idea a tener en cuenta, sin embargo en este caso es negativa indicando que al incrementarse en x decrece y viéndose como una línea descendente.
### Entre 0 y 1
Cuando se da esta situación la variación de x es mayor a la de y por lo que se sugiere que el algoritmo de rasterización evalúe por cada coordenada de x a que coordenada de y corresponde ( ya que para cada x hay un y, pero para cada y hay varios x), siendo su valor positivo corresponde a una línea ascendente.
### Entre -1 y 0
Al ser la variación de x mayor a la de y, evaluar por cada coordenada de x a que coordenada de y corresponde es una idea a tener en cuenta, sin embargo en este caso es negativa indicando que al incrementarse en x decrece y viendose como una linea descendente.
### ¿Casos especiales?
Hay cuatro casos que no mencionamos dentro de los grupos anteriores, sin embargo esto se debe a que se puede considerar que pertenecen a dos grupos, la línea vertical con pendiente "infinita" se podría decir que no pertenece a entre -1 y 1, ya que lo importante es evaluar para cada y el x( que siempre sera el mismo), para la línea horizontal con pendiente 0 se podría decir que pertenece a entre -1 y 1, ya que lo importante es evaluar para cada x el y ( que siempre será el mismo ) y para los casos de pendiente 1 o -1 el comportamiento involucra que cada y se empareja con una sola x , y que cada x se empareja con una sola y.

<div class="img" style="display: flex; justify-content: center;">
    <img src="https://matemovil.com/wp-content/uploads/2017/07/pendiente-de-una-recta-caracter%C3%ADsticas.jpg" alt="drawing" width="400" > 
    </img>
</div><br>

## Algoritmo de Bresenham

Este algoritmo genera líneas usando sólo cálculos incrementales, Bresenham cambió la pregunta de
¿Cuál es el valor de y en x+1? Por la de ¿Cuál es el pixel que debemos dibujar ahora?
Se testea el signo de un parámetro entero. El valor del mismo es proporcional a la diferencia entre
las separaciones de las posiciones de los dos posibles pixels con respecto al segmento
de recta original.


{{< p5-iframe sketch="/vc/sketches/Bersenham.js" width="425" height="425" >}}

## referencias

- http://cs.uns.edu.ar/cg/clasespdf/3.2-Rasterizacion.pdf
- https://www.ecured.cu/images/0/0d/Distancia_entre_dos_puntos_1.JPG
- https://upload.wikimedia.org/wikipedia/commons/6/60/Ejemplo_de_Bresenham.gif
- https://sites.google.com/site/geometriaanaliticalmaf/_/rsrc/1521033317656/pendiente-de-una-recta/S6.png
- https://matemovil.com/wp-content/uploads/2017/07/pendiente-de-una-recta-caracter%C3%ADsticas.jpg
