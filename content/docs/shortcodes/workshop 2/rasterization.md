# Rasterization of a line

para partir con la idea de la rasterizacion de una linea debemos definir primero sus componentes,
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

## Algoritomo de Bersenham

Este algoritmo genera líneas usando sólo cálculos incrementales, Bresenham cambió la pregunta de
¿Cuál es el valor de y en x+1? Por la de ¿Cuál es el pixel que debemosdibujar ahora?
Se testea el signo de un parámetro entero. El valor del mismo es proporcional a la diferencia entre
las separaciones de las posiciones de los dos posibles pixels con respecto al segmento
de recta original


{{< p5-iframe sketch="/vc/sketches/Bersenham.js" width="425" height="425" >}}

## referencias

http://cs.uns.edu.ar/cg/clasespdf/3.2-Rasterizacion.pdf
https://www.ecured.cu/images/0/0d/Distancia_entre_dos_puntos_1.JPG
https://upload.wikimedia.org/wikipedia/commons/6/60/Ejemplo_de_Bresenham.gif
https://sites.google.com/site/geometriaanaliticalmaf/_/rsrc/1521033317656/pendiente-de-una-recta/S6.png